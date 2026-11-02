// Authoring kit for course modules. Load after questions.js / pt-questions.js and before the module files.
// Every text is a pair [english, portuguese]. Inline markup inside text:
//   **key term**   ==highlighted fact==   {{palavra|English term}} (Portuguese text only: tap shows the English exam term)
const MODULES = [];
const QBYID = {};

// Register a module. New questions (m.qs) join the main bank so they also appear in Practice and the mock exam.
function MOD(m) {
  (m.qs || []).forEach((q, k) => {
    const id = `m${m.id}-${k}`, emq = q.type === 'e';
    const nq = {t: m.id, type: q.type || 's', id, ans: q.ans, src: q.src, stem: q.stem[0], why: q.why[0],
      pt: [q.stem[1], emq ? null : q.opts.map(o => o[1]), q.why[1]]};
    if (!emq) nq.opts = q.opts.map(o => o[0]);
    if (q.case) nq.case = q.case;
    if (q.emq) nq.emq = q.emq;
    QUESTIONS.push(nq); QBYID[id] = nq;
  });
  Object.entries(m.cases || {}).forEach(([k, v]) => { CASES[k] = {t: m.id, text: v[0]}; PT_CASES[k] = v[1]; });
  MODULES[m.id - 1] = m;
}

// Page blocks
const P = (en, pt) => ({k: 'p', t: [en, pt]});
const UL = (...items) => ({k: 'ul', items});                       // items: [en, pt]
const OL = (...items) => ({k: 'ol', items});
const NOTE = (kind, en, pt) => ({k: 'note', kind, t: [en, pt]});   // kind: exam | br | warn | tip | eg | aus
const TABLE = (head, ...rows) => ({k: 'table', head, rows});       // cells: 'text' or [en, pt]
const FLOW = (...steps) => ({k: 'flow', steps});                   // step: [[en, pt] title, [en, pt] detail]
const FIG = (svg, cap) => ({k: 'fig', svg, cap});
// Click-to-load video. id: YouTube id, or 'vimeo:123456' / 'vimeo:123456/hash'; by: channel; mins: length; start: seconds (optional).
// Check every id with oEmbed before adding it, and list it in assets/modules/videos.md.
const VIDEO = (id, by, mins, title, why, start) => ({k: 'video', id, by, mins, title, why, start});
// Interactive blocks (instant feedback)
const SORT = (q, buckets, items) => ({k: 'sort', q, buckets, items}); // items: [en, pt, bucketIndex]
const ORDER = (q, items) => ({k: 'order', q, items});                 // items listed in the correct order
const NUM = (q, ans, tol, unit, why) => ({k: 'num', q, ans, tol, unit, why});
const REVEAL = (q, a) => ({k: 'reveal', q, a});
const PICK = (q, opts, ans, why) => ({k: 'pick', q, opts, ans, why}); // opts: [en, pt]
