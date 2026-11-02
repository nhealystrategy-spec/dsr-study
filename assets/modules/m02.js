MOD({
id: 2, mins: 35,
hook: ["In Australia, half a cup of cooked rice is one serve. So a normal Brazilian plate of rice can be four serves, and the exam counts serves, not grams.", "Na Austrália, meia xícara de arroz cozido é uma porção. Então um prato brasileiro normal de arroz pode ter quatro porções, e a prova conta porções, não gramas."],
teasers: [["The one food group that is always 2 serves for every adult", "O grupo alimentar que é sempre 2 porções para todo adulto"], ["Why beans can count in two food groups, but never both at once", "Por que o feijão pode contar em dois grupos, mas nunca nos dois ao mesmo tempo"], ["Which nutrient value to use for one client, and which for 500 teenagers", "Qual valor de referência usar para uma paciente, e qual para 500 adolescentes"]],
goals: [
  ["Name the five Australian Dietary Guidelines", "Citar as cinco Diretrizes Alimentares Australianas"],
  ["Sort foods into the five groups or 'discretionary'", "Classificar alimentos nos cinco grupos ou como 'discricionários'"],
  ["Count standard serves and compare with the daily recommendation", "Contar porções padrão e comparar com a recomendação diária"],
  ["Choose the right NRV: EAR, RDI, AI, UL, EER, AMDR or SDT", "Escolher o NRV certo: EAR, RDI, AI, UL, EER, AMDR ou SDT"]
],
pages: [
{
  t: ["The five Australian Dietary Guidelines", "As cinco Diretrizes Alimentares Australianas"],
  b: [
    P("The **Australian Dietary Guidelines** (NHMRC, 2013) are still the current national advice. They are written for healthy people of all ages. In plain words, they say:",
      "As **{{Diretrizes Alimentares Australianas|Australian Dietary Guidelines}}** (NHMRC, 2013) ainda são a orientação nacional em vigor. São escritas para pessoas saudáveis de todas as idades. Em palavras simples, elas dizem:"),
    OL(
      ["Be active and eat to stay at a ==healthy weight==.", "Seja ativo e coma para manter um ==peso saudável==."],
      ["Enjoy a ==wide variety== of foods from the ==five food groups==, and drink plenty of water.", "Aproveite uma ==grande variedade== de alimentos dos ==cinco grupos alimentares== e beba bastante água."],
      ["==Limit== saturated fat, added salt, added sugars and alcohol.", "==Limite== gordura saturada, sal adicionado, açúcares adicionados e álcool."],
      ["Encourage, support and promote ==breastfeeding==.", "Incentive, apoie e promova a ==amamentação==."],
      ["Care for your food: prepare and store it ==safely==.", "Cuide do seu alimento: prepare e armazene com ==segurança==."]
    ),
    NOTE('br', "Brazil's guide (2014) is built around **food processing** (NOVA) and eating together. Australia's is built around **food groups, standard serves and nutrients**. In the exam, answer in Australian terms: 'serves of vegetables', 'discretionary foods', not 'ultra-processed'.",
      "O guia brasileiro (2014) é construído em torno do **grau de processamento** (NOVA) e de comer junto. O australiano é construído em torno de **grupos alimentares, porções padrão e nutrientes**. Na prova, responda em termos australianos: 'porções de hortaliças', '{{alimentos discricionários|discretionary foods}}', e não 'ultraprocessados'."),
    NOTE('aus', "NHMRC is reviewing the guidelines. Draft guidelines were expected for public consultation in late 2026, with the final version later. Until then, the 2013 guidelines are the ones examined.",
      "O NHMRC está revisando as diretrizes. O rascunho era esperado para consulta pública no fim de 2026, com a versão final depois. Até lá, as diretrizes de 2013 são as cobradas na prova."),
    ORDER(["Put the five guidelines in their official order (1 to 5)", "Coloque as cinco diretrizes na ordem oficial (1 a 5)"], [
      ["Healthy weight and activity", "Peso saudável e atividade"],
      ["Variety from the five food groups", "Variedade dos cinco grupos"],
      ["Limit saturated fat, salt, sugars, alcohol", "Limitar gordura saturada, sal, açúcares, álcool"],
      ["Breastfeeding", "Amamentação"],
      ["Food safety", "Segurança dos alimentos"]
    ])
  ],
  key: [["5 guidelines: **weight**, **variety**, **limit**, **breastfeeding**, **food safety**", "5 diretrizes: **peso**, **variedade**, **limitar**, **amamentação**, **segurança dos alimentos**"], ["Still the **2013** guidelines (review underway)", "Ainda valem as diretrizes de **2013** (revisão em andamento)"], ["Speak in food groups and serves, not NOVA", "Fale em grupos e porções, não em NOVA"]],
  src: ["https://www.eatforhealth.gov.au/guidelines/guidelines", "https://www.nhmrc.gov.au/health-advice/nutrition/australian-dietary-guidelines-review"]
},
{
  t: ["The plate: five groups and 'discretionary' foods", "O prato: cinco grupos e alimentos 'discricionários'"],
  b: [
    FIG(`<div class="plate" role="img" aria-label="Australian Guide to Healthy Eating, simplified"><div class="plate-in" style="background:conic-gradient(#4f9d5d 0 31%,#e2a33b 0 61%,#c9524b 0 75%,#4a84c9 0 88%,#9a68c8 0)"></div></div>`,
      ["Simplified plate (not to scale): 🟩 vegetables and legumes · 🟧 grain foods · 🟥 lean meats and alternatives · 🟦 milk, yoghurt, cheese and alternatives · 🟪 fruit", "Prato simplificado (fora de escala): 🟩 hortaliças e leguminosas · 🟧 cereais · 🟥 carnes magras e alternativas · 🟦 leite, iogurte, queijo e alternativas · 🟪 frutas"]),
    P("The **Australian Guide to Healthy Eating** shows the five groups in roughly the proportions we should eat them, with water in the middle. Outside the plate are **discretionary foods**: not needed for health, and high in saturated fat, added sugars, salt or alcohol.",
      "O **{{Guia Australiano de Alimentação Saudável|Australian Guide to Healthy Eating}}** mostra os cinco grupos mais ou menos na proporção em que devemos comê-los, com água no centro. Fora do prato ficam os **{{alimentos discricionários|discretionary foods}}**: não são necessários para a saúde e têm muita gordura saturada, açúcar adicionado, sal ou álcool."),
    UL(
      ["Discretionary examples: cakes, biscuits, lollies, chips, soft drink, pies, sausages and processed meats, alcohol.", "Exemplos discricionários: bolos, biscoitos, balas, salgadinhos, refrigerante, tortas, linguiças e embutidos, álcool."],
      ["Small amounts of unsaturated spreads and oils are part of a healthy diet (they are in the allowance, not discretionary).", "Pequenas quantidades de cremes e óleos insaturados fazem parte de uma dieta saudável (estão na cota permitida, não são discricionários)."]
    ),
    NOTE('warn', "**Legumes** (beans, lentils, chickpeas) can count as a ==vegetable== serve ==or== a ==meat-and-alternatives== serve, but not both at the same time.",
      "As **{{leguminosas|legumes}}** (feijão, lentilha, grão-de-bico) podem contar como porção de ==hortaliça== ==ou== de ==carnes e alternativas==, mas não as duas ao mesmo tempo."),
    VIDEO('7rgI5q-XnKg', 'Edith Cowan University', 2, ["Facts about the Australian Guide to Healthy Eating", "Fatos sobre o Guia Australiano de Alimentação Saudável"],
      ["A 2-minute tour of the plate: the five food groups, why the segments are different sizes (==more grains and vegetables==; less meat, dairy and fruit) and foods to have only sometimes. It was made for teachers, so it is easy to follow.",
       "Um passeio de 2 minutos pelo prato: os cinco grupos, por que as fatias têm tamanhos diferentes (==mais cereais e vegetais==; menos carnes, laticínios e frutas) e os alimentos para comer só de vez em quando. Foi feito para professores, então é fácil de acompanhar."]),
    SORT(["Which group? (or discretionary)", "Qual grupo? (ou discricionário)"],
      [["Vegetables", "Hortaliças"], ["Fruit", "Frutas"], ["Grains", "Cereais"], ["Meat & alternatives", "Carnes e alternativas"], ["Dairy & alternatives", "Laticínios e alternativas"], ["Discretionary", "Discricionário"]], [
      ["Brown rice", "Arroz integral", 2],
      ["Hard cheese", "Queijo duro", 4],
      ["Tinned tuna", "Atum em lata", 3],
      ["Pumpkin", "Abóbora", 0],
      ["Mango", "Manga", 1],
      ["Meat pie", "Torta de carne", 5],
      ["Firm tofu", "Tofu firme", 3],
      ["Calcium-fortified soy milk", "Bebida de soja fortificada com cálcio", 4],
      ["Regular soft drink", "Refrigerante comum", 5],
      ["Weet-Bix", "Weet-Bix", 2]
    ])
  ],
  key: [["Five groups + water; **discretionary** foods sit outside the plate", "Cinco grupos + água; os **discricionários** ficam fora do prato"], ["Legumes count as **vegetable or protein**, not both", "Leguminosas contam como **hortaliça ou proteína**, não as duas"], ["Calcium-fortified plant milk counts as **dairy alternative**", "Bebida vegetal fortificada com cálcio conta como **alternativa aos laticínios**"]],
  src: ["https://www.eatforhealth.gov.au/guidelines/australian-guide-healthy-eating"]
},
{
  t: ["Standard serves", "Porções padrão"],
  b: [
    P("A **standard serve** is a fixed amount used to plan and compare diets. It is not the portion someone actually eats: a big bowl of pasta can be ==3 serves==.",
      "A **{{porção padrão|standard serve}}** é uma quantidade fixa usada para planejar e comparar dietas. Não é a porção que a pessoa realmente come: um prato grande de macarrão pode ser ==3 porções==."),
    TABLE([["Group", "Grupo"], ["1 serve is about…", "1 porção é cerca de…"]],
      [["Vegetables & legumes (≈ 75 g, 100–350 kJ)", "Hortaliças e leguminosas (≈ 75 g, 100–350 kJ)"], ["½ cup cooked vegetables or legumes · 1 cup salad · ½ medium potato", "½ xícara de hortaliças ou leguminosas cozidas · 1 xícara de salada · ½ batata média"]],
      [["Fruit (≈ 150 g, 350 kJ)", "Frutas (≈ 150 g, 350 kJ)"], ["1 medium apple or banana · 2 small apricots or plums · 1 cup diced fruit", "1 maçã ou banana média · 2 damascos ou ameixas pequenas · 1 xícara de fruta picada"]],
      [["Grains (500 kJ)", "Cereais (500 kJ)"], ["==1 slice bread (40 g)== · ==½ cup cooked rice, pasta or porridge== · ⅔ cup wheat flakes · ¼ cup muesli", "==1 fatia de pão (40 g)== · ==½ xícara de arroz, macarrão ou mingau cozido== · ⅔ xícara de flocos de trigo · ¼ xícara de muesli"]],
      [["Lean meat & alternatives (500–600 kJ)", "Carnes magras e alternativas (500–600 kJ)"], ["65 g cooked red meat · 80 g cooked chicken · 100 g cooked fish · ==2 large eggs== · 1 cup legumes · 170 g tofu · 30 g nuts", "65 g de carne vermelha cozida · 80 g de frango cozido · 100 g de peixe cozido · ==2 ovos grandes== · 1 xícara de leguminosas · 170 g de tofu · 30 g de oleaginosas"]],
      [["Milk, yoghurt, cheese & alternatives (500–600 kJ)", "Leite, iogurte, queijo e alternativas (500–600 kJ)"], ["==1 cup (250 mL) milk== · 2 slices (40 g) hard cheese · ¾ cup (200 g) yoghurt · 1 cup fortified plant milk", "==1 xícara (250 mL) de leite== · 2 fatias (40 g) de queijo duro · ¾ xícara (200 g) de iogurte · 1 xícara de bebida vegetal fortificada"]],
      [["Discretionary (≈ 600 kJ)", "Discricionário (≈ 600 kJ)"], ["2 scoops ice-cream · 1 can (375 mL) soft drink · 2–3 sweet biscuits", "2 bolas de sorvete · 1 lata (375 mL) de refrigerante · 2–3 biscoitos doces"]]
    ),
    NUM(["A client eats 2 cups of cooked rice at dinner. How many grain serves is that?", "Um paciente come 2 xícaras de arroz cozido no jantar. Quantas porções de cereais são?"], 4, 0, ["serves", "porções"],
      ["½ cup cooked rice = 1 serve, so 2 cups = 4 serves.", "½ xícara de arroz cozido = 1 porção, então 2 xícaras = 4 porções."]),
    PICK(["Which of these is ONE serve of fruit?", "Qual destes é UMA porção de fruta?"],
      [["1 medium banana", "1 banana média"], ["1 cup of fruit juice", "1 copo de suco de fruta"], ["2 medium bananas", "2 bananas médias"], ["½ cup of dried apricots", "½ xícara de damasco seco"]], 0,
      ["About 150 g fresh fruit = 1 serve. Juice (125 mL, no added sugar) or dried fruit (30 g) only count occasionally.", "Cerca de 150 g de fruta fresca = 1 porção. Suco (125 mL, sem açúcar) ou fruta seca (30 g) só contam de vez em quando."])
  ],
  key: [["Grain serve: **1 slice bread** or **½ cup cooked rice/pasta**", "Porção de cereal: **1 fatia de pão** ou **½ xícara de arroz/macarrão cozido**"], ["Veg serve **75 g**; fruit serve **150 g**", "Porção de hortaliça **75 g**; de fruta **150 g**"], ["Protein serve: **65 g red meat, 2 eggs, 1 cup legumes, 170 g tofu**", "Porção de proteína: **65 g de carne vermelha, 2 ovos, 1 xícara de leguminosas, 170 g de tofu**"], ["Dairy serve: **250 mL milk, 40 g cheese, 200 g yoghurt**", "Porção de laticínio: **250 mL de leite, 40 g de queijo, 200 g de iogurte**"]],
  src: ["https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/serve-sizes"]
},
{
  t: ["How many serves a day?", "Quantas porções por dia?"],
  b: [
    P("Recommended average daily serves for adults. Taller or more active people can add 0–3 extra serves from the five groups (or occasional discretionary foods).",
      "Média recomendada de porções diárias para adultos. Pessoas mais altas ou mais ativas podem acrescentar 0–3 porções dos cinco grupos (ou alimentos discricionários de vez em quando)."),
    TABLE([["", ""], ["Veg", "Hort."], ["Fruit", "Fruta"], ["Grains", "Cereais"], ["Meat & alt.", "Carnes e alt."], ["Dairy & alt.", "Laticínios"]],
      [["Men 19–50", "Homens 19–50"], "==6==", "2", "6", "3", "2½"],
      [["Men 51–70", "Homens 51–70"], "5½", "2", "6", "2½", "2½"],
      [["Men 70+", "Homens 70+"], "5", "2", "4½", "2½", "3½"],
      [["Women 19–50", "Mulheres 19–50"], "==5==", "2", "6", "2½", "2½"],
      [["Women 51–70", "Mulheres 51–70"], "5", "2", "4", "2", "==4=="],
      [["Women 70+", "Mulheres 70+"], "5", "2", "3", "2", "==4=="],
      [["Pregnant", "Gestantes"], "5", "2", "==8½==", "==3½==", "2½"],
      [["Breastfeeding", "Lactantes"], "==7½==", "2", "==9==", "2½", "2½"]
    ),
    NOTE('tip', "Patterns worth remembering: ==fruit is always 2==; older women need ==4 dairy== (bone health); pregnancy adds grains and protein; breastfeeding adds the most vegetables and grains.",
      "Padrões que valem lembrar: ==fruta é sempre 2==; mulheres mais velhas precisam de ==4 laticínios== (saúde óssea); a gestação aumenta cereais e proteína; a amamentação aumenta mais as hortaliças e os cereais."),
    NUM(["A 30-year-old woman eats 3 serves of vegetables a day. How many more serves does she need to meet the recommendation?", "Uma mulher de 30 anos come 3 porções de hortaliças por dia. Quantas porções a mais ela precisa para atingir a recomendação?"], 2, 0, "",
      ["Women 19–50 need 5 serves: 5 − 3 = 2 more.", "Mulheres de 19–50 anos precisam de 5 porções: 5 − 3 = 2 a mais."]),
    NOTE('aus', "Children's serves are in separate tables on Eat for Health. You don't need them by heart, but know where to find them.",
      "As porções para crianças estão em tabelas separadas no Eat for Health. Não precisa decorar, mas saiba onde encontrar.")
  ],
  key: [["Adults: **fruit 2** for everyone", "Adultos: **fruta 2** para todos"], ["Women 19–50: veg **5**, grains **6**, meat **2½**, dairy **2½**; men 19–50: veg **6**, meat **3**", "Mulheres 19–50: hortaliças **5**, cereais **6**, carnes **2½**, laticínios **2½**; homens 19–50: hortaliças **6**, carnes **3**"], ["Women 51+: dairy **4**", "Mulheres 51+: laticínios **4**"], ["Pregnancy: grains **8½**, meat **3½**; breastfeeding: veg **7½**, grains **9**", "Gestação: cereais **8½**, carnes **3½**; amamentação: hortaliças **7½**, cereais **9**"]],
  src: ["https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/recommended-number-serves-adults"]
},
{
  t: ["Nutrient Reference Values: which one, when?", "Valores de Referência de Nutrientes: qual usar e quando?"],
  b: [
    P("Australia and New Zealand share **Nutrient Reference Values (NRVs)**. Brazil mostly uses the US DRIs, which work the same way, so the ideas will feel familiar. The exam tests ==which value answers which question==.",
      "Austrália e Nova Zelândia compartilham os **{{Valores de Referência de Nutrientes|Nutrient Reference Values}} (NRVs)**. O Brasil usa principalmente as DRIs americanas, que funcionam do mesmo jeito, então as ideias vão parecer familiares. A prova cobra ==qual valor responde a qual pergunta==."),
    TABLE([["Value", "Valor"], ["What it means", "O que significa"], ["Use it to…", "Use para…"]],
      [["**EAR** Estimated Average Requirement", "**EAR** Necessidade Média Estimada"], ["Meets the needs of ==half== of healthy people", "Atende ==metade== das pessoas saudáveis"], ["==Assess a group's== intake", "==Avaliar a ingestão de um grupo=="]],
      [["**RDI** Recommended Dietary Intake", "**RDI** Ingestão Dietética Recomendada"], ["Meets the needs of ==97–98%== of healthy people", "Atende ==97–98%== das pessoas saudáveis"], ["==Plan for an individual==", "==Planejar para um indivíduo=="]],
      [["**AI** Adequate Intake", "**AI** Ingestão Adequada"], ["Used when there isn't enough evidence for an EAR/RDI", "Usada quando não há evidência suficiente para EAR/RDI"], ["Plan for an individual (instead of RDI)", "Planejar para um indivíduo (no lugar da RDI)"]],
      [["**UL** Upper Level of Intake", "**UL** Limite Superior de Ingestão"], ["Highest intake unlikely to cause harm", "Maior ingestão que provavelmente não causa dano"], ["==Check safety==, e.g. supplements", "==Checar segurança==, ex. suplementos"]],
      [["**EER** Estimated Energy Requirement", "**EER** Necessidade Energética Estimada"], ["Average energy need for age, sex, size, activity", "Necessidade média de energia por idade, sexo, tamanho, atividade"], ["Estimate energy needs", "Estimar a necessidade de energia"]],
      [["**AMDR** Acceptable Macronutrient Distribution Range", "**AMDR** Faixa Aceitável de Distribuição de Macronutrientes"], ["Protein ==15–25%==, fat ==20–35%==, carbohydrate ==45–65%== of energy", "Proteína ==15–25%==, gordura ==20–35%==, carboidrato ==45–65%== da energia"], ["Check the macronutrient balance", "Checar o equilíbrio de macronutrientes"]],
      [["**SDT** Suggested Dietary Target", "**SDT** Meta Dietética Sugerida"], ["Intake that may help ==reduce chronic disease risk==", "Ingestão que pode ajudar a ==reduzir o risco de doença crônica=="], ["e.g. sodium 2000 mg/day", "ex. sódio 2000 mg/dia"]]
    ),
    SORT(["Which NRV answers the question?", "Qual NRV responde à pergunta?"],
      [["EAR", "EAR"], ["RDI / AI", "RDI / AI"], ["UL", "UL"], ["AMDR", "AMDR"], ["SDT", "SDT"]], [
      ["Planning iron intake for one pregnant client", "Planejar a ingestão de ferro de uma gestante", 1],
      ["Is the average iron intake of 500 teenagers adequate?", "A ingestão média de ferro de 500 adolescentes é adequada?", 0],
      ["Is a 10 000 IU vitamin A supplement safe?", "Um suplemento de 10 000 UI de vitamina A é seguro?", 2],
      ["Is 40% of energy from fat too much?", "40% da energia vindo de gordura é demais?", 3],
      ["A sodium goal to lower blood pressure risk", "Uma meta de sódio para reduzir o risco de hipertensão", 4],
      ["Vitamin K needs (no EAR has been set)", "Necessidade de vitamina K (não há EAR definida)", 1]
    ])
  ],
  key: [["Individual → **RDI** (or **AI**); group → **EAR**; safety → **UL**", "Indivíduo → **RDI** (ou **AI**); grupo → **EAR**; segurança → **UL**"], ["AMDR: protein **15–25%**, fat **20–35%**, carbohydrate **45–65%**", "AMDR: proteína **15–25%**, gordura **20–35%**, carboidrato **45–65%**"], ["SDT = chronic disease prevention target", "SDT = meta de prevenção de doenças crônicas"]],
  src: ["https://www.eatforhealth.gov.au/nutrient-reference-values/introduction"]
},
{
  t: ["Alcohol: the standard drink", "Álcool: a dose padrão"],
  b: [
    P("NHMRC's 2020 alcohol guidelines: for healthy adults, ==no more than 10 standard drinks a week and no more than 4 on any one day==. Under 18, pregnant, planning pregnancy or breastfeeding: ==no alcohol is safest==.",
      "As diretrizes de álcool do NHMRC (2020): para adultos saudáveis, ==no máximo 10 doses padrão por semana e no máximo 4 em um mesmo dia==. Menores de 18 anos, gestantes, quem planeja engravidar ou amamenta: ==não beber é o mais seguro==."),
    P("One **standard drink** contains ==10 g of alcohol==. Australian labels must show how many standard drinks are in the container.",
      "Uma **{{dose padrão|standard drink}}** tem ==10 g de álcool==. Os rótulos australianos são obrigados a mostrar quantas doses padrão há na embalagem."),
    NOTE('tip', "Formula: volume (L) × % alcohol × 0.789 = standard drinks. Example: a 150 mL glass of 13% wine = 0.15 × 13 × 0.789 ≈ ==1.5 standard drinks==.",
      "Fórmula: volume (L) × % de álcool × 0,789 = doses padrão. Exemplo: uma taça de 150 mL de vinho a 13% = 0,15 × 13 × 0,789 ≈ ==1,5 dose padrão=="),
    NUM(["A 375 mL can of full-strength beer is 4.8% alcohol. About how many standard drinks is it?", "Uma lata de 375 mL de cerveja comum tem 4,8% de álcool. Quantas doses padrão, aproximadamente?"], 1.4, 0.15, "",
      ["0.375 × 4.8 × 0.789 ≈ 1.4 standard drinks.", "0,375 × 4,8 × 0,789 ≈ 1,4 dose padrão."]),
    NOTE('exam', "In diet histories (like the official sample with beer and wine), count the alcohol: it adds energy (29 kJ/g) and is usually one of the priorities to discuss.",
      "Nas anamneses alimentares (como no exemplo oficial com cerveja e vinho), conte o álcool: ele soma energia (29 kJ/g) e costuma ser uma das prioridades da conversa.")
  ],
  key: [["≤ **10** standard drinks/week and ≤ **4** on any day", "≤ **10** doses padrão/semana e ≤ **4** em um dia"], ["1 standard drink = **10 g** alcohol", "1 dose padrão = **10 g** de álcool"], ["Pregnancy, breastfeeding, under 18: **none**", "Gestação, amamentação, menores de 18: **nenhuma**"]],
  src: ["https://www.nhmrc.gov.au/health-advice/alcohol"]
}
],
checks: {2: ['n0', 'n1'], 4: [5, 7]},
qs: [
  {stem: ["Guideline 3 of the Australian Dietary Guidelines advises people to", "A Diretriz 3 das Diretrizes Alimentares Australianas orienta as pessoas a"],
   opts: [["limit saturated fat, added salt, added sugars and alcohol", "limitar gordura saturada, sal adicionado, açúcares adicionados e álcool"], ["avoid all dairy fat and red meat", "evitar toda gordura láctea e carne vermelha"], ["eat only wholegrain and organic foods", "comer só alimentos integrais e orgânicos"], ["count kilojoules at every meal", "contar quilojoules em todas as refeições"]], ans: 0,
   why: ["Guideline 3 is about limiting foods high in saturated fat, added salt, added sugars, and alcohol.", "A Diretriz 3 trata de limitar alimentos com muita gordura saturada, sal adicionado, açúcares adicionados e álcool."], src: "https://www.eatforhealth.gov.au/guidelines/guidelines"},
  {stem: ["In the Australian Guide to Healthy Eating, 1 cup of cooked lentils can count as", "No Australian Guide to Healthy Eating, 1 xícara de lentilha cozida pode contar como"],
   opts: [["a vegetable serve or a meat-and-alternatives serve", "uma porção de hortaliça ou de carnes e alternativas"], ["a grain serve", "uma porção de cereais"], ["a dairy serve", "uma porção de laticínios"], ["a discretionary food", "um alimento discricionário"]], ans: 0,
   why: ["Legumes can count in either group, but not both at once.", "As leguminosas podem contar em qualquer um dos dois grupos, mas não nos dois ao mesmo tempo."], src: "https://www.eatforhealth.gov.au/guidelines/australian-guide-healthy-eating"},
  {stem: ["A pregnant woman aged 28 is recommended about how many grain serves a day?", "Para uma gestante de 28 anos, recomenda-se cerca de quantas porções de cereais por dia?"],
   opts: [["8½", "8½"], ["6", "6"], ["4", "4"], ["12", "12"]], ans: 0,
   why: ["Pregnant women (19–50) need 8½ grain serves, up from 6.", "Gestantes (19–50) precisam de 8½ porções de cereais, contra 6 fora da gestação."], src: "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/recommended-number-serves-adults"},
  {stem: ["To decide whether a high-dose vitamin A supplement is safe, compare it with the", "Para decidir se um suplemento de vitamina A em dose alta é seguro, compare com o"],
   opts: [["Upper Level of Intake (UL)", "Limite Superior de Ingestão (UL)"], ["Estimated Average Requirement (EAR)", "Necessidade Média Estimada (EAR)"], ["Adequate Intake (AI)", "Ingestão Adequada (AI)"], ["Suggested Dietary Target (SDT)", "Meta Dietética Sugerida (SDT)"]], ans: 0,
   why: ["The UL is the highest daily intake unlikely to cause harm.", "O UL é a maior ingestão diária que provavelmente não causa dano."], src: "https://www.eatforhealth.gov.au/nutrient-reference-values/introduction"}
]
});
