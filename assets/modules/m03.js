MOD({
id: 3, mins: 35,
hook: ["Oral exam Task 1 is pure assessment and diagnosis, and many MCQs ask 'what first?'. This module gives you a clear, Australian way to run and write up an assessment.",
       "A Tarefa 1 do exame oral é só avaliação e diagnóstico, e muitas questões perguntam 'o que fazer primeiro?'. Este módulo dá um jeito claro e australiano de fazer e registrar uma avaliação."],
goals: [
  ["Tell screening from assessment, and run the four NCP steps", "Diferenciar triagem de avaliação e seguir as quatro etapas do PCN"],
  ["Sort assessment data into the ABCDE domains", "Classificar dados de avaliação nos domínios ABCDE"],
  ["Pick the right dietary assessment method", "Escolher o método de avaliação dietética certo"],
  ["Write a correct PES statement and measurable goals", "Escrever um enunciado PES correto e metas mensuráveis"],
  ["Estimate energy, protein and fluid needs", "Estimar necessidades de energia, proteína e líquidos"]
],
pages: [
{
  t: ["Screening first, then the Nutrition Care Process", "Primeiro a triagem, depois o Processo de Cuidado em Nutrição"],
  b: [
    P("**Screening** is quick and done by anyone (often nurses on admission) to find who is at risk. Only people at risk go on to a full dietitian **assessment** using the **Nutrition Care Process (NCP)**.",
      "A **{{triagem|screening}}** é rápida e pode ser feita por qualquer profissional (muitas vezes enfermagem na admissão) para achar quem está em risco. Só quem está em risco segue para a **{{avaliação nutricional|nutrition assessment}}** completa pelo nutricionista, usando o **{{Processo de Cuidado em Nutrição|Nutrition Care Process}} (PCN)**."),
    FLOW(
      [["Nutrition assessment", "Avaliação nutricional"], ["Collect and interpret data: what is happening and why?", "Coletar e interpretar dados: o que está acontecendo e por quê?"]],
      [["Nutrition diagnosis", "Diagnóstico nutricional"], ["Name the nutrition problem as a ==PES statement==.", "Nomear o problema nutricional como um ==enunciado PES==."]],
      [["Nutrition intervention", "Intervenção nutricional"], ["Plan and act on the cause (E), agreeing goals with the client.", "Planejar e agir sobre a causa (E), combinando metas com o paciente."]],
      [["Monitoring and evaluation", "Monitoramento e avaliação"], ["Re-measure the signs (S) and decide: continue, change or stop.", "Medir de novo os sinais (S) e decidir: continuar, mudar ou parar."]]
    ),
    NOTE('aus', "DA's 2026 oral exam checklist recommends the **ADIME** structure for consultations and notes: ==Assessment, Diagnosis, Intervention, Monitoring and Evaluation==. It is the NCP written down.",
      "O checklist oral da DA de 2026 recomenda a estrutura **ADIME** para consultas e registros: ==Avaliação, Diagnóstico, Intervenção, Monitoramento e Avaliação==. É o PCN no papel."),
    ORDER(["Put the Nutrition Care Process in order", "Coloque o Processo de Cuidado em Nutrição em ordem"], [
      ["Screening identifies risk", "A triagem identifica o risco"],
      ["Nutrition assessment", "Avaliação nutricional"],
      ["Nutrition diagnosis (PES)", "Diagnóstico nutricional (PES)"],
      ["Nutrition intervention", "Intervenção nutricional"],
      ["Monitoring and evaluation", "Monitoramento e avaliação"]
    ])
  ],
  key: [["Screening = quick risk check; assessment = full dietitian work-up", "Triagem = checagem rápida de risco; avaliação = investigação completa do nutricionista"], ["NCP: **assess → diagnose → intervene → monitor/evaluate**", "PCN: **avaliar → diagnosticar → intervir → monitorar/avaliar**"], ["Write notes in **ADIME** format", "Escreva os registros no formato **ADIME**"]],
  src: ["https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview", "https://dietitiansaustralia.org.au/media/1328"]
},
{
  t: ["What to collect: ABCDE", "O que coletar: ABCDE"],
  b: [
    P("A complete assessment covers five kinds of data. In the exam, the best answer often fills the ==missing piece== (e.g. 'check recent weight change' before giving advice).",
      "Uma avaliação completa cobre cinco tipos de dado. Na prova, a melhor resposta muitas vezes preenche a ==peça que falta== (ex. 'verificar a mudança de peso recente' antes de orientar)."),
    TABLE([["Domain", "Domínio"], ["Examples", "Exemplos"]],
      [["**A** Anthropometry", "**A** Antropometria"], ["Weight and ==weight change== (% in 3–6 months), height, BMI, waist, growth centiles in children", "Peso e ==mudança de peso== (% em 3–6 meses), altura, IMC, cintura, percentis de crescimento em crianças"]],
      [["**B** Biochemistry", "**B** Bioquímica"], ["HbA1c, glucose, lipids, eGFR, potassium, phosphate, ferritin, B12 (Australian units: mmol/L, µmol/L)", "HbA1c, glicose, lipídios, TFGe, potássio, fosfato, ferritina, B12 (unidades australianas: mmol/L, µmol/L)"]],
      [["**C** Clinical", "**C** Clínica"], ["Diagnoses, ==medications==, symptoms (nausea, bowels, swallowing), physical signs (muscle and fat loss, oedema, wounds)", "Diagnósticos, ==medicamentos==, sintomas (náusea, intestino, deglutição), sinais físicos (perda muscular e de gordura, edema, feridas)"]],
      [["**D** Dietary", "**D** Dietética"], ["Usual intake, drinks and alcohol, takeaway, supplements, allergies, eating pattern", "Ingestão habitual, bebidas e álcool, comida para viagem, suplementos, alergias, padrão alimentar"]],
      [["**E** Environment / social", "**E** Ambiente / social"], ["Who shops and cooks, budget, culture and religion, work hours, ==health literacy==, readiness to change", "Quem compra e cozinha, orçamento, cultura e religião, horário de trabalho, ==letramento em saúde==, prontidão para mudar"]]
    ),
    SORT(["Which domain does it belong to?", "A qual domínio pertence?"],
      [["A", "A"], ["B", "B"], ["C", "C"], ["D", "D"], ["E", "E"]], [
      ["HbA1c 8.2% (66 mmol/mol)", "HbA1c 8,2% (66 mmol/mol)", 1],
      ["Lost 7 kg in 3 months", "Perdeu 7 kg em 3 meses", 0],
      ["Takes metformin and a statin", "Toma metformina e uma estatina", 2],
      ["Usual breakfast: 2 Weet-Bix with milk", "Café da manhã habitual: 2 Weet-Bix com leite", 3],
      ["Lives alone and rarely cooks", "Mora sozinho e quase não cozinha", 4],
      ["Pressure injury on the sacrum", "Lesão por pressão no sacro", 2],
      ["Ferritin 8 µg/L", "Ferritina 8 µg/L", 1],
      ["Works night shifts", "Trabalha em turnos noturnos", 4]
    ]),
    NOTE('tip', "Weight change matters more than one weight: ==unintentional loss of more than 5% in 3 months, or more than 10% in 6 months==, is significant.",
      "A mudança de peso importa mais que um peso isolado: ==perda não intencional de mais de 5% em 3 meses, ou mais de 10% em 6 meses==, é significativa.")
  ],
  key: [["**A** anthropometry · **B** biochemistry · **C** clinical · **D** dietary · **E** environment/social", "**A** antropometria · **B** bioquímica · **C** clínica · **D** dietética · **E** ambiente/social"], ["Always ask about **medications** and **weight change**", "Sempre pergunte sobre **medicamentos** e **mudança de peso**"], ["Significant loss: >5% in 3 months or >10% in 6 months", "Perda significativa: >5% em 3 meses ou >10% em 6 meses"]],
  src: ["https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview/nutrition-assessment"]
},
{
  t: ["Choosing a dietary assessment method", "Escolhendo o método de avaliação dietética"],
  b: [
    P("No method is perfect. Pick the one that fits the ==question== (one person or a population? usual intake or one day?) and the ==time you have==.",
      "Nenhum método é perfeito. Escolha o que combina com a ==pergunta== (uma pessoa ou uma população? ingestão habitual ou um dia?) e com o ==tempo que você tem==."),
    TABLE([["Method", "Método"], ["Best for", "Melhor para"], ["Watch out", "Cuidado"]],
      [["**Diet history**", "**{{Anamnese alimentar|Diet history}}**"], ["==Usual intake of one client== in a clinic interview", "==Ingestão habitual de um paciente== numa entrevista clínica"], ["Takes skill and time; memory and social desirability bias", "Exige habilidade e tempo; viés de memória e de desejabilidade social"]],
      [["**24-hour recall**", "**{{Recordatório de 24 horas|24-hour recall}}**"], ["Quick snapshot; group averages (several recalls)", "Retrato rápido; médias de grupos (vários recordatórios)"], ["One day ≠ usual intake; use the multiple-pass method", "Um dia ≠ ingestão habitual; use o método de múltiplas passagens"]],
      [["**Food record / diary**", "**{{Registro alimentar|Food record}}**"], ["Detail over 3–7 days; links food to symptoms (IBS)", "Detalhe em 3–7 dias; liga alimento a sintomas (SII)"], ["People change what they eat when recording", "As pessoas mudam o que comem quando registram"]],
      [["**Weighed food record**", "**{{Registro alimentar pesado|Weighed food record}}**"], ["Most precise amounts (research, metabolic studies)", "Quantidades mais precisas (pesquisa, estudos metabólicos)"], ["High burden; not practical in clinic", "Muito trabalhoso; pouco prático no consultório"]],
      [["**Food frequency questionnaire**", "**{{Questionário de frequência alimentar|Food frequency questionnaire}}**"], ["==Ranking habitual intake in large groups==", "==Classificar a ingestão habitual em grandes grupos=="], ["Poor for exact amounts in one person", "Ruim para quantidades exatas de uma pessoa"]]
    ),
    PICK(["A dietitian wants to know the usual intake of one outpatient in a 45-minute first appointment. Best method?", "Uma nutricionista quer saber a ingestão habitual de um paciente ambulatorial numa primeira consulta de 45 minutos. Melhor método?"],
      [["Diet history", "Anamnese alimentar"], ["Weighed food record for 7 days", "Registro pesado de 7 dias"], ["Food frequency questionnaire", "Questionário de frequência alimentar"], ["A single 24-hour recall", "Um único recordatório de 24 horas"]], 0,
      ["A diet history estimates usual intake for one person in a clinical interview. A single recall shows only one day.", "A anamnese alimentar estima a ingestão habitual de uma pessoa numa entrevista clínica. Um único recordatório mostra só um dia."])
  ],
  key: [["One client, usual intake → **diet history**", "Um paciente, ingestão habitual → **anamnese alimentar**"], ["Large group ranking → **FFQ**", "Classificar grande grupo → **QFA**"], ["One day only → **24-hour recall** (repeat it for averages)", "Só um dia → **recordatório de 24 h** (repita para médias)"], ["Most precise → **weighed record** (high burden)", "Mais preciso → **registro pesado** (muito trabalhoso)"]],
  src: ["https://www.measurement-toolkit.org/diet/diet-decision-matrix"]
},
{
  t: ["The nutrition diagnosis: PES", "O diagnóstico nutricional: PES"],
  b: [
    P("A **PES statement** names a nutrition problem the dietitian can fix:", "Um **{{enunciado PES|PES statement}}** nomeia um problema nutricional que o nutricionista consegue resolver:"),
    FLOW(
      [["P — Problem", "P — Problema"], ["A ==nutrition== diagnosis (e.g. excessive carbohydrate intake). ==Not a medical diagnosis== like 'diabetes'.", "Um diagnóstico ==nutricional== (ex. ingestão excessiva de carboidrato). ==Não um diagnóstico médico== como 'diabetes'."]],
      [["E — Etiology (related to…)", "E — Etiologia (relacionado a…)"], ["The cause the intervention will target.", "A causa que a intervenção vai atacar."]],
      [["S — Signs and symptoms (as evidenced by…)", "S — Sinais e sintomas (evidenciado por…)"], ["==Measurable== evidence you will re-check later.", "Evidências ==mensuráveis== que você vai conferir depois."]]
    ),
    NOTE('eg', "**Good:** ==Excessive carbohydrate intake== related to ==1.25 L of regular cola a day== as evidenced by ==diet history and HbA1c 8.4%==.",
      "**Bom:** ==Ingestão excessiva de carboidrato== relacionada a ==1,25 L de refrigerante de cola comum por dia== evidenciada por ==anamnese alimentar e HbA1c de 8,4%==."),
    UL(
      ["Domains of nutrition diagnoses: **intake** (most common), **clinical** (e.g. swallowing difficulty, unintended weight loss), **behavioural-environmental** (e.g. food and nutrition knowledge deficit, limited access to food).", "Domínios de diagnóstico nutricional: **ingestão** (o mais comum), **clínico** (ex. dificuldade de deglutição, perda de peso não intencional), **comportamental-ambiental** (ex. déficit de conhecimento sobre alimentação, acesso limitado a alimentos)."]
    ),
    REVEAL(["What's wrong with this PES? 'Obesity related to diabetes as evidenced by BMI 34.' How would you fix it?", "O que está errado neste PES? 'Obesidade relacionada a diabetes evidenciada por IMC 34.' Como você corrigiria?"],
      ["'Obesity' and 'diabetes' are medical diagnoses and diabetes isn't the cause of the eating. Better: ==Excessive energy intake== related to ==frequent takeaway meals and large portions== as evidenced by ==diet history (≈ 12 000 kJ/day) and 6 kg gain in 12 months, BMI 34==.",
       "'Obesidade' e 'diabetes' são diagnósticos médicos, e o diabetes não é a causa da alimentação. Melhor: ==Ingestão energética excessiva== relacionada a ==refeições frequentes de comida para viagem e porções grandes== evidenciada por ==anamnese alimentar (≈ 12 000 kJ/dia) e ganho de 6 kg em 12 meses, IMC 34==."])
  ],
  key: [["**P** nutrition problem · **E** cause · **S** measurable evidence", "**P** problema nutricional · **E** causa · **S** evidência mensurável"], ["P is never a medical diagnosis", "P nunca é um diagnóstico médico"], ["Intervention targets **E**; monitoring re-measures **S**", "A intervenção mira o **E**; o monitoramento mede de novo o **S**"]],
  src: ["https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview/nutrition-diagnosis"]
},
{
  t: ["Estimating requirements", "Estimando as necessidades"],
  b: [
    P("At entry level you need sensible estimates, then you ==monitor and adjust==. Always check the local protocol (in Queensland, the NEMO guide).",
      "No nível de recém-formada, você precisa de estimativas sensatas e depois ==monitorar e ajustar==. Sempre confira o protocolo local (em Queensland, o guia NEMO)."),
    TABLE([["Need", "Necessidade"], ["Typical adult starting point", "Ponto de partida típico em adultos"]],
      [["Energy", "Energia"], ["Schofield equation × activity (and stress) factors, or about ==25–35 kcal/kg (≈ 105–145 kJ/kg)== depending on the condition", "Equação de Schofield × fatores de atividade (e estresse), ou cerca de ==25–35 kcal/kg (≈ 105–145 kJ/kg)== conforme a condição"]],
      [["Protein, healthy adult (RDI)", "Proteína, adulto saudável (RDI)"], ["Women ==0.75 g/kg==, men ==0.84 g/kg==; over 70: women 0.94, men 1.07 g/kg", "Mulheres ==0,75 g/kg==, homens ==0,84 g/kg==; acima de 70: mulheres 0,94, homens 1,07 g/kg"]],
      [["Protein, unwell", "Proteína, doente"], ["About ==1.0–1.5 g/kg== (higher with wounds, burns, critical illness; check kidney and liver status)", "Cerca de ==1,0–1,5 g/kg== (mais com feridas, queimaduras, doença crítica; confira rim e fígado)"]],
      [["Fluid", "Líquidos"], ["About ==30–35 mL/kg== (lower in heart or kidney failure, higher with fever and losses)", "Cerca de ==30–35 mL/kg== (menos na insuficiência cardíaca ou renal, mais com febre e perdas)"]]
    ),
    NOTE('warn', "In obesity, using actual body weight overestimates needs. Use an ==adjusted body weight== or the method in your local protocol.",
      "Na obesidade, usar o peso atual superestima as necessidades. Use um ==peso ajustado== ou o método do seu protocolo local."),
    NUM(["A 70 kg patient after surgery needs 1.2 g/kg/day of protein. How many grams a day?", "Um paciente de 70 kg após cirurgia precisa de 1,2 g/kg/dia de proteína. Quantos gramas por dia?"], 84, 0.5, "g",
      ["70 × 1.2 = 84 g protein a day.", "70 × 1,2 = 84 g de proteína por dia."]),
    NUM(["The same 70 kg patient needs 30 mL/kg of fluid. How many mL a day?", "O mesmo paciente de 70 kg precisa de 30 mL/kg de líquidos. Quantos mL por dia?"], 2100, 10, "mL",
      ["70 × 30 = 2100 mL (2.1 L) a day.", "70 × 30 = 2100 mL (2,1 L) por dia."])
  ],
  key: [["Energy ≈ **25–35 kcal/kg** (105–145 kJ/kg) or Schofield × factors", "Energia ≈ **25–35 kcal/kg** (105–145 kJ/kg) ou Schofield × fatores"], ["Protein RDI women **0.75**, men **0.84 g/kg**; unwell **1.0–1.5 g/kg**", "RDI de proteína mulheres **0,75**, homens **0,84 g/kg**; doente **1,0–1,5 g/kg**"], ["Fluid ≈ **30–35 mL/kg**", "Líquidos ≈ **30–35 mL/kg**"], ["Estimate, then **monitor and adjust**", "Estime e depois **monitore e ajuste**"]],
  src: ["https://www.health.qld.gov.au/__data/assets/pdf_file/0022/144175/est-req.pdf", "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/protein"]
},
{
  t: ["Intervention, goals and follow-up", "Intervenção, metas e acompanhamento"],
  b: [
    P("The intervention should target the **cause (E)**, be agreed with the client, and come with **SMART** goals: Specific, Measurable, Achievable, Relevant, Time-bound.",
      "A intervenção deve mirar a **causa (E)**, ser combinada com o paciente e vir com metas **SMART**: Específica, Mensurável, Alcançável, Relevante, com Tempo definido."),
    TABLE([["Vague goal", "Meta vaga"], ["SMART goal", "Meta SMART"]],
      [["Drink less soft drink", "Beber menos refrigerante"], ["==Swap cola for sparkling water on 5 workdays a week for the next month==", "==Trocar a cola por água com gás em 5 dias úteis por semana no próximo mês=="]],
      [["Eat more vegetables", "Comer mais hortaliças"], ["Add ==1 cup of salad to lunch== at least 4 days a week", "Acrescentar ==1 xícara de salada no almoço== pelo menos 4 dias por semana"]]
    ),
    P("**Monitoring** re-measures the signs from your PES (intake, weight, HbA1c, symptoms) at a planned review. In outpatients, the first review is typically about ==one month== after initial education.",
      "O **monitoramento** mede de novo os sinais do seu PES (ingestão, peso, HbA1c, sintomas) numa revisão planejada. No ambulatório, o primeiro retorno costuma ser cerca de ==um mês== depois da educação inicial."),
    PICK(["PES: 'Excessive sugar-sweetened drink intake… as evidenced by 1.5 L cola/day.' Best indicator to monitor at review?", "PES: 'Ingestão excessiva de bebidas açucaradas… evidenciada por 1,5 L de cola/dia.' Melhor indicador para monitorar no retorno?"],
      [["Volume of sugary drinks per day", "Volume de bebidas açucaradas por dia"], ["Serum albumin", "Albumina sérica"], ["Number of fruit serves", "Número de porções de fruta"], ["Hours of sleep", "Horas de sono"]], 0,
      ["Monitor the sign named in the PES: the daily volume of sugary drinks (plus outcomes like weight or HbA1c later).", "Monitore o sinal citado no PES: o volume diário de bebidas açucaradas (e depois desfechos como peso ou HbA1c)."])
  ],
  key: [["Intervention targets the **cause (E)**", "A intervenção mira a **causa (E)**"], ["Goals are **SMART** and set **with** the client", "Metas **SMART** e definidas **com** o paciente"], ["Monitor the **signs (S)**; typical outpatient review ≈ **1 month**", "Monitore os **sinais (S)**; retorno ambulatorial típico ≈ **1 mês**"]],
  src: ["https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview/nutrition-monitoring-and-evaluation"]
}
],
checks: {2: [14, 'n0'], 4: [13, 12]},
qs: [
  {stem: ["Which of these is a SCREENING tool rather than a full assessment?", "Qual destes é uma ferramenta de TRIAGEM e não uma avaliação completa?"],
   opts: [["Malnutrition Screening Tool (MST)", "Malnutrition Screening Tool (MST)"], ["Subjective Global Assessment (SGA)", "Avaliação Subjetiva Global (ASG)"], ["Diet history interview", "Entrevista de anamnese alimentar"], ["Nutrition-focused physical examination", "Exame físico focado em nutrição"]], ans: 0,
   why: ["The MST is a quick two-question screen. SGA, diet history and physical examination are parts of a full assessment.", "A MST é uma triagem rápida de duas perguntas. ASG, anamnese e exame físico fazem parte de uma avaliação completa."], src: "https://www.health.qld.gov.au/nutrition/patients/subjective-global-assessment-training-videos"},
  {stem: ["In a PES statement, 'as evidenced by' should be followed by", "Num enunciado PES, 'evidenciado por' deve ser seguido de"],
   opts: [["measurable signs and symptoms", "sinais e sintomas mensuráveis"], ["the medical diagnosis", "o diagnóstico médico"], ["the intervention plan", "o plano de intervenção"], ["the client's long-term goals", "as metas de longo prazo do paciente"]], ans: 0,
   why: ["S = signs and symptoms: measurable evidence you will re-check at review.", "S = sinais e sintomas: evidência mensurável que você vai conferir no retorno."], src: "https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview/nutrition-diagnosis"},
  {stem: ["In ADIME notes, the education you gave and the goals you agreed belong under", "Num registro ADIME, a orientação dada e as metas combinadas ficam em"],
   opts: [["Intervention", "Intervenção"], ["Assessment", "Avaliação"], ["Diagnosis", "Diagnóstico"], ["Monitoring and evaluation", "Monitoramento e avaliação"]], ans: 0,
   why: ["Intervention records what you did and agreed (education, goals, referrals). M&E records what you will measure and when.", "A intervenção registra o que foi feito e combinado (orientação, metas, encaminhamentos). O M&A registra o que será medido e quando."], src: "https://dietitiansaustralia.org.au/media/1328"},
  {stem: ["At 30 mL/kg, a 65 kg man's fluid requirement is about", "A 30 mL/kg, a necessidade de líquidos de um homem de 65 kg é cerca de"],
   opts: [["1950 mL a day", "1950 mL por dia"], ["650 mL a day", "650 mL por dia"], ["3250 mL a day", "3250 mL por dia"], ["1300 mL a day", "1300 mL por dia"]], ans: 0,
   why: ["65 × 30 = 1950 mL.", "65 × 30 = 1950 mL."], src: "https://www.health.qld.gov.au/__data/assets/pdf_file/0022/144175/est-req.pdf"}
]
});
