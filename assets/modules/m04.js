MOD({
id: 4, mins: 40,
hook: ["Diabetes is in the official sample paper and in most outpatient lists. Learn the Australian numbers, how to read a diet history, and what to do in a hypo.",
       "O diabetes aparece no exemplo oficial da prova e na maioria das agendas de ambulatório. Aprenda os números australianos, como ler uma anamnese alimentar e o que fazer numa hipoglicemia."],
goals: [
  ["Classify results as normal, prediabetes or diabetes (in mmol/L)", "Classificar resultados como normal, pré-diabetes ou diabetes (em mmol/L)"],
  ["Give practical carbohydrate advice with Australian low-GI swaps", "Dar orientação prática de carboidrato com trocas australianas de baixo IG"],
  ["Pick the priorities in a type 2 diet history", "Escolher as prioridades numa anamnese de diabetes tipo 2"],
  ["Treat a hypo step by step", "Tratar uma hipoglicemia passo a passo"],
  ["Explain GDM targets and follow-up", "Explicar metas e acompanhamento do DMG"]
],
pages: [
{
  t: ["Diagnosis in Australian units", "Diagnóstico em unidades australianas"],
  b: [
    P("Australia reports glucose in ==mmol/L== (divide mg/dL by 18) and HbA1c in ==% and mmol/mol==. Type 2 diabetes is diagnosed with any of these (usually confirmed with a repeat test if there are no symptoms):",
      "A Austrália dá a glicose em ==mmol/L== (divida mg/dL por 18) e a HbA1c em ==% e mmol/mol==. O diabetes tipo 2 é diagnosticado com qualquer um destes (em geral confirmado com um novo exame se não houver sintomas):"),
    TABLE([["Test", "Exame"], ["Diabetes", "Diabetes"], ["Prediabetes", "Pré-diabetes"]],
      [["HbA1c", "HbA1c"], ["==≥ 6.5% (48 mmol/mol)==", "==≥ 6,5% (48 mmol/mol)=="], ["—", "—"]],
      [["Fasting glucose", "Glicemia de jejum"], ["==≥ 7.0 mmol/L==", "==≥ 7,0 mmol/L=="], ["6.1–6.9 (impaired fasting glucose)", "6,1–6,9 (glicemia de jejum alterada)"]],
      [["2-hour OGTT (75 g)", "TOTG 2 horas (75 g)"], ["==≥ 11.1 mmol/L==", "==≥ 11,1 mmol/L=="], ["7.8–11.0 (impaired glucose tolerance)", "7,8–11,0 (tolerância à glicose diminuída)"]],
      [["Random glucose (with symptoms)", "Glicemia casual (com sintomas)"], ["≥ 11.1 mmol/L", "≥ 11,1 mmol/L"], ["—", "—"]]
    ),
    P("General target for most adults with type 2: ==HbA1c ≤ 7% (53 mmol/mol)==, individualised (looser for frail older people, tighter for some young people). The **AUSDRISK** questionnaire screens adults for type 2 risk.",
      "Meta geral para a maioria dos adultos com tipo 2: ==HbA1c ≤ 7% (53 mmol/mol)==, individualizada (mais flexível para idosos frágeis, mais rígida para alguns jovens). O questionário **AUSDRISK** faz a triagem de risco de tipo 2 em adultos."),
    SORT(["Normal, prediabetes or diabetes?", "Normal, pré-diabetes ou diabetes?"], [["Normal", "Normal"], ["Prediabetes", "Pré-diabetes"], ["Diabetes", "Diabetes"]], [
      ["Fasting glucose 7.4 mmol/L", "Glicemia de jejum 7,4 mmol/L", 2],
      ["HbA1c 6.8% (51 mmol/mol)", "HbA1c 6,8% (51 mmol/mol)", 2],
      ["Fasting glucose 6.4 mmol/L", "Glicemia de jejum 6,4 mmol/L", 1],
      ["2-hour OGTT 9.2 mmol/L", "TOTG 2 h 9,2 mmol/L", 1],
      ["Fasting glucose 5.2 mmol/L", "Glicemia de jejum 5,2 mmol/L", 0],
      ["Random glucose 12.5 mmol/L, thirsty and losing weight", "Glicemia casual 12,5 mmol/L, com sede e perdendo peso", 2]
    ])
  ],
  key: [["Diabetes: HbA1c **≥ 6.5%** · fasting **≥ 7.0** · 2-h OGTT **≥ 11.1** mmol/L", "Diabetes: HbA1c **≥ 6,5%** · jejum **≥ 7,0** · TOTG 2 h **≥ 11,1** mmol/L"], ["Prediabetes: fasting **6.1–6.9** or 2-h **7.8–11.0**", "Pré-diabetes: jejum **6,1–6,9** ou 2 h **7,8–11,0**"], ["Usual target HbA1c **≤ 7% (53 mmol/mol)**, individualised", "Meta usual HbA1c **≤ 7% (53 mmol/mol)**, individualizada"], ["mg/dL ÷ **18** = mmol/L", "mg/dL ÷ **18** = mmol/L"]],
  src: ["https://www.baker.edu.au/health-hub/fact-sheets/understanding-diabetes", "https://www.diabetesaustralia.com.au/diabetes-fact-sheets/"]
},
{
  t: ["Carbohydrate: quality, amount and timing", "Carboidrato: qualidade, quantidade e horário"],
  b: [
    P("People with diabetes don't need to cut out carbohydrate. They need ==good-quality carbohydrate, in suitable amounts, spread across the day==, especially if they use insulin or sulfonylureas.",
      "Pessoas com diabetes não precisam cortar o carboidrato. Precisam de ==carboidrato de boa qualidade, em quantidade adequada, distribuído ao longo do dia==, principalmente se usam insulina ou sulfonilureias."),
    UL(
      ["**Glycaemic index (GI)**: how fast a carbohydrate raises blood glucose. Low ==≤ 55==, medium 56–69, high ==≥ 70==.", "**{{Índice glicêmico|glycaemic index}} (IG)**: a velocidade com que o carboidrato sobe a glicemia. Baixo ==≤ 55==, médio 56–69, alto ==≥ 70==."],
      ["**Amount** matters as much as GI. One carbohydrate **exchange** is about ==15 g== (1 slice of bread, ⅓ cup cooked rice).", "A **quantidade** importa tanto quanto o IG. Uma **{{substituição|exchange}}** de carboidrato tem cerca de ==15 g== (1 fatia de pão, ⅓ xícara de arroz cozido)."],
      ["A practical plate: ½ vegetables, ¼ protein, ==¼ carbohydrate (about the size of a fist)==.", "Um prato prático: ½ hortaliças, ¼ proteína, ==¼ carboidrato (mais ou menos do tamanho de um punho)==."]
    ),
    TABLE([["Instead of…", "Em vez de…"], ["Try (lower GI)", "Experimente (IG menor)"]],
      [["White bread", "Pão branco"], ["Grainy or soy-linseed bread, high-fibre low-GI white bread", "Pão com grãos ou de soja e linhaça, pão branco rico em fibras e de baixo IG"]],
      [["Jasmine or regular white rice", "Arroz jasmim ou arroz branco comum"], ["Basmati or Doongara rice, smaller serve; add legumes", "Arroz basmati ou Doongara, porção menor; acrescente leguminosas"]],
      [["Instant oats, Rice Bubbles, cornflakes", "Aveia instantânea, Rice Bubbles, flocos de milho"], ["Traditional rolled oats, natural muesli", "Aveia em flocos tradicional, muesli natural"]],
      [["Regular soft drink, juice", "Refrigerante comum, suco"], ["Water, sparkling water, diet drinks", "Água, água com gás, bebidas diet"]]
    ),
    PICK(["Which breakfast choice has the LOWEST GI?", "Qual opção de café da manhã tem o MENOR IG?"],
      [["Traditional rolled oats with milk", "Aveia em flocos tradicional com leite"], ["Rice Bubbles with milk", "Rice Bubbles com leite"], ["White toast with jam", "Torrada branca com geleia"], ["Cornflakes with honey", "Flocos de milho com mel"]], 0,
      ["Traditional rolled oats are low GI. Puffed rice, cornflakes and white bread are high GI.", "A aveia em flocos tradicional tem IG baixo. Arroz tufado, flocos de milho e pão branco têm IG alto."])
  ],
  key: [["Low GI **≤ 55**, high **≥ 70**", "IG baixo **≤ 55**, alto **≥ 70**"], ["1 exchange ≈ **15 g** carbohydrate", "1 substituição ≈ **15 g** de carboidrato"], ["Plate: **¼ carbohydrate** (a fist), ½ vegetables, ¼ protein", "Prato: **¼ carboidrato** (um punho), ½ hortaliças, ¼ proteína"], ["Spread carbohydrate across the day", "Distribua o carboidrato ao longo do dia"]],
  src: ["https://baker.edu.au/health-hub/fact-sheets/carbohydrates-gi", "https://www.baker.edu.au/health-hub/fact-sheets/carbohydrate-counting-exchanges"]
},
{
  t: ["Reading a type 2 diet history", "Lendo uma anamnese de diabetes tipo 2"],
  b: [
    P("The official sample paper gives a long diet history and asks for the ==main priority==. Read it like an examiner: what is driving glucose, weight and heart risk?",
      "O exemplo oficial da prova traz uma anamnese longa e pergunta a ==prioridade principal==. Leia como uma examinadora: o que está puxando a glicemia, o peso e o risco cardíaco?"),
    NOTE('eg', "Practice case (similar style): man, 52, new type 2, BMI 33. Breakfast 4 Weet-Bix, full-cream milk, 2 tsp sugar. Lunch: 2 meat pies. 1.25 L regular cola a day. Dinner: steak, chips, small salad. 3–4 beers most nights.",
      "Caso de treino (no mesmo estilo): homem, 52 anos, tipo 2 recente, IMC 33. Café: 4 Weet-Bix, leite integral, 2 colheres de chá de açúcar. Almoço: 2 tortas de carne. 1,25 L de refrigerante de cola comum por dia. Jantar: bife, batata frita, salada pequena. 3–4 cervejas na maioria das noites."),
    REVEAL(["Before you look: list his top 3 priorities.", "Antes de olhar: liste as 3 principais prioridades dele."],
      ["1) ==Sugary drinks==: 1.25 L cola ≈ 130 g sugar a day, the biggest glucose driver. 2) ==Saturated fat== (pies, chips, full-cream milk) for heart risk, the main cause of death in type 2. 3) ==Alcohol== (energy, hypos with some medicines). Then: vegetables (only ~1 serve vs 6), portion sizes, a practical lunch plan for the road.",
       "1) ==Bebidas açucaradas==: 1,25 L de cola ≈ 130 g de açúcar por dia, o maior motor da glicemia. 2) ==Gordura saturada== (tortas, batata frita, leite integral) pelo risco cardíaco, a principal causa de morte no tipo 2. 3) ==Álcool== (energia, hipoglicemias com alguns remédios). Depois: hortaliças (só ~1 porção contra 6), tamanho das porções, um plano prático de almoço na estrada."]),
    NOTE('exam', "In the official sample (overweight man, new type 2), the answer to 'main priority other than energy' was ==reduce saturated fat==, and follow-up was ==about one month later==. Heart disease is the main cause of death in type 2 diabetes.",
      "No exemplo oficial (homem com sobrepeso, tipo 2 recente), a resposta para 'prioridade principal além da energia' foi ==reduzir a gordura saturada==, e o retorno foi ==cerca de um mês depois==. A doença cardíaca é a principal causa de morte no diabetes tipo 2."),
    NOTE('br', "Brazilian staples work well: ==beans and lentils== are low GI and high fibre. Rice portions and sweetened coffee are the usual changes, not giving up rice and beans.",
      "Alimentos brasileiros funcionam bem: ==feijão e lentilha== têm IG baixo e muita fibra. O que costuma mudar é a porção de arroz e o café adoçado, não abandonar o arroz com feijão.")
  ],
  key: [["Scan for: **sugary drinks**, **saturated fat**, **alcohol**, low **vegetables**, portions", "Procure: **bebidas açucaradas**, **gordura saturada**, **álcool**, poucas **hortaliças**, porções"], ["Heart disease is the main cause of death in type 2", "A doença cardíaca é a principal causa de morte no tipo 2"], ["Typical outpatient follow-up ≈ **1 month**", "Retorno ambulatorial típico ≈ **1 mês**"]],
  src: ["https://dietitiansaustralia.org.au/media/394", "https://www.diabetesaustralia.com.au/living-with-diabetes/healthy-eating/"]
},
{
  t: ["Hypoglycaemia: treat it fast", "Hipoglicemia: trate rápido"],
  b: [
    P("Hypoglycaemia ('hypo') is blood glucose ==below 4.0 mmol/L==. Signs: sweating, shaking, hunger, headache, poor concentration; severe hypos cause confusion or loss of consciousness. People on ==insulin or sulfonylureas (e.g. gliclazide)== are at risk; ==alcohol== raises the risk.",
      "Hipoglicemia ('hipo') é a glicemia ==abaixo de 4,0 mmol/L==. Sinais: suor, tremor, fome, dor de cabeça, falta de concentração; as graves causam confusão ou perda de consciência. Quem usa ==insulina ou sulfonilureias (ex. gliclazida)== está em risco; o ==álcool== aumenta o risco."),
    FLOW(
      [["Step 1: 15 g fast carbohydrate", "Passo 1: 15 g de carboidrato rápido"], ["e.g. ==150 mL regular soft drink==, 3 glucose tablets, a 60 mL glucose shot, or 3–5 jelly beans (depends on brand).", "ex. ==150 mL de refrigerante comum==, 3 tabletes de glicose, um shot de glicose de 60 mL ou 3–5 balas de goma (depende da marca)."]],
      [["Step 2: recheck in 10–15 minutes", "Passo 2: medir de novo em 10–15 minutos"], ["Still below 4? ==Repeat step 1==.", "Ainda abaixo de 4? ==Repita o passo 1==."]],
      [["Step 3: follow up", "Passo 3: complementar"], ["Once above 4: a ==longer-acting carbohydrate== (fruit, grainy bread, a glass of milk) or the next meal if it's due.", "Acima de 4: um ==carboidrato de ação mais longa== (fruta, pão com grãos, um copo de leite) ou a próxima refeição se estiver na hora."]]
    ),
    NOTE('warn', "Unconscious or unable to swallow? ==Nothing by mouth.== Call an ambulance (000) and give glucagon if available.",
      "Inconsciente ou sem conseguir engolir? ==Nada pela boca.== Chame a ambulância (000) e aplique glucagon se houver."),
    ORDER(["Put the hypo treatment in order", "Coloque o tratamento da hipo em ordem"], [
      ["Check: glucose is 3.4 mmol/L", "Conferir: glicemia 3,4 mmol/L"],
      ["Have 150 mL regular soft drink", "Tomar 150 mL de refrigerante comum"],
      ["Wait 10–15 minutes and recheck", "Esperar 10–15 minutos e medir de novo"],
      ["Above 4: have a slice of grainy bread", "Acima de 4: comer uma fatia de pão com grãos"]
    ])
  ],
  key: [["Hypo = **< 4.0 mmol/L**", "Hipo = **< 4,0 mmol/L**"], ["**15 g** fast carbohydrate → recheck in **10–15 min** → repeat if needed → longer-acting carbohydrate", "**15 g** de carboidrato rápido → medir em **10–15 min** → repetir se preciso → carboidrato de ação longa"], ["Risk: **insulin, sulfonylureas, alcohol**", "Risco: **insulina, sulfonilureias, álcool**"], ["Unconscious: nothing by mouth, call **000**", "Inconsciente: nada pela boca, ligar **000**"]],
  src: ["https://baker.edu.au/health-hub/fact-sheets/hypoglycaemia-management"]
},
{
  t: ["Medicines that change the plan", "Remédios que mudam o plano"],
  b: [
    P("You don't prescribe, but you must know how common diabetes medicines affect eating advice.", "Você não prescreve, mas precisa saber como os remédios comuns para diabetes afetam a orientação alimentar."),
    TABLE([["Medicine", "Remédio"], ["What it means for the dietitian", "O que significa para o nutricionista"]],
      [["**Metformin**", "**Metformina**"], ["Take with food (gut upset). Long-term use can lower ==vitamin B12==.", "Tomar com comida (desconforto intestinal). Uso prolongado pode baixar a ==vitamina B12==."]],
      [["**Sulfonylureas** (gliclazide)", "**Sulfonilureias** (gliclazida)"], ["==Hypo risk==: regular meals with carbohydrate; care with alcohol and skipped meals.", "==Risco de hipo==: refeições regulares com carboidrato; cuidado com álcool e refeições puladas."]],
      [["**Insulin**", "**Insulina**"], ["Match carbohydrate to the insulin plan; hypo risk.", "Ajustar o carboidrato ao esquema de insulina; risco de hipo."]],
      [["**SGLT2 inhibitors** (empagliflozin, dapagliflozin)", "**Inibidores de SGLT2** (empagliflozina, dapagliflozina)"], ["With ==very low carbohydrate diets, fasting or acute illness== they can cause ketoacidosis even with normal glucose. Avoid very low carb plans.", "Com ==dietas muito pobres em carboidrato, jejum ou doença aguda== podem causar cetoacidose mesmo com glicose normal. Evite planos muito pobres em carboidrato."]],
      [["**GLP-1 agonists** (semaglutide)", "**Agonistas de GLP-1** (semaglutida)"], ["Less appetite, nausea: focus on ==protein, fluids and small meals== to protect muscle.", "Menos apetite, náusea: foque em ==proteína, líquidos e refeições pequenas== para proteger o músculo."]]
    ),
    NOTE('tip', "Remission of type 2 diabetes is possible for some people with substantial weight loss, for example with supervised meal-replacement programs. Weight loss of 5–10% already improves glucose.",
      "A remissão do diabetes tipo 2 é possível para algumas pessoas com perda de peso importante, por exemplo com programas supervisionados de substitutos de refeição. Perder 5–10% do peso já melhora a glicemia."),
    PICK(["A client on empagliflozin wants to start a keto diet. Your main concern is", "Um paciente em uso de empagliflozina quer começar uma dieta cetogênica. Sua principal preocupação é"],
      [["ketoacidosis risk", "risco de cetoacidose"], ["vitamin C deficiency", "deficiência de vitamina C"], ["high potassium", "potássio alto"], ["low sodium", "sódio baixo"]], 0,
      ["SGLT2 inhibitors plus very low carbohydrate intake can cause (euglycaemic) diabetic ketoacidosis.", "Inibidores de SGLT2 com ingestão muito baixa de carboidrato podem causar cetoacidose diabética (euglicêmica)."])
  ],
  key: [["Metformin → watch **B12**", "Metformina → atenção à **B12**"], ["Sulfonylureas and insulin → **hypo risk**: regular carbohydrate", "Sulfonilureias e insulina → **risco de hipo**: carboidrato regular"], ["SGLT2 inhibitors + very low carb → **ketoacidosis**", "Inibidores de SGLT2 + pouquíssimo carboidrato → **cetoacidose**"], ["GLP-1 → small meals, **protein**, fluids", "GLP-1 → refeições pequenas, **proteína**, líquidos"]],
  src: ["https://www.diabetesaustralia.com.au/diabetes-fact-sheets/"]
},
{
  t: ["Gestational diabetes (GDM)", "Diabetes gestacional (DMG)"],
  b: [
    P("GDM is diagnosed with a 75 g OGTT at 24–28 weeks if ==any one== value is high: fasting ==≥ 5.1==, 1 hour ==≥ 10.0==, 2 hours ==≥ 8.5 mmol/L==.",
      "O DMG é diagnosticado com TOTG de 75 g entre 24 e 28 semanas se ==qualquer um== dos valores estiver alto: jejum ==≥ 5,1==, 1 hora ==≥ 10,0==, 2 horas ==≥ 8,5 mmol/L==."),
    TABLE([["Self-monitoring target", "Meta de automonitoramento"], ["mmol/L", "mmol/L"]],
      [["Fasting (before breakfast)", "Jejum (antes do café da manhã)"], ["==4.0–5.0==", "==4,0–5,0=="]],
      [["2 hours after starting a meal", "2 horas após começar a refeição"], ["==4.0–6.7==", "==4,0–6,7=="]]
    ),
    UL(
      ["Carbohydrate at ==most meals and snacks==, in moderate fist-sized amounts. Don't cut it too low: mother and baby still need it.", "Carboidrato na ==maioria das refeições e lanches==, em porções moderadas do tamanho de um punho. Não corte demais: mãe e bebê ainda precisam dele."],
      ["Low-GI choices, protein at each meal, a walk after meals.", "Escolhas de IG baixo, proteína em toda refeição, uma caminhada após as refeições."],
      ["After birth: ==OGTT 6–12 weeks postpartum==, then every 1–2 years. GDM raises future type 2 risk about ==10 times==. Breastfeeding and a healthy weight lower it.", "Após o parto: ==TOTG 6–12 semanas depois==, e depois a cada 1–2 anos. O DMG aumenta cerca de ==10 vezes== o risco futuro de tipo 2. Amamentar e manter peso saudável reduzem esse risco."]
    ),
    PICK(["Fernanda (GDM) records a fasting glucose of 5.4 mmol/L three mornings in a row. This is", "Fernanda (DMG) registra glicemia de jejum de 5,4 mmol/L três manhãs seguidas. Isso está"],
      [["above target: tell the diabetes team", "acima da meta: avisar a equipe de diabetes"], ["within target: no change", "dentro da meta: nada muda"], ["a hypo: give 15 g carbohydrate", "uma hipo: dar 15 g de carboidrato"], ["normal for late pregnancy", "normal no fim da gestação"]], 0,
      ["Fasting target is 4.0–5.0 mmol/L. Repeated high fasting values often need medicine (e.g. insulin) — report to the team.", "A meta de jejum é 4,0–5,0 mmol/L. Valores altos repetidos costumam precisar de remédio (ex. insulina) — avise a equipe."])
  ],
  key: [["GDM: fasting **≥ 5.1**, 1 h **≥ 10.0**, 2 h **≥ 8.5** (any one)", "DMG: jejum **≥ 5,1**, 1 h **≥ 10,0**, 2 h **≥ 8,5** (qualquer um)"], ["Targets: fasting **4.0–5.0**, 2 h after meals **4.0–6.7**", "Metas: jejum **4,0–5,0**, 2 h após refeições **4,0–6,7**"], ["Don't over-restrict carbohydrate", "Não restrinja demais o carboidrato"], ["OGTT **6–12 weeks** after birth; type 2 risk ×**10**", "TOTG **6–12 semanas** após o parto; risco de tipo 2 ×**10**"]],
  src: ["https://www.baker.edu.au/health-hub/fact-sheets/gestational-diabetes"]
}
],
checks: {2: [28, 'n0'], 4: [26, 29]},
qs: [
  {stem: ["In Australia, an HbA1c of at least ____ is diagnostic of diabetes.", "Na Austrália, uma HbA1c de pelo menos ____ é diagnóstica de diabetes."],
   opts: [["6.5% (48 mmol/mol)", "6,5% (48 mmol/mol)"], ["5.7% (39 mmol/mol)", "5,7% (39 mmol/mol)"], ["7.0% (53 mmol/mol)", "7,0% (53 mmol/mol)"], ["6.0% (42 mmol/mol)", "6,0% (42 mmol/mol)"]], ans: 0,
   why: ["HbA1c ≥ 6.5% (48 mmol/mol) is diagnostic. ≤ 7% (53) is the usual treatment target.", "HbA1c ≥ 6,5% (48 mmol/mol) é diagnóstica. ≤ 7% (53) é a meta usual de tratamento."], src: "https://www.baker.edu.au/health-hub/fact-sheets/understanding-diabetes"},
  {stem: ["Which medicine, combined with a very low carbohydrate diet, raises the risk of ketoacidosis?", "Qual remédio, junto com uma dieta muito pobre em carboidrato, aumenta o risco de cetoacidose?"],
   opts: [["An SGLT2 inhibitor such as empagliflozin", "Um inibidor de SGLT2 como a empagliflozina"], ["Metformin", "Metformina"], ["A statin", "Uma estatina"], ["An ACE inhibitor", "Um inibidor da ECA"]], ans: 0,
   why: ["SGLT2 inhibitors can cause euglycaemic ketoacidosis with very low carbohydrate intake, fasting or acute illness.", "Os inibidores de SGLT2 podem causar cetoacidose euglicêmica com ingestão muito baixa de carboidrato, jejum ou doença aguda."], src: "https://www.diabetesaustralia.com.au/diabetes-fact-sheets/"},
  {stem: ["Long-term metformin use is linked with low levels of", "O uso prolongado de metformina está ligado a níveis baixos de"],
   opts: [["vitamin B12", "vitamina B12"], ["vitamin C", "vitamina C"], ["vitamin K", "vitamina K"], ["iodine", "iodo"]], ans: 0,
   why: ["Metformin reduces B12 absorption; check B12 periodically, especially with neuropathy.", "A metformina reduz a absorção de B12; confira a B12 periodicamente, principalmente com neuropatia."], src: "https://www.diabetesaustralia.com.au/diabetes-fact-sheets/"},
  {stem: ["After a pregnancy with gestational diabetes, the woman should have", "Depois de uma gestação com diabetes gestacional, a mulher deve fazer"],
   opts: [["an OGTT 6–12 weeks after birth, then regular checks", "um TOTG 6–12 semanas após o parto e depois exames regulares"], ["no further tests if the baby is healthy", "nenhum exame se o bebê estiver bem"], ["insulin for 12 months after birth", "insulina por 12 meses após o parto"], ["a strict low-carbohydrate diet while breastfeeding", "dieta rigorosa pobre em carboidrato durante a amamentação"]], ans: 0,
   why: ["OGTT 6–12 weeks postpartum, then every 1–2 years: her risk of type 2 diabetes is about 10 times higher.", "TOTG 6–12 semanas após o parto e depois a cada 1–2 anos: o risco de diabetes tipo 2 é cerca de 10 vezes maior."], src: "https://www.baker.edu.au/health-hub/fact-sheets/gestational-diabetes"}
]
});
