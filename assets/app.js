// DSR Study — single-page app. Data comes from topics-sheet.js, lessons.js, questions.js, glossary.js, oral.js.
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const DAY = 864e5;
const EXAM_DATE = new Date('2027-09-08T09:00:00+10:00'); // target MCQ sitting
const ORDER = [2,18,15,12,19,3,8,4,5,6,7,9,10,11,13,14,16,17,1]; // most "new for Brazil" first
const TOPICS = SHEET_TOPICS.map(t => ({...t, ...LESSONS[t.id]}));
const topic = id => TOPICS.find(t => t.id == id);
QUESTIONS.forEach((q, i) => q.id = 'q' + i);

// ---------- storage ----------
const KEY = 'dsr-study-v1';
const S = Object.assign({status:{}, notes:{}, srs:{}, qs:{}, exams:[], pt:'tap', newToday:{d:'',n:0}}, JSON.parse(localStorage.getItem(KEY) || '{}'));
const save = () => localStorage.setItem(KEY, JSON.stringify(S));
const status = id => S.status[id] || 'not';
const STATUS_LABEL = {not:'Not started', learning:'Learning', comfortable:'Comfortable'};
function recordAnswer(q, ok){ const r = S.qs[q.id] ||= {r:0, w:0}; ok ? r.r++ : r.w++; save(); }

// ---------- Portuguese glossary highlighting ----------
const GL = new Map(GLOSSARY.map(g => [g[0].toLowerCase(), g]));
const GL_RE = new RegExp('(?<![\\w-])(' + GLOSSARY.map(g => g[0]).sort((a, b) => b.length - a.length)
  .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')(?![\\w-])', 'gi');
function annotate(root){
  if (S.pt === 'off' || !root) return;
  const seen = new Set(root.dataset.seen ? root.dataset.seen.split('|') : []);
  const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode: n =>
    n.parentElement.closest('a,button,abbr,script,style,textarea,select,.nopt') || !n.nodeValue.trim() ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT});
  const nodes = []; while (walk.nextNode()) nodes.push(walk.currentNode);
  for (const n of nodes) {
    const txt = n.nodeValue; GL_RE.lastIndex = 0; if (!GL_RE.test(txt)) continue;
    const frag = document.createDocumentFragment(); let last = 0; GL_RE.lastIndex = 0;
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
function setPT(v){ S.pt = v; save(); document.body.classList.toggle('pt-show', v === 'show'); render(); }

// ---------- question rendering ----------
function qHTML(q, n){
  const c = q.type === 'c' ? CASES[q.case] : null, e = q.type === 'e' ? EMQS[q.emq] : null;
  const kind = {s:'Stand-alone', c:'Case-based', e:'Extended matching'}[q.type];
  return `<div class="q" data-q="${q.id}">
    <div class="tag">${n ? `Question ${n} · ` : ''}${kind} · ${esc(topic(q.t).title)}</div>
    ${c ? `<div class="case">${esc(c.text)}</div>` : ''}
    ${e ? `<div class="case">${esc(e.lead)}</div>` : ''}
    <div class="stem">${esc(q.stem)}</div><div class="opts"></div><div class="why" hidden></div></div>`;
}
// order: shuffled option indices for stand-alone/case; EMQ keeps the shared list order
function optionOrder(q){ const o = q.type === 'e' ? EMQS[q.emq].opts : q.opts; const idx = o.map((_, i) => i); return {o, idx: q.type === 'e' ? idx : shuffle(idx)}; }
function mountQuestion(el, q, {feedback = true, picked = null, onPick} = {}){
  const {o, idx} = q._ord ||= optionOrder(q);
  const box = el.querySelector('.opts');
  box.innerHTML = idx.map((i, k) => `<button class="opt" data-i="${i}">${String.fromCharCode(65 + k)}. ${esc(o[i])}</button>`).join('');
  const show = i => {
    box.querySelectorAll('.opt').forEach(b => { b.disabled = true; const bi = +b.dataset.i; if (bi === q.ans) b.classList.add('right'); else if (bi === i) b.classList.add('wrong'); });
    const w = el.querySelector('.why'); w.hidden = false;
    w.innerHTML = `<b>${i === q.ans ? '✓ Correct.' : '✗ Not quite.'}</b> ${esc(q.why)} <a class="cite" href="${q.src}" target="_blank" rel="noopener">source ↗</a>`;
    annotate(w);
  };
  const mark = i => box.querySelectorAll('.opt').forEach(b => b.classList.toggle('picked', +b.dataset.i === i));
  if (picked != null) feedback ? show(picked) : mark(picked);
  box.onclick = ev => { const b = ev.target.closest('.opt'); if (!b || b.disabled) return; const i = +b.dataset.i;
    if (feedback) { show(i); recordAnswer(q, i === q.ans); } else mark(i); onPick && onPick(i); };
  annotate(el);
}
// keep case and EMQ groups together, like the real paper
function groupOrder(qs){ const keyOf = q => q.case || q.emq || q.id; const order = [...new Set(qs.map(keyOf))]; return order.flatMap(k => qs.filter(q => keyOf(q) === k)); }

// ---------- spaced repetition (simplified SM-2) ----------
const CARDS = TOPICS.flatMap(t => (t.facts || []).map((f, i) => ({id: `${t.id}-${i}`, t: t.id, ...f})));
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
  return `<h1>Olá Thaynar 👋</h1>
  <p class="lede">Your path to working as a dietitian in Australia. Each study area has a short lesson, recall cards and practice questions in the real exam formats. Tap any <abbr class="pt" data-pt="palavra sublinhada">underlined word</abbr> to see it in Portuguese.</p>
  ${days > 0 ? `<div class="alert"><b>${days} days</b> until your target MCQ exam on <b>8 September 2027</b>. DA has not announced its deadlines yet. For the March sitting the DSR assessment was due about 3 months before, so plan to have your application in by <b>early June 2027</b>, with the Cultural Awareness assessment done first. <a href="https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/exam-dates-and-details" target="_blank" rel="noopener">Exam dates ↗</a></div>` : ''}
  <div class="stats">
    <div class="stat"><b>${comf}/19</b><span class="muted small">areas comfortable</span></div>
    <div class="stat"><b>${due.length + fresh.length}</b><span class="muted small">cards to review today</span></div>
    <div class="stat"><b>${att[1] ? Math.round(100 * att[0] / att[1]) + '%' : '–'}</b><span class="muted small">practice accuracy (${att[1]} answered)</span></div>
    <div class="stat"><b>${best != null ? best + '%' : '–'}</b><span class="muted small">best mock exam</span></div>
  </div>
  <div class="row">
    ${next ? `<a class="btn" href="#/topic/${next.id}">Next lesson: ${esc(next.title)}</a>` : ''}
    <a class="btn ghost" href="#/review">Review cards</a><a class="btn ghost" href="#/exam">Mock exam</a><a class="btn ghost" href="#/oral">Oral exam practice</a>
  </div>
  <h2>A good week</h2>
  <p class="muted">15-30 minutes a day: <b>review cards</b> first (spacing beats cramming), then <b>one lesson</b> and its questions. Once a week, a <b>mock exam</b> and one <b>oral role play</b> with a partner reading the client card. Study the areas that are most different from Brazil first (the order below).</p>
  <h2>19 study areas</h2>
  ${['Science and assessment','Clinical nutrition','Life stages','Food and public health','Practice and exams'].map(area => `
    <h3>${area}</h3><div class="grid">${TOPICS.filter(t => t.area === area).map(t => {
      const qs = QUESTIONS.filter(q => q.t === t.id); const done = qs.filter(q => S.qs[q.id]).length;
      return `<a class="card" href="#/topic/${t.id}"><div class="row" style="justify-content:space-between"><span class="tag">Area ${t.id} · priority ${ORDER.indexOf(t.id) + 1}</span><span class="pill ${status(t.id)}">${STATUS_LABEL[status(t.id)]}</span></div>
        <h3>${esc(t.title)}</h3><div class="small muted">${esc(t.focus)}</div>
        <div class="bar" style="margin-top:.6rem" title="${done}/${qs.length} questions tried"><i style="width:${qs.length ? 100 * done / qs.length : 0}%"></i></div></a>`; }).join('')}</div>`).join('')}`;
};

V.topic = id => {
  const t = topic(id); if (!t) return V.home();
  const i = ORDER.indexOf(t.id), prev = topic(ORDER[i - 1]), next = topic(ORDER[i + 1]);
  const maps = BRAZIL_MAP.filter(m => m.topics.includes(t.id));
  const qs = QUESTIONS.filter(q => q.t === t.id);
  setTimeout(() => {
    $('#status').onchange = e => { S.status[t.id] = e.target.value; save(); };
    $('#notes').oninput = e => { S.notes[t.id] = e.target.value; save(); };
    $('#startquiz').onclick = () => {
      const box = $('#quiz'); const list = groupOrder(qs);
      box.innerHTML = list.map((q, k) => qHTML(q, k + 1)).join('') + `<p class="muted small" id="quizsum"></p>`;
      list.forEach(q => { delete q._ord; mountQuestion(box.querySelector(`[data-q="${q.id}"]`), q, {onPick: () => {
        const answered = box.querySelectorAll(".why:not([hidden])").length;
        const correct = [...box.querySelectorAll('.q')].filter(el => el.querySelector('.why:not([hidden])') && !el.querySelector('.opt.wrong')).length;
        $('#quizsum').textContent = `${correct}/${answered} correct so far.` + (answered === list.length && correct / list.length >= .8 ? ' Great: consider marking this area Comfortable.' : '');
      }}); });
      $('#startquiz').remove();
    };
  });
  return `<p class="small"><a href="#/">← All areas</a></p>
  <span class="tag">Area ${t.id} · ${esc(t.area)}</span><h1>${esc(t.title)}</h1>
  <p class="lede">${esc(t.why)}</p>
  <div class="row"><label for="status" class="small muted">My progress</label>
    <select id="status">${Object.entries(STATUS_LABEL).map(([k, v]) => `<option value="${k}" ${status(t.id) === k ? 'selected' : ''}>${v}</option>`).join('')}</select></div>
  ${maps.length || t.au?.length ? `<h2>From Brazil to Australia</h2>${maps.map(m => `<div class="tip"><b>You studied:</b> <span lang="pt-BR" class="nopt">${esc(m.br)}</span><br><b>Same:</b> ${esc(m.same)}<br><b>What changes:</b> ${esc(m.change)}</div>`).join('')}${(t.au || []).map(a => `<div class="tip">${esc(a)}</div>`).join('')}` : ''}
  <h2>Key facts: try to answer before opening</h2>
  <p class="muted small">Saying the answer out loud first is retrieval practice, which builds memory far better than re-reading. These cards also go into your daily review.</p>
  ${(t.facts || []).map(f => `<details class="fact"><summary>${esc(f.q)}</summary><div class="ans">${esc(f.a)} <a class="cite" href="${f.src}" target="_blank" rel="noopener">source ↗</a></div></details>`).join('')}
  <h2>Practice questions (${qs.length})</h2>
  <div id="quiz"><button id="startquiz">Start ${qs.length} questions</button></div>
  <h2>Read and watch</h2>
  <p class="muted small">From your study planner. Start with the first two; use “If needed” to fill gaps.</p>
  <ul class="res-list">${t.resources.map(r => `<li><span class="pill">${esc(r.route)}</span> <a href="${r.url}" target="_blank" rel="noopener">${esc(r.title)}</a> <span class="small muted">· ${esc(r.format)}</span><div class="small muted">${esc(r.focus)}</div></li>`).join('')}
  ${(t.extra || []).map(r => `<li><span class="pill">Official list</span> <a href="${r.url}" target="_blank" rel="noopener">${esc(r.title)}</a><div class="small muted">${esc(r.why)}</div></li>`).join('')}</ul>
  <h2>Self-check</h2><p>${esc(t.selfCheck)}</p>
  <textarea id="notes" aria-label="My answer" placeholder="Write or dictate your answer here. It saves automatically.">${esc(S.notes[t.id] || '')}</textarea>
  <p class="tip small">Stuck or something unclear? Ask Claude (or Nathan) a follow-up question: explaining it in a new way is part of the course.</p>
  <div class="row" style="justify-content:space-between;margin-top:1.5rem">${prev ? `<a href="#/topic/${prev.id}">← ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a href="#/topic/${next.id}">${esc(next.title)} →</a>` : ''}</div>`;
};

V.review = () => {
  const {due, fresh} = dueCards(); const deck = shuffle(due).concat(fresh);
  if (!deck.length) return `<h1>Review</h1><p class="lede">Nothing due. Come back tomorrow, or open a lesson to learn new cards.</p><a class="btn" href="#/practice">Practise questions instead</a>`;
  let k = 0;
  const show = () => {
    const c = deck[k], el = $('#flash');
    if (!c) { el.innerHTML = `<div class="face"><div class="front">Done for now 🎉</div><a class="btn" href="#/">Back home</a></div>`; return; }
    el.innerHTML = `<p class="muted small">${k + 1} / ${deck.length} · ${S.srs[c.id] ? 'review' : 'new'} · ${esc(topic(c.t).title)}</p>
      <div class="face"><div class="front">${esc(c.q)}</div><div class="back" hidden>${esc(c.a)} <a class="cite" href="${c.src}" target="_blank" rel="noopener">source ↗</a></div>
      <div class="row" style="justify-content:center" id="fbtns"><button id="flip">Show answer</button></div></div>`;
    $('#flip').onclick = () => { el.querySelector('.back').hidden = false;
      $('#fbtns').innerHTML = ['Again', 'Hard', 'Good', 'Easy'].map((l, g) => `<button class="${g ? 'ghost' : ''}" data-g="${g}">${l}</button>`).join('');
      $('#fbtns').onclick = e => { const g = e.target.dataset.g; if (g == null) return; rate(c, +g); if (+g === 0) deck.push(c); k++; show(); };
      annotate(el.querySelector('.back')); };
    annotate(el.querySelector('.front'));
  };
  setTimeout(show);
  return `<h1>Daily review</h1><p class="lede">Say the answer out loud, then check. Be honest: “Again” brings it back in 10 minutes, “Easy” pushes it weeks away.</p><div class="flash" id="flash"></div>`;
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
  return `<h1>Practice</h1><p class="lede">Instant feedback after each answer. Mixing topics (interleaving) is harder, and it sticks better.</p>
  <div class="row"><button id="pmix">20 mixed questions</button><button class="ghost" id="pweak" ${weak.length ? '' : 'disabled'}>My mistakes (${weak.length})</button><button class="ghost" id="pcase">All case-based</button><button class="ghost" id="pemq">All extended matching</button></div><div id="pq"></div>`;
};

let examTimer;
V.exam = () => {
  clearInterval(examTimer);
  setTimeout(() => { $('#examgo').onclick = () => startExam(+$('#examn').value); });
  const hist = S.exams.slice(-5).reverse();
  return `<h1>Mock MCQ exam</h1>
  <p class="lede">The real exam is 120 questions in 150 minutes (1¼ minutes each), online. This mock keeps the same pace, mixes all three formats and gives no feedback until you submit.</p>
  <div class="row"><label for="examn">Length</label><select id="examn"><option value="20">20 questions · 25 min</option><option value="60">60 questions · 75 min</option><option value="120" selected>120 questions · 150 min (full)</option></select><button id="examgo">Start exam</button></div>
  <p class="small muted">The bank has ${QUESTIONS.length} questions; a full mock uses 120 of them. The pass mark changes every paper, so aim well above 65%.</p>
  ${hist.length ? `<h2>Recent attempts</h2><table><tr><th>Date</th><th>Score</th><th>Weakest areas</th></tr>${hist.map(e => `<tr><td>${new Date(e.d).toLocaleDateString()}</td><td>${e.score}/${e.n} (${Math.round(100 * e.score / e.n)}%)</td><td>${esc(e.weak.map(id => topic(id).title).join(', '))}</td></tr>`).join('')}</table>` : ''}`;
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
    main.innerHTML = `<h1>Result: ${score}/${list.length} (${Math.round(100 * score / list.length)}%)</h1>
      <table><tr><th>Area</th><th>Score</th><th></th></tr>${rows.map(([t, [r, a]]) => `<tr><td><a href="#/topic/${t}">${esc(topic(t).title)}</a></td><td>${r}/${a}</td><td style="width:40%"><div class="bar"><i style="width:${100 * r / a}%"></i></div></td></tr>`).join('')}</table>
      <h2>Review every question</h2><div id="rev">${list.map((q, i) => qHTML(q, i + 1)).join('')}</div>`;
    list.forEach(q => mountQuestion($(`#rev [data-q="${q.id}"]`), q, {picked: ans[q.id] ?? -1}));
  };
  const show = () => {
    const q = list[k];
    main.innerHTML = `<div class="row" style="justify-content:space-between"><span class="timer" id="clock"></span><span class="muted">${k + 1} / ${list.length} · ${Object.keys(ans).length} answered</span></div>
      <div class="bar"><i style="width:${100 * (k + 1) / list.length}%"></i></div>${qHTML(q, k + 1)}
      <div class="row"><button class="ghost" id="eprev" ${k ? '' : 'disabled'}>← Back</button><button class="ghost" id="eflag">${flags.has(q.id) ? '★ Flagged' : '☆ Flag'}</button><button id="enext">${k < list.length - 1 ? 'Next →' : 'Finish'}</button><button class="ghost" id="esubmit">Submit exam</button></div>
      <p class="small muted">Jump to: ${list.map((x, i) => `<a href="#" data-j="${i}" style="${ans[x.id] != null ? '' : 'font-weight:700'}">${flags.has(x.id) ? '★' : ''}${i + 1}</a>`).join(' ')}</p>`;
    mountQuestion(main.querySelector('.q'), q, {feedback: false, picked: ans[q.id], onPick: i => ans[q.id] = i});
    $('#eprev').onclick = () => { k--; show(); }; $('#enext').onclick = () => k < list.length - 1 ? (k++, show()) : confirmFinish();
    $('#eflag').onclick = () => { flags.has(q.id) ? flags.delete(q.id) : flags.add(q.id); show(); };
    $('#esubmit').onclick = confirmFinish;
    main.querySelectorAll('[data-j]').forEach(a => a.onclick = e => { e.preventDefault(); k = +a.dataset.j; show(); });
    tick();
  };
  const confirmFinish = () => { const left = list.length - Object.keys(ans).length; if (!left || confirm(`${left} unanswered. Submit anyway?`)) finish(); };
  const tick = () => { const ms = end - Date.now(); if (ms <= 0) return finish(); const c = $('#clock'); if (c) c.textContent = `${Math.floor(ms / 60e3)}:${String(Math.floor(ms / 1e3) % 60).padStart(2, '0')}`; };
  examTimer = setInterval(tick, 1000); show(); scrollTo(0, 0);
}

V.oral = id => {
  const sc = ORAL.find(o => o.id === id);
  if (!sc) return `<h1>Oral exam practice</h1>
    <p class="lede">The real oral exam: 120 minutes on Zoom, 30 minutes reading time, then three role plays with different examiners and actors. You must pass <b>all three</b>.</p>
    <table><tr><th>Task</th><th>Time</th><th>What it tests</th></tr>${ORAL_TASKS.map(t => `<tr><td>${esc(t.name)}</td><td>${t.min} min</td><td>${esc(t.tests)}</td></tr>`).join('')}</table>
    <p>Pick a scenario. Ask a partner to open the <b>partner card</b> on their phone and play the client. Record yourself and listen back: you will hear things you did not notice.</p>
    <div class="grid">${ORAL.map(o => `<a class="card" href="#/oral/${o.id}"><span class="tag">${esc(o.setting)}</span><h3>${esc(o.title)}</h3><div class="small muted">${esc(o.tags)}</div></a>`).join('')}</div>
    <p class="small muted">Scenarios here are practice cases written for this course, not official exam cases. Use DA's <a href="https://dietitiansaustralia.org.au/media/1328" target="_blank" rel="noopener">oral checklist ↗</a> as the final word.</p>`;
  setTimeout(() => mountOral(sc));
  return `<p class="small"><a href="#/oral">← Scenarios</a></p><span class="tag">${esc(sc.setting)}</span><h1>${esc(sc.title)}</h1>
    <div class="row"><button class="ghost" id="partner">Show partner card (client and health professional)</button><button class="ghost" id="rec">● Record audio</button><span id="recout"></span></div>
    <div id="partnerbox" class="card nopt" hidden style="margin-top:1rem"></div>
    <div id="stage"></div>`;
};
function mountOral(sc){
  let step = -1, t0, iv;
  const stages = [{name: 'Reading time', min: 30}].concat(ORAL_TASKS);
  $('#partner').onclick = () => { const b = $('#partnerbox'); b.hidden = !b.hidden;
    b.innerHTML = `<h3>Partner card: don't show the candidate</h3>${sc.partner.map((p, i) => `<p><b>Task ${i + 1}:</b> ${esc(p)}</p>`).join('')}`; };
  let rec, chunks = [];
  $('#rec').onclick = async () => {
    if (rec && rec.state === 'recording') { rec.stop(); $('#rec').textContent = '● Record audio'; return; }
    try { const st = await navigator.mediaDevices.getUserMedia({audio: true}); rec = new MediaRecorder(st); chunks = [];
      rec.ondataavailable = e => chunks.push(e.data);
      rec.onstop = () => { st.getTracks().forEach(t => t.stop()); $('#recout').innerHTML = `<audio controls src="${URL.createObjectURL(new Blob(chunks))}"></audio>`; };
      rec.start(); $('#rec').textContent = '■ Stop recording';
    } catch { $('#recout').textContent = 'Microphone not available in this browser.'; }
  };
  const go = s => {
    step = s; clearInterval(iv); const st = stages[s], stage = $('#stage');
    if (!st) { stage.innerHTML = `<h2>Debrief</h2><p>Score each checklist honestly. Anything unticked becomes next week's focus. Repeat this scenario in 2 weeks, then try a new one.</p><a class="btn" href="#/oral">Another scenario</a>`; return; }
    t0 = Date.now();
    stage.innerHTML = `<h2>${esc(st.name)}</h2><div class="timer" id="otime"></div>
      ${s === 0 ? `<div class="case">${esc(sc.brief)}</div><p class="muted">Plan your questions for Task 1 and your key messages for Task 2. You may use resources (food models, labels, the Australian Guide to Healthy Eating).</p>`
        : `<div class="case"><b>Your task:</b> ${esc(sc.tasks[s - 1])}</div><h3>Checklist</h3><div class="check">${st.check.map((c, i) => `<label><input type="checkbox"> ${esc(c)}</label>`).join('')}</div>`}
      <div class="row" style="margin-top:1rem"><button id="onext">${s < stages.length - 1 ? 'Next: ' + esc(stages[s + 1].name) : 'Finish'}</button></div>`;
    $('#onext').onclick = () => go(s + 1);
    const tick = () => { const left = st.min * 60e3 - (Date.now() - t0), el = $('#otime'); if (!el) return clearInterval(iv);
      const a = Math.abs(left); el.textContent = (left < 0 ? '+' : '') + `${Math.floor(a / 60e3)}:${String(Math.floor(a / 1e3) % 60).padStart(2, '0')}`; el.style.color = left < 0 ? 'var(--bad)' : ''; };
    iv = setInterval(tick, 1000); tick(); annotate(stage);
  };
  go(0);
}

V.brazil = () => {
  setTimeout(() => {
    const conv = $('#conv'); const f = () => { const v = parseFloat($('#cv').value), k = CONV[$('#ck').value]; $('#cout').textContent = isNaN(v) ? '' : k.f(v); };
    conv.oninput = f; f();
  });
  return `<h1>Brazil → Australia</h1>
  <p class="lede">Your Brazilian degree already covered the three areas Australia tests: clinical nutrition, public health and food service. The <a href="https://www.gov.br/mec/pt-br/cne/pdf/normas-classificadas-por-assunto/diretrizes-curriculares-cursos-de-graduacao/rces005_01.pdf" target="_blank" rel="noopener">national curriculum rules (Resolução CNE/CES 5/2001)</a> require placements in all three. Most of the work is learning the Australian guidelines, units, laws and ways of working, not re-learning nutrition.</p>
  <h2>Unit converter</h2>
  <div class="card row" id="conv"><input id="cv" type="number" value="126" step="any" aria-label="Value" style="width:8rem"><select id="ck" aria-label="Conversion">${Object.entries(CONV).map(([k, c]) => `<option value="${k}">${esc(c.l)}</option>`).join('')}</select><b id="cout" aria-live="polite"></b></div>
  <h2>False friends (falsos cognatos)</h2>
  <table>${GLOSSARY.filter(g => g[2].startsWith('!')).map(g => `<tr><td><b>${esc(g[0])}</b></td><td lang="pt-BR">${esc(g[1])}</td><td class="small">${esc(g[2].slice(2))}</td></tr>`).join('')}</table>
  <h2>What you studied → what changes</h2>
  <table><tr><th>Brazilian course (disciplina)</th><th>Australian study areas</th><th>Same</th><th>What changes</th></tr>
  ${BRAZIL_MAP.map(m => `<tr><td lang="pt-BR" class="nopt">${esc(m.br)}</td><td>${m.topics.map(t => `<a href="#/topic/${t}">${esc(topic(t).title)}</a>`).join('<br>')}</td><td class="small">${esc(m.same)}</td><td class="small">${esc(m.change)}</td></tr>`).join('')}</table>
  <p class="small muted">Curriculum map based on the Brazilian national guidelines and published curricula from USP and UNIFESP. Individual universities vary.</p>`;
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
  return `<h1>Glossary · Glossário</h1><p class="lede">${GLOSSARY.length} terms in English and Brazilian Portuguese. Search in either language.</p>
  <input id="gq" type="search" placeholder="Search / Buscar…" aria-label="Search glossary" style="width:100%;max-width:420px">
  <table id="gt" class="nopt"><tr><th>English</th><th>Português</th><th>Note</th></tr>${GLOSSARY.map(g => `<tr data-k="${esc((g[0] + ' ' + g[1]).toLowerCase())}"><td><b>${esc(g[0])}</b></td><td lang="pt-BR">${esc(g[1])}</td><td class="small muted">${esc(g[2].replace(/^! /, '⚠ '))}</td></tr>`).join('')}</table>`;
};

// ---------- router ----------
function render(){
  clearInterval(examTimer);
  const [, view = '', arg] = location.hash.split('/');
  const fn = V[view] || V.home;
  const main = $('main'); main.innerHTML = fn(arg); delete main.dataset.seen;
  document.querySelectorAll('nav a.tab').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#/' + view));
  annotate(main); pop.hidden = true;
  if (!location.hash.includes('/exam')) scrollTo(0, 0);
}
addEventListener('hashchange', render);
addEventListener('DOMContentLoaded', () => {
  document.body.append(pop);
  document.body.classList.toggle('pt-show', S.pt === 'show');
  const sel = $('#ptmode'); sel.value = S.pt; sel.onchange = e => setPT(e.target.value);
  render();
});
