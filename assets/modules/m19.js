MOD({
id: 19, mins: 40,
hook: ["The oral exam is three role plays and you must pass all three. This module turns DA's 2026 oral checklist into skills you can practise, and finishes with an MCQ game plan.",
       "O exame oral são três simulações e é preciso passar nas três. Este módulo transforma o checklist oral da DA de 2026 em habilidades para praticar e termina com uma estratégia para a prova de múltipla escolha."],
goals: [
  ["Use OARS and the spirit of motivational interviewing", "Usar o OARS e o espírito da entrevista motivacional"],
  ["Match your approach to the stage of change", "Ajustar a abordagem ao estágio de mudança"],
  ["Run Task 1 and Task 2 with a clear ADIME structure", "Conduzir as Tarefas 1 e 2 com uma estrutura ADIME clara"],
  ["Make a Task 3 call with ISBAR", "Fazer a ligação da Tarefa 3 com ISBAR"],
  ["Plan your MCQ pacing and study to September 2027", "Planejar o ritmo da prova e os estudos até setembro de 2027"]
],
pages: [
{
  t: ["Client-centred counselling: OARS", "Aconselhamento centrado no paciente: OARS"],
  b: [
    P("Motivational interviewing is a ==partnership==: you draw out the client's own reasons for change instead of telling them what to do. Resist the 'righting reflex' (the urge to fix and lecture).",
      "A entrevista motivacional é uma ==parceria==: você faz surgir os motivos do próprio paciente para mudar, em vez de dizer o que fazer. Resista ao 'reflexo de consertar' (a vontade de corrigir e dar sermão)."),
    TABLE([["Skill", "Habilidade"], ["Example", "Exemplo"]],
      [["**O**pen question", "Pergunta **a**berta (Open)"], ["'What does a usual weekday look like for your meals?'", "'Como é um dia normal de semana nas suas refeições?'"]],
      [["**A**ffirmation", "**A**firmação"], ["'You've already cut down on soft drink — that takes effort.'", "'Você já diminuiu o refrigerante — isso dá trabalho.'"]],
      [["**R**eflection", "**R**eflexão"], ["'It sounds like you're worried you'll have to give up your family's food.'", "'Parece que você tem medo de ter que abrir mão da comida da sua família.'"]],
      [["**S**ummary", "**R**esumo (Summary)"], ["'So far you've said… Have I got that right?'", "'Até agora você disse… Entendi direito?'"]]
    ),
    SORT(["Which OARS skill is it?", "Qual habilidade OARS é essa?"], [["Open question", "Pergunta aberta"], ["Affirmation", "Afirmação"], ["Reflection", "Reflexão"], ["Summary", "Resumo"]], [
      ["'How do you feel about your eating at the moment?'", "'Como você se sente sobre sua alimentação hoje?'", 0],
      ["'You came today even after a night shift. That shows commitment.'", "'Você veio hoje mesmo depois de um plantão. Isso mostra compromisso.'", 1],
      ["'You'd like more energy, but cooking feels hard after work.'", "'Você quer ter mais energia, mas cozinhar depois do trabalho parece difícil.'", 2],
      ["'Let me check I've got it all: breakfast is skipped, lunch is takeaway, and…'", "'Deixa eu ver se entendi tudo: o café é pulado, o almoço é delivery e…'", 3],
      ["'What would you like to get out of today?'", "'O que você gostaria de levar da consulta de hoje?'", 0]
    ])
  ],
  key: [["MI = **partnership**; evoke the client's own reasons", "EM = **parceria**; faça surgir os motivos do paciente"], ["**OARS**: Open questions, Affirmations, Reflections, Summaries", "**OARS**: perguntas abertas, afirmações, reflexões, resumos"], ["Avoid the righting reflex (lecturing)", "Evite o reflexo de consertar (sermão)"]],
  src: ["https://www.racgp.org.au/afp/2012/september/motivational-interviewing-techniques"]
},
{
  t: ["Stages of change", "Estágios de mudança"],
  b: [
    TABLE([["Stage", "Estágio"], ["Sounds like", "Soa como"], ["Your job", "Seu papel"]],
      [["Precontemplation", "Pré-contemplação"], ["'I don't see a problem.'", "'Não vejo problema nenhum.'"], ["Build rapport, raise awareness gently, ask permission to share information", "Criar vínculo, aumentar a consciência com delicadeza, pedir permissão para informar"]],
      [["Contemplation", "Contemplação"], ["'I know I should, but…'", "'Eu sei que deveria, mas…'"], ["Explore ==pros and cons==, ambivalence, values", "Explorar ==prós e contras==, ambivalência, valores"]],
      [["Preparation", "Preparação"], ["'I'm going to start next week.'", "'Vou começar semana que vem.'"], ["Make a ==SMART plan== together", "Fazer um ==plano SMART== juntos"]],
      [["Action", "Ação"], ["'I've swapped to water this month.'", "'Troquei para água este mês.'"], ["Support, problem-solve barriers, affirm", "Apoiar, resolver barreiras, valorizar"]],
      [["Maintenance", "Manutenção"], ["'I've kept it up for over 6 months.'", "'Mantive por mais de 6 meses.'"], ["Prevent relapse, plan for tricky times", "Prevenir recaída, planejar momentos difíceis"]]
    ),
    SORT(["Which stage of change?", "Qual estágio de mudança?"], [["Precontemplation", "Pré-contemplação"], ["Contemplation", "Contemplação"], ["Preparation", "Preparação"], ["Action", "Ação"], ["Maintenance", "Manutenção"]], [
      ["'My doctor sent me. My diet is fine.'", "'O médico me mandou. Minha alimentação está ótima.'", 0],
      ["'I know I drink too much cola, but I'm not ready yet.'", "'Sei que tomo cola demais, mas ainda não estou pronto.'", 1],
      ["'I bought a water bottle and I start Monday.'", "'Comprei uma garrafinha e começo segunda.'", 2],
      ["'For 3 weeks I've had salad at lunch.'", "'Há 3 semanas eu como salada no almoço.'", 3],
      ["'It's been a year since I stopped buying meat pies.'", "'Faz um ano que parei de comprar torta de carne.'", 4]
    ]),
    NOTE('exam', "DA's checklist lists ==stages of change== as a key area: assess readiness early, because it decides whether Task 2 is about information, decisions or a plan.",
      "O checklist da DA cita os ==estágios de mudança== como área-chave: avalie a prontidão cedo, porque ela decide se a Tarefa 2 vai ser sobre informação, decisão ou plano.")
  ],
  key: [["Pre-contemplation → contemplation → preparation → action → maintenance (and relapse)", "Pré-contemplação → contemplação → preparação → ação → manutenção (e recaída)"], ["Contemplation: explore **pros and cons**; preparation: **SMART plan**", "Contemplação: explorar **prós e contras**; preparação: **plano SMART**"], ["Assess readiness early in the consult", "Avalie a prontidão cedo na consulta"]],
  src: ["https://www.racgp.org.au/afp/2012/september/motivational-interviewing-techniques", "https://dietitiansaustralia.org.au/media/1328"]
},
{
  t: ["Tasks 1 and 2: a consultation that flows", "Tarefas 1 e 2: uma consulta que flui"],
  b: [
    FLOW(
      [["Open (2–3 min)", "Abrir (2–3 min)"], ["Introduce yourself and your role, confirm the client, ==ask consent==, agree the agenda and time.", "Apresentar-se e dizer sua função, confirmar o paciente, ==pedir consentimento==, combinar a pauta e o tempo."]],
      [["Assess (Task 1)", "Avaliar (Tarefa 1)"], ["ABCDE with ==open questions first==; the client's goals and concerns; readiness to change. ==Summarise== as you go.", "ABCDE com ==perguntas abertas primeiro==; metas e preocupações do paciente; prontidão para mudar. ==Resuma== ao longo da conversa."]],
      [["Diagnose", "Diagnosticar"], ["State the main nutrition problem in plain words (your PES).", "Dizer o principal problema nutricional em palavras simples (seu PES)."]],
      [["Educate and counsel (Task 2)", "Educar e aconselhar (Tarefa 2)"], ["Ask what they know; ==1–3 priorities== linked to their goals; plain language; a visual via ==screen share==; tailor to culture, budget and skills.", "Perguntar o que sabem; ==1–3 prioridades== ligadas às metas deles; linguagem simples; um recurso visual por ==compartilhamento de tela==; adaptar à cultura, orçamento e habilidades."]],
      [["Plan", "Planejar"], ["Client-set ==SMART goals==, barriers solved together, ==teach-back==.", "Metas ==SMART== definidas pelo paciente, barreiras resolvidas juntos, ==teach-back==."]],
      [["Close", "Encerrar"], ["Summary, resources, ==review in about a month==, warm close, on time.", "Resumo, materiais, ==retorno em cerca de um mês==, encerramento acolhedor, no horário."]]
    ),
    UL(
      ["On Zoom, ==non-verbal skills still count==: look at the camera, nod, smile, keep a calm pace and use pauses.", "No Zoom, ==a comunicação não verbal continua valendo==: olhe para a câmera, acene, sorria, mantenha um ritmo calmo e use pausas."],
      ["Use ==person-first, non-judgemental language==: 'a person with diabetes', not 'a diabetic'; avoid 'non-compliant'.", "Use ==linguagem centrada na pessoa e sem julgamento==: 'pessoa com diabetes', não 'diabético'; evite 'não aderente'."],
      ["Know Australian foods: ==Weet-Bix, Vegemite, high-fibre low-GI white bread==, muesli, yoghurt brands. Browse Woolworths or Coles online.", "Conheça as comidas australianas: ==Weet-Bix, Vegemite, pão branco rico em fibras e de baixo IG==, muesli, marcas de iogurte. Navegue nos sites do Woolworths ou do Coles."]
    ),
    NOTE('aus', "DA's overall marking themes: ==safe and ethical practice, client-centred care, cultural safety, clear structure and time management, and independent, practice-ready judgement==.",
      "Os temas gerais de avaliação da DA: ==prática segura e ética, cuidado centrado no paciente, segurança cultural, estrutura clara e gestão do tempo, e julgamento independente e pronto para a prática==.")
  ],
  key: [["Structure: **open → assess → diagnose → educate → plan → close** (ADIME)", "Estrutura: **abrir → avaliar → diagnosticar → educar → planejar → encerrar** (ADIME)"], ["Open questions, **summaries**, **teach-back**, SMART goals set by the client", "Perguntas abertas, **resumos**, **teach-back**, metas SMART do paciente"], ["Non-verbal skills on Zoom; **person-first language**; Australian foods", "Comunicação não verbal no Zoom; **linguagem centrada na pessoa**; comidas australianas"]],
  src: ["https://dietitiansaustralia.org.au/media/1328", "https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/oral-exam", "https://xerte.nottingham.ac.uk/play_13244"]
},
{
  t: ["Task 3: the ISBAR phone call", "Tarefa 3: a ligação ISBAR"],
  b: [
    P("Task 3 (10 minutes) is a call with another health professional. DA wants to see you ==explain the dietitian's role, advocate for the client with evidence, handle disagreement calmly, and agree shared goals==.",
      "A Tarefa 3 (10 minutos) é uma ligação com outro profissional de saúde. A DA quer ver você ==explicar o papel do nutricionista, defender o paciente com evidências, lidar com discordâncias com calma e combinar metas em comum==."),
    ORDER(["Put this call to Carla's GP in ISBAR order", "Coloque esta ligação ao GP da Carla na ordem ISBAR"], [
      ["I: 'Hi Dr Patel, it's Thaynar, the dietitian. I'm calling about Carla Santos, 54.'", "I: 'Olá, Dr. Patel, aqui é a Thaynar, nutricionista. Estou ligando sobre a Carla Santos, 54 anos.'"],
      ["S: 'She's having shaky, sweaty episodes on night shifts since starting gliclazide.'", "S: 'Ela tem episódios de tremor e suor nos plantões noturnos desde que começou a gliclazida.'"],
      ["B: 'New type 2 diabetes, HbA1c 8.6%; gliclazide started 3 weeks ago; she skips meals on shifts.'", "B: 'Diabetes tipo 2 recente, HbA1c 8,6%; gliclazida há 3 semanas; ela pula refeições nos plantões.'"],
      ["A: 'Her meal pattern doesn't match the medicine: likely hypos around 3 am.'", "A: 'O padrão de refeições não combina com o remédio: provavelmente hipoglicemias por volta das 3 h.'"],
      ["R: 'Could you review the gliclazide? I'll plan regular carbohydrate on shifts and teach hypo treatment.'", "R: 'Você poderia rever a gliclazida? Eu vou planejar carboidrato regular nos plantões e ensinar o tratamento da hipo.'"],
      ["Close the loop: 'So you'll review it this week and I'll send my report. Is that right?'", "Fechar o ciclo: 'Então você revê esta semana e eu mando meu relatório. Certo?'"]
    ]),
    REVEAL(["The GP says: 'Just tell her to eat less sugar.' What do you say?", "O GP diz: 'É só ela comer menos açúcar.' O que você responde?"],
      ["Stay calm and client-centred: acknowledge the point, then advocate with evidence: 'I agree we want to reduce sugary drinks. My concern is that on gliclazide, skipping meals on night shifts puts her at risk of hypos, which can be dangerous at work. Could we look at the dose or timing together?' Then ==agree who does what== and confirm it back.",
       "Mantenha a calma e o foco no paciente: reconheça o ponto e defenda com evidências: 'Concordo que queremos reduzir as bebidas açucaradas. Minha preocupação é que, com gliclazida, pular refeições nos plantões coloca ela em risco de hipoglicemia, o que pode ser perigoso no trabalho. Podemos rever juntos a dose ou o horário?' Depois ==combine quem faz o quê== e confirme."])
  ],
  key: [["**I**dentify · **S**ituation · **B**ackground · **A**ssessment · **R**ecommendation", "**I**dentificar · **S**ituação · **B**ackground (histórico) · **A**valiação · **R**ecomendação"], ["Explain your role; **advocate with evidence**; handle disagreement calmly", "Explique seu papel; **defenda com evidências**; lide com discordâncias com calma"], ["Agree who does what, and **close the loop**", "Combine quem faz o quê e **feche o ciclo**"]],
  src: ["https://dietitiansaustralia.org.au/media/1328"]
},
{
  t: ["Your MCQ game plan", "Sua estratégia para a prova"],
  b: [
    UL(
      ["Format: ==120 multiple-choice questions in 150 minutes==, online: stand-alone, case-based and extended matching. The pass mark varies by paper. Up to 3 attempts; pass the MCQ and oral within 3 years.", "Formato: ==120 questões de múltipla escolha em 150 minutos==, online: independentes, baseadas em caso e de associação. A nota de corte varia a cada prova. Até 3 tentativas; passar na escrita e na oral em até 3 anos."],
      ["Pace: about ==75 seconds a question==. Answer everything on the first pass; flag hard ones and come back.", "Ritmo: cerca de ==75 segundos por questão==. Responda tudo na primeira passada; marque as difíceis e volte depois."],
      ["Read the keyword: ==MOST, FIRST, BEST, NOT==. Choose the ==safest, Australian, entry-level== answer. Be suspicious of 'always' and 'never'.", "Leia a palavra-chave: ==MOST, FIRST, BEST, NOT==. Escolha a resposta ==mais segura, australiana e de recém-formada==. Desconfie de 'sempre' e 'nunca'."],
      ["Extended matching: options ==can be used more than once==. Case sets: reread the case for each question.", "Associação: as opções ==podem ser usadas mais de uma vez==. Casos: releia o caso a cada questão."]
    ),
    NUM(["At 75 seconds per question, how many minutes do 120 questions take?", "A 75 segundos por questão, quantos minutos levam 120 questões?"], 150, 0, "min",
      ["120 × 75 s = 9000 s = 150 minutes: exactly the exam time, so keep moving.", "120 × 75 s = 9000 s = 150 minutos: exatamente o tempo da prova, então siga em frente."]),
    NOTE('tip', "Plan to September 2027: finish one module every week or two; ==daily review cards== (10 minutes); a ==mock exam each month==; oral role plays weekly once the MCQ is done (the oral comes after you pass the MCQ). Also try DA's official sample MCQs and the DSR quiz.",
      "Plano até setembro de 2027: terminar um módulo a cada uma ou duas semanas; ==cartões de revisão diários== (10 minutos); ==um simulado por mês==; simulações orais semanais depois da prova escrita (a oral vem depois de passar na escrita). Faça também as questões oficiais de exemplo da DA e o DSR quiz.")
  ],
  key: [["**120 questions / 150 minutes** ≈ **75 s each**", "**120 questões / 150 minutos** ≈ **75 s cada**"], ["Keywords **MOST / FIRST / BEST / NOT**; safest Australian entry-level answer", "Palavras-chave **MOST / FIRST / BEST / NOT**; resposta mais segura, australiana, de recém-formada"], ["Daily cards, monthly mocks, oral practice after the MCQ", "Cartões diários, simulado mensal, prática oral depois da escrita"]],
  src: ["https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/written-mcq-exam-and-sample-exam-paper", "https://dietitiansaustralia.org.au/media/394"]
}
],
checks: {2: [132, 128], 4: [131, 133]},
qs: [
  {stem: ["Which is the BEST example of person-first language?", "Qual é o MELHOR exemplo de linguagem centrada na pessoa?"],
   opts: [["'a person with diabetes'", "'uma pessoa com diabetes'"], ["'a diabetic'", "'um diabético'"], ["'the obese patient'", "'o paciente obeso'"], ["'a non-compliant client'", "'um paciente não aderente'"]], ans: 0,
   why: ["Person-first language puts the person before the condition and avoids blame. DA's oral checklist highlights this.", "A linguagem centrada na pessoa coloca a pessoa antes da condição e evita culpa. O checklist oral da DA destaca isso."], src: "https://dietitiansaustralia.org.au/media/1328"},
  {stem: ["In oral exam Task 3, DA especially wants to see you", "Na Tarefa 3 do exame oral, a DA quer especialmente ver você"],
   opts: [["explain the dietitian's role and advocate for the client with evidence", "explicar o papel do nutricionista e defender o paciente com evidências"], ["spend 5 minutes on small talk", "passar 5 minutos jogando conversa fora"], ["tell the other professional how to do their job", "dizer ao outro profissional como fazer o trabalho dele"], ["read your full notes aloud", "ler suas anotações completas em voz alta"]], ans: 0,
   why: ["Task 3: communicate your role, advocate with evidence, manage conflict, and agree client-centred shared goals.", "Tarefa 3: comunicar seu papel, defender com evidências, lidar com conflitos e combinar metas centradas no paciente."], src: "https://dietitiansaustralia.org.au/media/1328"},
  {stem: ["A client says: 'I've swapped soft drink for water for the last 3 months.' Stage of change?", "Um paciente diz: 'Troquei o refrigerante por água nos últimos 3 meses.' Estágio de mudança?"],
   opts: [["Action", "Ação"], ["Contemplation", "Contemplação"], ["Precontemplation", "Pré-contemplação"], ["Preparation", "Preparação"]], ans: 0,
   why: ["Action = actively changing for less than about 6 months; maintenance comes after that.", "Ação = mudando ativamente há menos de cerca de 6 meses; depois vem a manutenção."], src: "https://www.racgp.org.au/afp/2012/september/motivational-interviewing-techniques"},
  {stem: ["In the DSR MCQ exam, the average time available per question is about", "Na prova de múltipla escolha do DSR, o tempo médio por questão é cerca de"],
   opts: [["75 seconds", "75 segundos"], ["30 seconds", "30 segundos"], ["2½ minutes", "2 minutos e meio"], ["5 minutes", "5 minutos"]], ans: 0,
   why: ["150 minutes ÷ 120 questions = 1.25 minutes = 75 seconds.", "150 minutos ÷ 120 questões = 1,25 minuto = 75 segundos."], src: "https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/written-mcq-exam-and-sample-exam-paper"}
]
});
