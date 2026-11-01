MOD({
id: 13, mins: 35,
hook: ["Aged care is one of the biggest employers of new dietitians in Australia, and DA expects you to know the aged care system. The big idea: protect intake and enjoyment, don't restrict.",
       "O cuidado ao idoso é um dos maiores empregadores de nutricionistas recém-chegados na Austrália, e a DA espera que você conheça esse sistema. A grande ideia: proteger a ingestão e o prazer, não restringir."],
goals: [
  ["Spot the reasons older people eat less", "Identificar por que os idosos comem menos"],
  ["Set protein, calcium, vitamin D and fluid targets, and liberalise diets", "Definir metas de proteína, cálcio, vitamina D e líquidos, e liberar dietas"],
  ["Score the MNA-SF and act on weight loss", "Pontuar a MNA-SF e agir diante da perda de peso"],
  ["Apply Aged Care Quality Standard 6 (food and nutrition)", "Aplicar a Aged Care Quality Standard 6 (alimentação e nutrição)"],
  ["Support people with dementia and dysphagia at mealtimes", "Apoiar pessoas com demência e disfagia nas refeições"]
],
pages: [
{
  t: ["Why older people eat less", "Por que os idosos comem menos"],
  b: [
    P("Malnutrition is common in older people, especially in residential aged care. The causes are usually ==several small problems together==:",
      "A desnutrição é comum em idosos, principalmente em ILPIs. As causas costumam ser ==vários pequenos problemas juntos==:"),
    UL(
      ["Smaller appetite ('anorexia of ageing'), weaker ==taste and smell==", "Menos apetite ('anorexia do envelhecimento'), ==paladar e olfato== mais fracos"],
      ["==Teeth and dentures==, dry mouth, ==swallowing problems==", "==Dentes e dentaduras==, boca seca, ==problemas de deglutição=="],
      ["Many medicines, constipation, pain", "Muitos remédios, constipação, dor"],
      ["==Dementia==, depression, loneliness, grief", "==Demência==, depressão, solidão, luto"],
      ["Needing help to shop, cook, open packets or eat", "Precisar de ajuda para comprar, cozinhar, abrir embalagens ou comer"],
      ["Unnecessary ==restrictive diets== (low salt, 'diabetic', low fat)", "==Dietas restritivas== desnecessárias (pouco sal, 'para diabético', pouca gordura)"]
    ),
    REVEAL(["Joan, 86, in residential care, eats half of each meal. Her new dentures hurt and she is on a 'diabetic diet' (HbA1c 6.1%). Name three changes.", "Joan, 86 anos, numa ILPI, come metade de cada refeição. A dentadura nova machuca e ela está numa 'dieta para diabético' (HbA1c 6,1%). Cite três mudanças."],
      ["1) ==Refer to a dentist== to fix the dentures. 2) ==Liberalise the diabetic diet==: her glucose is well controlled and she is malnourished. 3) ==Fortify meals and add nourishing snacks and drinks==; consider softer textures until her mouth heals. Monitor weight weekly at first.",
       "1) ==Encaminhar ao dentista== para ajustar a dentadura. 2) ==Liberar a dieta para diabético==: a glicemia está bem controlada e ela está desnutrida. 3) ==Enriquecer as refeições e acrescentar lanches e bebidas nutritivas==; considerar texturas mais macias até a boca melhorar. Pesar semanalmente no início."])
  ],
  key: [["Usually **several causes** together: appetite, teeth, swallowing, mood, medicines, help needed", "Geralmente **várias causas** juntas: apetite, dentes, deglutição, humor, remédios, necessidade de ajuda"], ["Fix the fixable: **dentures, constipation, pain**", "Resolva o que dá: **dentadura, constipação, dor**"], ["Restrictive diets often cause harm in frail older people", "Dietas restritivas costumam prejudicar idosos frágeis"]],
  src: ["https://www.agedcarequality.gov.au/providers/food-nutrition-dining/food-nutrition-dining-resources-providers"]
},
{
  t: ["What older people need", "Do que os idosos precisam"],
  b: [
    TABLE([["Nutrient", "Nutriente"], ["Older adults", "Idosos"]],
      [["Protein", "Proteína"], ["==1.0–1.2 g/kg== when well; ==1.2–1.5 g/kg== when unwell or malnourished (to limit sarcopenia)", "==1,0–1,2 g/kg== quando bem; ==1,2–1,5 g/kg== quando doente ou desnutrido (para limitar a sarcopenia)"]],
      [["Calcium", "Cálcio"], ["==1300 mg== (women 51+, men 71+)", "==1300 mg== (mulheres 51+, homens 71+)"]],
      [["Vitamin D", "Vitamina D"], ["AI ==15 µg== over 70; supplements are common in residential care", "AI ==15 µg== acima de 70; suplementos são comuns em ILPI"]],
      [["Fluid", "Líquidos"], ["Offer drinks ==often==, not only at meals; thirst is weaker", "Oferecer bebidas ==com frequência==, não só nas refeições; a sede é mais fraca"]]
    ),
    NOTE('exam', "==Liberalise therapeutic diets== in frail older people. A low-salt, low-fat or 'diabetic' diet that a resident doesn't enjoy usually does more harm (weight loss, falls) than good. Weight-loss diets are rarely appropriate.",
      "==Libere as dietas terapêuticas== em idosos frágeis. Uma dieta com pouco sal, pouca gordura ou 'para diabético' que o residente não gosta costuma fazer mais mal (perda de peso, quedas) que bem. Dietas para emagrecer raramente são adequadas."),
    NUM(["A frail 62 kg resident who is unwell needs 1.2 g/kg/day of protein. How many grams a day?", "Um residente frágil de 62 kg, doente, precisa de 1,2 g/kg/dia de proteína. Quantos gramas por dia?"], 74.4, 1, "g",
      ["62 × 1.2 ≈ 74 g protein a day.", "62 × 1,2 ≈ 74 g de proteína por dia."])
  ],
  key: [["Protein **1.0–1.2 g/kg** (well), **1.2–1.5** (unwell)", "Proteína **1,0–1,2 g/kg** (bem), **1,2–1,5** (doente)"], ["Calcium **1300 mg**; vitamin D AI **15 µg** over 70", "Cálcio **1300 mg**; vitamina D AI **15 µg** acima de 70"], ["**Liberalise** diets; offer fluids often", "**Libere** as dietas; ofereça líquidos com frequência"]],
  src: ["https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/calcium", "https://www.agedcarequality.gov.au/providers/food-nutrition-dining/food-nutrition-dining-resources-providers"]
},
{
  t: ["Screening with the MNA-SF", "Triagem com a MNA-SF"],
  b: [
    TABLE([["MNA-SF question", "Pergunta da MNA-SF"], ["Points", "Pontos"]],
      [["A. Food intake down over 3 months? severe / moderate / none", "A. Ingestão caiu nos últimos 3 meses? muito / moderada / não"], "0 / 1 / 2"],
      [["B. Weight loss in 3 months? > 3 kg / don't know / 1–3 kg / none", "B. Perda de peso em 3 meses? > 3 kg / não sabe / 1–3 kg / nenhuma"], "0 / 1 / 2 / 3"],
      [["C. Mobility? bed or chair / gets up but doesn't go out / goes out", "C. Mobilidade? cama ou cadeira / levanta mas não sai / sai"], "0 / 1 / 2"],
      [["D. Psychological stress or acute illness in 3 months? yes / no", "D. Estresse psicológico ou doença aguda em 3 meses? sim / não"], "0 / 2"],
      [["E. Dementia or depression? severe / mild / none", "E. Demência ou depressão? grave / leve / não"], "0 / 1 / 2"],
      [["F. BMI < 19 / 19–<21 / 21–<23 / ≥ 23 (or calf < 31 cm = 0, ≥ 31 cm = 3)", "F. IMC < 19 / 19–<21 / 21–<23 / ≥ 23 (ou panturrilha < 31 cm = 0, ≥ 31 cm = 3)"], "0 / 1 / 2 / 3"]
    ),
    P("Score: ==12–14 normal · 8–11 at risk · 0–7 malnourished==.", "Escore: ==12–14 normal · 8–11 em risco · 0–7 desnutrido==."),
    NUM(["Moderate drop in intake, lost 1–3 kg, gets up but doesn't go out, no acute illness, mild dementia, BMI 22. MNA-SF score?", "Ingestão caiu moderadamente, perdeu 1–3 kg, levanta mas não sai, sem doença aguda, demência leve, IMC 22. Escore MNA-SF?"], 9, 0, "",
      ["Intake 1 + weight loss 2 + mobility 1 + no acute illness 2 + mild dementia 1 + BMI 21–<23 2 = 9 → at risk (8–11).", "Ingestão 1 + perda de peso 2 + mobilidade 1 + sem doença aguda 2 + demência leve 1 + IMC 21–<23 2 = 9 → em risco (8–11)."]),
    NOTE('aus', "Residential aged care reports **quality indicators**, including ==significant unplanned weight loss (5% or more over 3 months)== and consecutive unplanned weight loss (every month for 3 months). Residents are weighed at least monthly.",
      "As ILPIs reportam **indicadores de qualidade**, incluindo ==perda de peso não planejada significativa (5% ou mais em 3 meses)== e perda de peso não planejada consecutiva (todo mês por 3 meses). Os residentes são pesados pelo menos uma vez por mês.")
  ],
  key: [["MNA-SF: **12–14 normal, 8–11 at risk, 0–7 malnourished**", "MNA-SF: **12–14 normal, 8–11 em risco, 0–7 desnutrido**"], ["Calf circumference can replace BMI", "A panturrilha pode substituir o IMC"], ["Quality indicator: **≥ 5% unplanned loss in 3 months**", "Indicador de qualidade: **≥ 5% de perda não planejada em 3 meses**"]],
  src: ["https://www.agedcarequality.gov.au/quality-standards/guide-completing-mini-nutritional-assessment-short-form"]
},
{
  t: ["Standard 6: food and nutrition", "Standard 6: alimentação e nutrição"],
  b: [
    P("The strengthened **Aged Care Quality Standards** made food and nutrition a standalone standard for residential care: ==Standard 6==. In short, older people should get ==plenty of food and drinks they enjoy==, that are nutritious, appetising and safe, with an ==enjoyable dining experience== and a sense of belonging.",
      "As **Aged Care Quality Standards** reforçadas tornaram a alimentação e nutrição um padrão próprio para as ILPIs: a ==Standard 6==. Resumindo, os idosos devem receber ==bastante comida e bebida de que gostem==, nutritivas, apetitosas e seguras, com uma ==experiência agradável nas refeições== e senso de pertencimento."),
    TABLE([["Outcome", "Resultado"], ["In practice", "Na prática"]],
      [["6.1 Partnering with older people on food and nutrition", "6.1 Parceria com os idosos na alimentação e nutrição"], ["Residents help plan menus; feedback on food is acted on", "Os residentes ajudam a planejar o cardápio; o retorno sobre a comida é levado em conta"]],
      [["6.2 Assessment of nutritional needs and preferences", "6.2 Avaliação das necessidades e preferências nutricionais"], ["Screening, weight monitoring, swallowing and texture needs, likes and culture", "Triagem, monitoramento do peso, deglutição e textura, gostos e cultura"]],
      [["6.3 Provision of food and drink", "6.3 Oferta de comida e bebida"], ["Varied, tasty, safe food (FSANZ, HACCP); choice; snacks and drinks any time; appealing texture-modified meals", "Comida variada, saborosa e segura (FSANZ, APPCC); escolha; lanches e bebidas a qualquer hora; refeições de textura modificada apetitosas"]],
      [["6.4 Dining experience", "6.4 Experiência nas refeições"], ["Pleasant dining room, enough staff to help, sharing meals with visitors", "Refeitório agradável, equipe suficiente para ajudar, compartilhar refeições com visitas"]]
    ),
    SORT(["Which Standard 6 outcome?", "Qual resultado da Standard 6?"], [["6.1 Partnering", "6.1 Parceria"], ["6.2 Assessment", "6.2 Avaliação"], ["6.3 Food and drink", "6.3 Comida e bebida"], ["6.4 Dining", "6.4 Refeições"]], [
      ["A residents' food committee reviews the new menu", "Um comitê de residentes revisa o novo cardápio", 0],
      ["Monthly weights and MNA-SF screening", "Pesagem mensal e triagem MNA-SF", 1],
      ["Moulded purees that look like the regular meal", "Purês modelados que parecem a refeição normal", 2],
      ["A daughter joins her mother for Sunday lunch", "Uma filha almoça com a mãe no domingo", 3],
      ["Sandwiches and drinks available overnight", "Sanduíches e bebidas disponíveis à noite", 2],
      ["Staff sit with residents who need help to eat", "Funcionários sentam com residentes que precisam de ajuda para comer", 3]
    ])
  ],
  key: [["**Standard 6** = food and nutrition (residential care)", "**Standard 6** = alimentação e nutrição (ILPI)"], ["Outcomes: **6.1 partnering · 6.2 assessment · 6.3 food and drink · 6.4 dining experience**", "Resultados: **6.1 parceria · 6.2 avaliação · 6.3 comida e bebida · 6.4 refeições**"], ["Enjoyment, choice and help to eat matter as much as nutrients", "Prazer, escolha e ajuda para comer importam tanto quanto os nutrientes"]],
  src: ["https://www.agedcarequality.gov.au/strengthened-quality-standards/food-and-nutrition", "https://www.health.gov.au/resources/videos/new-aged-care-act-strengthened-aged-care-quality-standards-standard-6-the-food-and-nutrition"]
},
{
  t: ["Dementia, swallowing and drinks", "Demência, deglutição e bebidas"],
  b: [
    UL(
      ["People who walk around a lot: ==finger foods== they can eat on the move; extra snacks (they burn more energy).", "Quem anda muito: ==alimentos para comer com a mão== enquanto caminha; lanches extras (gastam mais energia)."],
      ["Cue and help: one food at a time, ==contrasting plate colours==, quiet room, show how to start.", "Estimular e ajudar: um alimento por vez, ==pratos de cor contrastante==, ambiente calmo, mostrar como começar."],
      ["Dehydration: offer drinks every time staff visit, jelly, ice blocks, soups; watch constipation and confusion.", "Desidratação: oferecer bebida a cada visita da equipe, gelatina, picolé, sopas; atenção a constipação e confusão."],
      ["Coughing at meals: refer to the ==speech pathologist==; follow the IDDSI level they prescribe.", "Tosse nas refeições: encaminhar ao ==fonoaudiólogo==; seguir o nível IDDSI que ele prescrever."],
      ["Near the end of life: ==comfort and pleasure== come first; small amounts of favourite foods.", "Perto do fim da vida: ==conforto e prazer== vêm primeiro; pequenas quantidades das comidas preferidas."]
    ),
    PICK(["A resident with dementia keeps leaving the table at meals. What helps MOST?", "Uma residente com demência sai da mesa nas refeições. O que ajuda MAIS?"],
      [["Offer finger foods she can eat while walking", "Oferecer alimentos que ela possa comer andando"], ["Make her sit until she finishes", "Fazê-la ficar sentada até terminar"], ["Skip the meal and wait for dinner", "Pular a refeição e esperar o jantar"], ["Replace all meals with supplements", "Trocar todas as refeições por suplementos"]], 0,
      ["Finger foods and snacks keep intake up without forcing. Restraint is never appropriate.", "Alimentos para comer com a mão e lanches mantêm a ingestão sem forçar. Contenção nunca é adequada."])
  ],
  key: [["Dementia: **finger foods**, cueing, contrast, calm", "Demência: **alimentos de comer com a mão**, estímulo, contraste, calma"], ["Offer drinks often; watch dehydration and constipation", "Ofereça bebidas com frequência; atenção a desidratação e constipação"], ["Coughing at meals → **speech pathologist**", "Tosse nas refeições → **fonoaudiólogo**"], ["End of life: **comfort and pleasure**", "Fim da vida: **conforto e prazer**"]],
  src: ["https://www.agedcarequality.gov.au/providers/food-nutrition-dining/food-nutrition-dining-resources-providers"]
}
],
checks: {2: [93, 'n0'], 4: [94, 'n2']},
qs: [
  {stem: ["A frail 84-year-old with diet-controlled diabetes in residential care is losing weight. Her 'diabetic diet' should usually be", "Uma senhora frágil de 84 anos com diabetes controlado só com dieta, numa ILPI, está perdendo peso. A 'dieta para diabético' dela deve, em geral, ser"],
   opts: [["liberalised to normal foods she enjoys", "liberada para comidas normais de que ela gosta"], ["made stricter", "mais rigorosa"], ["changed to a weight-loss plan", "trocada por um plano para emagrecer"], ["kept, with snacks removed", "mantida, tirando os lanches"]], ans: 0,
   why: ["In frail older people, restrictive diets drive weight loss; with good glucose control, liberalise.", "Em idosos frágeis, dietas restritivas levam à perda de peso; com glicemia controlada, libere."], src: "https://www.agedcarequality.gov.au/providers/food-nutrition-dining/food-nutrition-dining-resources-providers"},
  {stem: ["In the national aged care quality indicators, 'significant unplanned weight loss' means", "Nos indicadores nacionais de qualidade da ILPI, 'perda de peso não planejada significativa' significa"],
   opts: [["losing 5% or more of body weight over 3 months", "perder 5% ou mais do peso em 3 meses"], ["losing 1 kg in a year", "perder 1 kg em um ano"], ["any weight loss at all", "qualquer perda de peso"], ["losing 10 kg in one month", "perder 10 kg em um mês"]], ans: 0,
   why: ["Significant unplanned weight loss = ≥ 5% over 3 months; consecutive = losing weight every month for 3 months.", "Perda não planejada significativa = ≥ 5% em 3 meses; consecutiva = perder peso todo mês por 3 meses."], src: "https://www.agedcarequality.gov.au/providers/food-nutrition-dining/food-nutrition-dining-resources-providers"},
  {stem: ["Which Standard 6 outcome covers a pleasant dining room and sharing meals with visitors?", "Qual resultado da Standard 6 trata de refeitório agradável e de compartilhar refeições com visitas?"],
   opts: [["6.4 Dining experience", "6.4 Experiência nas refeições"], ["6.1 Partnering with older people", "6.1 Parceria com os idosos"], ["6.2 Assessment of needs and preferences", "6.2 Avaliação de necessidades e preferências"], ["6.3 Provision of food and drink", "6.3 Oferta de comida e bebida"]], ans: 0,
   why: ["6.4 is the dining experience: environment, help to eat, social connection and visitors.", "A 6.4 é a experiência nas refeições: ambiente, ajuda para comer, convívio e visitas."], src: "https://www.agedcarequality.gov.au/strengthened-quality-standards/food-and-nutrition"},
  {stem: ["A resident with dementia keeps getting up during meals. The MOST helpful strategy is", "Um residente com demência levanta durante as refeições. A estratégia MAIS útil é"],
   opts: [["offering finger foods he can eat while walking", "oferecer alimentos que ele possa comer andando"], ["insisting he stays seated until finished", "insistir para ele ficar sentado até terminar"], ["skipping the meal", "pular a refeição"], ["giving only oral supplements", "dar só suplementos orais"]], ans: 0,
   why: ["Finger foods and frequent snacks maintain intake for people who walk a lot.", "Alimentos de comer com a mão e lanches frequentes mantêm a ingestão de quem anda muito."], src: "https://www.agedcarequality.gov.au/providers/food-nutrition-dining/food-nutrition-dining-resources-providers"}
]
});
