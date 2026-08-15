#!/usr/bin/env node
// Daily CRM training email.
//
// Curriculum:
//   - Most days: ONE module in focus (rotating through DATA.modules in order) —
//     what it covers, two how-tos as numbered steps, the fields that matter, a
//     common mistake, a tip drawn from the whole guide, and a 4-question quiz.
//   - Fridays: "weekly exam" — 8 questions drawn from every module, one
//     scenario, and a mistake of the week.
//
// Modules carry a track ("all" | "sales" | "ops"). Everyone receives every
// module — the team is small and cross-training is the point — but the subject
// line and header are tagged so an ops day is obvious at a glance.
//
// Reads DATA straight out of IOR-CRM-Training.html (single source of truth,
// assembled from content/*.js by build/assemble.mjs), renders a branded,
// dark-mode-resistant HTML email and sends it via Resend.
//
// Usage:
//   RESEND_API_KEY=re_xxx node scripts/daily-snippet.mjs        # send
//   node scripts/daily-snippet.mjs --dry-run                    # write out/preview.html, no send
//   node scripts/daily-snippet.mjs --dry-run --force-exam       # preview the exam format
//   node scripts/daily-snippet.mjs --dry-run --module cases     # preview a specific module
//
// Env:
//   RESEND_API_KEY   required unless --dry-run
//   SNIPPET_TO       override recipient(s), comma-separated (default stephen.browne@ioresource.com)
//   SNIPPET_FROM     override sender (default onboarding@resend.dev)
//   SITE_URL         link to the full guide (default the Vercel URL)

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HTML_PATH = path.join(ROOT, 'IOR-CRM-Training.html');
const SITE_URL = process.env.SITE_URL || 'https://crm-training-eight.vercel.app/IOR-CRM-Training.html';
const DRY_RUN = process.argv.includes('--dry-run');
const FORCE_EXAM = process.argv.includes('--force-exam');
const FORCE_MODULE = (() => { const i = process.argv.indexOf('--module'); return i > -1 ? process.argv[i + 1] : null; })();

// ---------- extract DATA from the guide ----------

function extractData(html) {
  const marker = 'const DATA =';
  const start = html.indexOf(marker);
  if (start === -1) throw new Error('const DATA = not found in guide HTML');
  let i = html.indexOf('{', start + marker.length);
  const objStart = i;
  let depth = 0, inStr = null;
  for (; i < html.length; i++) {
    const ch = html[i];
    if (inStr) {
      if (ch === '\\') { i++; continue; }
      if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; continue; }
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) break; }
  }
  if (depth !== 0) throw new Error('Unbalanced braces extracting DATA');
  const objText = html.slice(objStart, i + 1);
  return vm.runInNewContext(`(${objText})`, {}, { timeout: 5000 });
}

// ---------- date-seeded RNG (same email if re-run same day) ----------

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const today = new Date();
const dayNum = Math.floor(today.getTime() / 86400000);
const rand = mulberry32(dayNum * 2654435761);
const pick = (arr) => arr[Math.floor(rand() * arr.length)];
function pickN(arr, n) {
  const copy = [...arr], out = [];
  while (out.length < n && copy.length) out.push(copy.splice(Math.floor(rand() * copy.length), 1)[0]);
  return out;
}

// ---------- curriculum: which day is this? ----------

// dayNum % 7: 0=Thu 1=Fri 2=Sat 3=Sun 4=Mon 5=Tue 6=Wed  (epoch was a Thursday)
const isExamDay = FORCE_EXAM || (!FORCE_MODULE && dayNum % 7 === 1);

// Module rotation counts only study days (Fridays are exams and don't consume
// a module), so every module gets equal airtime.
const fridaysSoFar = Math.floor((dayNum - 1) / 7) + 1;
const studyIndex = dayNum - fridaysSoFar;

const DATA = extractData(fs.readFileSync(HTML_PATH, 'utf8'));
const modules = DATA.modules;
if (!modules.length) { console.error('No modules in DATA — run node build/assemble.mjs first'); process.exit(1); }

const focus = FORCE_MODULE
  ? modules.find(m => m.slug === FORCE_MODULE) || modules[0]
  : modules[studyIndex % modules.length];

// ---------- render helpers (inline styles only — email-client safe) ----------

const NAVY = '#09246B', BLUE = '#0073E6', TINT = '#E6F1FD', STEEL = '#5A6B7C', SILVER = '#D7DCE3', CLOUD = '#F4F6F9';
const TEXT = '#1B2433', AMBER = '#D4A017', GREEN = '#2E8B57';
const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const letters = ['A', 'B', 'C', 'D'];
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Outlook inverts background-color but not background-image, so every
// background is also painted with a single-colour linear-gradient.
const bg = (c) => `background-color:${c};background-image:linear-gradient(${c},${c});`;

// DATA intro/tip/step strings carry light HTML. Emails can't style nested <p>
// reliably, so flatten paragraphs to <br><br>; <pre> blocks (config snippets)
// become a monospace box that won't blow the 640px column open.
const flattenHtml = (s) => String(s || '')
  .replace(/<pre>([\s\S]*?)<\/pre>/g, (_, code) =>
    `<div class="opt txt" style="${bg(CLOUD)}border:1px solid ${SILVER};border-radius:6px;padding:8px 10px;margin:6px 0;font-family:Consolas,Menlo,monospace;font-size:12px;line-height:1.5;color:${TEXT};white-space:pre-wrap;">${code.trim()}</div>`)
  .replace(/<p>/g, '').replace(/<\/p>/g, '<br><br>').replace(/(<br><br>)+$/, '');

const TRACK_LABEL = { all: 'Everyone', sales: 'Sales', ops: 'Customer Ops' };
const TRACK_COLOUR = { all: BLUE, sales: GREEN, ops: '#975a16' };

const dateStr = today.toLocaleDateString('en-IE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
const shortDate = today.toLocaleDateString('en-IE', { day: 'numeric', month: 'short' });

function card(title, inner, accent = BLUE) {
  return `<div class="card" style="${bg('#ffffff')}border:1px solid ${SILVER};border-left:4px solid ${accent};border-radius:8px;padding:18px 20px;margin:0 0 16px;">
    <div class="blue" style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${BLUE};margin-bottom:8px;">${title}</div>
    ${inner}</div>`;
}

// Interactive quiz lives on the site (daily-quiz.html + today.json published
// with each send): answers turn green/red in place there — email clients
// can't do that inline (Outlook strips scripts and :checked CSS).
const QUIZ_URL = SITE_URL.replace(/[^/]*$/, '') + 'daily-quiz.html';

const quizButton =
  `<div style="text-align:center;margin:6px 0 2px;">
    <a href="${QUIZ_URL}" class="btn" style="display:inline-block;${bg(BLUE)}color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:10px 22px;border-radius:6px;">Take today&rsquo;s quiz &mdash; instant answers &rarr;</a>
  </div>`;

// Box styling lives on a <div> wrapper: classic Outlook (Word engine) ignores
// display:block on <a>, so a bare styled anchor collapses options onto one
// line. A div per option guarantees one row per answer everywhere.
const optRow = (label, text) => {
  const boxStyle = `padding:6px 10px;margin:4px 0;${bg(CLOUD)}border:1px solid ${SILVER};border-radius:6px;font-size:14px;color:${TEXT};`;
  return `<div class="opt txt" style="${boxStyle}"><strong class="navy" style="color:${NAVY};">${label}.</strong> ${esc(text)}</div>`;
};

function quizBlock(q, idx, showModule) {
  const tag = showModule ? ` <span class="muted" style="font-weight:400;color:${STEEL};">(${esc(q.module)})</span>` : '';
  return `<div style="margin:0 0 14px;">
    <div class="navy" style="font-size:14px;font-weight:600;color:${NAVY};margin-bottom:6px;">Q${idx + 1}${tag} &mdash; ${esc(q.q)}</div>
    ${q.o.map((o, i) => optRow(letters[i], o)).join('')}</div>`;
}

// A how-to as numbered rows. Numbers are rendered inline rather than with <ol>
// because Outlook's list indentation is unreliable at this width.
function howtoBox(ht) {
  const steps = (ht.steps || []).map((s, i) =>
    `<div style="margin:0 0 8px;">
      <span class="blue" style="font-weight:700;color:${BLUE};">${i + 1}.</span>
      <span class="txt" style="font-size:14px;color:${TEXT};line-height:1.6;"> ${flattenHtml(s)}</span>
    </div>`).join('');
  const note = (label, value, colour) => value
    ? `<div class="tint" style="margin:8px 0 0;padding:8px 12px;${bg(TINT)}border-radius:6px;">
        <span class="muted" style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${colour};">${label}</span>
        <div class="txt" style="font-size:13px;color:${TEXT};line-height:1.55;">${flattenHtml(value)}</div></div>`
    : '';
  return `<div style="margin:0 0 18px;">
    <div class="navy" style="font-size:15px;font-weight:700;color:${NAVY};margin-bottom:4px;">${esc(ht.title)}</div>
    ${ht.when ? `<div class="muted" style="font-size:12px;color:${STEEL};margin-bottom:10px;"><em>When: ${esc(ht.when)}</em></div>` : ''}
    ${steps}
    ${note('Tip', ht.tip, BLUE)}
    ${note('Important', ht.important, '#8a6d1a')}
    ${note('Common mistake', ht.mistake, '#C0392B')}
  </div>`;
}

// Two labelled rows — reads on a phone, mirrors the guide's mistake callouts.
const mistakeBox = (mk, showModule) => {
  const row = (label, value, colour) =>
    `<div style="margin:0 0 6px;">
      <span class="muted" style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${colour};">${label}</span>
      <div class="txt" style="font-size:13px;color:${TEXT};line-height:1.55;">${flattenHtml(value)}</div></div>`;
  const tag = showModule ? `<div class="muted" style="font-size:11px;color:${STEEL};margin-bottom:8px;">${esc(mk.module)}</div>` : '';
  return `<div class="tint" style="margin:0 0 10px;padding:12px 14px;${bg(TINT)}border-radius:6px;">
    ${tag}${row('What happens', mk.m, '#C0392B')}${row('What to do instead', mk.fix, GREEN)}</div>`;
};

const fieldRow = (f) =>
  `<div class="opt txt" style="padding:6px 10px;margin:4px 0;${bg(CLOUD)}border:1px solid ${SILVER};border-radius:6px;font-size:13px;color:${TEXT};line-height:1.5;">
    <strong class="navy" style="color:${NAVY};">${esc(f.k)}</strong> &mdash; ${flattenHtml(f.v)}</div>`;

const answerLine = (label, q) =>
  `<p class="txt" style="margin:0 0 8px;font-size:13px;color:${TEXT};"><strong class="navy" style="color:${NAVY};">${label}: ${letters[q.c]}</strong> &mdash; ${esc(q.e || q.o[q.c])}</p>`;

// ---------- compose the day's email ----------

const sections = [];
let subject, headline, quizData;

// Plain-text alternative. Resend would otherwise auto-generate one that dumps
// markup inline — unreadable. Outlook's "view in a browser" and text-only
// clients get this.
const plain = (s) => String(s || '')
  .replace(/<br\s*\/?>/gi, '\n')
  .replace(/<\/p>\s*/gi, '\n\n')
  .replace(/<[^>]+>/g, '')
  .replace(/\n{3,}/g, '\n\n').trim()
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&mdash;/g, '—').replace(/&ndash;/g, '–')
  .replace(/&ldquo;/g, '“').replace(/&rdquo;/g, '”').replace(/&rsquo;/g, '’')
  .replace(/&bull;/g, '•').replace(/&hellip;/g, '…').replace(/&nbsp;/g, ' ')
  .replace(/&rarr;/g, '->');
const tl = [];
const T = (s = '') => tl.push(s);
const RULE = '----------------------------------------';

// The Tip of the Day is drawn from every module, not just today's, so a thin
// module still carries something useful.
const allTips = modules.flatMap(m => (m.tips || []).map(t => ({ t, module: m.name })));

if (isExamDay) {
  // ----- Friday: exam across every module -----
  const allQuiz = modules.flatMap(m => (m.quiz || []).map(q => ({ ...q, module: m.name, track: m.track })));
  const allScenarios = modules.flatMap(m => (m.scenarios || []).map(s => ({ ...s, module: m.name })));
  const allMistakes = modules.flatMap(m => (m.mistakes || []).map(x => ({ ...x, module: m.name })));

  const exam = pickN(allQuiz, Math.min(8, allQuiz.length));
  const scenario = allScenarios.length ? pick(allScenarios) : null;
  const mistake = allMistakes.length ? pick(allMistakes) : null;

  subject = `IOR CRM Weekly Exam (${shortDate})`;
  headline = 'Weekly CRM Exam';

  sections.push(card('This week&rsquo;s exam',
    `<div class="txt" style="font-size:14px;color:${TEXT};line-height:1.6;margin-bottom:10px;">${exam.length} questions drawn from across the whole guide &mdash; sales, Customer Operations and the shared basics${scenario ? ', plus one scenario' : ''}. Take it interactively: answers turn green or red as you tap, score at the top. Or read on and check yourself against the answers at the bottom.</div>
     ${quizButton}`, NAVY));

  sections.push(card('Questions', exam.map((q, i) => quizBlock(q, i, true)).join('')));

  if (mistake) {
    sections.push(card('Mistake of the week',
      `<div class="txt" style="font-size:13px;color:${TEXT};line-height:1.6;margin-bottom:10px;">The one that costs the most time when it slips through.</div>
       ${mistakeBox(mistake, true)}`, AMBER));
  }

  if (scenario) {
    sections.push(card(`Scenario &mdash; ${esc(scenario.module)}`,
      `<div class="txt" style="font-size:14px;color:${TEXT};line-height:1.6;margin-bottom:8px;">${esc(scenario.scenario)}</div>
       <div class="navy" style="font-size:14px;font-weight:600;color:${NAVY};margin-bottom:6px;">${esc(scenario.q)}</div>
       ${scenario.o.map((o, i) => optRow(letters[i], o)).join('')}`));
  }

  quizData = {
    d: dayNum, mode: 'exam', date: dateStr,
    questions: [
      ...exam.map(q => ({ q: q.q, o: q.o, c: q.c, e: q.e || '', module: q.module })),
      ...(scenario ? [{ scenario: scenario.scenario, q: scenario.q, o: scenario.o, c: scenario.c, e: scenario.e || '', module: scenario.module }] : []),
    ],
  };

  sections.push(card('Answers',
    exam.map((q, i) => answerLine(`Q${i + 1}`, q)).join('') + (scenario ? answerLine('Scenario', scenario) : ''), GREEN));

  // plain-text version
  T('IOResource — Weekly CRM Exam'); T(dateStr); T();
  T(`${exam.length} questions drawn from across the whole guide${scenario ? ', plus one scenario' : ''}.`);
  T(`Answers at the bottom. Score yourself out of ${exam.length + (scenario ? 1 : 0)}.`);
  T(`Full guide: ${SITE_URL}`); T(); T(RULE); T();
  exam.forEach((q, i) => {
    T(`Q${i + 1} (${q.module}) — ${plain(q.q)}`);
    q.o.forEach((o, j) => T(`  ${letters[j]}. ${plain(o)}`));
    T();
  });
  if (scenario) {
    T(`SCENARIO (${scenario.module})`); T(plain(scenario.scenario)); T(plain(scenario.q));
    scenario.o.forEach((o, j) => T(`  ${letters[j]}. ${plain(o)}`)); T();
  }
  if (mistake) {
    T(`MISTAKE OF THE WEEK (${mistake.module})`);
    T(`  What happens:  ${plain(mistake.m)}`);
    T(`  Do instead:    ${plain(mistake.fix)}`); T();
  }
  T(RULE); T();
  T('ANSWERS');
  exam.forEach((q, i) => T(`Q${i + 1}: ${letters[q.c]} — ${plain(q.e || q.o[q.c])}`));
  if (scenario) T(`Scenario: ${letters[scenario.c]} — ${plain(scenario.e || scenario.o[scenario.c])}`);

} else {
  // ----- Study day: one module in focus -----
  const howtos = pickN(focus.howtos || [], Math.min(2, (focus.howtos || []).length));
  const fields = pickN(focus.fields || [], Math.min(4, (focus.fields || []).length));
  const mistake = (focus.mistakes || []).length ? pick(focus.mistakes) : null;
  const flashcard = (focus.flashcards || []).length ? pick(focus.flashcards) : null;
  const tip = allTips.length ? pick(allTips) : null;
  const quiz = pickN((focus.quiz || []).map(q => ({ ...q, module: focus.name })), Math.min(4, (focus.quiz || []).length));
  const trackLabel = TRACK_LABEL[focus.track] || TRACK_LABEL.all;
  const trackColour = TRACK_COLOUR[focus.track] || BLUE;
  const prefix = focus.track && focus.track !== 'all' ? `[${trackLabel}] ` : '';

  subject = `${prefix}IOR CRM Training — ${focus.name} (${shortDate})`;
  headline = `CRM Focus — ${focus.name}`;

  sections.push(card('Today&rsquo;s module',
    `<div class="navy" style="font-size:18px;font-weight:700;color:${NAVY};margin-bottom:4px;">${esc(focus.name)}</div>
     <div style="margin-bottom:10px;"><span class="opt muted" style="display:inline-block;${bg(CLOUD)}border:1px solid ${SILVER};border-radius:10px;padding:1px 9px;font-size:11px;font-weight:700;text-transform:uppercase;color:${trackColour};">${trackLabel}</span></div>
     <div class="muted" style="font-size:13px;color:${STEEL};margin-bottom:12px;">${esc(focus.tagline || '')}</div>
     <div class="txt" style="font-size:14px;color:${TEXT};line-height:1.6;">${flattenHtml(focus.intro)}</div>`, NAVY));

  if (howtos.length) {
    sections.push(card(howtos.length > 1 ? 'How to' : 'How to', howtos.map(howtoBox).join('')));
  }

  if (fields.length) {
    sections.push(card('Fields that matter', fields.map(fieldRow).join('')));
  }

  if (mistake) {
    sections.push(card('Common mistake', mistakeBox(mistake, false), AMBER));
  }

  if (tip) {
    sections.push(card('Tip of the day',
      `<div class="txt" style="font-size:14px;color:${TEXT};line-height:1.6;">${flattenHtml(tip.t)}</div>
       <div class="muted" style="font-size:11px;color:${STEEL};margin-top:8px;">from ${esc(tip.module)}</div>`, BLUE));
  }

  if (quiz.length) {
    sections.push(card(`Quick quiz &mdash; ${esc(focus.name)}`,
      quiz.map((q, i) => quizBlock(q, i, false)).join('') + quizButton));
  }

  quizData = {
    d: dayNum, mode: 'study', module: focus.name, date: dateStr,
    questions: quiz.map(q => ({ q: q.q, o: q.o, c: q.c, e: q.e || '', module: focus.name })),
  };

  if (flashcard) {
    sections.push(card('One to remember',
      `<div class="navy" style="font-size:14px;font-weight:600;color:${NAVY};margin-bottom:6px;">${esc(flashcard.q)}</div>
       <div class="txt" style="font-size:14px;color:${TEXT};line-height:1.55;">${esc(flashcard.a)}</div>`));
  }

  if (quiz.length) {
    sections.push(card('Answers', quiz.map((q, i) => answerLine(`Q${i + 1}`, q)).join(''), GREEN));
  }

  // Be honest in the email too: if this module has open questions, say so
  // rather than let the reader take every line as settled fact.
  const openCount = (focus.confirms || []).length + (focus.howtos || []).filter(h => h.confirm).length;
  if (openCount) {
    sections.push(`<div class="muted" style="font-size:12px;color:${STEEL};text-align:center;padding:0 8px 8px;">
      ${openCount} thing${openCount === 1 ? '' : 's'} in this module ${openCount === 1 ? 'is' : 'are'} still marked <em>needs confirmation</em> &mdash; see Items to Confirm in the guide.</div>`);
  }

  // plain-text version
  T(`IOResource — CRM Focus: ${focus.name}`); T(`${trackLabel} · ${dateStr}`); T();
  if (focus.tagline) { T(plain(focus.tagline)); T(); }
  T(plain(focus.intro)); T();
  T(`Full guide: ${SITE_URL}`); T(); T(RULE); T();
  if (howtos.length) {
    T('HOW TO'); T();
    for (const ht of howtos) {
      T(ht.title.toUpperCase());
      if (ht.when) T(`  When: ${plain(ht.when)}`);
      (ht.steps || []).forEach((s, i) => T(`  ${i + 1}. ${plain(s)}`));
      if (ht.tip) T(`  Tip: ${plain(ht.tip)}`);
      if (ht.important) T(`  Important: ${plain(ht.important)}`);
      if (ht.mistake) T(`  Common mistake: ${plain(ht.mistake)}`);
      T();
    }
  }
  if (fields.length) {
    T('FIELDS THAT MATTER');
    fields.forEach(f => T(`  ${plain(f.k)} — ${plain(f.v)}`)); T();
  }
  if (mistake) {
    T('COMMON MISTAKE');
    T(`  What happens:  ${plain(mistake.m)}`);
    T(`  Do instead:    ${plain(mistake.fix)}`); T();
  }
  if (tip) { T('TIP OF THE DAY'); T(`  ${plain(tip.t)}`); T(`  (from ${tip.module})`); T(); }
  if (quiz.length) {
    T(`QUICK QUIZ — ${focus.name} (answers below)`); T();
    quiz.forEach((q, i) => {
      T(`Q${i + 1} — ${plain(q.q)}`);
      q.o.forEach((o, j) => T(`  ${letters[j]}. ${plain(o)}`));
      T();
    });
  }
  if (flashcard) { T('ONE TO REMEMBER'); T(`  ${plain(flashcard.q)}`); T(`  ${plain(flashcard.a)}`); T(); }
  if (quiz.length) {
    T(RULE); T();
    T('ANSWERS');
    quiz.forEach((q, i) => T(`Q${i + 1}: ${letters[q.c]} — ${plain(q.e || q.o[q.c])}`));
  }
  if (openCount) { T(); T(`${openCount} item(s) in this module are still marked "needs confirmation" — see Items to Confirm in the guide.`); }
}

// ---------- colour re-assertions for dark mode ----------
// - @media (prefers-color-scheme: dark): Apple Mail & friends
// - [data-ogsc] (text) / [data-ogsb] (backgrounds): Outlook.com / new Outlook dark mode

const darkModeCss = `
  :root { color-scheme: light; supported-color-schemes: light; }
  @media (prefers-color-scheme: dark) {
    body, .page { background: ${CLOUD} !important; }
    .card, .foot { background: #ffffff !important; }
    .opt { background: ${CLOUD} !important; }
    .tint { background: ${TINT} !important; }
    .hdr { background: ${NAVY} !important; }
    .txt { color: ${TEXT} !important; }
    .navy { color: ${NAVY} !important; }
    .muted { color: ${STEEL} !important; }
    .blue { color: ${BLUE} !important; }
    .hdr-t { color: #ffffff !important; }
    .hdr-d { color: #B8C4DF !important; }
    .btn { background: ${BLUE} !important; color: #ffffff !important; }
  }
  [data-ogsb] body, [data-ogsb] .page { background: ${CLOUD} !important; }
  [data-ogsb] .card, [data-ogsb] .foot { background: #ffffff !important; }
  [data-ogsb] .opt { background: ${CLOUD} !important; }
  [data-ogsb] .tint { background: ${TINT} !important; }
  [data-ogsb] .hdr { background: ${NAVY} !important; }
  [data-ogsb] .btn { background: ${BLUE} !important; }
  [data-ogsc] .txt { color: ${TEXT} !important; }
  [data-ogsc] .navy { color: ${NAVY} !important; }
  [data-ogsc] .muted { color: ${STEEL} !important; }
  [data-ogsc] .blue { color: ${BLUE} !important; }
  [data-ogsc] .hdr-t { color: #ffffff !important; }
  [data-ogsc] .hdr-d { color: #B8C4DF !important; }
  [data-ogsc] .btn { color: #ffffff !important; }
`;

const emailHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>IO Resource — Daily CRM Training</title>
<style>${darkModeCss}</style></head>
<body style="margin:0;padding:0;">
<div class="page" style="${bg(CLOUD)}padding:24px 12px;font-family:${FONT};">
<div style="max-width:640px;margin:0 auto;">
  <div class="hdr" style="${bg(NAVY)}border-radius:10px 10px 0 0;padding:22px 24px;">
    <div class="hdr-t" style="color:#ffffff;font-size:19px;font-weight:700;">IO<span class="blue" style="color:${BLUE};">Resource</span> &mdash; ${headline}</div>
    <div class="hdr-d" style="color:#B8C4DF;font-size:13px;margin-top:4px;">${dateStr}</div>
    <div style="margin-top:10px;"><a href="${SITE_URL}" class="hdr-t" style="color:#ffffff;font-size:13px;font-weight:600;text-decoration:underline;">Open the full CRM guide &rarr;</a></div>
  </div>
  <div style="padding:20px 0 4px;">${sections.join('')}</div>
  <div class="foot" style="${bg('#ffffff')}border:1px solid ${SILVER};border-radius:0 0 10px 10px;padding:16px 24px;text-align:center;">
    <a href="${SITE_URL}" class="btn" style="display:inline-block;${bg(BLUE)}color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:10px 22px;border-radius:6px;">Open the full CRM guide</a>
    <div class="muted" style="font-size:11px;letter-spacing:1.5px;color:${STEEL};margin-top:14px;text-transform:uppercase;">Supply. Configure. Support.</div>
  </div>
</div></div>
</body></html>`;

// ---------- send ----------

const emailText = tl.join('\n') + `\n\n${RULE}\nOpen the full CRM guide: ${SITE_URL}\nSupply. Configure. Support.\n`;

const outDir = path.join(ROOT, 'out');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'preview.html'), emailHtml);
fs.writeFileSync(path.join(outDir, 'preview.txt'), emailText);
// published alongside the site so daily-quiz.html can render today's questions
fs.writeFileSync(path.join(ROOT, 'today.json'), JSON.stringify(quizData, null, 1));

if (DRY_RUN) {
  console.log(`Dry run — wrote out/preview.html\nSubject: ${subject}`);
  process.exit(0);
}

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) { console.error('RESEND_API_KEY not set'); process.exit(1); }

const to = (process.env.SNIPPET_TO || 'stephen.browne@ioresource.com').split(',').map(s => s.trim()).filter(Boolean);
const from = process.env.SNIPPET_FROM || 'IO Resource CRM Training <onboarding@resend.dev>';

const res = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ from, to, subject, html: emailHtml, text: emailText }),
});
const body = await res.text();
if (!res.ok) { console.error(`Resend returned ${res.status}: ${body}`); process.exit(1); }
console.log(`Sent: ${subject}`);
console.log(body);
