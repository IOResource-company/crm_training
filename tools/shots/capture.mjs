#!/usr/bin/env node
// Screenshot capture for the CRM guide.
//
// The guide references 32 screenshot keys across 69 slots. This drives a real
// browser to fill shots/ with correctly named, correctly sized files, so nobody
// has to remember that a module asking for {key:"opp-kanban"} wants a file
// called shots/opp-kanban.png at 1440px wide.
//
// What it automates: reusing your signed-in session, navigating, the viewport,
// the filename, the format, and a check that no money made it into the frame.
// What it does not: pretend to know Twenty's DOM. Selecting a view is attempted
// by its visible name and column-hiding is left to you, because a guessed CSS
// selector that silently clicks the wrong thing is worse than a prompt. Every
// shot pauses for Enter with its real caption printed, so you are confirming a
// framed page rather than hunting for one.
//
// This is a DEV TOOL. It is not part of the build, the guide stays a single
// dependency-free file, and nothing here ships to Vercel.
//
// Usage:
//   npm install                       # once, in tools/shots
//   node capture.mjs --list           # the plan — no browser, no auth
//   node capture.mjs --login          # sign in once; saves the session
//   node capture.mjs                  # capture everything still missing
//   node capture.mjs --only opp-kanban,global-search
//   node capture.mjs --all            # re-capture, including files that exist
//   node capture.mjs --strict         # refuse to save a shot with figures in it
//
// Flags:
//   --base <url>     default https://crm.ioresource.com
//   --format png|jpeg   default png. jpeg is smaller but blurs UI text.
//   --quality <n>    jpeg only, default 88
//   --width <px>     default 1440
//   --height <px>    default 900
//   --full           full page instead of the viewport (usually too tall to read)
//   --chromium       use Playwright's Chromium instead of your installed Edge

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import readline from 'node:readline/promises';
import { fileURLToPath } from 'node:url';
import { RECIPES } from './recipes.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const HTML_PATH = path.join(ROOT, 'IOR-CRM-Training.html');
const SHOTS_DIR = path.join(ROOT, 'shots');
const STATE_PATH = path.join(HERE, 'storage-state.json');

// ---------- args ----------

const argv = process.argv.slice(2);
const has = (f) => argv.includes(f);
const val = (f, d) => { const i = argv.indexOf(f); return i > -1 && argv[i + 1] ? argv[i + 1] : d; };

const OPT = {
  list: has('--list'),
  login: has('--login'),
  all: has('--all'),
  strict: has('--strict'),
  full: has('--full'),
  edge: !has('--chromium'),
  base: (val('--base', 'https://crm.ioresource.com')).replace(/\/$/, ''),
  format: val('--format', 'png') === 'jpeg' ? 'jpeg' : 'png',
  quality: Number(val('--quality', '88')),
  width: Number(val('--width', '1440')),
  height: Number(val('--height', '900')),
  only: (val('--only', '') || '').split(',').map(s => s.trim()).filter(Boolean),
};

// ---------- the shot list comes from the guide, not from here ----------

// Same brace scanner as build/assemble.mjs and scripts/daily-snippet.mjs. If
// this cannot read the assembled file, neither can they.
function extractData(html) {
  const marker = 'const DATA =';
  const start = html.indexOf(marker);
  if (start === -1) throw new Error('const DATA = not found in the guide — run node build/assemble.mjs');
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
  if (depth !== 0) throw new Error('unbalanced braces extracting DATA');
  return vm.runInNewContext(`(${html.slice(objStart, i + 1)})`, {}, { timeout: 5000 });
}

function shotList() {
  const data = extractData(fs.readFileSync(HTML_PATH, 'utf8'));
  const found = new Map();
  const add = (key, cap, slug) => {
    if (!found.has(key)) found.set(key, { key, cap, mods: [] });
    const e = found.get(key);
    if (!e.cap && cap) e.cap = cap;
    e.mods.push(slug);
  };
  for (const m of data.modules) {
    for (const s of (m.shots || [])) add(s.key || s, s.cap || '', m.slug);
    for (const ht of (m.howtos || [])) if (ht.shot) add(ht.shot.key || ht.shot, ht.shot.cap || '', m.slug);
  }
  return [...found.values()]
    .map(e => ({ ...e, recipe: RECIPES[e.key] || {}, file: existingFile(e.key) }))
    .sort((a, b) => b.mods.length - a.mods.length || a.key.localeCompare(b.key));
}

const IMG_EXT = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];
function existingFile(key) {
  for (const ext of IMG_EXT) {
    const p = path.join(SHOTS_DIR, key + ext);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

const kb = (n) => `${(n / 1024).toFixed(0)}KB`;

// ---------- money guard ----------
//
// This repo is public. Amounts, margins and deal values must not appear in a
// screenshot. Staging the view so the column is switched off beats blurring —
// a hidden column cannot be un-blurred — so this does not try to redact
// anything. It reads what is on screen and tells you what it can see.

const MONEY = [
  /[€£$]\s?\d[\d,. ]*/g,
  /\b\d{1,3}(?:,\d{3})+(?:\.\d{2})?\b/g,
  /\b(?:EUR|GBP|USD)\s?\d[\d,. ]*/gi,
  /\b\d{1,3}(?:\.\d+)?\s?%\s?(?:margin|gp)\b/gi,
];

async function scanForFigures(page) {
  const text = await page.evaluate(() => document.body ? document.body.innerText : '');
  const hits = new Set();
  for (const re of MONEY) for (const m of text.matchAll(re)) hits.add(m[0].trim());
  return [...hits].slice(0, 12);
}

// ---------- prompting ----------

let rl = null;

// Checked before anything launches, so a non-interactive run does not leave an
// orphaned browser window on someone's desktop.
function requireTTY() {
  if (process.stdin.isTTY) return;
  console.error(
    '\n  This needs a terminal — it waits for you to frame each page and press Enter.\n' +
    '  Run it in an interactive shell, or use --list to see the plan without a browser.\n'
  );
  process.exit(1);
}

async function ask(question) {
  rl = rl || readline.createInterface({ input: process.stdin, output: process.stdout });
  return rl.question(question);
}

// ---------- browser ----------

async function launch(playwright, { withState }) {
  const opts = { headless: false, args: [`--window-size=${OPT.width},${OPT.height + 120}`] };
  if (OPT.edge) opts.channel = 'msedge';
  let browser;
  try {
    browser = await playwright.chromium.launch(opts);
  } catch (err) {
    if (OPT.edge) {
      console.log('  ! Could not start Edge, falling back to Chromium. Pass --chromium to skip this.');
      delete opts.channel;
      browser = await playwright.chromium.launch(opts);
    } else throw err;
  }
  const context = await browser.newContext({
    viewport: { width: OPT.width, height: OPT.height },
    deviceScaleFactor: 1,
    storageState: withState && fs.existsSync(STATE_PATH) ? STATE_PATH : undefined,
  });
  return { browser, context, page: await context.newPage() };
}

function looksLikeSignIn(url) {
  return /cloudflareaccess|login\.microsoftonline|\/auth|\/sign-?in|\/login/i.test(url);
}

// Views are selected by the name the guide already documents. Text beats a CSS
// selector here: our view names are stable, Twenty's markup is not.
async function pickView(page, name) {
  const tries = [
    () => page.getByRole('menuitem', { name, exact: false }).first().click({ timeout: 2000 }),
    () => page.getByRole('button', { name, exact: false }).first().click({ timeout: 2000 }),
    () => page.getByText(name, { exact: false }).first().click({ timeout: 2000 }),
  ];
  for (const t of tries) {
    try { await t(); return true; } catch { /* next strategy */ }
  }
  return false;
}

// ---------- commands ----------

function printPlan(shots) {
  const missing = shots.filter(s => !s.file);
  console.log(`\n  ${shots.length} keys, ${shots.reduce((n, s) => n + s.mods.length, 0)} slots in the guide.`);
  console.log(`  ${shots.length - missing.length} captured, ${missing.length} to go.\n`);
  for (const s of shots) {
    const src = s.recipe.source || 'crm';
    const mark = s.file ? '[x]' : '[ ]';
    console.log(`  ${mark} ${s.key.padEnd(22)} x${String(s.mods.length).padEnd(2)} ${src.padEnd(5)} ${s.file ? kb(fs.statSync(s.file).size) : ''}`);
    if (s.recipe.hide) console.log(`      hide: ${s.recipe.hide.join(', ')}`);
  }
  console.log('\n  x = slots in the guide. Keys used by several modules are worth doing first.');
  console.log('  After capturing: node build/assemble.mjs\n');
}

async function doLogin(playwright) {
  requireTTY();
  console.log('\n  Opening the CRM. Sign in as yourself — the script never sees your password.\n');
  const { browser, context, page } = await launch(playwright, { withState: false });
  await page.goto(OPT.base, { waitUntil: 'domcontentloaded' }).catch(() => {});

  const loginShot = path.join(SHOTS_DIR, 'crm-login.png');
  if (!fs.existsSync(loginShot) || OPT.all) {
    await ask('  You should be at the Cloudflare Access gate. Press Enter to capture it as crm-login.png > ');
    fs.mkdirSync(SHOTS_DIR, { recursive: true });
    await page.screenshot({ path: loginShot });
    console.log(`  saved shots/crm-login.png (${kb(fs.statSync(loginShot).size)})`);
  }

  await ask('  Now finish signing in until you are looking at the CRM, then press Enter > ');
  if (looksLikeSignIn(page.url())) {
    console.log('  ! Still on a sign-in page — the session was not saved. Try again.');
  } else {
    await context.storageState({ path: STATE_PATH });
    console.log(`\n  Session saved to tools/shots/storage-state.json`);
    console.log('  That file is a live credential. It is gitignored — keep it that way.\n');
  }
  await browser.close();
}

async function doCapture(playwright, shots) {
  requireTTY();
  if (!fs.existsSync(STATE_PATH)) {
    console.error('\n  No saved session. Run: node capture.mjs --login\n');
    process.exit(1);
  }
  fs.mkdirSync(SHOTS_DIR, { recursive: true });

  const ext = OPT.format === 'jpeg' ? '.jpg' : '.png';
  const queue = shots.filter(s => (s.recipe.source !== 'login') && (OPT.all || !s.file));
  if (!queue.length) {
    console.log('\n  Nothing to capture. Use --all to re-take, or --only <key>.\n');
    return;
  }

  const { browser, context, page } = await launch(playwright, { withState: true });
  await page.goto(OPT.base, { waitUntil: 'domcontentloaded' }).catch(() => {});
  if (looksLikeSignIn(page.url())) {
    console.log('\n  The saved session has expired. Run: node capture.mjs --login\n');
    await browser.close();
    return;
  }

  const done = [];
  for (const [n, s] of queue.entries()) {
    const r = s.recipe;
    console.log(`\n  ${'-'.repeat(66)}`);
    console.log(`  ${n + 1}/${queue.length}  ${s.key}   (used by ${s.mods.length} slot${s.mods.length === 1 ? '' : 's'}: ${[...new Set(s.mods)].join(', ')})`);
    console.log(`  Caption: ${s.cap}`);
    if (r.note) console.log(`  Note:    ${r.note}`);
    if (r.hide) console.log(`  HIDE:    ${r.hide.join(', ')}  <- switch these columns off before capturing`);

    if (r.source === 'email') {
      console.log('  This one is not in the CRM — open the email or page yourself in this window.');
    } else if (r.path) {
      const url = OPT.base + r.path;
      console.log(`  Going to ${url}`);
      await page.goto(url, { waitUntil: 'domcontentloaded' }).catch(() => console.log('  ! navigation failed — get there by hand'));
      await page.waitForTimeout(1200);
      if (r.view) {
        const ok = await pickView(page, r.view);
        console.log(ok ? `  Selected the "${r.view}" view.` : `  ! Could not find the "${r.view}" view — open it by hand.`);
        if (ok) await page.waitForTimeout(800);
      }
    }

    const answer = (await ask('  Frame it, then press Enter to capture (s = skip) > ')).trim().toLowerCase();
    if (answer === 's' || answer === 'skip') { console.log('  skipped'); continue; }

    const figures = await scanForFigures(page);
    if (figures.length) {
      console.log(`  ! Figures visible on screen: ${figures.join('  ')}`);
      if (OPT.strict) { console.log('  --strict is on, so this one is not being saved. Hide the column and re-run.'); continue; }
      const go = (await ask('    Save anyway? This repo is public. (y/N) > ')).trim().toLowerCase();
      if (go !== 'y') { console.log('  skipped'); continue; }
    }

    const file = path.join(SHOTS_DIR, s.key + ext);
    await page.screenshot({
      path: file,
      fullPage: OPT.full,
      type: OPT.format,
      ...(OPT.format === 'jpeg' ? { quality: OPT.quality } : {}),
    });
    const size = fs.statSync(file).size;
    done.push({ key: s.key, size });
    console.log(`  saved shots/${s.key}${ext} (${kb(size)})`);
  }

  await browser.close();

  if (done.length) {
    const bytes = done.reduce((n, d) => n + d.size, 0);
    // Everything in shots/ gets base64-embedded into the single-file guide, so
    // the weight that matters is roughly 4/3 of the total on disk.
    const onDisk = fs.readdirSync(SHOTS_DIR)
      .filter(f => IMG_EXT.includes(path.extname(f).toLowerCase()))
      .reduce((n, f) => n + fs.statSync(path.join(SHOTS_DIR, f)).size, 0);
    console.log(`\n  ${done.length} captured, ${kb(bytes)} this run. shots/ is now ${kb(onDisk)}.`);
    console.log(`  Embedded that is about ${(onDisk * 1.37 / 1024 / 1024).toFixed(1)}MB on top of the guide.`);
    if (onDisk * 1.37 > 4 * 1024 * 1024) {
      console.log('  That is getting heavy for a single file — consider --format jpeg or a narrower --width.');
    }
    console.log('\n  Next: node build/assemble.mjs\n');
  }
}

// ---------- run ----------

let shots = shotList();
if (OPT.only.length) {
  const known = new Set(shots.map(s => s.key));
  const unknown = OPT.only.filter(k => !known.has(k));
  if (unknown.length) {
    console.error(`\n  The guide does not reference: ${unknown.join(', ')}\n  Run --list to see the real keys.\n`);
    process.exit(1);
  }
  shots = shots.filter(s => OPT.only.includes(s.key));
}

if (OPT.list) {
  printPlan(shots);
  process.exit(0);
}

let playwright;
try {
  playwright = await import('playwright');
} catch {
  console.error('\n  Playwright is not installed. In tools/shots run:  npm install\n');
  process.exit(1);
}

try {
  if (OPT.login) await doLogin(playwright);
  else await doCapture(playwright, shots);
} finally {
  if (rl) rl.close();
}
