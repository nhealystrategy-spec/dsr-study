MOD({
id: 9, mins: 35,
hook: ["Waiting to give peanut and egg 'to be safe' can make allergy more likely. The 2026 Australian advice is very clear, and the exam expects you to know it.", "Esperar para dar amendoim e ovo 'por segurança' pode deixar a alergia mais provável. A orientação australiana de 2026 é bem clara, e a prova espera que você saiba."],
teasers: [["The growth chart Australia uses before age 2, and the one after", "A curva de crescimento que a Austrália usa antes dos 2 anos, e a de depois"], ["How much cow's milk is too much for a toddler", "Quanto leite de vaca é demais para uma criança pequena"], ["Who decides how much a fussy toddler eats", "Quem decide quanto come uma criança pequena seletiva"]],
goals: [
  ["Give Australian milk feeding advice for the first 2 years", "Dar a orientação australiana sobre leite nos 2 primeiros anos"],
  ["Plan starting solids, including the 2026 ASCIA allergen advice", "Planejar a introdução alimentar, incluindo a orientação de alérgenos da ASCIA 2026"],
  ["Choose and read the right growth chart", "Escolher e ler a curva de crescimento certa"],
  ["Handle fussy eating and too much milk", "Lidar com seletividade alimentar e excesso de leite"]
],
pages: [
{
  t: ["Milk feeding: the first two years", "Leite: os dois primeiros anos"],
  b: [
    UL(
      ["==Exclusive breastfeeding to around 6 months==, then continue while starting solids, ==to 12 months and beyond== for as long as mother and baby wish.", "==Aleitamento materno exclusivo até cerca de 6 meses==, depois continuar durante a introdução alimentar, ==até 12 meses ou mais==, enquanto mãe e bebê quiserem."],
      ["If not breastfed: ==infant formula== until 12 months. Make it exactly as the label says, with cooled boiled water; never add extra powder.", "Se não mamar no peito: ==fórmula infantil== até 12 meses. Preparar exatamente como no rótulo, com água fervida e resfriada; nunca colocar pó a mais."],
      ["==Cow's milk as the main drink only from 12 months== (small amounts in food from about 6 months are fine). Before that it is low in iron and too high in protein and salts.", "==Leite de vaca como bebida principal só a partir dos 12 meses== (pequenas quantidades em preparações a partir dos 6 meses estão ok). Antes disso tem pouco ferro e excesso de proteína e sais."],
      ["Use ==full-cream milk== for toddlers; ==reduced-fat milk is not recommended before 2 years==. Toddler milks are not needed.", "Use ==leite integral== para crianças pequenas; ==leite com menos gordura não é recomendado antes dos 2 anos==. Os 'compostos lácteos' não são necessários."],
      ["From around 6 months, offer small sips of ==cooled boiled tap water==. No juice, tea, cordial or soft drink.", "A partir dos 6 meses, oferecer goles de ==água da torneira fervida e resfriada==. Nada de suco, chá, refresco ou refrigerante."]
    ),
    NOTE('br', "Same core message as Brazil's guide for children under 2: exclusive breastfeeding to 6 months, no sugar. In Australia, 'toddler milk' marketing is common; you can say it is ==not needed==.",
      "A mesma mensagem central do guia brasileiro para menores de 2 anos: aleitamento exclusivo até 6 meses, sem açúcar. Na Austrália, o marketing de 'toddler milk' (composto lácteo) é comum; você pode dizer que ==não é necessário==."),
    PICK(["A mother asks if her 8-month-old can drink cow's milk from a cup instead of formula. Best answer?", "Uma mãe pergunta se o bebê de 8 meses pode tomar leite de vaca no copo em vez da fórmula. Melhor resposta?"],
      [["Not as the main drink until 12 months; small amounts in food are fine", "Não como bebida principal até 12 meses; pequenas quantidades em preparações ok"], ["Yes, any milk is fine from 6 months", "Sim, qualquer leite serve a partir dos 6 meses"], ["Only reduced-fat cow's milk", "Só leite de vaca com menos gordura"], ["Switch to rice milk instead", "Trocar por bebida de arroz"]], 0,
      ["Cow's milk can replace breast milk or formula as the main drink only from 12 months.", "O leite de vaca só pode substituir o leite materno ou a fórmula como bebida principal a partir dos 12 meses."])
  ],
  key: [["Exclusive breastfeeding to **~6 months**; continue to **12 months+**", "Aleitamento exclusivo até **~6 meses**; continuar até **12 meses+**"], ["Cow's milk as main drink from **12 months**; **full-cream** until 2 years", "Leite de vaca como bebida principal a partir de **12 meses**; **integral** até 2 anos"], ["Water from ~6 months; no juice or sweet drinks", "Água a partir de ~6 meses; sem suco nem bebidas doces"]],
  src: ["https://www.rch.org.au/kidsinfo/fact_sheets/Nutrition_babies_toddlers/", "https://www.rch.org.au/kidsinfo/fact_sheets/Breastfeeding/"]
},
{
  t: ["Starting solids (and allergens)", "Introdução alimentar (e alérgenos)"],
  b: [
    P("Start solids ==around 6 months, not before 4 months==, when the baby shows readiness: good head control, sits with support, shows interest in food, and no longer pushes food out with the tongue.",
      "Comece os sólidos ==por volta dos 6 meses, não antes dos 4==, quando o bebê mostra prontidão: bom controle da cabeça, senta com apoio, se interessa pela comida e não empurra mais a comida com a língua."),
    UL(
      ["First foods should be ==rich in iron==: iron-fortified infant cereal, minced meat, chicken, fish, tofu, legumes.", "Os primeiros alimentos devem ser ==ricos em ferro==: cereal infantil fortificado com ferro, carne moída, frango, peixe, tofu, leguminosas."],
      ["**ASCIA 2026**: give ==well-cooked egg and peanut (smooth peanut butter) soon after the baby is ready==, and other common allergens (cow's milk in food, wheat, tree nut pastes, sesame, soy, fish, shellfish) in the first year.", "**ASCIA 2026**: oferecer ==ovo bem cozido e amendoim (pasta lisa) logo que o bebê estiver pronto== e outros alérgenos comuns (leite de vaca em preparações, trigo, pastas de castanhas, gergelim, soja, peixe, frutos do mar) no primeiro ano."],
      ["Once tolerated, keep giving them ==at least once a week==. A mild rash around the mouth is often not an allergy.", "Depois de tolerados, continuar oferecendo ==pelo menos uma vez por semana==. Uma vermelhidão leve ao redor da boca muitas vezes não é alergia."],
      ["==No honey before 12 months== (botulism). ==No whole nuts under 3 years== (choking): use smooth pastes.", "==Sem mel antes de 12 meses== (botulismo). ==Sem castanhas inteiras antes dos 3 anos== (engasgo): use pastas lisas."]
    ),
    ORDER(["Order the textures as a baby progresses", "Ordene as texturas conforme o bebê avança"], [
      ["Smooth purees", "Purês lisos"],
      ["Mashed foods", "Alimentos amassados"],
      ["Lumpy and chopped foods", "Alimentos com pedaços e picados"],
      ["Finger foods", "Alimentos para pegar com a mão"],
      ["Family foods by about 12 months", "Comida da família por volta dos 12 meses"]
    ]),
    NOTE('exam', "Delaying allergens ==increases== allergy risk. If an exam case delays egg or peanut 'because a sibling has allergies', the best answer is usually to ==introduce them now== (with medical review first if the baby has severe eczema or a known allergy).",
      "Adiar os alérgenos ==aumenta== o risco de alergia. Se um caso da prova adia ovo ou amendoim 'porque o irmão tem alergia', a melhor resposta costuma ser ==introduzir agora== (com avaliação médica antes se o bebê tiver eczema grave ou alergia conhecida).")
  ],
  key: [["Solids **~6 months, not before 4**; iron-rich first", "Sólidos **~6 meses, não antes dos 4**; ricos em ferro primeiro"], ["ASCIA 2026: **egg and peanut soon after ready**; keep giving **at least weekly**", "ASCIA 2026: **ovo e amendoim logo que pronto**; manter **pelo menos 1×/semana**"], ["No honey < **12 months**; no whole nuts < **3 years**", "Sem mel < **12 meses**; sem castanhas inteiras < **3 anos**"], ["Progress textures; family foods by ~12 months", "Avançar as texturas; comida da família por ~12 meses"]],
  src: ["https://allergy.org.au/hp/papers/infant-feeding-and-allergy-prevention/", "https://www.rch.org.au/kidsinfo/fact_sheets/Nutrition_babies_toddlers/"]
},
{
  t: ["Growth: which chart, what pattern?", "Crescimento: qual curva, qual padrão?"],
  b: [
    TABLE([["Age", "Idade"], ["Chart used in Australia", "Curva usada na Austrália"]],
      [["0–2 years", "0–2 anos"], ["==WHO== (based on healthy breastfed babies)", "==OMS== (baseada em bebês saudáveis amamentados)"]],
      [["2–18 years", "2–18 anos"], ["==CDC==, including BMI-for-age", "==CDC==, incluindo IMC para a idade"]]
    ),
    UL(
      ["Measure ==length lying down under 2 years==, standing height after.", "Medir ==comprimento deitado até 2 anos==, depois altura em pé."],
      ["For babies born premature, plot by ==corrected age== until about 2 years.", "Para bebês prematuros, use a ==idade corrigida== até cerca de 2 anos."],
      ["The ==trend matters more than one point==. Crossing ==two major centile lines== needs assessment.", "A ==tendência importa mais que um ponto==. Cruzar ==duas linhas principais de percentil== precisa de avaliação."],
      ["BMI-for-age (CDC): overweight ==≥ 85th centile==, obesity ==≥ 95th centile==.", "IMC para a idade (CDC): sobrepeso ==≥ percentil 85==, obesidade ==≥ percentil 95==."]
    ),
    PICK(["Which chart should you use to plot a 3-year-old's weight?", "Qual curva usar para o peso de uma criança de 3 anos?"],
      [["CDC chart", "Curva do CDC"], ["WHO chart", "Curva da OMS"], ["Adult BMI table", "Tabela de IMC de adulto"], ["The Brazilian chart from the Caderneta", "A curva brasileira da Caderneta"]], 0,
      ["Australia uses WHO charts from 0–2 years and CDC charts from 2–18 years.", "A Austrália usa as curvas da OMS de 0–2 anos e do CDC de 2–18 anos."])
  ],
  key: [["**WHO 0–2 years**, **CDC 2–18 years**", "**OMS 0–2 anos**, **CDC 2–18 anos**"], ["Length lying < 2 years; corrected age for prematurity", "Comprimento deitado < 2 anos; idade corrigida para prematuros"], ["Trend over time; crossing **2 major centiles** = assess", "Tendência ao longo do tempo; cruzar **2 percentis principais** = avaliar"], ["CDC BMI-for-age: overweight **≥ 85th**, obesity **≥ 95th**", "IMC/idade CDC: sobrepeso **≥ p85**, obesidade **≥ p95**"]],
  src: ["https://www.rch.org.au/childgrowth/about_child_growth/Growth_charts/", "https://www.rch.org.au/clinicalguide/guideline_index/Slow_weight_gain/"]
},
{
  t: ["Fussy eating and too much milk", "Seletividade e excesso de leite"],
  b: [
    P("Fussy eating is normal in toddlers. Australian dietitians often use the **Division of Responsibility** (Ellyn Satter): the adult and the child each have a job.",
      "A seletividade é normal em crianças pequenas. Nutricionistas australianos costumam usar a **Divisão de Responsabilidades** (Ellyn Satter): o adulto e a criança têm cada um seu papel."),
    SORT(["Parent's job or child's job?", "Papel do adulto ou da criança?"], [["Parent decides", "O adulto decide"], ["Child decides", "A criança decide"]], [
      ["What food is offered", "Qual comida é oferecida", 0],
      ["When meals and snacks happen", "Quando acontecem refeições e lanches", 0],
      ["Where eating happens (table, no screens)", "Onde se come (à mesa, sem telas)", 0],
      ["Whether to eat", "Se vai comer", 1],
      ["How much to eat", "Quanto vai comer", 1]
    ]),
    UL(
      ["Offer new foods ==10–15 times== alongside familiar ones; no pressure, bribes or 'clean your plate'.", "Ofereça alimentos novos ==10–15 vezes== junto com os conhecidos; sem pressão, recompensas ou 'raspe o prato'."],
      ["==Too much milk== (more than about ==500 mL a day== after 12 months) fills toddlers up and causes ==iron deficiency==. Wean off the bottle by 12–18 months.", "==Leite demais== (mais de cerca de ==500 mL por dia== depois dos 12 meses) enche a criança e causa ==deficiência de ferro==. Tirar a mamadeira entre 12 e 18 meses."],
      ["Slow weight gain (faltering growth): check intake, feeding interactions and medical causes, and ==refer to the doctor== before changing the diet a lot.", "Ganho de peso lento: avaliar ingestão, interação na alimentação e causas médicas, e ==encaminhar ao médico== antes de mudar muito a dieta."]
    )
  ],
  key: [["Parent: **what, when, where**; child: **whether and how much**", "Adulto: **o quê, quando, onde**; criança: **se come e quanto**"], ["Repeated exposure **10–15 times**, no pressure", "Exposição repetida **10–15 vezes**, sem pressão"], ["Milk > **500 mL/day** after 12 months → iron deficiency", "Leite > **500 mL/dia** depois dos 12 meses → deficiência de ferro"]],
  src: ["https://www.rch.org.au/kidsinfo/fact_sheets/Nutrition_babies_toddlers/", "https://www.rch.org.au/nutrition/resources/"]
}
],
checks: {2: [65, 68], 4: [67, 'n0']},
qs: [
  {stem: ["Using the Division of Responsibility, who decides HOW MUCH a toddler eats?", "Pela Divisão de Responsabilidades, quem decide QUANTO a criança pequena come?"],
   opts: [["The child", "A criança"], ["The parent", "O adulto"], ["The dietitian", "O nutricionista"], ["The childcare educator", "A educadora da creche"]], ans: 0,
   why: ["Adults decide what, when and where; the child decides whether and how much to eat.", "O adulto decide o quê, quando e onde; a criança decide se come e quanto come."], src: "https://www.rch.org.au/kidsinfo/fact_sheets/Nutrition_babies_toddlers/"},
  {stem: ["Reduced-fat milk is not recommended as a child's main milk until", "O leite com menos gordura não é recomendado como leite principal da criança até"],
   opts: [["2 years of age", "os 2 anos"], ["6 months of age", "os 6 meses"], ["12 months of age", "os 12 meses"], ["5 years of age", "os 5 anos"]], ans: 0,
   why: ["Toddlers 1–2 years should have full-cream milk; reduced-fat milk is suitable from 2 years.", "Crianças de 1–2 anos devem tomar leite integral; o leite com menos gordura é adequado a partir dos 2 anos."], src: "https://www.rch.org.au/kidsinfo/fact_sheets/Nutrition_babies_toddlers/"},
  {stem: ["Which first food best meets a 6-month-old baby's rising iron needs?", "Qual primeiro alimento atende melhor à necessidade crescente de ferro de um bebê de 6 meses?"],
   opts: [["Iron-fortified infant cereal or minced meat", "Cereal infantil fortificado com ferro ou carne moída"], ["Apple puree", "Purê de maçã"], ["Rice crackers", "Biscoito de arroz"], ["Diluted fruit juice", "Suco de fruta diluído"]], ans: 0,
   why: ["Iron stores fall around 6 months, so first foods should be iron-rich.", "As reservas de ferro caem por volta dos 6 meses, então os primeiros alimentos devem ser ricos em ferro."], src: "https://www.rch.org.au/kidsinfo/fact_sheets/Nutrition_babies_toddlers/"},
  {stem: ["A 15-month-old was born at 30 weeks. To assess growth you should", "Uma criança de 15 meses nasceu com 30 semanas. Para avaliar o crescimento você deve"],
   opts: [["plot measurements using corrected age", "registrar as medidas usando a idade corrigida"], ["use the CDC chart", "usar a curva do CDC"], ["use adult BMI cut-offs", "usar os pontos de corte de IMC de adulto"], ["ignore prematurity after 12 months", "ignorar a prematuridade depois dos 12 meses"]], ans: 0,
   why: ["Correct for prematurity until about 2 years, and use the WHO chart under 2 years.", "Corrija a prematuridade até cerca de 2 anos e use a curva da OMS antes dos 2 anos."], src: "https://www.rch.org.au/childgrowth/about_child_growth/Growth_charts/"}
]
});
