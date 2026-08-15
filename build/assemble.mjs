#!/usr/bin/env node
// Assembles the training app from its parts.
//
//   content/<slug>.js   one bare object literal per module (no wrapper, no trailing comma)
//   content/_order.json the module order — array of slugs
//   content/_sections.js  quickStartHTML() and cheatHTML()
//   shots/*.png         screenshots, embedded as base64 data URIs
//
// Everything is spliced into IOR-CRM-Training.html between marker comments, so
// the app stays a single self-contained file that Vercel serves with no build
// step and scripts/daily-snippet.mjs can read DATA straight out of.
//
//   node build/assemble.mjs            # assemble everything
//   node build/assemble.mjs --check    # verify the result parses, write nothing
//
// Idempotent: safe to re-run.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HTML_PATH = path.join(ROOT, 'IOR-CRM-Training.html');
const CONTENT_DIR = path.join(ROOT, 'content');
const SHOTS_DIR = path.join(ROOT, 'shots');
const CHECK_ONLY = process.argv.includes('--check');

function splice(html, startMarker, endMarker, body) {
  const s = html.indexOf(startMarker);
  const e = html.indexOf(endMarker);
  if (s === -1 || e === -1) throw new Error(`markers ${startMarker}/${endMarker} not found`);
  return html.slice(0, s + startMarker.length) + '\n' + body + '\n' + html.slice(e);
}

// ---------- modules ----------

function buildData() {
  const orderPath = path.join(CONTENT_DIR, '_order.json');
  if (!fs.existsSync(orderPath)) throw new Error('content/_order.json missing');
  const order = JSON.parse(fs.readFileSync(orderPath, 'utf8'));

  const onDisk = fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.js') && !f.startsWith('_'))
    .map(f => f.replace(/\.js$/, ''));

  const missing = order.filter(s => !onDisk.includes(s));
  if (missing.length) throw new Error(`_order.json lists modules with no content file: ${missing.join(', ')}`);
  const orphan = onDisk.filter(s => !order.includes(s));
  if (orphan.length) console.warn(`  ! content files not in _order.json (skipped): ${orphan.join(', ')}`);

  const fragments = order.map(slug => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, slug + '.js'), 'utf8').trim().replace(/,$/, '');
    // Each fragment must be a single object literal and must parse on its own —
    // a broken fragment should name itself, not blow up the whole build.
    let obj;
    try {
      obj = vm.runInNewContext(`(${raw})`, {}, { timeout: 5000 });
    } catch (err) {
      throw new Error(`content/${slug}.js does not parse: ${err.message}`);
    }
    if (obj.slug !== slug) throw new Error(`content/${slug}.js has slug "${obj.slug}" — must match its filename`);
    return raw;
  });

  return `const DATA = { modules: [\n${fragments.join(',\n')}\n] };`;
}

// ---------- screenshots ----------

const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif' };

function buildShots() {
  if (!fs.existsSync(SHOTS_DIR)) return 'var SHOTS = {};';
  const files = fs.readdirSync(SHOTS_DIR).filter(f => MIME[path.extname(f).toLowerCase()]);
  if (!files.length) return 'var SHOTS = {};';
  const entries = files.map(f => {
    const key = path.basename(f, path.extname(f));
    const b64 = fs.readFileSync(path.join(SHOTS_DIR, f)).toString('base64');
    return `"${key}":"data:${MIME[path.extname(f).toLowerCase()]};base64,${b64}"`;
  });
  return `var SHOTS = {${entries.join(',\n')}};`;
}

// ---------- sections ----------

function buildSectionsBlock() {
  const p = path.join(CONTENT_DIR, '_sections.js');
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, 'utf8').trim();
}

// ---------- verification ----------

// Mirrors extractData() in scripts/daily-snippet.mjs — if this can't read the
// assembled file, neither can the email job.
function extractData(html) {
  const marker = 'const DATA =';
  const start = html.indexOf(marker);
  if (start === -1) throw new Error('const DATA = not found');
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
  if (depth !== 0) throw new Error('unbalanced braces');
  return vm.runInNewContext(`(${html.slice(objStart, i + 1)})`, {}, { timeout: 5000 });
}

function report(data) {
  const mods = data.modules;
  console.log(`\n  ${mods.length} modules, ${(JSON.stringify(data).length / 1024).toFixed(0)} KB of content\n`);
  const tot = { howtos: 0, quiz: 0, flashcards: 0, scenarios: 0, confirms: 0 };
  for (const m of mods) {
    const confirms = (m.confirms || []).length + (m.howtos || []).filter(h => h.confirm).length;
    tot.howtos += (m.howtos || []).length;
    tot.quiz += (m.quiz || []).length;
    tot.flashcards += (m.flashcards || []).length;
    tot.scenarios += (m.scenarios || []).length;
    tot.confirms += confirms;
    const thin = [];
    if ((m.quiz || []).length < 6) thin.push('quiz<6');
    if ((m.flashcards || []).length < 4) thin.push('cards<4');
    if (!(m.scenarios || []).length) thin.push('no scenario');
    if (!(m.howtos || []).length) thin.push('no how-tos');
    console.log(
      `  ${m.slug.padEnd(18)} ${String(m.track || '?').padEnd(6)} ` +
      `${String((m.howtos || []).length).padStart(2)} how-to  ` +
      `${String((m.quiz || []).length).padStart(2)} Q  ` +
      `${String((m.flashcards || []).length).padStart(2)} cards  ` +
      `${String((m.scenarios || []).length).padStart(2)} scen  ` +
      `${String(confirms).padStart(2)} confirm` +
      (thin.length ? `   <- ${thin.join(', ')}` : '')
    );
  }
  console.log(`\n  totals: ${tot.howtos} how-tos, ${tot.quiz} quiz questions, ${tot.flashcards} flashcards, ${tot.scenarios} scenarios, ${tot.confirms} items to confirm\n`);
}

// ---------- run ----------

let html = fs.readFileSync(HTML_PATH, 'utf8');

if (!CHECK_ONLY) {
  html = splice(html, '/*DATA_START*/', '/*DATA_END*/', buildData());

  const shots = buildShots();
  html = splice(html, '/*SHOTS_START*/', '/*SHOTS_END*/', shots);

  const sections = buildSectionsBlock();
  if (sections) html = splice(html, '/*SECTIONS_START*/', '/*SECTIONS_END*/', sections);

  fs.writeFileSync(HTML_PATH, html);
  const shotCount = (shots.match(/base64,/g) || []).length;
  console.log(`  assembled -> IOR-CRM-Training.html (${(html.length / 1024).toFixed(0)} KB, ${shotCount} screenshot${shotCount === 1 ? '' : 's'})`);
}

const data = extractData(fs.readFileSync(HTML_PATH, 'utf8'));
report(data);
