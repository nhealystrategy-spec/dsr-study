// DSR Study — single-page app.
// English data: topics-sheet.js, lessons.js, questions.js, glossary.js, oral.js. Portuguese: pt-lessons.js, pt-questions.js, pt-misc.js.
// Course modules: modules/kit.js + modules/m01.js … m19.js (pages, exercises, extra questions).
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const DAY = 864e5;
const EXAM_DATE = new Date('2027-09-08T09:00:00+10:00'); // target MCQ sitting
const TOPICS = SHEET_TOPICS.map(t => ({...t, ...LESSONS[t.id]}));
const topic = id => TOPICS.find(t => t.id == id);
QUESTIONS.forEach((q, i) => { if (!q.id) { q.id = 'q' + i; q.pt = PT_Q[i]; } }); // module questions already carry id + pt

// ---------- storage ----------
const KEY = 'dsr-study-v1';
const S = Object.assign({lang: 'en', notes: {}, srs: {}, qs: {}, exams: [], newToday: {d: '', n: 0}, mod: {}, xp: 0, streak: {d: '', n: 0}, badges: {}, seen: {}, wid: {}, cardsDone: 0},
  JSON.parse(localStorage.getItem(KEY) || '{}'));
if ('pt' in S) { S.lang = S.pt === 'pt' ? 'pt' : 'en'; delete S.pt; } // older versions stored a 5-way language mode
const save = () => localStorage.setItem(KEY, JSON.stringify(S));
function recordAnswer(q, ok){ const r = S.qs[q.id] ||= {r: 0, w: 0}; ok ? r.r++ : r.w++; save(); }

// ---------- language: one language at a time ----------
const isPT = () => S.lang === 'pt';
const tx = a => Array.isArray(a) ? (isPT() && a[1] ? a[1] : a[0]) : (a ?? '');
const md = s => esc(s).replace(/==(.+?)==/g, '<mark>$1</mark>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\{\{(.+?)\|(.+?)\}\}/g, '<abbr class="en" data-en="$2" tabindex="0">$1</abbr>');
const R = a => md(tx(a));                                   // rich text from [en, pt]
const L = (en, pt) => esc(isPT() && pt ? pt : en);          // plain text with optional translation
const Li = L;
const H = (en, pt) => isPT() && pt ? pt : en;               // trusted HTML pair
const T = en => esc(isPT() && PT_UI[en] ? PT_UI[en] : en);  // interface label
const TB = T;
const langToggle = () => `<div class="lang" role="group" aria-label="Language / Idioma"><button data-lang="en" class="${isPT() ? '' : 'on'}" aria-pressed="${!isPT()}">EN</button><button data-lang="pt" class="${isPT() ? 'on' : ''}" aria-pressed="${isPT()}">PT</button></div>`;
function setLang(l){ if (S.lang === l) return; S.lang = l; save(); document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en'; render(); }

Object.assign(PT_UI, {
  'Modules': 'Módulos', 'Back': 'Voltar', 'Next': 'Próximo', 'Close': 'Fechar', 'Module': 'Módulo', 'Page': 'Página', 'of': 'de',
  'Key points': 'Pontos-chave', 'Sources': 'Fontes', 'Quick check': 'Checagem rápida', 'Module quiz': 'Quiz do módulo',
  'Mini review': 'Mini revisão', 'Everything in this module': 'Tudo deste módulo',
  'Read it once, out loud if you can. Print it or come back to it before the exam.': 'Leia uma vez, em voz alta se puder. Imprima ou volte aqui antes da prova.',
  'Questions to revisit': 'Questões para rever', 'No mistakes to revisit. Great work!': 'Nenhum erro para rever. Ótimo trabalho!',
  'Print this summary': 'Imprimir este resumo', 'You said': 'Você respondeu', 'Answer': 'Resposta', 'Test yourself': 'Teste-se', 'Flip the cards': 'Vire os cartões',
  'Say the answer out loud, then flip. These cards come back in your daily review.': 'Diga a resposta em voz alta e depois vire. Estes cartões voltam na sua revisão diária.',
  'All cards done!': 'Todos os cartões feitos!', 'Not yet': 'Ainda não', 'Got it': 'Acertei', 'Module complete!': 'Módulo concluído!',
  'questions right': 'questões certas', 'to': 'para', 'Redo the questions': 'Refazer as questões', 'All modules': 'Todos os módulos',
  'Go deeper': 'Para aprofundar', 'Next module': 'Próximo módulo', 'Finish module': 'Concluir módulo', 'Cards': 'Cartões',
  'Sort it': 'Classifique', 'Put in order': 'Coloque em ordem', 'Work it out': 'Faça a conta', 'Think first': 'Pense primeiro', 'Quick pick': 'Escolha rápida',
  'correct': 'certas', 'Play again': 'Jogar de novo', 'Nice!': 'Boa!', 'It goes in': 'O certo é', 'slips': 'tropeços', 'Perfect order!': 'Ordem perfeita!',
  'Tap the next step': 'Toque no próximo passo', 'Not that one yet. What comes first?': 'Ainda não é esse. O que vem antes?', 'Check': 'Conferir',
  'Correct!': 'Certo!', 'Not quite. Try again.': 'Não exatamente. Tente de novo.', 'day streak': 'dias seguidos', 'days to the exam': 'dias para a prova',
  'Continue where you left off': 'Continue de onde parou', 'Start here': 'Comece aqui', 'Step': 'Passo', 'pages': 'páginas', 'questions': 'questões',
  'cards': 'cartões', 'role plays': 'simulações', 'Your path': 'Seu caminho', 'modules done': 'módulos concluídos', 'Badges': 'Conquistas',
  'Start': 'Começar', 'Continue': 'Continuar', 'Revisit': 'Rever', 'Start again': 'Começar de novo', 'Jump to the mini review': 'Ir para a mini revisão',
  'You will be able to': 'Você vai conseguir', 'In this module': 'Neste módulo', 'Module quiz and mini review': 'Quiz do módulo e mini revisão',
  'Coming soon': 'Em breve', 'Daily review': 'Revisão diária', 'Exam dates ↗': 'Datas das provas ↗',
  'Read aloud': 'Ouvir a página', 'Stop': 'Parar', 'Reading speed': 'Velocidade da leitura',
  'Course complete!': 'Curso completo!', 'Take a full mock exam': 'Faça um simulado completo', 'Then revisit your weakest modules': 'Depois reveja seus módulos mais fracos'
});
const NOTE_LABEL = {exam: ['🎯 Exam tip', '🎯 Dica de prova'], br: ['🇧🇷 → 🇦🇺 Brazil vs Australia', '🇧🇷 → 🇦🇺 Brasil x Austrália'], warn: ['⚠️ Watch out', '⚠️ Atenção'],
  tip: ['💡 Remember', '💡 Lembre-se'], eg: ['🧪 Example', '🧪 Exemplo'], aus: ['🦘 In Australia', '🦘 Na Austrália']};

// ---------- tap-to-translate (English mode: Portuguese for glossary terms; Portuguese mode: the English exam term) ----------
const GL = new Map(GLOSSARY.map(g => [g[0].toLowerCase(), g]));
const GL_RE = new RegExp('(?<![\\w-])(' + GLOSSARY.map(g => g[0]).sort((a, b) => b.length - a.length)
  .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')(?![\\w-])', 'gi');
function annotate(root){ // underline only the first appearance of each term, to keep pages calm
  if (isPT() || !root) return;
  const seen = new Set();
  const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode: n =>
    n.parentElement.closest('a,button,abbr,script,style,textarea,select,input,svg,.nopt,.kicker,h1') || !n.nodeValue.trim() ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT});
  const nodes = []; while (walk.nextNode()) nodes.push(walk.currentNode);
  for (const n of nodes) {
    const txt = n.nodeValue; GL_RE.lastIndex = 0; if (!GL_RE.test(txt)) continue;
    const frag = document.createDocumentFragment(); let last = 0, hit = false;
    for (const m of txt.matchAll(GL_RE)) {
      const g = GL.get(m[0].toLowerCase()); if (!g || seen.has(g[0])) continue;
      seen.add(g[0]); hit = true;
      frag.append(txt.slice(last, m.index));
      const ab = document.createElement('abbr'); ab.className = 'pt'; ab.textContent = m[0]; ab.tabIndex = 0;
      ab.dataset.pt = g[1]; if (g[2]) ab.dataset.note = g[2];
      frag.append(ab); last = m.index + m[0].length;
    }
    if (hit) { frag.append(txt.slice(last)); n.replaceWith(frag); }
  }
}
const pop = document.createElement('div'); pop.id = 'ptpop'; pop.setAttribute('role', 'tooltip'); pop.hidden = true;
document.addEventListener('click', e => {
  const lb = e.target.closest('[data-lang]'); if (lb) { setLang(lb.dataset.lang); return; }
  const ab = e.target.closest('abbr.pt, abbr.en');
  if (!ab) { pop.hidden = true; return; }
  pop.innerHTML = ab.classList.contains('pt')
    ? `<b>${esc(ab.textContent)}</b> → <span lang="pt-BR">${esc(ab.dataset.pt)}</span>${ab.dataset.note ? `<div class="small">${esc(ab.dataset.note.replace(/^! /, '⚠ '))}</div>` : ''}`
    : `<span class="small">Em inglês / in English:</span> <b lang="en">${esc(ab.dataset.en)}</b>`;
  const r = ab.getBoundingClientRect(); pop.hidden = false;
  pop.style.left = Math.max(8, Math.min(innerWidth - pop.offsetWidth - 8, r.left + scrollX)) + 'px';
  pop.style.top = (r.bottom + scrollY + 6) + 'px';
});

// ---------- points, streaks, badges, confetti ----------
const LEVELS = [[0, 'Curious cook', 'Cozinheira curiosa'], [150, 'Food explorer', 'Exploradora de alimentos'], [400, 'Serve-size spotter', 'Detetive de porções'],
  [800, 'Label reader', 'Leitora de rótulos'], [1300, 'Nutrient navigator', 'Navegadora de nutrientes'], [2000, 'Clinic ready', 'Pronta para o consultório'],
  [3000, 'Case cracker', 'Desvendadora de casos'], [4200, 'Exam ace', 'Craque da prova'], [5500, 'APD in the making', 'APD em construção']];
const lvl = xp => LEVELS.reduce((a, l, i) => xp >= l[0] ? i : a, 0);
const lvlName = i => LEVELS[i][isPT() ? 2 : 1];
const ymd = (t = Date.now()) => { const d = new Date(t); return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; };
const streakNow = () => [ymd(), ymd(Date.now() - DAY)].includes(S.streak.d) ? S.streak.n : 0;
function touchStreak(){
  const d = ymd(); if (S.streak.d === d) return;
  S.streak = {d, n: S.streak.d === ymd(Date.now() - DAY) ? S.streak.n + 1 : 1};
  for (const n of [3, 7, 30]) if (S.streak.n >= n) badge('streak' + n);
}
function award(n){
  const before = lvl(S.xp); S.xp += n; touchStreak(); save(); toast(`+${n} XP`, 'xp');
  const after = lvl(S.xp); if (after > before) { toast(`${isPT() ? 'Subiu de nível' : 'Level up'}: ${lvlName(after)} 🎉`, 'big'); confetti(); }
}
const BADGES = {
  first: ['👣', 'First steps', 'Primeiros passos', 'Finished your first page', 'Terminou a primeira página'],
  mod1: ['🌱', 'Module complete', 'Módulo concluído', 'Finished a whole module', 'Terminou um módulo inteiro'],
  perfect: ['💯', 'Perfect quiz', 'Quiz perfeito', 'Every question right in a module', 'Acertou todas as questões de um módulo'],
  combo5: ['🔥', 'On fire', 'Pegando fogo', '5 right answers in a row', '5 acertos seguidos'],
  streak3: ['📅', '3-day streak', '3 dias seguidos', 'Studied 3 days in a row', 'Estudou 3 dias seguidos'],
  streak7: ['🏅', '7-day streak', '7 dias seguidos', 'Studied 7 days in a row', 'Estudou 7 dias seguidos'],
  streak30: ['🏆', '30-day streak', '30 dias seguidos', 'Studied 30 days in a row', 'Estudou 30 dias seguidos'],
  half: ['🧭', 'Halfway', 'Metade do caminho', 'Finished 10 modules', 'Terminou 10 módulos'],
  all: ['🎓', 'Course complete', 'Curso completo', 'Finished all 19 modules', 'Terminou os 19 módulos'],
  cards50: ['🃏', 'Card shark', 'Fera dos cartões', 'Reviewed 50 cards', 'Revisou 50 cartões'],
  mock: ['📝', 'Mock exam done', 'Simulado feito', 'Finished a mock exam', 'Terminou um simulado'],
  mock70: ['🎯', '70% club', 'Clube dos 70%', '70% or more on a mock exam', '70% ou mais num simulado'],
  oral: ['🎙️', 'Oral rehearsal', 'Ensaio oral', 'Finished an oral exam practice', 'Terminou uma prática oral']
};
function badge(id){
  if (S.badges[id]) return; S.badges[id] = Date.now(); save();
  const b = BADGES[id]; setTimeout(() => toast(`${b[0]} ${isPT() ? 'Conquista' : 'Badge'}: ${isPT() ? b[2] : b[1]}`, 'big'), 500);
}
let combo = 0;
function comboHit(ok){
  combo = ok ? combo + 1 : 0;
  if (combo >= 3) toast(`🔥 ${combo} ${isPT() ? 'seguidas!' : 'in a row!'}`, 'combo');
  if (combo >= 5) badge('combo5');
}
let toastBox;
function toast(msg, kind = ''){
  toastBox ||= document.body.appendChild(Object.assign(document.createElement('div'), {id: 'toasts'}));
  const t = document.createElement('div'); t.className = 'toast ' + kind; t.textContent = msg; t.setAttribute('role', 'status');
  toastBox.append(t); setTimeout(() => t.classList.add('out'), 1700); setTimeout(() => t.remove(), 2200);
}
function confetti(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = document.createElement('canvas'); c.id = 'confetti'; document.body.append(c);
  const x = c.getContext('2d'), W = c.width = innerWidth, Hh = c.height = innerHeight;
  const cols = ['#0f6e5c', '#f2b84b', '#e76f51', '#2a9d8f', '#8ab17d', '#e9c46a', '#6b46c1'];
  const ps = Array.from({length: 150}, () => ({x: W / 2 + (Math.random() - .5) * 220, y: Hh * .4, vx: (Math.random() - .5) * 13, vy: -Math.random() * 13 - 4,
    r: Math.random() * 7 + 4, c: cols[Math.random() * cols.length | 0], a: Math.random() * 6}));
  let f = 0;
  (function tick(){
    x.clearRect(0, 0, W, Hh);
    for (const p of ps) { p.vy += .32; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += .18;
      x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); x.restore(); }
    if (++f < 160) requestAnimationFrame(tick); else c.remove();
  })();
}

// ---------- question rendering ----------
const src = url => `<a class="cite" href="${url}" target="_blank" rel="noopener">${T('source ↗')}</a>`;
function qHTML(q, n){
  const c = q.type === 'c' ? CASES[q.case] : null, e = q.type === 'e' ? EMQS[q.emq] : null;
  const kind = {s: 'Stand-alone', c: 'Case-based', e: 'Extended matching'}[q.type];
  return `<div class="q" data-q="${q.id}">
    <div class="tag">${n ? `${T('Question')} ${n} · ` : ''}${T(kind)} · ${L(topic(q.t).title, PT_TOPICS[q.t].title)}</div>
    ${c ? `<div class="case">${L(c.text, PT_CASES[q.case])}</div>` : ''}
    ${e ? `<div class="case">${L(e.lead, PT_EMQS[q.emq].lead)}</div>` : ''}
    <div class="stem">${L(q.stem, q.pt?.[0])}</div><div class="opts"></div><div class="why" hidden></div></div>`;
}
const qOpts = q => q.type === 'e' ? [EMQS[q.emq].opts, PT_EMQS[q.emq].opts] : [q.opts, q.pt?.[1] || []];
// shuffled option order for stand-alone and case questions; extended matching keeps its shared list order
function optionOrder(q){ const [o] = qOpts(q), idx = o.map((_, i) => i); return {o, idx: q.type === 'e' ? idx : shuffle(idx)}; }
function mountQuestion(el, q, {feedback = true, picked = null, onPick} = {}){
  const {o, idx} = q._ord ||= optionOrder(q), po = qOpts(q)[1];
  const box = el.querySelector('.opts');
  box.innerHTML = idx.map((i, k) => `<button class="opt" data-i="${i}"><span class="ol">${String.fromCharCode(65 + k)}</span><span>${L(o[i], po[i])}</span></button>`).join('');
  const show = i => {
    box.querySelectorAll('.opt').forEach(b => { b.disabled = true; const bi = +b.dataset.i; if (bi === q.ans) b.classList.add('right'); else if (bi === i) b.classList.add('wrong'); });
    const w = el.querySelector('.why'); w.hidden = false;
    w.innerHTML = `<b>${T(i === q.ans ? '✓ Correct.' : '✗ Not quite.')}</b> ${L(q.why, q.pt?.[2])} ${src(q.src)}`;
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

// ---------- spaced repetition cards (simplified SM-2) ----------
const CARDS = TOPICS.flatMap(t => (t.facts || []).map((f, i) => ({id: `${t.id}-${i}`, t: t.id, ...f, pq: PT_LESSONS[t.id].facts[i][0], pa: PT_LESSONS[t.id].facts[i][1]})));
function dueCards(){
  const now = Date.now(), today = new Date().toDateString();
  if (S.newToday.d !== today) S.newToday = {d: today, n: 0};
  const due = CARDS.filter(c => S.srs[c.id] && S.srs[c.id].due <= now);
  const order = MODS().map(m => m.id), started = id => S.mod[id];
  const fresh = order.flatMap(t => CARDS.filter(c => c.t === t && !S.srs[c.id]))
    .sort((a, b) => !!started(b.t) - !!started(a.t)).slice(0, Math.max(0, 15 - S.newToday.n));
  return {due, fresh};
}
function rate(card, grade){ // 0 again, 1 hard, 2 good, 3 easy
  const isNew = !S.srs[card.id]; const s = S.srs[card.id] ||= {iv: 0, ef: 2.5};
  if (isNew) S.newToday.n++;
  if (grade === 0) { s.iv = 0; s.ef = Math.max(1.3, s.ef - 0.2); s.due = Date.now() + 10 * 60e3; }
  else { s.iv = s.iv ? s.iv * (grade === 1 ? 1.2 : grade === 2 ? s.ef : s.ef * 1.3) : [0, 1, 1, 3][grade];
    s.ef = Math.max(1.3, s.ef + [0, -0.15, 0, 0.15][grade]); s.due = Date.now() + s.iv * DAY; }
  S.cardsDone++; if (S.cardsDone >= 50) badge('cards50');
  save();
}

// ---------- modules ----------
const MODS = () => MODULES.filter(Boolean);
const mod = id => MODULES[id - 1];
const mTitle = id => L(topic(id).title, PT_TOPICS[id].title);
const AREAS = ['Science and assessment', 'Clinical nutrition', 'Life stages', 'Food and public health', 'Practice and exams'];
const AREA_KEY = {'Science and assessment': 'sci', 'Clinical nutrition': 'cli', 'Life stages': 'life', 'Food and public health': 'food', 'Practice and exams': 'prac'};
const areaOf = id => AREA_KEY[topic(id).area];
const mState = id => S.mod[id] ||= {at: 0, max: -1, ans: {}};
const resolveQ = (m, r) => typeof r === 'number' ? QUESTIONS[r] : QBYID[`m${m.id}-${r.slice(1)}`];
function steps(m){
  if (m._steps) return m._steps;
  const s = [], used = new Set();
  m.pages.forEach((pg, i) => {
    s.push({k: 'page', i});
    (m.checks?.[i + 1] || []).forEach(r => { const q = resolveQ(m, r); if (q) { used.add(q.id); s.push({k: 'q', q, kind: 'check'}); } });
  });
  const rest = groupOrder(QUESTIONS.filter(q => q.t === m.id && !used.has(q.id)));
  rest.forEach((q, i) => s.push({k: 'q', q, kind: 'quiz', n: i + 1, of: rest.length}));
  s.push({k: 'summary'}, {k: 'cards'}, {k: 'done'});
  return m._steps = s;
}
const mQs = m => steps(m).filter(s => s.k === 'q').map(s => s.q);
function mScore(m){
  const a = mState(m.id).ans, qs = mQs(m);
  return {right: qs.filter(q => a[q.id] === q.ans).length, answered: qs.filter(q => a[q.id] != null).length, total: qs.length};
}
const mProgress = m => { const st = S.mod[m.id]; return !st ? 0 : st.done ? 1 : Math.max(0, (st.max + 1) / steps(m).length); };

let WREG = {};
function block(b, id){
  switch (b.k) {
    case 'p': return `<p>${R(b.t)}</p>`;
    case 'ul': return `<ul class="blist">${b.items.map(x => `<li>${R(x)}</li>`).join('')}</ul>`;
    case 'ol': return `<ol class="blist">${b.items.map(x => `<li>${R(x)}</li>`).join('')}</ol>`;
    case 'note': return `<aside class="note ${b.kind}"><div class="nlabel">${esc(tx(NOTE_LABEL[b.kind]))}</div>${R(b.t)}</aside>`;
    case 'table': return `<div class="tablewrap"><table class="btable"><thead><tr>${b.head.map(h => `<th>${R(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${R(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    case 'flow': return `<ol class="flow">${b.steps.map(s => `<li><b>${R(s[0])}</b>${s[1] ? `<span>${R(s[1])}</span>` : ''}</li>`).join('')}</ol>`;
    case 'fig': return `<figure class="fig">${b.svg}${b.cap ? `<figcaption>${R(b.cap)}</figcaption>` : ''}</figure>`;
    default: WREG[id] = b; return `<div class="widget w-${b.k}" data-w="${id}"></div>`;
  }
}
function stepLabel(m, st){
  if (st.k === 'page') return `${T('Page')} ${st.i + 1}/${m.pages.length}`;
  if (st.k === 'q') return st.kind === 'check' ? `⚡ ${T('Quick check')}` : `📝 ${st.n}/${st.of}`;
  return {summary: '🧠 ' + T('Mini review'), cards: '🃏 ' + T('Cards'), done: '🎉'}[st.k];
}
function stepHTML(m, st){
  if (st.k === 'page') {
    const pg = m.pages[st.i];
    return `<div class="kicker">${T('Page')} ${st.i + 1} ${T('of')} ${m.pages.length}</div><h1>${R(pg.t)}</h1>
      ${pg.b.map((b, bi) => block(b, `${m.id}.${st.i}.${bi}`)).join('')}
      ${pg.key ? `<section class="keybox"><h2>${T('Key points')}</h2><ul>${pg.key.map(k => `<li>${R(k)}</li>`).join('')}</ul></section>` : ''}
      ${pg.src ? `<p class="srcline">${T('Sources')}: ${pg.src.map(u => `<a href="${u}" target="_blank" rel="noopener">${esc(new URL(u).hostname.replace(/^www\d?\./, ''))} ↗</a>`).join(' · ')}</p>` : ''}`;
  }
  if (st.k === 'q') return `<div class="kicker ${st.kind}">${st.kind === 'check' ? '⚡ ' + T('Quick check') : `📝 ${T('Module quiz')} · ${st.n} ${T('of')} ${st.of}`}</div>${qHTML(st.q)}`;
  if (st.k === 'summary') return summaryHTML(m);
  if (st.k === 'cards') return `<div class="kicker">🃏 ${T('Test yourself')}</div><h1>${T('Flip the cards')}</h1><p class="lede">${T('Say the answer out loud, then flip. These cards come back in your daily review.')}</p><div id="mflash" class="flash"></div>`;
  return doneHTML(m);
}
function summaryHTML(m){
  const a = mState(m.id).ans, wrong = mQs(m).filter(q => a[q.id] != null && a[q.id] !== q.ans);
  const rev = q => { const [o, po] = qOpts(q), x = a[q.id];
    return `<div class="revisit"><div class="stem">${L(q.stem, q.pt?.[0])}</div><div class="small bad">✗ ${T('You said')}: ${L(o[x], po[x])}</div><div class="small good">✓ ${T('Answer')}: ${L(o[q.ans], po[q.ans])}</div><div class="small">${L(q.why, q.pt?.[2])}</div></div>`; };
  return `<div class="kicker">🧠 ${T('Mini review')}</div><h1>${T('Everything in this module')}</h1>
    <p class="lede">${T('Read it once, out loud if you can. Print it or come back to it before the exam.')}</p>
    ${m.pages.map((pg, i) => `<section class="sumsec"><h2><span class="snum">${i + 1}</span>${R(pg.t)}</h2><ul>${(pg.key || []).map(k => `<li>${R(k)}</li>`).join('')}</ul></section>`).join('')}
    ${wrong.length ? `<h2>${T('Questions to revisit')}</h2>${wrong.map(rev).join('')}` : `<p class="goodmsg">🌟 ${T('No mistakes to revisit. Great work!')}</p>`}
    <p><button class="ghost" id="printsum">🖨️ ${T('Print this summary')}</button></p>`;
}
function doneHTML(m){
  const sc = mScore(m), pct = sc.total ? Math.round(100 * sc.right / sc.total) : 0, t = topic(m.id), i = lvl(S.xp), nx = LEVELS[i + 1];
  return `<div class="done"><div class="bigemoji">${pct >= 80 ? '🏆' : pct >= 50 ? '🎉' : '💪'}</div><h1>${T('Module complete!')}</h1><p class="lede">${mTitle(m.id)}</p>
    <div class="ring" style="--p:${pct}"><span>${pct}%</span></div><p>${sc.right}/${sc.total} ${T('questions right')}</p>
    <div class="lvl"><b>⭐ ${S.xp} XP</b> · ${esc(lvlName(i))}${nx ? `<div class="bar"><i style="width:${100 * (S.xp - LEVELS[i][0]) / (nx[0] - LEVELS[i][0])}%"></i></div><span class="small muted">${nx[0] - S.xp} XP ${T('to')} ${esc(lvlName(i + 1))}</span>` : ''}</div>
    <div class="row center"><button class="ghost" id="redo">↺ ${T('Redo the questions')}</button><a class="btn ghost" href="#/">${T('All modules')}</a></div></div>
    <section class="deeper"><h2>${T('Self-check')}</h2><p>${L(t.selfCheck, PT_TOPICS[m.id].selfCheck)}</p>
    <textarea id="notes" aria-label="${T('Self-check')}" placeholder="${isPT() ? 'Escreva ou dite sua resposta aqui. Salva automaticamente.' : 'Write or dictate your answer here. It saves automatically.'}">${esc(S.notes[m.id] || '')}</textarea>
    <h2>${T('Go deeper')}</h2><ul class="res-list">${t.resources.map((r, k) => `<li><span class="pill">${T(r.route)}</span> <a href="${r.url}" target="_blank" rel="noopener">${esc(r.title)}</a><div class="small muted">${L(r.focus, PT_TOPICS[m.id].res[k])}</div></li>`).join('')}
    ${(t.extra || []).map((r, k) => `<li><span class="pill">${T('Official list')}</span> <a href="${r.url}" target="_blank" rel="noopener">${esc(r.title)}</a><div class="small muted">${L(r.why, PT_LESSONS[m.id].extra[k])}</div></li>`).join('')}</ul>
    <p class="tip small">${T('Stuck or something unclear? Ask Claude (or Nathan) a follow-up question: explaining it in a new way is part of the course.')}</p></section>`;
}
function player(m, i){
  const ss = steps(m), st = ss[i];
  if (!st) return modIntro(m);
  const ms = mState(m.id); ms.at = i; ms.max = Math.max(ms.max, i); save();
  if (st.k === 'done' && !ms.done) completeModule(m);
  WREG = {};
  const html = `<div class="player area-${areaOf(m.id)}">
    <header class="ptop"><a class="px" href="#/m/${m.id}" aria-label="${T('Close')}">✕</a>
      <div class="ptitle"><span class="pmod">${T('Module')} ${m.id}</span><span class="pname">${mTitle(m.id)}</span></div>
      <span class="pxp" title="XP">⭐ ${S.xp}</span>${canSpeak ? `<button class="speak" id="speak" aria-label="${T('Read aloud')}" title="${T('Read aloud')}">🔊</button><button class="rate" id="rate" title="${T('Reading speed')}">${S.rate || 1}×</button>` : ''}${langToggle()}</header>
    <div class="pbar" aria-hidden="true">${ss.map((x, k) => `<i class="${k < i ? 'done' : k === i ? 'on' : ''}${x.k === 'q' ? ' qs' : ''}"></i>`).join('')}</div>
    <article class="pcard" id="pcard">${stepHTML(m, st)}</article>
    <nav class="pnav" aria-label="Lesson"><button class="ghost" id="pback" ${i ? '' : 'disabled'}>← ${T('Back')}</button><span class="plabel">${stepLabel(m, st)}</span>
      <button id="pnext">${T(st.k === 'done' ? (mod(m.id + 1) ? 'Next module' : 'All modules') : st.k === 'cards' ? 'Finish module' : 'Next')} →</button></nav></div>`;
  return {html, mount: () => mountStep(m, st, i)};
}
function mountStep(m, st, i){
  const ms = mState(m.id), card = $('#pcard'), next = $('#pnext'), go = k => { location.hash = `#/m/${m.id}/${k}`; };
  $('#pback').onclick = () => i > 0 && go(i - 1);
  if (canSpeak) {
    $('#speak').onclick = speakPage;
    $('#rate').onclick = e => { S.rate = RATES[(RATES.indexOf(S.rate || 1) + 1) % RATES.length]; save(); e.target.textContent = S.rate + '×'; };
  }
  next.onclick = () => {
    if (next.disabled) return;
    if (st.k === 'page' && !S.seen[`${m.id}.${st.i}`]) { S.seen[`${m.id}.${st.i}`] = 1; award(10); badge('first'); }
    if (st.k === 'done') { location.hash = mod(m.id + 1) ? `#/m/${m.id + 1}` : '#/'; return; }
    go(i + 1);
  };
  $$('.widget', card).forEach(el => mountWidget(el, WREG[el.dataset.w], el.dataset.w));
  if (st.k === 'q') {
    const q = st.q, answered = ms.ans[q.id] != null; next.disabled = !answered;
    mountQuestion(card.querySelector('.q'), q, {picked: answered ? ms.ans[q.id] : null, onPick: a => {
      ms.ans[q.id] = a; save(); const ok = a === q.ans; award(ok ? 20 : 5); comboHit(ok); next.disabled = false; }});
  }
  if (st.k === 'summary') $('#printsum').onclick = () => print();
  if (st.k === 'cards') mountCards(m);
  if (st.k === 'done') {
    $('#notes').oninput = e => { S.notes[m.id] = e.target.value; save(); };
    $('#redo').onclick = () => { ms.ans = {}; save(); go(steps(m).findIndex(s => s.k === 'q')); };
  }
  annotate(card);
}
function completeModule(m){
  const ms = mState(m.id); ms.done = Date.now(); save(); award(50); badge('mod1');
  const sc = mScore(m); if (sc.total && sc.right === sc.total) badge('perfect');
  const n = MODS().filter(x => S.mod[x.id]?.done).length; if (n >= 10) badge('half'); if (n >= 19) badge('all');
  setTimeout(confetti, 250);
}
function mountCards(m){
  const deck = CARDS.filter(c => c.t === m.id), el = $('#mflash'); let k = 0;
  const show = () => {
    const c = deck[k];
    if (!c) { el.innerHTML = `<div class="face"><div class="front">🎉 ${T('All cards done!')}</div></div>`; return; }
    el.innerHTML = `<p class="muted small">${k + 1} / ${deck.length}</p><div class="face"><div class="front">${L(c.q, c.pq)}</div><div class="back" hidden>${L(c.a, c.pa)}</div>
      <div class="row center" id="fb"><button id="flip">${T('Show answer')}</button></div></div>`;
    $('#flip').onclick = () => {
      el.querySelector('.back').hidden = false;
      $('#fb').innerHTML = `<button class="ghost" data-g="0">😅 ${T('Not yet')}</button><button data-g="2">😎 ${T('Got it')}</button>`;
      $('#fb').onclick = e => { const g = e.target.closest('[data-g]')?.dataset.g; if (g == null) return; rate(c, +g); award(5); k++; show(); };
      annotate(el.querySelector('.back'));
    };
    annotate(el.querySelector('.front'));
  };
  show();
}
// keyboard arrows and swipes move through a module
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') pop.hidden = true;
  if (e.key === 'Enter' && e.target.matches('abbr')) e.target.click();
  if (!document.body.classList.contains('focus') || e.target.closest('input,textarea,select')) return;
  if (e.key === 'ArrowRight') $('#pnext')?.click();
  if (e.key === 'ArrowLeft') $('#pback')?.click();
});
let touch0 = null;
document.addEventListener('touchstart', e => { touch0 = [e.touches[0].clientX, e.touches[0].clientY]; }, {passive: true});
document.addEventListener('touchend', e => {
  if (!touch0 || !document.body.classList.contains('focus')) return;
  const dx = e.changedTouches[0].clientX - touch0[0], dy = e.changedTouches[0].clientY - touch0[1]; touch0 = null;
  if (Math.abs(dx) > 80 && Math.abs(dy) < 50 && !e.target.closest('.widget,.tablewrap,input,textarea,.q')) (dx < 0 ? $('#pnext') : $('#pback'))?.click();
});

// ---------- interactive exercises ----------
function mountWidget(el, b, id){
  if (!b) return;
  const head = (icon, label) => `<div class="wtag">${icon} ${T(label)}</div><div class="wq">${R(b.q)}</div>`;
  const win = () => { if (!S.wid[id]) { S.wid[id] = 1; award(5); } };
  ({sort: wSort, order: wOrder, num: wNum, reveal: wReveal, pick: wPick})[b.k](el, b, head, win);
}
function wSort(el, b, head, win){
  let items, k, score;
  const reset = () => { items = shuffle(b.items); k = 0; score = 0; draw(); };
  const draw = () => {
    if (k >= items.length) {
      el.innerHTML = head('🎮', 'Sort it') + `<div class="wdone">${score === items.length ? '🌟' : '👍'} ${score}/${items.length} ${T('correct')}</div><button class="ghost sm" data-again>↺ ${T('Play again')}</button>`;
      el.querySelector('[data-again]').onclick = reset; if (score === items.length) win(); return;
    }
    const it = items[k];
    el.innerHTML = head('🎮', 'Sort it') + `<div class="wprog"><span>${k + 1}/${items.length}</span><span>✓ ${score}</span></div><div class="witem">${R(it)}</div>
      <div class="wbuckets">${b.buckets.map((bk, bi) => `<button class="bucket" data-b="${bi}">${R(bk)}</button>`).join('')}</div><div class="wfb" aria-live="polite"></div>`;
    el.querySelector('.wbuckets').onclick = e => {
      const btn = e.target.closest('.bucket'); if (!btn || btn.disabled) return;
      const ok = +btn.dataset.b === it[2]; if (ok) score++;
      el.querySelectorAll('.bucket').forEach(x => { x.disabled = true; if (+x.dataset.b === it[2]) x.classList.add('right'); else if (x === btn) x.classList.add('wrong'); });
      const fb = el.querySelector('.wfb');
      if (ok) { fb.innerHTML = `<span class="goodtxt">✓ ${T('Nice!')}</span>`; setTimeout(() => { k++; draw(); }, 650); }
      else { fb.innerHTML = `<span class="badtxt">✗ ${T('It goes in')}: <b>${R(b.buckets[it[2]])}</b></span> <button class="ghost sm" data-next>${T('Next')} →</button>`; fb.querySelector('[data-next]').onclick = () => { k++; draw(); }; }
    };
  };
  reset();
}
function wOrder(el, b, head, win){
  let pool, placed, slips;
  const reset = () => { pool = shuffle(b.items.map((x, i) => ({x, i}))); placed = []; slips = 0; draw(); };
  const draw = () => {
    const done = placed.length === b.items.length;
    el.innerHTML = head('🧩', 'Put in order') + `<ol class="wseq">${placed.map(p => `<li>${R(p.x)}</li>`).join('')}${done ? '' : '<li class="slot">?</li>'}</ol>` + (done
      ? `<div class="wdone">${slips ? '👍' : '🌟'} ${slips ? `${slips} ${T('slips')}` : T('Perfect order!')}</div><button class="ghost sm" data-again>↺ ${T('Play again')}</button>`
      : `<div class="wpool">${pool.map(p => `<button class="chip" data-i="${p.i}">${R(p.x)}</button>`).join('')}</div><div class="wfb" aria-live="polite">${T('Tap the next step')}</div>`);
    if (done) { el.querySelector('[data-again]').onclick = reset; win(); return; }
    el.querySelector('.wpool').onclick = e => {
      const c = e.target.closest('.chip'); if (!c) return; const i = +c.dataset.i;
      if (i === placed.length) { placed.push(pool.find(p => p.i === i)); pool = pool.filter(p => p.i !== i); draw(); }
      else { slips++; c.classList.add('shake'); setTimeout(() => c.classList.remove('shake'), 400); el.querySelector('.wfb').innerHTML = `<span class="badtxt">${T('Not that one yet. What comes first?')}</span>`; }
    };
  };
  reset();
}
function wNum(el, b, head, win){
  let tries = 0;
  el.innerHTML = head('🔢', 'Work it out') + `<div class="row"><input type="text" inputmode="decimal" class="numin" aria-label="${T('Answer')}"><span>${esc(tx(b.unit))}</span><button class="sm" data-check>${T('Check')}</button></div><div class="wfb" aria-live="polite"></div>`;
  const inp = el.querySelector('input'), fb = el.querySelector('.wfb');
  const check = () => {
    const v = parseFloat(inp.value.replace(',', '.')); if (isNaN(v)) return; tries++;
    if (Math.abs(v - b.ans) <= b.tol) { fb.innerHTML = `<span class="goodtxt">✓ ${T('Correct!')}</span> ${R(b.why)}`; win(); }
    else if (tries < 2) fb.innerHTML = `<span class="badtxt">✗ ${T('Not quite. Try again.')}</span>`;
    else fb.innerHTML = `${T('Answer')}: <b>${b.ans.toLocaleString(isPT() ? 'pt-BR' : 'en-AU')} ${esc(tx(b.unit))}</b>. ${R(b.why)}`;
  };
  el.querySelector('[data-check]').onclick = check; inp.onkeydown = e => { if (e.key === 'Enter') check(); };
}
function wReveal(el, b, head, win){
  el.innerHTML = head('🤔', 'Think first') + `<button class="ghost sm" data-show>${T('Show answer')}</button><div class="wans" hidden>${R(b.a)}</div>`;
  el.querySelector('[data-show]').onclick = e => { e.target.remove(); el.querySelector('.wans').hidden = false; win(); };
}
function wPick(el, b, head, win){
  const idx = shuffle(b.opts.map((_, i) => i));
  el.innerHTML = head('✅', 'Quick pick') + `<div class="opts">${idx.map((i, k) => `<button class="opt" data-i="${i}"><span class="ol">${String.fromCharCode(65 + k)}</span><span>${R(b.opts[i])}</span></button>`).join('')}</div><div class="wfb" aria-live="polite"></div>`;
  el.querySelector('.opts').onclick = e => {
    const btn = e.target.closest('.opt'); if (!btn || btn.disabled) return; const i = +btn.dataset.i, ok = i === b.ans;
    el.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (+x.dataset.i === b.ans) x.classList.add('right'); else if (x === btn) x.classList.add('wrong'); });
    el.querySelector('.wfb').innerHTML = `<b>${T(ok ? '✓ Correct.' : '✗ Not quite.')}</b> ${R(b.why)}`; if (ok) win();
  };
}

// ---------- views ----------
const V = {};
function modRow(m){
  const st = S.mod[m.id], pr = mProgress(m), done = st?.done, sc = done ? mScore(m) : null;
  return `<a class="mrow area-${areaOf(m.id)}${done ? ' done' : ''}" href="#/m/${m.id}"><span class="mnum">${done ? '✓' : m.id}</span>
    <span class="mbody"><span class="mtitle">${mTitle(m.id)}</span><span class="small muted">${m.pages.length} ${T('pages')} · ~${m.mins} min${done ? ` · ${sc.right}/${sc.total} ✓` : ''}</span>
    <span class="bar thin"><i style="width:${100 * pr}%"></i></span></span><span class="mgo">${T(done ? 'Revisit' : pr > 0 ? 'Continue' : 'Start')}</span></a>`;
}
V.home = () => {
  const mods = MODS(), doneN = mods.filter(m => S.mod[m.id]?.done).length;
  const cur = mods.find(m => !S.mod[m.id]?.done) || mods[mods.length - 1];
  const cs = S.mod[cur.id], started = cs && cs.max >= 0 && !cs.done, ss = steps(cur);
  const {due, fresh} = dueCards(), days = Math.ceil((EXAM_DATE - Date.now()) / DAY), li = lvl(S.xp);
  return `<section class="hero"><div><h1>Olá Thaynar 👋</h1>
    <p class="lede">${H('One module at a time: read a page, tap <b>Next</b>, answer the quick checks, then do the mini review. A little every day beats a lot once a week.',
      'Um módulo de cada vez: leia uma página, toque em <b>Próximo</b>, responda as checagens rápidas e depois faça a mini revisão. Um pouco todo dia vale mais que muito uma vez por semana.')}</p></div>
    <div class="stats3"><div class="chip3">🔥 <b>${streakNow()}</b><span>${T('day streak')}</span></div><div class="chip3">⭐ <b>${S.xp}</b><span>${esc(lvlName(li))}</span></div><div class="chip3">📅 <b>${days}</b><span>${T('days to the exam')}</span></div></div></section>
  ${doneN === mods.length ? `<a class="contcard area-prac" href="#/exam"><span class="cnum">🎓</span><span class="cbody"><span class="kicker">${T('Course complete!')}</span>
    <span class="ctitle">${T('Take a full mock exam')}</span><span class="small">${T('Then revisit your weakest modules')}</span></span><span class="cgo" aria-hidden="true">▶</span></a>`
  : `<a class="contcard area-${areaOf(cur.id)}" href="#/m/${cur.id}${started ? '/' + cs.at : ''}">
    <span class="cnum">${cur.id}</span><span class="cbody"><span class="kicker">${T(started ? 'Continue where you left off' : 'Start here')}</span><span class="ctitle">${mTitle(cur.id)}</span>
    <span class="small">${started ? `${T('Step')} ${cs.at + 1} ${T('of')} ${ss.length}` : `${cur.pages.length} ${T('pages')} · ${mQs(cur).length} ${T('questions')} · ~${cur.mins} min`}</span>
    <span class="bar"><i style="width:${100 * mProgress(cur)}%"></i></span></span><span class="cgo" aria-hidden="true">▶</span></a>`}
  <div class="quick"><a href="#/review" class="qa">🃏 <b>${T('Daily review')}</b><span>${due.length + fresh.length} ${T('cards')}</span></a>
    <a href="#/practice" class="qa">🎯 <b>${T('Practice')}</b><span>${QUESTIONS.length} ${T('questions')}</span></a>
    <a href="#/exam" class="qa">📝 <b>${T('Mock exam')}</b><span>120 · 150 min</span></a>
    <a href="#/oral" class="qa">🎙️ <b>${T('Oral exam')}</b><span>${ORAL.length} ${T('role plays')}</span></a></div>
  ${days > 0 ? `<div class="alert">${H(`Target: the <b>MCQ exam on 8 September 2027</b>. DA has not announced its deadlines yet. For the March sitting the DSR assessment was due about 3 months before, so plan to have your application in by <b>early June 2027</b>, with the Cultural Awareness assessment done first.`,
    `Meta: a <b>prova de múltipla escolha em 8 de setembro de 2027</b>. A DA ainda não divulgou os prazos. Para a prova de março, a avaliação DSR precisou ser enviada cerca de 3 meses antes, então planeje enviar sua inscrição até o <b>início de junho de 2027</b>, com a avaliação de Cultural Awareness feita antes.`)}
    <a href="https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/exam-dates-and-details" target="_blank" rel="noopener">${T('Exam dates ↗')}</a></div>` : ''}
  <h2>${T('Your path')} <span class="muted small">${doneN}/19 ${T('modules done')}</span></h2>
  ${AREAS.map(area => `<h3 class="areah area-${AREA_KEY[area]}">${T(area)}</h3><div class="path">${TOPICS.filter(t => t.area === area).map(t => mod(t.id) ? modRow(mod(t.id))
    : `<div class="mrow soon"><span class="mnum">${t.id}</span><span class="mbody"><span class="mtitle">${L(t.title, PT_TOPICS[t.id].title)}</span><span class="small muted">${T('Coming soon')}</span></span></div>`).join('')}</div>`).join('')}
  <h2>${T('Badges')}</h2><div class="badges">${Object.entries(BADGES).map(([k, b]) => `<div class="badge${S.badges[k] ? ' got' : ''}" title="${esc(isPT() ? b[4] : b[3])}"><span>${b[0]}</span><small>${esc(isPT() ? b[2] : b[1])}</small></div>`).join('')}</div>`;
};
function modIntro(m){
  const t = topic(m.id), st = S.mod[m.id], started = st && st.max >= 0, ss = steps(m);
  const maps = BRAZIL_MAP.map((x, k) => ({...x, pt: PT_MAP[k]})).filter(x => x.topics.includes(m.id));
  const startAt = started && !st.done ? st.at : 0;
  return `<p class="small"><a href="#/">← ${T('All modules')}</a></p>
  <section class="mhero area-${areaOf(m.id)}"><span class="mbig">${m.id}</span><div><span class="kicker">${T(t.area)}</span><h1>${mTitle(m.id)}</h1><p class="lede">${R(m.hook)}</p>
    <div class="metas"><span>📄 ${m.pages.length} ${T('pages')}</span><span>❓ ${mQs(m).length} ${T('questions')}</span><span>🃏 ${CARDS.filter(c => c.t === m.id).length} ${T('cards')}</span><span>⏱️ ~${m.mins} min</span></div>
    <div class="row"><a class="btn big" href="#/m/${m.id}/${startAt}">${T(st?.done ? 'Start again' : started ? 'Continue' : 'Start')} ▶</a>
    ${started ? `<a class="small" href="#/m/${m.id}/${ss.findIndex(s => s.k === 'summary')}">🧠 ${T('Jump to the mini review')}</a>` : ''}</div></div></section>
  <h2>${T('You will be able to')}</h2><ul class="goals">${m.goals.map(g => `<li>${R(g)}</li>`).join('')}</ul>
  <h2>${T('In this module')}</h2><ol class="toc">${ss.map((s, k) => s.k === 'page' ? `<li class="${st && k <= st.max ? 'seen' : ''}"><a href="#/m/${m.id}/${k}">${R(m.pages[s.i].t)}</a></li>` : '').join('')}<li>${T('Module quiz and mini review')}</li></ol>
  ${maps.length ? `<h2>${T('From Brazil to Australia')}</h2>${maps.map(x => `<div class="tip"><b>${T('You studied:')}</b> <span lang="pt-BR" class="nopt">${esc(x.br)}</span><br><b>${T('Same:')}</b> ${L(x.same, x.pt[0])}<br><b>${T('What changes:')}</b> ${L(x.change, x.pt[1])}</div>`).join('')}` : ''}`;
}

V.review = () => {
  const {due, fresh} = dueCards(); const deck = shuffle(due).concat(fresh);
  if (!deck.length) return `<h1>${T('Daily review')}</h1><p class="lede">${TB('Nothing due. Come back tomorrow, or open a lesson to learn new cards.')}</p><a class="btn" href="#/practice">${T('Practise questions instead')}</a>`;
  let k = 0;
  const show = () => {
    const c = deck[k], el = $('#flash');
    if (!c) { el.innerHTML = `<div class="face"><div class="front">${T('Done for now 🎉')}</div><a class="btn" href="#/">${T('Back home')}</a></div>`; return; }
    el.innerHTML = `<p class="muted small">${k + 1} / ${deck.length} · ${T(S.srs[c.id] ? 'review' : 'new')} · ${L(topic(c.t).title, PT_TOPICS[c.t].title)}</p>
      <div class="face"><div class="front">${L(c.q, c.pq)}</div><div class="back" hidden>${L(c.a, c.pa)} ${src(c.src)}</div>
      <div class="row center" id="fbtns"><button id="flip">${T('Show answer')}</button></div></div>`;
    $('#flip').onclick = () => { el.querySelector('.back').hidden = false;
      $('#fbtns').innerHTML = ['Again', 'Hard', 'Good', 'Easy'].map((l, g) => `<button class="${g ? 'ghost' : ''}" data-g="${g}">${T(l)}</button>`).join('');
      $('#fbtns').onclick = e => { const g = e.target.closest('[data-g]')?.dataset.g; if (g == null) return; rate(c, +g); award(5); if (+g === 0) deck.push(c); k++; show(); };
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
      list.forEach(q => { delete q._ord; mountQuestion(box.querySelector(`[data-q="${q.id}"]`), q, {onPick: i => { const ok = i === q.ans; comboHit(ok); if (ok) award(5); }}); }); };
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
  const opt = (v, l, sel) => `<option value="${v}" ${sel ? 'selected' : ''}>${isPT() ? PT_UI[l] : l}</option>`;
  return `<h1>${T('Mock MCQ exam')}</h1>
  <p class="lede">${TB('The real exam is 120 questions in 150 minutes (1¼ minutes each), online. This mock keeps the same pace, mixes all three formats and gives no feedback until you submit.')}</p>
  <div class="row"><label for="examn">${T('Length')}</label><select id="examn">${opt(20, '20 questions · 25 min')}${opt(60, '60 questions · 75 min')}${opt(120, '120 questions · 150 min (full)', true)}</select><button id="examgo">${T('Start exam')}</button></div>
  <p class="small muted">${H(`The bank has ${QUESTIONS.length} questions; a full mock uses 120 of them. The pass mark changes every paper, so aim well above 65%.`, `O banco tem ${QUESTIONS.length} questões; um simulado completo usa 120 delas. A nota de corte muda a cada prova, então mire bem acima de 65%.`)}</p>
  ${hist.length ? `<h2>${T('Recent attempts')}</h2><table><tr><th>${T('Date')}</th><th>${T('Score')}</th><th>${T('Weakest areas')}</th></tr>${hist.map(e => `<tr><td>${new Date(e.d).toLocaleDateString()}</td><td>${e.score}/${e.n} (${Math.round(100 * e.score / e.n)}%)</td><td>${e.weak.map(id => L(topic(id).title, PT_TOPICS[id].title)).join(', ')}</td></tr>`).join('')}</table>` : ''}`;
};
function startExam(n){
  const list = groupOrder(shuffle(QUESTIONS).slice(0, Math.min(n, QUESTIONS.length))); list.forEach(q => delete q._ord);
  const ans = {}, flags = new Set(); let k = 0; const end = Date.now() + list.length * 75e3;
  const main = $('#main');
  const finish = () => {
    clearInterval(examTimer);
    const by = {}; let score = 0;
    list.forEach(q => { const ok = ans[q.id] === q.ans; if (ok) score++; recordAnswer(q, ok); (by[q.t] ||= [0, 0])[1]++; if (ok) by[q.t][0]++; });
    const rows = Object.entries(by).sort((a, b) => a[1][0] / a[1][1] - b[1][0] / b[1][1]);
    S.exams.push({d: Date.now(), n: list.length, score, weak: rows.slice(0, 3).map(r => +r[0])}); save();
    badge('mock'); if (score / list.length >= .7) badge('mock70'); if (score) award(score * 2);
    main.innerHTML = `<h1>${T('Result:')} ${score}/${list.length} (${Math.round(100 * score / list.length)}%)</h1>
      <table><tr><th>${T('Area')}</th><th>${T('Score')}</th><th></th></tr>${rows.map(([t, [r, a]]) => `<tr><td><a href="#/m/${t}">${L(topic(t).title, PT_TOPICS[t].title)}</a></td><td>${r}/${a}</td><td style="width:40%"><div class="bar"><i style="width:${100 * r / a}%"></i></div></td></tr>`).join('')}</table>
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
    if (!left || confirm(isPT() ? `${left} sem resposta. Entregar mesmo assim?` : `${left} unanswered. Submit anyway?`)) finish(); };
  const tick = () => { const ms = end - Date.now(); if (ms <= 0) return finish(); const c = $('#clock'); if (c) c.textContent = `${Math.floor(ms / 60e3)}:${String(Math.floor(ms / 1e3) % 60).padStart(2, '0')}`; };
  examTimer = setInterval(tick, 1000); show(); scrollTo(0, 0);
}

V.oral = id => {
  const sc = ORAL.find(o => o.id === id);
  if (!sc) return `<h1>${T('Oral exam practice')}</h1>
    <p class="lede">${H(`The real oral exam: 120 minutes on Zoom, 30 minutes reading time, then three role plays with different examiners and actors. You must pass <b>all three</b>.`, `O exame oral real: 120 minutos pelo Zoom, 30 minutos de leitura e depois três simulações com examinadores e atores diferentes. É preciso passar nas <b>três</b>.`)}</p>
    <table><tr><th>${T('Task')}</th><th>${T('Time')}</th><th>${T('What it tests')}</th></tr>${ORAL_TASKS.map((t, i) => `<tr><td>${L(t.name, PT_ORAL_TASKS[i].name)}</td><td>${t.min} min</td><td>${L(t.tests, PT_ORAL_TASKS[i].tests)}</td></tr>`).join('')}</table>
    <p>${H(`Pick a scenario. Ask a partner to open the <b>partner card</b> on their phone and play the client. Record yourself and listen back: you will hear things you did not notice.`, `Escolha um caso. Peça para alguém abrir o <b>cartão do parceiro</b> no celular e fazer o papel do paciente. Grave-se e ouça depois: você vai perceber coisas que não notou.`)}</p>
    <div class="grid">${ORAL.map(o => `<a class="card" href="#/oral/${o.id}"><span class="tag">${L(o.setting, PT_ORAL[o.id].setting)}</span><h3>${L(o.title, PT_ORAL[o.id].title)}</h3><div class="small muted">${L(o.tags, PT_ORAL[o.id].tags)}</div></a>`).join('')}</div>
    <p class="small muted">${H(`Scenarios here are practice cases written for this course, not official exam cases. Use DA's <a href="https://dietitiansaustralia.org.au/media/1328" target="_blank" rel="noopener">oral checklist ↗</a> as the final word.`, `Estes casos foram escritos para este curso; não são casos oficiais da prova. A palavra final é o <a href="https://dietitiansaustralia.org.au/media/1328" target="_blank" rel="noopener">checklist oral da DA ↗</a>.`)}</p>`;
  setTimeout(() => mountOral(sc));
  return `<p class="small"><a href="#/oral">${T('← Scenarios')}</a></p><span class="tag">${L(sc.setting, PT_ORAL[sc.id].setting)}</span><h1>${L(sc.title, PT_ORAL[sc.id].title)}</h1>
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
    if (!st) { stage.innerHTML = `<h2>${T('Debrief')}</h2><p>${TB("Score each checklist honestly. Anything unticked becomes next week's focus. Repeat this scenario in 2 weeks, then try a new one.")}</p><a class="btn" href="#/oral">${T('Another scenario')}</a>`;
      badge('oral'); award(40); return; }
    const t0 = Date.now(), name = s ? L(st.name, st.p.name) : T(st.name);
    const nextName = stages[s + 1] ? `${T('Next:')} ${L(stages[s + 1].name, stages[s + 1].p?.name)}` : T('Finish');
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
  <div class="card row" id="conv"><input id="cv" type="number" value="126" step="any" aria-label="Value" style="width:8rem"><select id="ck" aria-label="Conversion">${Object.entries(CONV).map(([k, c]) => `<option value="${k}">${isPT() ? PT_UI[c.l] : c.l}</option>`).join('')}</select><b id="cout" aria-live="polite"></b></div>
  <h2>${T('False friends (falsos cognatos)')}</h2>
  <table class="nopt">${GLOSSARY.filter(g => g[2].startsWith('!')).map(g => `<tr><td><b>${esc(g[0])}</b></td><td lang="pt-BR">${esc(g[1])}</td><td class="small">${esc(g[2].slice(2))}</td></tr>`).join('')}</table>
  <h2>${T('What you studied → what changes')}</h2>
  <table><tr><th>${T('Brazilian course (disciplina)')}</th><th>${T('Australian study areas')}</th><th>${T('Same')}</th><th>${T('What changes')}</th></tr>
  ${BRAZIL_MAP.map((m, k) => `<tr><td lang="pt-BR" class="nopt">${esc(m.br)}</td><td>${m.topics.map(t => `<a href="#/m/${t}">${L(topic(t).title, PT_TOPICS[t].title)}</a>`).join('<br>')}</td><td class="small">${L(m.same, PT_MAP[k][0])}</td><td class="small">${L(m.change, PT_MAP[k][1])}</td></tr>`).join('')}</table>
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
  return `<h1>Glossary · Glossário</h1><p class="lede">${GLOSSARY.length} ${isPT() ? 'termos em inglês e português. Busque em qualquer um dos dois idiomas.' : 'terms in English and Brazilian Portuguese. Search in either language.'}</p>
  <input id="gq" type="search" placeholder="Search / Buscar…" aria-label="Search glossary" style="width:100%;max-width:420px">
  <table id="gt" class="nopt"><tr><th>English</th><th>Português</th><th>Note</th></tr>${GLOSSARY.map(g => `<tr data-k="${esc((g[0] + ' ' + g[1]).toLowerCase())}"><td><b>${esc(g[0])}</b></td><td lang="pt-BR">${esc(g[1])}</td><td class="small muted">${esc(g[2].replace(/^! /, '⚠ '))}</td></tr>`).join('')}</table>`;
};

// ---------- read aloud (the browser's own speech voices; nothing is sent anywhere) ----------
const canSpeak = 'speechSynthesis' in window;
const RATES = [1, 0.85, 0.7];
const READ_SEL = 'h1, .pcard > p, .blist li, .note, .flow li, .btable tr, .keybox li, .sumsec h2, .sumsec li, .revisit, .wq, .case, .stem, .opt, .why:not([hidden]), .wans:not([hidden]), .front, .back:not([hidden]), .deeper > p';
let speaking = false;
function pickVoice(){
  const vs = speechSynthesis.getVoices();
  for (const want of isPT() ? ['pt-BR', 'pt'] : ['en-AU', 'en-GB', 'en']) { const v = vs.find(x => x.lang.replace('_', '-').startsWith(want)); if (v) return v; }
}
function updateSpeakBtn(){
  const b = $('#speak'); if (!b) return;
  b.textContent = speaking ? '⏹' : '🔊'; b.classList.toggle('on', speaking);
  b.setAttribute('aria-label', T(speaking ? 'Stop' : 'Read aloud'));
}
function stopSpeaking(){
  if (!canSpeak) return;
  speaking = false; speechSynthesis.cancel();
  $$('.reading').forEach(e => e.classList.remove('reading')); updateSpeakBtn();
}
function speakPage(){ // reads the page block by block and highlights the block being read
  if (speaking) return stopSpeaking();
  const blocks = $$(READ_SEL, $('#pcard')).filter(e => e.offsetParent !== null && e.innerText.trim());
  if (!blocks.length) return;
  const voice = pickVoice(); let k = 0;
  if (!voice && isPT()) { toast('Sem voz em português neste aparelho. Use o Chrome, o Edge ou o celular.', 'big'); return; }
  speechSynthesis.cancel(); speaking = true; updateSpeakBtn();
  const next = () => {
    $$('.reading').forEach(e => e.classList.remove('reading'));
    if (!speaking || k >= blocks.length) return stopSpeaking();
    const el = blocks[k++]; el.classList.add('reading'); el.scrollIntoView({block: 'center', behavior: 'smooth'});
    const text = el.innerText.replace(/\p{Extended_Pictographic}|\p{Regional_Indicator}|[→✓✗↺▶️]/gu, ' ').replace(/[\t\n]+/g, ', ').replace(/\s+/g, ' ').trim();
    if (!text) return next();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = isPT() ? 'pt-BR' : 'en-AU'; if (voice) u.voice = voice; u.rate = S.rate || 1;
    u.onend = next; u.onerror = () => stopSpeaking();
    speechSynthesis.speak(u);
  };
  next();
}
if (canSpeak) speechSynthesis.getVoices(); // starts loading the voice list early

// ---------- router ----------
function render(){
  clearInterval(examTimer); stopSpeaking();
  const [, view = '', a, b] = location.hash.split('/');
  if (view === 'topic') { location.replace(`#/m/${a}`); return; }
  let out;
  if (view === 'm' && mod(+a)) out = b != null && b !== '' ? player(mod(+a), +b) : modIntro(mod(+a));
  else out = (V[view] || V.home)(a);
  const inPlayer = typeof out === 'object';
  document.body.classList.toggle('focus', inPlayer);
  const main = $('#main'); main.innerHTML = inPlayer ? out.html : out;
  const tabView = view === 'm' ? '' : view;
  $$('nav.top a.tab').forEach(t => { t.classList.toggle('on', t.getAttribute('href') === '#/' + tabView); t.textContent = isPT() ? (PT_UI[t.dataset.en] || t.dataset.en) : t.dataset.en; });
  $('#navlang').innerHTML = langToggle();
  if (inPlayer) out.mount(); else annotate(main);
  pop.hidden = true;
  if (!location.hash.includes('/exam')) scrollTo(0, 0);
}
addEventListener('hashchange', render);
addEventListener('DOMContentLoaded', () => {
  document.body.append(pop);
  $$('nav.top a.tab').forEach(a => a.dataset.en = a.textContent);
  document.documentElement.lang = isPT() ? 'pt-BR' : 'en';
  render();
});
