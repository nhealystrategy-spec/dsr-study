// DSR Study — single-page app. English data: topics-sheet.js, lessons.js, questions.js, glossary.js, oral.js.
// Portuguese: pt-lessons.js, pt-questions.js, pt-misc.js (parallel structures, same order).
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const DAY = 864e5;
const EXAM_DATE = new Date('2027-09-08T09:00:00+10:00'); // target MCQ sitting
const ORDER = [2,18,15,12,19,3,8,4,5,6,7,9,10,11,13,14,16,17,1]; // most "new for Brazil" first
const TOPICS = SHEET_TOPICS.map(t => ({...t, ...LESSONS[t.id]}));
const topic = id => TOPICS.find(t => t.id == id);
QUESTIONS.forEach((q, i) => { q.id = 'q' + i; q.pt = PT_Q[i]; });

// ---------- storage ----------
const KEY = 'dsr-study-v1';
const S = Object.assign({status:{}, notes:{}, srs:{}, qs:{}, exams:[], pt:'both', newToday:{d:'',n:0}}, JSON.parse(localStorage.getItem(KEY) || '{}'));
const save = () => localStorage.setItem(KEY, JSON.stringify(S));
const status = id => S.status[id] || 'not';
const STATUS_LABEL = {not:'Not started', learning:'Learning', comfortable:'Comfortable'};
function recordAnswer(q, ok){ const r = S.qs[q.id] ||= {r:0, w:0}; ok ? r.r++ : r.w++; save(); }

// ---------- language ----------
// Modes: off | tap (tap words) | show (words inline) | both (English + Portuguese lines) | pt (Portuguese only)
// L: block text with optional translation. Li: short inline label. H: same as L for trusted HTML.
const H = (en, pt) => !pt ? en : S.pt === 'pt' ? `<span lang="pt-BR">${pt}</span>` : S.pt === 'both' ? `${en}<span class="ptl" lang="pt-BR">${pt}</span>` : en;
const L = (en, pt) => H(esc(en), pt && esc(pt));
const Li = (en, pt) => !pt ? esc(en) : S.pt === 'pt' ? esc(pt) : S.pt === 'both' ? `${esc(en)} <span class="ptl in" lang="pt-BR">${esc(pt)}</span>` : esc(en);
const T = en => Li(en, PT_UI[en]);          // interface label
const TB = en => L(en, PT_UI[en]);          // interface sentence
const ptOnly = () => S.pt === 'pt';

// ---------- Portuguese glossary highlighting ----------
const GL = new Map(GLOSSARY.map(g => [g[0].toLowerCase(), g]));
const GL_RE = new RegExp('(?<![\\w-])(' + GLOSSARY.map(g => g[0]).sort((a, b) => b.length - a.length)
  .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')(?![\\w-])', 'gi');
function annotate(root){
  if (S.pt === 'off' || S.pt === 'pt' || !root) return;
  const seen = new Set(root.dataset.seen ? root.dataset.seen.split('|') : []);
  const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode: n =>
    n.parentElement.closest('a,button,abbr,script,style,textarea,select,.nopt,.ptl,[lang="pt-BR"]') || !n.nodeValue.trim() ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT});
  const nodes = []; while (walk.nextNode()) nodes.push(walk.currentNode);
  for (const n of nodes) {
    const txt = n.nodeValue; GL_RE.lastIndex = 0; if (!GL_RE.test(txt)) continue;
    const frag = document.createDocumentFragment(); let last = 0;
    for (const m of txt.matchAll(GL_RE)) {
      const g = GL.get(m[0].toLowerCase()); if (!g) continue;
      frag.append(txt.slice(last, m.index));
      const ab = document.createElement('abbr'); ab.className = 'pt'; ab.textContent = m[0];
      ab.dataset.pt = g[1]; if (g[2]) ab.dataset.note = g[2]; ab.tabIndex = 0;
      if (!seen.has(g[0])) { ab.classList.add('first'); seen.add(g[0]); }
      frag.append(ab); last = m.index + m[0].length;
    }
    frag.append(txt.slice(last)); n.replaceWith(frag);
  }
  root.dataset.seen = [...seen].join('|');
}
const pop = document.createElement('div'); pop.id = 'ptpop'; pop.setAttribute('role', 'tooltip'); pop.hidden = true;
document.addEventListener('click', e => {
  const ab = e.target.closest('abbr.pt');
  if (!ab) { pop.hidden = true; return; }
  pop.innerHTML = `<b>${esc(ab.textContent)}</b> → <span lang="pt-BR">${esc(ab.dataset.pt)}</span>${ab.dataset.note ? `<div class="small">${esc(ab.dataset.note)}</div>` : ''}`;
  const r = ab.getBoundingClientRect(); pop.hidden = false;
  pop.style.left = Math.max(8, Math.min(innerWidth - pop.offsetWidth - 8, r.left + scrollX)) + 'px';
  pop.style.top = (r.bottom + scrollY + 6) + 'px';
});
document.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('abbr.pt')) e.target.click(); if (e.key === 'Escape') pop.hidden = true; });
function setPT(v){ S.pt = v; save(); document.body.classList.toggle('pt-show', v === 'show'); document.documentElement.lang = v === 'pt' ? 'pt-BR' : 'en'; render(); }
const src = url => `<a class="cite" href="${url}" target="_blank" rel="noopener">${T('source ↗')}</a>`;

// ---------- question rendering ----------
function qHTML(q, n){
  const c = q.type === 'c' ? CASES[q.case] : null, e = q.type === 'e' ? EMQS[q.emq] : null;
  const kind = {s:'Stand-alone', c:'Case-based', e:'Extended matching'}[q.type];
  return `<div class="q" data-q="${q.id}">
    <div class="tag">${n ? `${T('Question')} ${n} · ` : ''}${T(kind)} · ${Li(topic(q.t).title, PT_TOPICS[q.t].title)}</div>
    ${c ? `<div class="case">${L(c.text, PT_CASES[q.case])}</div>` : ''}
    ${e ? `<div class="case">${L(e.lead, PT_EMQS[q.emq].lead)}</div>` : ''}
    <div class="stem">${L(q.stem, q.pt[0])}</div><div class="opts"></div><div class="why" hidden></div></div>`;
}
// order: shuffled option indices for stand-alone/case; extended matching keeps the shared list order
function optionOrder(q){ const o = q.type === 'e' ? EMQS[q.emq].opts : q.opts; const idx = o.map((_, i) => i); return {o, idx: q.type === 'e' ? idx : shuffle(idx)}; }
function mountQuestion(el, q, {feedback = true, picked = null, onPick} = {}){
  const {o, idx} = q._ord ||= optionOrder(q);
  const po = q.type === 'e' ? PT_EMQS[q.emq].opts : q.pt[1];
  const box = el.querySelector('.opts');
  box.innerHTML = idx.map((i, k) => `<button class="opt" data-i="${i}">${String.fromCharCode(65 + k)}. ${L(o[i], po[i])}</button>`).join('');
  const show = i => {
    box.querySelectorAll('.opt').forEach(b => { b.disabled = true; const bi = +b.dataset.i; if (bi === q.ans) b.classList.add('right'); else if (bi === i) b.classList.add('wrong'); });
    const w = el.querySelector('.why'); w.hidden = false;
    w.innerHTML = `<b>${T(i === q.ans ? '✓ Correct.' : '✗ Not quite.')}</b> ${L(q.why, q.pt[2])} ${src(q.src)}`;
    annotate(w);
  };
  const mark = i => box.querySelectorAll('.opt').forEach(b => b.classList.toggle('picked', +b.dataset.i === i));
  if (picked != null) feedback ? show(picked) : mark(picked);
  box.onclick = ev => { const b = ev.target.closest('.opt'); if (!b || b.disabled) return; const i = +b.dataset.i;
    if (feedback) { show(i); recordAnswer(q, i === q.ans); } else mark(i); onPick && onPick(i); };
  annotate(el);
}
// keep case and matching groups together, like the real paper
function groupOrder(qs){ const keyOf = q => q.case || q.emq || q.id; const order = [...new Set(qs.map(keyOf))]; return order.flatMap(k => qs.filter(q => keyOf(q) === k)); }

// ---------- spaced repetition (simplified SM-2) ----------
const CARDS = TOPICS.flatMap(t => (t.facts || []).map((f, i) => ({id: `${t.id}-${i}`, t: t.id, ...f, pq: PT_LESSONS[t.id].facts[i][0], pa: PT_LESSONS[t.id].facts[i][1]})));
function dueCards(){
  const now = Date.now(), today = new Date().toDateString();
  if (S.newToday.d !== today) S.newToday = {d: today, n: 0};
  const due = CARDS.filter(c => S.srs[c.id] && S.srs[c.id].due <= now);
  const fresh = ORDER.flatMap(t => CARDS.filter(c => c.t === t && !S.srs[c.id]))
    .sort((a, b) => (status(b.t) === 'learning') - (status(a.t) === 'learning'))
    .slice(0, Math.max(0, 15 - S.newToday.n));
  return {due, fresh};
}
function rate(card, grade){ // 0 again, 1 hard, 2 good, 3 easy
  const isNew = !S.srs[card.id]; const s = S.srs[card.id] ||= {iv: 0, ef: 2.5};
  if (isNew) S.newToday.n++;
  if (grade === 0) { s.iv = 0; s.ef = Math.max(1.3, s.ef - 0.2); s.due = Date.now() + 10 * 60e3; }
  else { s.iv = s.iv ? s.iv * (grade === 1 ? 1.2 : grade === 2 ? s.ef : s.ef * 1.3) : [0, 1, 1, 3][grade];
    s.ef = Math.max(1.3, s.ef + [0, -0.15, 0, 0.15][grade]); s.due = Date.now() + s.iv * DAY; }
  save();
}

// ---------- views ----------
const V = {};
V.home = () => {
  const comf = TOPICS.filter(t => status(t.id) === 'comfortable').length;
  const {due, fresh} = dueCards();
  const days = Math.ceil((EXAM_DATE - Date.now()) / DAY);
  const att = Object.values(S.qs).reduce((a, r) => [a[0] + r.r, a[1] + r.r + r.w], [0, 0]);
  const best = S.exams.length ? Math.max(...S.exams.map(e => Math.round(100 * e.score / e.n))) : null;
  const next = ORDER.map(topic).find(t => status(t.id) !== 'comfortable');
  const datesLink = `<a href="https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/exam-dates-and-details" target="_blank" rel="noopener">${ptOnly() ? 'Datas das provas ↗' : 'Exam dates ↗'}</a>`;
  return `<h1>Olá Thaynar 👋</h1>
  <p class="lede">${H(`Your path to working as a dietitian in Australia. Each study area has a short lesson, recall cards and practice questions in the real exam formats. Use the <b>PT</b> menu at the top to switch language: tap words, English + Português side by side, or Português only.`,
    `Seu caminho para trabalhar como nutricionista na Austrália. Cada área de estudo tem uma lição curta, cartões de memória e questões de prática nos formatos reais da prova. Use o menu <b>PT</b> no topo para mudar o idioma: palavras ao tocar, inglês + português lado a lado, ou só português.`)}</p>
  ${days > 0 ? `<div class="alert">${H(`<b>${days} days</b> until your target MCQ exam on <b>8 September 2027</b>. DA has not announced its deadlines yet. For the March sitting the DSR assessment was due about 3 months before, so plan to have your application in by <b>early June 2027</b>, with the Cultural Awareness assessment done first.`,
    `<b>${days} dias</b> até a sua prova de múltipla escolha, em <b>8 de setembro de 2027</b>. A DA ainda não divulgou os prazos. Para a prova de março, a avaliação DSR precisou ser enviada cerca de 3 meses antes, então planeje enviar sua inscrição até o <b>início de junho de 2027</b>, com a avaliação de Cultural Awareness feita antes.`)} ${datesLink}</div>` : ''}
  <div class="stats">
    <div class="stat"><b>${comf}/19</b><span class="muted small">${T('areas comfortable')}</span></div>
    <div class="stat"><b>${due.length + fresh.length}</b><span class="muted small">${T('cards to review today')}</span></div>
    <div class="stat"><b>${att[1] ? Math.round(100 * att[0] / att[1]) + '%' : '–'}</b><span class="muted small">${T('practice accuracy')} (${att[1]} ${T('answered')})</span></div>
    <div class="stat"><b>${best != null ? best + '%' : '–'}</b><span class="muted small">${T('best mock exam')}</span></div>
  </div>
  <div class="row">
    ${next ? `<a class="btn" href="#/topic/${next.id}">${T('Next lesson:')} ${Li(next.title, PT_TOPICS[next.id].title)}</a>` : ''}
    <a class="btn ghost" href="#/review">${T('Review cards')}</a><a class="btn ghost" href="#/exam">${T('Mock exam')}</a><a class="btn ghost" href="#/oral">${T('Oral exam practice')}</a>
  </div>
  <h2>${T('A good week')}</h2>
  <p class="muted">${H(`15-30 minutes a day: <b>review cards</b> first (spacing beats cramming), then <b>one lesson</b> and its questions. Once a week, a <b>mock exam</b> and one <b>oral role play</b> with a partner reading the client card. Study the areas that are most different from Brazil first (the order below).`,
    `15-30 minutos por dia: primeiro <b>revise os cartões</b> (espaçar vence decorar na véspera), depois <b>uma lição</b> e suas questões. Uma vez por semana, um <b>simulado</b> e uma <b>simulação oral</b> com alguém lendo o cartão do paciente. Estude primeiro as áreas mais diferentes do Brasil (a ordem abaixo).`)}</p>
  <h2>${T('19 study areas')}</h2>
  ${['Science and assessment','Clinical nutrition','Life stages','Food and public health','Practice and exams'].map(area => `
    <h3>${T(area)}</h3><div class="grid">${TOPICS.filter(t => t.area === area).map(t => {
      const qs = QUESTIONS.filter(q => q.t === t.id); const done = qs.filter(q => S.qs[q.id]).length;
      return `<a class="card" href="#/topic/${t.id}"><div class="row" style="justify-content:space-between"><span class="tag">${T('Area')} ${t.id} · ${T('priority')} ${ORDER.indexOf(t.id) + 1}</span><span class="pill ${status(t.id)}">${T(STATUS_LABEL[status(t.id)])}</span></div>
        <h3>${L(t.title, PT_TOPICS[t.id].title)}</h3><div class="small muted">${L(t.focus, PT_TOPICS[t.id].focus)}</div>
        <div class="bar" style="margin-top:.6rem" title="${done}/${qs.length}"><i style="width:${qs.length ? 100 * done / qs.length : 0}%"></i></div></a>`; }).join('')}</div>`).join('')}`;
};

V.topic = id => {
  const t = topic(id); if (!t) return V.home();
  const P = PT_TOPICS[t.id], PL = PT_LESSONS[t.id];
  const i = ORDER.indexOf(t.id), prev = topic(ORDER[i - 1]), next = topic(ORDER[i + 1]);
  const maps = BRAZIL_MAP.map((m, k) => ({...m, pt: PT_MAP[k]})).filter(m => m.topics.includes(t.id));
  const qs = QUESTIONS.filter(q => q.t === t.id);
  setTimeout(() => {
    $('#status').onchange = e => { S.status[t.id] = e.target.value; save(); };
    $('#notes').oninput = e => { S.notes[t.id] = e.target.value; save(); };
    $('#startquiz').onclick = () => {
      const box = $('#quiz'); const list = groupOrder(qs);
      box.innerHTML = list.map((q, k) => qHTML(q, k + 1)).join('') + `<p class="muted small" id="quizsum"></p>`;
      list.forEach(q => { delete q._ord; mountQuestion(box.querySelector(`[data-q="${q.id}"]`), q, {onPick: () => {
        const answered = box.querySelectorAll('.why:not([hidden])').length;
        const correct = [...box.querySelectorAll('.q')].filter(el => el.querySelector('.why:not([hidden])') && !el.querySelector('.opt.wrong')).length;
        $('#quizsum').innerHTML = `${correct}/${answered} ${T('correct so far.')}` + (answered === list.length && correct / list.length >= .8 ? ' ' + T('Great: consider marking this area Comfortable.') : '');
      }}); });
      $('#startquiz').remove();
    };
  });
  return `<p class="small"><a href="#/">${T('← All areas')}</a></p>
  <span class="tag">${T('Area')} ${t.id} · ${T(t.area)}</span><h1>${L(t.title, P.title)}</h1>
  <p class="lede">${L(t.why, PL.why)}</p>
  <div class="row"><label for="status" class="small muted">${T('My progress')}</label>
    <select id="status">${Object.entries(STATUS_LABEL).map(([k, v]) => `<option value="${k}" ${status(t.id) === k ? 'selected' : ''}>${ptOnly() ? PT_UI[v] : v}</option>`).join('')}</select></div>
  ${maps.length || t.au?.length ? `<h2>${T('From Brazil to Australia')}</h2>${maps.map(m => `<div class="tip"><b>${T('You studied:')}</b> <span lang="pt-BR" class="nopt">${esc(m.br)}</span><br><b>${T('Same:')}</b> ${L(m.same, m.pt[0])}<br><b>${T('What changes:')}</b> ${L(m.change, m.pt[1])}</div>`).join('')}${(t.au || []).map((a, k) => `<div class="tip">${L(a, PL.au[k])}</div>`).join('')}` : ''}
  <h2>${T('Key facts: try to answer before opening')}</h2>
  <p class="muted small">${TB('Saying the answer out loud first is retrieval practice, which builds memory far better than re-reading. These cards also go into your daily review.')}</p>
  ${(t.facts || []).map((f, k) => `<details class="fact"><summary>${L(f.q, PL.facts[k][0])}</summary><div class="ans">${L(f.a, PL.facts[k][1])} ${src(f.src)}</div></details>`).join('')}
  <h2>${T('Practice questions')} (${qs.length})</h2>
  <div id="quiz"><button id="startquiz">${ptOnly() ? `Começar ${qs.length} questões` : `Start ${qs.length} questions`}</button></div>
  <h2>${T('Read and watch')}</h2>
  <p class="muted small">${TB('From your study planner. Start with the first two; use “If needed” to fill gaps.')}</p>
  <ul class="res-list">${t.resources.map((r, k) => `<li><span class="pill">${T(r.route)}</span> <a href="${r.url}" target="_blank" rel="noopener">${esc(r.title)}</a> <span class="small muted">· ${esc(r.format)}</span><div class="small muted">${L(r.focus, P.res[k])}</div></li>`).join('')}
  ${(t.extra || []).map((r, k) => `<li><span class="pill">${T('Official list')}</span> <a href="${r.url}" target="_blank" rel="noopener">${esc(r.title)}</a><div class="small muted">${L(r.why, PL.extra[k])}</div></li>`).join('')}</ul>
  <h2>${T('Self-check')}</h2><p>${L(t.selfCheck, P.selfCheck)}</p>
  <textarea id="notes" aria-label="Self-check answer" placeholder="${ptOnly() ? 'Escreva ou dite sua resposta aqui. Salva automaticamente.' : 'Write or dictate your answer here. It saves automatically.'}">${esc(S.notes[t.id] || '')}</textarea>
  <p class="tip small">${TB('Stuck or something unclear? Ask Claude (or Nathan) a follow-up question: explaining it in a new way is part of the course.')}</p>
  <div class="row" style="justify-content:space-between;margin-top:1.5rem">${prev ? `<a href="#/topic/${prev.id}">← ${Li(prev.title, PT_TOPICS[prev.id].title)}</a>` : '<span></span>'}${next ? `<a href="#/topic/${next.id}">${Li(next.title, PT_TOPICS[next.id].title)} →</a>` : ''}</div>`;
};

V.review = () => {
  const {due, fresh} = dueCards(); const deck = shuffle(due).concat(fresh);
  if (!deck.length) return `<h1>${T('Daily review')}</h1><p class="lede">${TB('Nothing due. Come back tomorrow, or open a lesson to learn new cards.')}</p><a class="btn" href="#/practice">${T('Practise questions instead')}</a>`;
  let k = 0;
  const show = () => {
    const c = deck[k], el = $('#flash');
    if (!c) { el.innerHTML = `<div class="face"><div class="front">${T('Done for now 🎉')}</div><a class="btn" href="#/">${T('Back home')}</a></div>`; return; }
    el.innerHTML = `<p class="muted small">${k + 1} / ${deck.length} · ${T(S.srs[c.id] ? 'review' : 'new')} · ${Li(topic(c.t).title, PT_TOPICS[c.t].title)}</p>
      <div class="face"><div class="front">${L(c.q, c.pq)}</div><div class="back" hidden>${L(c.a, c.pa)} ${src(c.src)}</div>
      <div class="row" style="justify-content:center" id="fbtns"><button id="flip">${T('Show answer')}</button></div></div>`;
    $('#flip').onclick = () => { el.querySelector('.back').hidden = false;
      $('#fbtns').innerHTML = ['Again', 'Hard', 'Good', 'Easy'].map((l, g) => `<button class="${g ? 'ghost' : ''}" data-g="${g}">${T(l)}</button>`).join('');
      $('#fbtns').onclick = e => { const g = e.target.closest('[data-g]')?.dataset.g; if (g == null) return; rate(c, +g); if (+g === 0) deck.push(c); k++; show(); };
      annotate(el.querySelector('.back')); };
    annotate(el.querySelector('.front'));
  };
  setTimeout(show);
  return `<h1>${T('Daily review')}</h1><p class="lede">${TB('Say the answer out loud, then check. Be honest: “Again” brings it back in 10 minutes, “Easy” pushes it weeks away.')}</p><div class="flash" id="flash"></div>`;
};

V.practice = () => {
  const weak = QUESTIONS.filter(q => S.qs[q.id] && S.qs[q.id].w > S.qs[q.id].r);
  setTimeout(() => {
    const run = list => { const box = $('#pq'); list = groupOrder(list); box.innerHTML = list.map((q, k) => qHTML(q, k + 1)).join('');
      list.forEach(q => { delete q._ord; mountQuestion(box.querySelector(`[data-q="${q.id}"]`), q); }); };
    $('#pmix').onclick = () => run(shuffle(QUESTIONS).slice(0, 20));
    $('#pweak').onclick = () => run(weak);
    $('#pemq').onclick = () => run(QUESTIONS.filter(q => q.type === 'e'));
    $('#pcase').onclick = () => run(QUESTIONS.filter(q => q.type === 'c'));
  });
  return `<h1>${T('Practice')}</h1><p class="lede">${TB('Instant feedback after each answer. Mixing topics (interleaving) is harder, and it sticks better.')}</p>
  <div class="row"><button id="pmix">${T('20 mixed questions')}</button><button class="ghost" id="pweak" ${weak.length ? '' : 'disabled'}>${T('My mistakes')} (${weak.length})</button><button class="ghost" id="pcase">${T('All case-based')}</button><button class="ghost" id="pemq">${T('All extended matching')}</button></div><div id="pq"></div>`;
};

let examTimer;
V.exam = () => {
  clearInterval(examTimer);
  setTimeout(() => { $('#examgo').onclick = () => startExam(+$('#examn').value); });
  const hist = S.exams.slice(-5).reverse();
  const opt = (v, l, sel) => `<option value="${v}" ${sel ? 'selected' : ''}>${ptOnly() ? PT_UI[l] : l}</option>`;
  return `<h1>${T('Mock MCQ exam')}</h1>
  <p class="lede">${TB('The real exam is 120 questions in 150 minutes (1¼ minutes each), online. This mock keeps the same pace, mixes all three formats and gives no feedback until you submit.')}</p>
  <div class="row"><label for="examn">${T('Length')}</label><select id="examn">${opt(20, '20 questions · 25 min')}${opt(60, '60 questions · 75 min')}${opt(120, '120 questions · 150 min (full)', true)}</select><button id="examgo">${T('Start exam')}</button></div>
  <p class="small muted">${H(`The bank has ${QUESTIONS.length} questions; a full mock uses 120 of them. The pass mark changes every paper, so aim well above 65%.`, `O banco tem ${QUESTIONS.length} questões; um simulado completo usa 120 delas. A nota de corte muda a cada prova, então mire bem acima de 65%.`)}</p>
  ${hist.length ? `<h2>${T('Recent attempts')}</h2><table><tr><th>${T('Date')}</th><th>${T('Score')}</th><th>${T('Weakest areas')}</th></tr>${hist.map(e => `<tr><td>${new Date(e.d).toLocaleDateString()}</td><td>${e.score}/${e.n} (${Math.round(100 * e.score / e.n)}%)</td><td>${e.weak.map(id => Li(topic(id).title, PT_TOPICS[id].title)).join(', ')}</td></tr>`).join('')}</table>` : ''}`;
};
function startExam(n){
  const list = groupOrder(shuffle(QUESTIONS).slice(0, Math.min(n, QUESTIONS.length))); list.forEach(q => delete q._ord);
  const ans = {}, flags = new Set(); let k = 0; const end = Date.now() + list.length * 75e3;
  const main = $('main');
  const finish = () => {
    clearInterval(examTimer);
    const by = {}; let score = 0;
    list.forEach(q => { const ok = ans[q.id] === q.ans; if (ok) score++; recordAnswer(q, ok); (by[q.t] ||= [0, 0])[1]++; if (ok) by[q.t][0]++; });
    const rows = Object.entries(by).sort((a, b) => a[1][0] / a[1][1] - b[1][0] / b[1][1]);
    S.exams.push({d: Date.now(), n: list.length, score, weak: rows.slice(0, 3).map(r => +r[0])}); save();
    main.innerHTML = `<h1>${T('Result:')} ${score}/${list.length} (${Math.round(100 * score / list.length)}%)</h1>
      <table><tr><th>${T('Area')}</th><th>${T('Score')}</th><th></th></tr>${rows.map(([t, [r, a]]) => `<tr><td><a href="#/topic/${t}">${Li(topic(t).title, PT_TOPICS[t].title)}</a></td><td>${r}/${a}</td><td style="width:40%"><div class="bar"><i style="width:${100 * r / a}%"></i></div></td></tr>`).join('')}</table>
      <h2>${T('Review every question')}</h2><div id="rev">${list.map((q, i) => qHTML(q, i + 1)).join('')}</div>`;
    list.forEach(q => mountQuestion($(`#rev [data-q="${q.id}"]`), q, {picked: ans[q.id] ?? -1}));
  };
  const show = () => {
    const q = list[k];
    main.innerHTML = `<div class="row" style="justify-content:space-between"><span class="timer" id="clock"></span><span class="muted">${k + 1} / ${list.length} · ${Object.keys(ans).length} ${T('answered')}</span></div>
      <div class="bar"><i style="width:${100 * (k + 1) / list.length}%"></i></div>${qHTML(q, k + 1)}
      <div class="row"><button class="ghost" id="eprev" ${k ? '' : 'disabled'}>${T('← Back')}</button><button class="ghost" id="eflag">${T(flags.has(q.id) ? '★ Flagged' : '☆ Flag')}</button><button id="enext">${T(k < list.length - 1 ? 'Next →' : 'Finish')}</button><button class="ghost" id="esubmit">${T('Submit exam')}</button></div>
      <p class="small muted">${T('Jump to:')} ${list.map((x, i) => `<a href="#" data-j="${i}" style="${ans[x.id] != null ? '' : 'font-weight:700'}">${flags.has(x.id) ? '★' : ''}${i + 1}</a>`).join(' ')}</p>`;
    mountQuestion(main.querySelector('.q'), q, {feedback: false, picked: ans[q.id], onPick: i => ans[q.id] = i});
    $('#eprev').onclick = () => { k--; show(); }; $('#enext').onclick = () => k < list.length - 1 ? (k++, show()) : confirmFinish();
    $('#eflag').onclick = () => { flags.has(q.id) ? flags.delete(q.id) : flags.add(q.id); show(); };
    $('#esubmit').onclick = confirmFinish;
    main.querySelectorAll('[data-j]').forEach(a => a.onclick = e => { e.preventDefault(); k = +a.dataset.j; show(); });
    tick();
  };
  const confirmFinish = () => { const left = list.length - Object.keys(ans).length;
    if (!left || confirm(ptOnly() ? `${left} sem resposta. Entregar mesmo assim?` : `${left} unanswered. Submit anyway?`)) finish(); };
  const tick = () => { const ms = end - Date.now(); if (ms <= 0) return finish(); const c = $('#clock'); if (c) c.textContent = `${Math.floor(ms / 60e3)}:${String(Math.floor(ms / 1e3) % 60).padStart(2, '0')}`; };
  examTimer = setInterval(tick, 1000); show(); scrollTo(0, 0);
}

V.oral = id => {
  const sc = ORAL.find(o => o.id === id);
  if (!sc) return `<h1>${T('Oral exam practice')}</h1>
    <p class="lede">${H(`The real oral exam: 120 minutes on Zoom, 30 minutes reading time, then three role plays with different examiners and actors. You must pass <b>all three</b>.`, `O exame oral real: 120 minutos pelo Zoom, 30 minutos de leitura e depois três simulações com examinadores e atores diferentes. É preciso passar nas <b>três</b>.`)}</p>
    <table><tr><th>${T('Task')}</th><th>${T('Time')}</th><th>${T('What it tests')}</th></tr>${ORAL_TASKS.map((t, i) => `<tr><td>${Li(t.name, PT_ORAL_TASKS[i].name)}</td><td>${t.min} min</td><td>${L(t.tests, PT_ORAL_TASKS[i].tests)}</td></tr>`).join('')}</table>
    <p>${H(`Pick a scenario. Ask a partner to open the <b>partner card</b> on their phone and play the client. Record yourself and listen back: you will hear things you did not notice.`, `Escolha um caso. Peça para alguém abrir o <b>cartão do parceiro</b> no celular e fazer o papel do paciente. Grave-se e ouça depois: você vai perceber coisas que não notou.`)}</p>
    <div class="grid">${ORAL.map(o => `<a class="card" href="#/oral/${o.id}"><span class="tag">${Li(o.setting, PT_ORAL[o.id].setting)}</span><h3>${L(o.title, PT_ORAL[o.id].title)}</h3><div class="small muted">${Li(o.tags, PT_ORAL[o.id].tags)}</div></a>`).join('')}</div>
    <p class="small muted">${H(`Scenarios here are practice cases written for this course, not official exam cases. Use DA's <a href="https://dietitiansaustralia.org.au/media/1328" target="_blank" rel="noopener">oral checklist ↗</a> as the final word.`, `Estes casos foram escritos para este curso; não são casos oficiais da prova. A palavra final é o <a href="https://dietitiansaustralia.org.au/media/1328" target="_blank" rel="noopener">checklist oral da DA ↗</a>.`)}</p>`;
  setTimeout(() => mountOral(sc));
  return `<p class="small"><a href="#/oral">${T('← Scenarios')}</a></p><span class="tag">${Li(sc.setting, PT_ORAL[sc.id].setting)}</span><h1>${L(sc.title, PT_ORAL[sc.id].title)}</h1>
    <div class="row"><button class="ghost" id="partner">${T('Show partner card (client and health professional)')}</button><button class="ghost" id="rec">${T('● Record audio')}</button><span id="recout"></span></div>
    <div id="partnerbox" class="card nopt" hidden style="margin-top:1rem"></div>
    <div id="stage"></div>`;
};
function mountOral(sc){
  const P = PT_ORAL[sc.id]; let iv;
  const stages = [{name: 'Reading time', min: 30}].concat(ORAL_TASKS.map((t, i) => ({...t, p: PT_ORAL_TASKS[i]})));
  $('#partner').onclick = () => { const b = $('#partnerbox'); b.hidden = !b.hidden;
    b.innerHTML = `<h3>${T("Partner card: don't show the candidate")}</h3>${sc.partner.map((p, i) => `<p><b>${T('Task')} ${i + 1}:</b> ${L(p, P.partner[i])}</p>`).join('')}`; };
  let rec, chunks = [];
  $('#rec').onclick = async () => {
    if (rec && rec.state === 'recording') { rec.stop(); $('#rec').innerHTML = T('● Record audio'); return; }
    try { const st = await navigator.mediaDevices.getUserMedia({audio: true}); rec = new MediaRecorder(st); chunks = [];
      rec.ondataavailable = e => chunks.push(e.data);
      rec.onstop = () => { st.getTracks().forEach(t => t.stop()); $('#recout').innerHTML = `<audio controls src="${URL.createObjectURL(new Blob(chunks))}"></audio>`; };
      rec.start(); $('#rec').innerHTML = T('■ Stop recording');
    } catch { $('#recout').innerHTML = T('Microphone not available in this browser.'); }
  };
  const go = s => {
    clearInterval(iv); const st = stages[s], stage = $('#stage');
    if (!st) { stage.innerHTML = `<h2>${T('Debrief')}</h2><p>${TB("Score each checklist honestly. Anything unticked becomes next week's focus. Repeat this scenario in 2 weeks, then try a new one.")}</p><a class="btn" href="#/oral">${T('Another scenario')}</a>`; return; }
    const t0 = Date.now(), name = s ? Li(st.name, st.p.name) : T(st.name);
    const nextName = stages[s + 1] ? `${T('Next:')} ${Li(stages[s + 1].name, stages[s + 1].p?.name)}` : T('Finish');
    stage.innerHTML = `<h2>${name}</h2><div class="timer" id="otime"></div>
      ${s === 0 ? `<div class="case">${L(sc.brief, P.brief)}</div><p class="muted">${TB('Plan your questions for Task 1 and your key messages for Task 2. You may use resources (food models, labels, the Australian Guide to Healthy Eating).')}</p>`
        : `<div class="case"><b>${T('Your task:')}</b> ${L(sc.tasks[s - 1], P.tasks[s - 1])}</div><h3>${T('Checklist')}</h3><div class="check">${st.check.map((c, i) => `<label><input type="checkbox"> <span>${L(c, st.p.check[i])}</span></label>`).join('')}</div>`}
      <div class="row" style="margin-top:1rem"><button id="onext">${nextName}</button></div>`;
    $('#onext').onclick = () => go(s + 1);
    const tick = () => { const left = st.min * 60e3 - (Date.now() - t0), el = $('#otime'); if (!el) return clearInterval(iv);
      const a = Math.abs(left); el.textContent = (left < 0 ? '+' : '') + `${Math.floor(a / 60e3)}:${String(Math.floor(a / 1e3) % 60).padStart(2, '0')}`; el.style.color = left < 0 ? 'var(--bad)' : ''; };
    iv = setInterval(tick, 1000); tick(); annotate(stage);
  };
  go(0);
}

V.brazil = () => {
  setTimeout(() => {
    const f = () => { const v = parseFloat($('#cv').value), k = CONV[$('#ck').value]; $('#cout').textContent = isNaN(v) ? '' : k.f(v); };
    $('#conv').oninput = f; f();
  });
  const law = `href="https://www.gov.br/mec/pt-br/cne/pdf/normas-classificadas-por-assunto/diretrizes-curriculares-cursos-de-graduacao/rces005_01.pdf" target="_blank" rel="noopener"`;
  return `<h1>${T('Brazil → Australia')}</h1>
  <p class="lede">${H(`Your Brazilian degree already covered the three areas Australia tests: clinical nutrition, public health and food service. The <a ${law}>national curriculum rules (Resolução CNE/CES 5/2001)</a> require placements in all three. Most of the work is learning the Australian guidelines, units, laws and ways of working, not re-learning nutrition.`,
    `Sua graduação no Brasil já cobriu as três áreas que a Austrália avalia: nutrição clínica, saúde coletiva e alimentação coletiva. As <a ${law}>Diretrizes Curriculares Nacionais (Resolução CNE/CES 5/2001)</a> exigem estágio nas três. A maior parte do trabalho é aprender as diretrizes, unidades, leis e formas de trabalhar da Austrália, não reaprender nutrição.`)}</p>
  <h2>${T('Unit converter')}</h2>
  <div class="card row" id="conv"><input id="cv" type="number" value="126" step="any" aria-label="Value" style="width:8rem"><select id="ck" aria-label="Conversion">${Object.entries(CONV).map(([k, c]) => `<option value="${k}">${ptOnly() ? PT_UI[c.l] : c.l}</option>`).join('')}</select><b id="cout" aria-live="polite"></b></div>
  <h2>${T('False friends (falsos cognatos)')}</h2>
  <table class="nopt">${GLOSSARY.filter(g => g[2].startsWith('!')).map(g => `<tr><td><b>${esc(g[0])}</b></td><td lang="pt-BR">${esc(g[1])}</td><td class="small">${esc(g[2].slice(2))}</td></tr>`).join('')}</table>
  <h2>${T('What you studied → what changes')}</h2>
  <table><tr><th>${T('Brazilian course (disciplina)')}</th><th>${T('Australian study areas')}</th><th>${T('Same')}</th><th>${T('What changes')}</th></tr>
  ${BRAZIL_MAP.map((m, k) => `<tr><td lang="pt-BR" class="nopt">${esc(m.br)}</td><td>${m.topics.map(t => `<a href="#/topic/${t}">${Li(topic(t).title, PT_TOPICS[t].title)}</a>`).join('<br>')}</td><td class="small">${L(m.same, PT_MAP[k][0])}</td><td class="small">${L(m.change, PT_MAP[k][1])}</td></tr>`).join('')}</table>
  <p class="small muted">${TB('Curriculum map based on the Brazilian national guidelines and published curricula from USP and UNIFESP. Individual universities vary.')}</p>`;
};
const CONV = {
  glu: {l: 'Glucose mg/dL → mmol/L', f: v => (v / 18).toFixed(1) + ' mmol/L'},
  chol: {l: 'Cholesterol mg/dL → mmol/L', f: v => (v / 38.67).toFixed(2) + ' mmol/L'},
  tg: {l: 'Triglycerides mg/dL → mmol/L', f: v => (v / 88.57).toFixed(2) + ' mmol/L'},
  cr: {l: 'Creatinine mg/dL → µmol/L', f: v => Math.round(v * 88.4) + ' µmol/L'},
  a1c: {l: 'HbA1c % → mmol/mol', f: v => Math.round((v - 2.15) * 10.929) + ' mmol/mol'},
  kcal: {l: 'kcal → kJ', f: v => Math.round(v * 4.184) + ' kJ'},
  kj: {l: 'kJ → kcal', f: v => Math.round(v / 4.184) + ' kcal'},
  na: {l: 'Sodium mg → salt g', f: v => (v * 2.5 / 1000).toFixed(1) + ' g salt'}
};

V.glossary = () => {
  setTimeout(() => { $('#gq').oninput = e => { const q = e.target.value.toLowerCase();
    document.querySelectorAll('#gt tr[data-k]').forEach(r => r.hidden = !r.dataset.k.includes(q)); }; });
  return `<h1>Glossary · Glossário</h1><p class="lede">${GLOSSARY.length} ${ptOnly() ? 'termos em inglês e português. Busque em qualquer um dos dois idiomas.' : 'terms in English and Brazilian Portuguese. Search in either language.'}</p>
  <input id="gq" type="search" placeholder="Search / Buscar…" aria-label="Search glossary" style="width:100%;max-width:420px">
  <table id="gt" class="nopt"><tr><th>English</th><th>Português</th><th>Note</th></tr>${GLOSSARY.map(g => `<tr data-k="${esc((g[0] + ' ' + g[1]).toLowerCase())}"><td><b>${esc(g[0])}</b></td><td lang="pt-BR">${esc(g[1])}</td><td class="small muted">${esc(g[2].replace(/^! /, '⚠ '))}</td></tr>`).join('')}</table>`;
};

// ---------- router ----------
function render(){
  clearInterval(examTimer);
  const [, view = '', arg] = location.hash.split('/');
  const fn = V[view] || V.home;
  const main = $('main'); main.innerHTML = fn(arg); delete main.dataset.seen;
  document.querySelectorAll('nav a.tab').forEach(a => { a.classList.toggle('on', a.getAttribute('href') === '#/' + view); a.textContent = ptOnly() ? (PT_UI[a.dataset.en] || a.dataset.en) : a.dataset.en; });
  annotate(main); pop.hidden = true;
  if (!location.hash.includes('/exam')) scrollTo(0, 0);
}
addEventListener('hashchange', render);
addEventListener('DOMContentLoaded', () => {
  document.body.append(pop);
  document.querySelectorAll('nav a.tab').forEach(a => a.dataset.en = a.textContent);
  document.body.classList.toggle('pt-show', S.pt === 'show');
  document.documentElement.lang = S.pt === 'pt' ? 'pt-BR' : 'en';
  const sel = $('#ptmode'); sel.value = S.pt; sel.onchange = e => setPT(e.target.value);
  render();
});
