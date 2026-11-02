MOD({
id: 5, mins: 35,
hook: ["Swapping butter for jam does not help a heart. The exam wants a different swap, and the reason changes how you give every piece of fat advice.", "Trocar manteiga por geleia não ajuda o coração. A prova quer outra troca, e o motivo muda a forma como você dá qualquer orientação sobre gordura."],
teasers: [["The everyday Australian food that gives the most salt (it isn't chips)", "O alimento australiano do dia a dia que mais dá sal (não é salgadinho)"], ["How to turn the sodium on a label into grams of salt in one step", "Como transformar o sódio do rótulo em gramas de sal num passo só"], ["The first weight goal that already improves blood pressure and glucose", "A primeira meta de peso que já melhora a pressão e a glicemia"]],
goals: [
  ["Describe the Heart Foundation heart-healthy eating pattern", "Descrever o padrão alimentar saudável para o coração da Heart Foundation"],
  ["Give fat swaps that lower LDL cholesterol", "Dar trocas de gordura que baixam o LDL"],
  ["Read sodium on a label and convert sodium to salt", "Ler o sódio no rótulo e converter sódio em sal"],
  ["Assess weight with BMI and waist, and set realistic goals", "Avaliar o peso com IMC e cintura e definir metas realistas"]
],
pages: [
{
  t: ["The heart-healthy eating pattern", "O padrão alimentar saudável para o coração"],
  b: [
    P("The Heart Foundation focuses on the ==overall eating pattern==, not single nutrients. In short:", "A Heart Foundation foca no ==padrão alimentar como um todo==, não em nutrientes isolados. Resumindo:"),
    UL(
      ["Plenty of ==vegetables, fruit and wholegrains==.", "Bastante ==hortaliças, frutas e integrais==."],
      ["Protein mainly from ==legumes, nuts, seeds, fish and seafood==; smaller amounts of eggs and lean poultry.", "Proteína principalmente de ==leguminosas, oleaginosas, sementes, peixes e frutos do mar==; menos ovos e frango magro."],
      ["Limit lean red meat to ==1–3 times a week==; keep processed meats to a minimum.", "Limitar a carne vermelha magra a ==1–3 vezes por semana==; embutidos o mínimo possível."],
      ["==Unflavoured== milk, yoghurt and cheese. People with high cholesterol or heart disease: ==reduced-fat== versions.", "Leite, iogurte e queijo ==sem sabor (sem açúcar)==. Quem tem colesterol alto ou doença cardíaca: versões ==com menos gordura==."],
      ["Healthy fats and oils: olive, canola, sunflower, peanut, soybean; avocado, nuts, seeds.", "Gorduras e óleos saudáveis: azeite, canola, girassol, amendoim, soja; abacate, oleaginosas, sementes."],
      ["Herbs and spices instead of salt.", "Ervas e especiarias no lugar do sal."]
    ),
    SORT(["Heart-healthy pattern: how often?", "Padrão saudável para o coração: com que frequência?"], [["Base of the diet", "Base da dieta"], ["Smaller amounts", "Em menor quantidade"], ["Limit / avoid", "Limitar / evitar"]], [
      ["Lentils and chickpeas", "Lentilha e grão-de-bico", 0],
      ["Salmon or sardines", "Salmão ou sardinha", 0],
      ["Eggs", "Ovos", 1],
      ["Lean beef", "Carne bovina magra", 1],
      ["Salami and ham", "Salame e presunto", 2],
      ["Olive oil and nuts", "Azeite e oleaginosas", 0],
      ["Meat pies and pastries", "Tortas de carne e massas folhadas", 2],
      ["Unflavoured yoghurt", "Iogurte sem sabor", 0]
    ])
  ],
  key: [["Pattern over single nutrients", "Padrão acima de nutrientes isolados"], ["Plant proteins and **fish** first; red meat **1–3 times a week**", "Proteínas vegetais e **peixe** primeiro; carne vermelha **1–3 vezes por semana**"], ["Unflavoured dairy (reduced-fat if high cholesterol)", "Laticínios sem sabor (com menos gordura se colesterol alto)"], ["Healthy oils; herbs not salt", "Óleos saudáveis; ervas no lugar do sal"]],
  src: ["https://www.heartfoundation.org.au/healthy-living/healthy-eating/heart-healthy-eating-pattern"]
},
{
  t: ["Fats and cholesterol", "Gorduras e colesterol"],
  b: [
    TABLE([["Fat", "Gordura"], ["Main sources", "Principais fontes"], ["Effect on LDL", "Efeito no LDL"]],
      [["**Saturated**", "**Saturada**"], ["Butter, cream, fatty meat, processed meat, pastry, coconut and palm oil", "Manteiga, creme de leite, carne gorda, embutidos, massa folhada, óleo de coco e de palma"], ["==Raises==", "==Aumenta=="]],
      [["**Trans**", "**Trans**"], ["Some baked and fried takeaway foods", "Alguns assados e frituras de comida para viagem"], ["==Raises LDL, lowers HDL==", "==Aumenta LDL, baixa HDL=="]],
      [["**Monounsaturated**", "**Monoinsaturada**"], ["Olive and canola oil, avocado, most nuts", "Azeite e óleo de canola, abacate, a maioria das oleaginosas"], ["Lowers (when replacing saturated)", "Baixa (quando substitui a saturada)"]],
      [["**Polyunsaturated** (incl. omega-3)", "**Poli-insaturada** (incl. ômega-3)"], ["Oily fish, walnuts, seeds, sunflower and soybean oil", "Peixes gordos, nozes, sementes, óleo de girassol e soja"], ["Lowers (when replacing saturated)", "Baixa (quando substitui a saturada)"]]
    ),
    NOTE('tip', "The key move is to ==replace saturated fat with unsaturated fat==, not with refined carbohydrate. Extra LDL helpers: ==plant sterol-enriched foods (2 g sterols a day)==, and soluble fibre from oats, barley, legumes and psyllium. Fish ==2–3 times a week== for omega-3.",
      "O movimento principal é ==trocar gordura saturada por insaturada==, e não por carboidrato refinado. Ajudas extras para o LDL: ==alimentos enriquecidos com fitosteróis (2 g por dia)== e fibra solúvel de aveia, cevada, leguminosas e psyllium. Peixe ==2–3 vezes por semana== pelo ômega-3."),
    PICK(["Best swap for butter on toast to lower LDL?", "Melhor troca para a manteiga na torrada para baixar o LDL?"],
      [["Avocado or a margarine made from canola or olive oil", "Abacate ou margarina de óleo de canola ou azeite"], ["Coconut oil", "Óleo de coco"], ["Ghee", "Manteiga ghee"], ["No spread, but double the jam", "Nada, mas o dobro de geleia"]], 0,
      ["Swap saturated for unsaturated fat. Coconut oil and ghee are high in saturated fat; jam swaps fat for sugar.", "Troque gordura saturada por insaturada. Óleo de coco e ghee têm muita gordura saturada; a geleia troca gordura por açúcar."])
  ],
  key: [["Replace **saturated** with **unsaturated** fat (not with refined carbohydrate)", "Troque gordura **saturada** por **insaturada** (não por carboidrato refinado)"], ["Avoid **trans** fat", "Evite gordura **trans**"], ["Plant sterols **2 g/day**, soluble fibre, fish **2–3×/week**", "Fitosteróis **2 g/dia**, fibra solúvel, peixe **2–3×/semana**"]],
  src: ["https://www.heartfoundation.org.au/healthy-living/healthy-eating/fats-oils-and-heart-health"]
},
{
  t: ["Salt, sodium and blood pressure", "Sal, sódio e pressão arterial"],
  b: [
    P("Adults should eat ==less than 5 g of salt a day== (about ==2000 mg sodium==). Most salt is already in foods: ==bread==, processed meats, cheese, sauces, stock, takeaway and snack foods.",
      "Adultos devem comer ==menos de 5 g de sal por dia== (cerca de ==2000 mg de sódio==). A maior parte do sal já vem nos alimentos: ==pão==, embutidos, queijo, molhos, caldos, comida para viagem e salgadinhos."),
    TABLE([["On the label (per 100 g)", "No rótulo (por 100 g)"], ["Meaning", "Significado"]],
      [["==Under 120 mg sodium==", "==Menos de 120 mg de sódio=="], ["Low salt: best choice", "Baixo sal: melhor escolha"]],
      [["Under 400 mg sodium", "Menos de 400 mg de sódio"], ["A better everyday choice", "Uma escolha melhor para o dia a dia"]],
      [["Salt (g) = sodium (g) × 2.5", "Sal (g) = sódio (g) × 2,5"], ["e.g. 400 mg sodium = 1 g salt", "ex. 400 mg de sódio = 1 g de sal"]]
    ),
    NUM(["A frozen meal has 900 mg of sodium per serve. How many grams of salt is that?", "Uma refeição congelada tem 900 mg de sódio por porção. Quantos gramas de sal são?"], 2.25, 0.1, "g",
      ["900 mg × 2.5 = 2250 mg = 2.25 g salt — almost half the daily limit in one meal.", "900 mg × 2,5 = 2250 mg = 2,25 g de sal — quase metade do limite diário numa refeição."]),
    NOTE('warn', "Many 'salt substitutes' are ==potassium chloride==. They can be dangerous for people with kidney disease or on some blood pressure medicines (e.g. ACE inhibitors). Check before recommending.",
      "Muitos 'substitutos do sal' são ==cloreto de potássio==. Podem ser perigosos para quem tem doença renal ou usa alguns remédios de pressão (ex. inibidores da ECA). Confira antes de recomendar."),
    NOTE('br', "Brazilian home cooking often adds salt with garlic ('alho e sal') at every meal. A realistic first step: cook with garlic, onion, lemon and herbs and taste before salting.",
      "A comida caseira brasileira costuma levar sal com alho em toda refeição. Primeiro passo realista: temperar com alho, cebola, limão e ervas e provar antes de salgar.")
  ],
  key: [["< **5 g** salt ≈ **2000 mg** sodium a day", "< **5 g** de sal ≈ **2000 mg** de sódio por dia"], ["Low salt label: < **120 mg/100 g**; better choice < **400 mg/100 g**", "Rótulo baixo sal: < **120 mg/100 g**; escolha melhor < **400 mg/100 g**"], ["Salt = sodium × **2.5**", "Sal = sódio × **2,5**"], ["Potassium salt substitutes: caution in CKD", "Substitutos de sal com potássio: cuidado na DRC"]],
  src: ["https://www.heartfoundation.org.au/healthy-living/healthy-eating/salt-and-heart-health"]
},
{
  t: ["Lipid numbers in mmol/L", "Exames de lipídios em mmol/L"],
  b: [
    P("Australian lipid results are in ==mmol/L==. Doctors treat according to a person's ==absolute cardiovascular risk== (the Australian CVD risk calculator), not one number alone.",
      "Os exames de lipídios australianos vêm em ==mmol/L==. Os médicos tratam de acordo com o ==risco cardiovascular absoluto== da pessoa (calculadora australiana de risco CV), não por um número isolado."),
    TABLE([["Convert from Brazil (mg/dL)", "Converter do Brasil (mg/dL)"], ["Divide by", "Divida por"], ["Example", "Exemplo"]],
      [["Total, LDL, HDL cholesterol", "Colesterol total, LDL, HDL"], ["==38.67==", "==38,67=="], ["LDL 160 mg/dL ≈ 4.1 mmol/L", "LDL 160 mg/dL ≈ 4,1 mmol/L"]],
      [["Triglycerides", "Triglicerídeos"], ["==88.57==", "==88,57=="], ["TG 200 mg/dL ≈ 2.3 mmol/L", "TG 200 mg/dL ≈ 2,3 mmol/L"]],
      [["Glucose", "Glicose"], ["==18==", "==18=="], ["126 mg/dL = 7.0 mmol/L", "126 mg/dL = 7,0 mmol/L"]]
    ),
    NUM(["A Brazilian report shows LDL 135 mg/dL. What is that in mmol/L? (1 decimal)", "Um laudo brasileiro mostra LDL 135 mg/dL. Quanto é em mmol/L? (1 casa decimal)"], 3.5, 0.1, "mmol/L",
      ["135 ÷ 38.67 ≈ 3.5 mmol/L.", "135 ÷ 38,67 ≈ 3,5 mmol/L."]),
    NOTE('tip', "High triglycerides respond best to ==less alcohol, fewer added sugars and refined carbohydrate, and weight loss==; high LDL responds to saturated fat swaps, soluble fibre and plant sterols.",
      "Triglicerídeos altos respondem melhor a ==menos álcool, menos açúcar adicionado e carboidrato refinado, e perda de peso==; LDL alto responde a trocas de gordura saturada, fibra solúvel e fitosteróis.")
  ],
  key: [["Cholesterol: mg/dL ÷ **38.67**; triglycerides ÷ **88.57**; glucose ÷ **18**", "Colesterol: mg/dL ÷ **38,67**; triglicerídeos ÷ **88,57**; glicose ÷ **18**"], ["Treatment is based on **absolute CVD risk**", "O tratamento se baseia no **risco CV absoluto**"], ["High TG: cut **alcohol, sugars**, lose weight", "TG alto: cortar **álcool, açúcares**, perder peso"]],
  src: ["https://www.heartfoundation.org.au/for-professionals/health-professional-online-learning"]
},
{
  t: ["Weight: assess, then set a realistic goal", "Peso: avaliar e depois definir uma meta realista"],
  b: [
    TABLE([["BMI (adults)", "IMC (adultos)"], ["Category", "Categoria"]],
      [["< 18.5", "< 18,5"], ["Underweight", "Baixo peso"]],
      [["18.5–24.9", "18,5–24,9"], ["Healthy weight", "Peso saudável"]],
      [["25–29.9", "25–29,9"], ["Overweight", "Sobrepeso"]],
      [["≥ 30", "≥ 30"], ["Obesity", "Obesidade"]]
    ),
    P("Waist circumference shows central fat. For adults of European background: increased risk at ==≥ 94 cm (men)== and ==≥ 80 cm (women)==; substantially increased at ==≥ 102 cm== and ==≥ 88 cm==. Some groups (e.g. Asian) have lower cut-offs.",
      "A circunferência da cintura mostra a gordura central. Para adultos de origem europeia: risco aumentado a partir de ==94 cm (homens)== e ==80 cm (mulheres)==; muito aumentado a partir de ==102 cm== e ==88 cm==. Alguns grupos (ex. asiáticos) têm pontos de corte menores."),
    UL(
      ["A ==5–10% loss== improves blood pressure, glucose and lipids.", "Uma ==perda de 5–10%== melhora pressão, glicemia e lipídios."],
      ["An energy deficit of about ==2000 kJ (≈ 500 kcal) a day== gives roughly 0.5 kg loss a week.", "Um déficit de cerca de ==2000 kJ (≈ 500 kcal) por dia== dá uma perda de mais ou menos 0,5 kg por semana."],
      ["Use ==person-first, non-stigmatising language==: 'a person with obesity', ask permission before talking about weight, focus on health behaviours.", "Use ==linguagem centrada na pessoa e sem estigma==: 'uma pessoa com obesidade', peça permissão antes de falar de peso, foque em comportamentos de saúde."]
    ),
    NUM(["Your client weighs 110 kg. How many kg is a 5% weight loss?", "Seu paciente pesa 110 kg. Quantos kg são uma perda de 5% do peso?"], 5.5, 0.1, "kg",
      ["110 × 0.05 = 5.5 kg — a meaningful, achievable first goal.", "110 × 0,05 = 5,5 kg — uma primeira meta significativa e alcançável."]),
    NOTE('exam', "DA's oral checklist asks for ==respectful, person-first language==. Never open with 'You need to lose weight.' Ask: 'Would it be OK to talk about weight today?'",
      "O checklist oral da DA pede ==linguagem respeitosa e centrada na pessoa==. Nunca comece com 'Você precisa emagrecer.' Pergunte: 'Tudo bem se falarmos sobre peso hoje?'")
  ],
  key: [["BMI: **18.5–24.9** healthy, **25–29.9** overweight, **≥ 30** obesity", "IMC: **18,5–24,9** saudável, **25–29,9** sobrepeso, **≥ 30** obesidade"], ["Waist (European): men **94/102**, women **80/88** cm", "Cintura (europeus): homens **94/102**, mulheres **80/88** cm"], ["First goal **5–10%**; deficit ~**2000 kJ/day** ≈ 0.5 kg/week", "Primeira meta **5–10%**; déficit ~**2000 kJ/dia** ≈ 0,5 kg/semana"], ["Person-first, ask permission", "Linguagem centrada na pessoa, peça permissão"]],
  src: ["https://www.ccm.health.qld.gov.au/management-of-diagnosed-conditions/overweight-and-obesity-adult"]
}
],
checks: {2: [30, 'n0'], 4: [32, 31]},
qs: [
  {stem: ["The Heart Foundation suggests eating lean red meat", "A Heart Foundation sugere comer carne vermelha magra"],
   opts: [["1–3 times a week", "1–3 vezes por semana"], ["every day", "todos os dias"], ["never", "nunca"], ["once a month", "uma vez por mês"]], ans: 0,
   why: ["Limit lean red meat to 1–3 times a week; choose plant proteins and fish more often.", "Limitar a carne vermelha magra a 1–3 vezes por semana; escolher proteínas vegetais e peixe com mais frequência."], src: "https://www.heartfoundation.org.au/healthy-living/healthy-eating/heart-healthy-eating-pattern"},
  {stem: ["A packaged soup has 350 mg sodium per 100 g. Using Heart Foundation guidance it is", "Uma sopa industrializada tem 350 mg de sódio por 100 g. Pela orientação da Heart Foundation ela é"],
   opts: [["a better choice (under 400 mg/100 g) but not 'low salt'", "uma escolha melhor (menos de 400 mg/100 g), mas não 'baixo sal'"], ["low salt (under 120 mg/100 g)", "baixo sal (menos de 120 mg/100 g)"], ["salt-free", "sem sal"], ["over the daily limit in one serve", "acima do limite diário numa porção"]], ans: 0,
   why: ["Under 400 mg/100 g is a better choice; under 120 mg/100 g is low salt.", "Menos de 400 mg/100 g é uma escolha melhor; menos de 120 mg/100 g é baixo sal."], src: "https://www.heartfoundation.org.au/healthy-living/healthy-eating/salt-and-heart-health"},
  {stem: ["Which change is likely to lower LDL cholesterol the MOST?", "Qual mudança deve baixar MAIS o LDL?"],
   opts: [["Replacing butter and fatty meats with unsaturated oils, nuts and fish", "Trocar manteiga e carnes gordas por óleos insaturados, oleaginosas e peixe"], ["Cutting out all eggs", "Cortar todos os ovos"], ["Swapping full-cream milk for juice", "Trocar leite integral por suco"], ["Avoiding all fruit", "Evitar todas as frutas"]], ans: 0,
   why: ["Replacing saturated with unsaturated fat has the biggest dietary effect on LDL. Eggs in moderation are fine for most people.", "Trocar gordura saturada por insaturada tem o maior efeito alimentar no LDL. Ovos com moderação estão ok para a maioria."], src: "https://www.heartfoundation.org.au/healthy-living/healthy-eating/fats-oils-and-heart-health"},
  {stem: ["A man weighs 120 kg. A 10% weight loss is", "Um homem pesa 120 kg. Uma perda de 10% do peso é"],
   opts: [["12 kg", "12 kg"], ["10 kg", "10 kg"], ["6 kg", "6 kg"], ["20 kg", "20 kg"]], ans: 0,
   why: ["120 × 0.10 = 12 kg.", "120 × 0,10 = 12 kg."], src: "https://www.ccm.health.qld.gov.au/management-of-diagnosed-conditions/overweight-and-obesity-adult"}
]
});
