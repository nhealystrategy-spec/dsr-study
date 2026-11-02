// Validates course data: run `node tools/check-modules.js` from the project folder.
const fs = require('fs');
const load = f => (0, eval)(fs.readFileSync(f, 'utf8').replace(/^const /gm, 'var '));
['topics-sheet', 'lessons', 'questions', 'glossary', 'oral', 'pt-lessons', 'pt-questions', 'pt-misc'].forEach(f => load(`assets/${f}.js`));
load('assets/modules/kit.js');
const files = fs.readdirSync('assets/modules').filter(f => /^m\d\d\.js$/.test(f)).sort();
files.forEach(f => load('assets/modules/' + f));
const html = fs.readFileSync('index.html', 'utf8');
let errors = 0;
const err = (...a) => { errors++; console.log('ERROR', ...a); };
const pairOK = (x, where) => {
  if (!Array.isArray(x) || typeof x[0] !== 'string' || typeof x[1] !== 'string') return err(where, 'not an [en, pt] pair', JSON.stringify(x).slice(0, 80));
  if (!x[0] && !x[1]) return;
  if (!x[0] || !x[1]) err(where, 'missing translation', JSON.stringify(x).slice(0, 80));
  for (const s of x) {
    if ((s.match(/==/g) || []).length % 2) err(where, 'unbalanced ==', s.slice(0, 70));
    if ((s.match(/\*\*/g) || []).length % 2) err(where, 'unbalanced **', s.slice(0, 70));
    if ((s.match(/\{\{/g) || []).length !== (s.match(/\}\}/g) || []).length) err(where, 'unbalanced {{ }}', s.slice(0, 70));
  }
  if (/\{\{/.test(x[0])) err(where, '{{ }} belongs in Portuguese text only', x[0].slice(0, 60));
};
const cell = (c, w) => typeof c === 'string' ? null : pairOK(c, w);
for (const f of files) {
  const id = +f.slice(1, 3), m = MODULES[id - 1];
  if (!m) { err(f, 'did not register'); continue; }
  if (!html.includes(`assets/modules/${f}`)) err(f, 'not loaded in index.html');
  pairOK(m.hook, `m${id}.hook`); (m.goals || []).forEach((g, i) => pairOK(g, `m${id}.goal${i}`));
  if (!Array.isArray(m.teasers) || m.teasers.length !== 3) err(`m${id}.teasers`, 'needs exactly 3 teasers');
  else m.teasers.forEach((t, i) => pairOK(t, `m${id}.teaser${i}`));
  m.pages.forEach((p, pi) => {
    const w = `m${id}.p${pi + 1}`;
    pairOK(p.t, w + '.title'); (p.key || []).forEach((k, i) => pairOK(k, `${w}.key${i}`));
    (p.src || []).forEach(u => { try { new URL(u); } catch { err(w, 'bad url', u); } });
    p.b.forEach((b, bi) => {
      const wb = `${w}.b${bi}(${b.k})`;
      switch (b.k) {
        case 'p': case 'note': pairOK(b.t, wb); if (b.k === 'note' && !['exam', 'br', 'warn', 'tip', 'eg', 'aus'].includes(b.kind)) err(wb, 'bad note kind', b.kind); break;
        case 'ul': case 'ol': b.items.forEach((x, i) => pairOK(x, `${wb}.${i}`)); break;
        case 'table': b.head.forEach((h, i) => cell(h, `${wb}.head${i}`)); b.rows.forEach((r, ri) => { if (r.length !== b.head.length) err(wb, `row ${ri} has ${r.length} cells, head has ${b.head.length}`); r.forEach((c, ci) => cell(c, `${wb}.r${ri}c${ci}`)); }); break;
        case 'flow': b.steps.forEach((s, i) => { pairOK(s[0], `${wb}.${i}.title`); if (s[1]) pairOK(s[1], `${wb}.${i}.text`); }); break;
        case 'fig': if (b.cap) pairOK(b.cap, wb + '.cap'); break;
        case 'sort': pairOK(b.q, wb + '.q'); b.buckets.forEach((x, i) => pairOK(x, `${wb}.bucket${i}`)); b.items.forEach((x, i) => { pairOK([x[0], x[1]], `${wb}.item${i}`); if (!(x[2] >= 0 && x[2] < b.buckets.length)) err(wb, 'bad bucket index', x); }); break;
        case 'order': pairOK(b.q, wb + '.q'); b.items.forEach((x, i) => pairOK(x, `${wb}.${i}`)); if (b.items.length < 3) err(wb, 'too few items'); break;
        case 'num': pairOK(b.q, wb + '.q'); pairOK(b.why, wb + '.why'); if (typeof b.ans !== 'number' || typeof b.tol !== 'number') err(wb, 'ans/tol must be numbers'); break;
        case 'reveal': pairOK(b.q, wb + '.q'); pairOK(b.a, wb + '.a'); break;
        case 'pick': pairOK(b.q, wb + '.q'); pairOK(b.why, wb + '.why'); b.opts.forEach((o, i) => pairOK(o, `${wb}.opt${i}`)); if (!(b.ans >= 0 && b.ans < b.opts.length)) err(wb, 'bad ans'); break;
        default: err(wb, 'unknown block kind');
      }
    });
  });
  (m.qs || []).forEach((q, i) => {
    const w = `m${id}.n${i}`; pairOK(q.stem, w + '.stem'); pairOK(q.why, w + '.why');
    if (q.type !== 'e') { q.opts.forEach((o, k) => pairOK(o, `${w}.opt${k}`)); if (!(q.ans >= 0 && q.ans < q.opts.length)) err(w, 'bad ans'); }
    if (q.case && !CASES[q.case]) err(w, 'unknown case', q.case);
    if (!q.src) err(w, 'missing src');
  });
  for (const [after, refs] of Object.entries(m.checks || {})) {
    if (after < 1 || after > m.pages.length) err(`m${id}.checks`, 'after page out of range', after);
    refs.forEach(r => { const q = typeof r === 'number' ? QUESTIONS[r] : QBYID[`m${id}-${r.slice(1)}`]; if (!q) err(`m${id}.checks`, 'unknown question', r); else if (q.t !== id) err(`m${id}.checks`, `question ${r} belongs to topic ${q.t}`); });
  }
  const nq = QUESTIONS.filter(q => q.t === id).length;
  console.log(`m${id}: ${m.pages.length} pages, ${m.pages.reduce((a, p) => a + p.b.filter(b => ['sort', 'order', 'num', 'reveal', 'pick'].includes(b.k)).length, 0)} exercises, ${nq} questions`);
}
console.log(`\n${files.length} modules, ${QUESTIONS.length} questions, ${errors} errors`);
process.exit(errors ? 1 : 0);
