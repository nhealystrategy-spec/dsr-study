MOD({
id: 15, mins: 30,
hook: ["Food safety and labelling questions are pure Australian rules, so they are easy marks once learnt. Know the temperatures, the 2-hour/4-hour rule, HACCP, label parts and who regulates what.",
       "As questões de segurança dos alimentos e rotulagem são regras australianas puras, então são pontos fáceis depois de aprendidas. Saiba as temperaturas, a regra de 2 horas/4 horas, o APPCC, as partes do rótulo e quem regula o quê."],
goals: [
  ["Apply the temperature danger zone, the 2-hour/4-hour rule and cooling rules", "Aplicar a zona de perigo, a regra de 2 horas/4 horas e as regras de resfriamento"],
  ["List the 7 HACCP principles and who needs a food safety program", "Listar os 7 princípios do APPCC e quem precisa de programa de segurança dos alimentos"],
  ["Read a nutrition information panel, ingredients and date marks", "Ler a tabela nutricional, os ingredientes e as datas"],
  ["Know who regulates food, supplements and marketing", "Saber quem regula alimentos, suplementos e publicidade"]
],
pages: [
{
  t: ["Temperature control", "Controle de temperatura"],
  b: [
    P("Bacteria grow fastest in the ==danger zone: 5 °C to 60 °C==. Keep cold food ==at 5 °C or below== and hot food ==at 60 °C or above==. Cook chicken, mince and sausages until ==75 °C in the centre==.",
      "As bactérias crescem mais rápido na ==zona de perigo: 5 °C a 60 °C==. Mantenha a comida fria ==a 5 °C ou menos== e a quente ==a 60 °C ou mais==. Cozinhe frango, carne moída e linguiças até ==75 °C no centro==."),
    TABLE([["Total time ready-to-eat food has been between 5 °C and 60 °C", "Tempo total que o alimento pronto ficou entre 5 °C e 60 °C"], ["What to do", "O que fazer"]],
      [["Under 2 hours", "Menos de 2 horas"], ["==Use, or refrigerate== for later", "==Usar ou refrigerar== para depois"]],
      [["2 to 4 hours", "2 a 4 horas"], ["==Use now==; don't put it back in the fridge", "==Usar agora==; não voltar para a geladeira"]],
      [["Over 4 hours", "Mais de 4 horas"], ["==Throw it out==", "==Descartar=="]]
    ),
    P("**Cooling** cooked food: from ==60 °C to 21 °C within 2 hours==, then ==21 °C to 5 °C within a further 4 hours== (shallow containers, ice baths). **Reheating**: quickly, until steaming hot, then hold at 60 °C or above.",
      "**Resfriamento** de comida cozida: de ==60 °C para 21 °C em até 2 horas==, depois de ==21 °C para 5 °C em mais 4 horas== (recipientes rasos, banho de gelo). **Reaquecimento**: rápido, até soltar vapor, e depois manter a 60 °C ou mais."),
    SORT(["Ready-to-eat food out of temperature control. What now?", "Alimento pronto fora do controle de temperatura. E agora?"], [["Use or refrigerate", "Usar ou refrigerar"], ["Use now, don't refrigerate", "Usar agora, não refrigerar"], ["Throw out", "Descartar"]], [
      ["Sandwiches on a buffet for 90 minutes", "Sanduíches no bufê por 90 minutos", 0],
      ["Cooked rice on the bench for 3 hours", "Arroz cozido na bancada por 3 horas", 1],
      ["Chicken salad in a warm car for 5 hours", "Salada de frango num carro quente por 5 horas", 2],
      ["Quiche out of the fridge for 30 minutes", "Quiche fora da geladeira por 30 minutos", 0],
      ["Fruit platter out for 3½ hours", "Travessa de frutas fora por 3h30", 1],
      ["Leftover curry forgotten overnight", "Curry que sobrou esquecido a noite toda", 2]
    ])
  ],
  key: [["Danger zone **5–60 °C**; cold **≤ 5 °C**, hot **≥ 60 °C**; cook to **75 °C**", "Zona de perigo **5–60 °C**; frio **≤ 5 °C**, quente **≥ 60 °C**; cozinhar até **75 °C**"], ["2h/4h rule: **< 2 h** use or fridge · **2–4 h** use now · **> 4 h** bin", "Regra 2h/4h: **< 2 h** usar ou geladeira · **2–4 h** usar já · **> 4 h** descartar"], ["Cooling: **60→21 °C in 2 h**, **21→5 °C in 4 h** more", "Resfriamento: **60→21 °C em 2 h**, **21→5 °C em mais 4 h**"]],
  src: ["https://www.foodstandards.gov.au/business/food-safety/2-hour-4-hour-rule", "https://www.foodstandards.gov.au/business/food-safety/cooling-and-reheating-food"]
},
{
  t: ["HACCP and food safety programs", "APPCC e programas de segurança dos alimentos"],
  b: [
    ORDER(["Put the 7 HACCP principles in order", "Coloque os 7 princípios do APPCC em ordem"], [
      ["Conduct a hazard analysis", "Fazer a análise de perigos"],
      ["Identify critical control points (CCPs)", "Identificar os pontos críticos de controle (PCC)"],
      ["Set critical limits (e.g. ≤ 5 °C)", "Definir limites críticos (ex. ≤ 5 °C)"],
      ["Monitor the CCPs", "Monitorar os PCC"],
      ["Take corrective action when a limit is missed", "Tomar ação corretiva quando um limite falha"],
      ["Verify that the system works", "Verificar se o sistema funciona"],
      ["Keep records", "Manter registros"]
    ]),
    UL(
      ["A **critical control point** is a step where control is ==essential to prevent, remove or reduce a hazard== (e.g. cooking, cooling, cold holding).", "Um **ponto crítico de controle** é uma etapa em que o controle é ==essencial para prevenir, eliminar ou reduzir um perigo== (ex. cocção, resfriamento, conservação a frio)."],
      ["FSANZ **Standard 3.3.1** requires a ==food safety program== for businesses serving food to ==vulnerable people: hospitals, aged care, childcare== and delivered meals.", "A **Standard 3.3.1** da FSANZ exige um ==programa de segurança dos alimentos== para quem serve comida a ==pessoas vulneráveis: hospitais, ILPIs, creches== e entrega de refeições."],
      ["Since December 2023, most food service businesses also need a ==food safety supervisor== and trained food handlers (Standard 3.2.2A).", "Desde dezembro de 2023, a maioria dos serviços de alimentação também precisa de um ==supervisor de segurança dos alimentos== e manipuladores treinados (Standard 3.2.2A)."]
    ),
    NOTE('br', "HACCP = ==APPCC==, critical control point = ==PCC==. Your Brazilian 'Boas Práticas' and APPCC training transfers directly; just use the English terms.",
      "HACCP = ==APPCC==, critical control point = ==PCC==. Sua formação brasileira em Boas Práticas e APPCC vale diretamente; só use os termos em inglês.")
  ],
  key: [["HACCP: **hazard analysis → CCPs → limits → monitor → corrective action → verify → records**", "APPCC: **análise de perigos → PCC → limites → monitorar → ação corretiva → verificar → registros**"], ["CCP = step where control is **essential**", "PCC = etapa onde o controle é **essencial**"], ["Std **3.3.1**: food safety programs for hospitals, aged care, childcare", "Std **3.3.1**: programas de segurança para hospitais, ILPIs, creches"]],
  src: ["https://www.foodauthority.nsw.gov.au/industry/audits-and-compliance/food-safety-programs-haccp", "https://www.foodstandards.gov.au/business/food-safety-standards"]
},
{
  t: ["Reading an Australian label", "Lendo um rótulo australiano"],
  b: [
    UL(
      ["**Nutrition Information Panel**: energy (==kJ==), protein, fat, saturated fat, carbohydrate, sugars, sodium, ==per serve and per 100 g== (or 100 mL). ==Compare products per 100 g== because serve sizes differ.", "**Tabela nutricional (NIP)**: energia (==kJ==), proteína, gordura, gordura saturada, carboidrato, açúcares, sódio, ==por porção e por 100 g== (ou 100 mL). ==Compare produtos por 100 g==, porque as porções variam."],
      ["**Ingredients** are listed in ==descending order by ingoing weight==, with the ==percentage of characterising ingredients== (e.g. '% strawberries').", "Os **ingredientes** vêm em ==ordem decrescente de peso na formulação==, com o ==percentual dos ingredientes característicos== (ex. '% de morango')."],
      ["**Use-by** = ==safety==: don't eat after it; can't be sold after it. **Best-before** = ==quality==: may still be safe and can be sold if fit to eat.", "**Use-by** = ==segurança==: não consumir depois; não pode ser vendido depois. **Best-before** = ==qualidade==: pode continuar seguro e pode ser vendido se estiver próprio."],
      ["**Health Star Rating**: ==voluntary==, ½–5 stars, for comparing ==similar products== (cereal vs cereal).", "**Health Star Rating**: ==voluntário==, ½–5 estrelas, para comparar ==produtos parecidos== (cereal com cereal)."],
      ["Claims are regulated: e.g. 'low fat' = ≤ 3 g/100 g (solids); 'low salt' = ≤ 120 mg sodium/100 g. Health claims need FSANZ-approved food–health links.", "As alegações são reguladas: ex. 'low fat' = ≤ 3 g/100 g (sólidos); 'low salt' = ≤ 120 mg de sódio/100 g. Alegações de saúde precisam de relações alimento–saúde aprovadas pela FSANZ."]
    ),
    NUM(["A cereal has 18 g of sugars per 45 g serve. How many grams of sugars per 100 g? (1 decimal)", "Um cereal tem 18 g de açúcares por porção de 45 g. Quantos gramas por 100 g? (1 casa decimal)"], 40, 0.2, "g",
      ["18 ÷ 45 × 100 = 40 g per 100 g — 40% sugars.", "18 ÷ 45 × 100 = 40 g por 100 g — 40% de açúcares."]),
    NOTE('br', "Brazil's front-of-pack 'lupa' (magnifying glass) warns about high sugar, fat and sodium. Australia uses the ==voluntary Health Star Rating== instead, and kJ comes first on the panel.",
      "A 'lupa' brasileira na frente da embalagem alerta sobre muito açúcar, gordura e sódio. A Austrália usa o ==Health Star Rating voluntário==, e o kJ vem primeiro na tabela.")
  ],
  key: [["Compare **per 100 g**; energy in **kJ**", "Compare **por 100 g**; energia em **kJ**"], ["Ingredients by **ingoing weight**, % characterising ingredient", "Ingredientes por **peso na formulação**, % do ingrediente característico"], ["**Use-by = safety**; **best-before = quality**", "**Use-by = segurança**; **best-before = qualidade**"], ["HSR is **voluntary**; compare within a category", "HSR é **voluntário**; compare dentro da categoria"]],
  src: ["https://baker.edu.au/health-hub/fact-sheets/label-reading", "https://www.foodstandards.gov.au/consumer/labelling/dates", "https://www.foodstandards.gov.au/consumer/labelling/ingredients"]
},
{
  t: ["Who regulates what?", "Quem regula o quê?"],
  b: [
    TABLE([["Organisation", "Órgão"], ["Role", "Papel"]],
      [["**FSANZ**", "**FSANZ**"], ["Develops the ==Australia New Zealand Food Standards Code== (labelling, additives, composition, special purpose foods; food safety standards in Chapter 3 apply in Australia only)", "Elabora o ==Australia New Zealand Food Standards Code== (rotulagem, aditivos, composição, alimentos para fins especiais; as normas de segurança do Capítulo 3 valem só na Austrália)"]],
      [["**State and territory food authorities, local councils**", "**Autoridades estaduais de alimentos, prefeituras**"], ["==Enforce== the Code: inspections, licences, food safety programs", "==Fiscalizam== o Code: inspeções, licenças, programas de segurança"]],
      [["**TGA**", "**TGA**"], ["Medicines, including most ==vitamin and mineral supplements== (complementary medicines)", "Medicamentos, incluindo a maioria dos ==suplementos de vitaminas e minerais== (medicamentos complementares)"]],
      [["**ACCC**", "**ACCC**"], ["Misleading or deceptive marketing and consumer law", "Publicidade enganosa e direito do consumidor"]]
    ),
    P("Special purpose foods in the Code include ==infant formula==, ==food for special medical purposes== (e.g. oral supplements and enteral feeds), formulated meal replacements and sports foods.",
      "Os alimentos para fins especiais no Code incluem ==fórmula infantil==, ==alimentos para fins médicos especiais== (ex. suplementos orais e dietas enterais), substitutos de refeição e alimentos esportivos."),
    SORT(["Who would handle it?", "Quem cuidaria disso?"], [["FSANZ", "FSANZ"], ["State food authority", "Autoridade estadual"], ["TGA", "TGA"], ["ACCC", "ACCC"]], [
      ["Writing the rules for allergen labelling", "Escrever as regras de rotulagem de alérgenos", 0],
      ["Inspecting a café kitchen", "Inspecionar a cozinha de um café", 1],
      ["A new vitamin D tablet", "Um novo comprimido de vitamina D", 2],
      ["An ad falsely claiming a juice 'cures diabetes'", "Um anúncio dizendo falsamente que um suco 'cura diabetes'", 3],
      ["Setting composition rules for infant formula", "Definir regras de composição da fórmula infantil", 0],
      ["Closing a takeaway shop after food poisoning", "Fechar uma lanchonete após intoxicação alimentar", 1]
    ])
  ],
  key: [["**FSANZ** writes the Code; **states/councils** enforce it", "A **FSANZ** escreve o Code; **estados/prefeituras** fiscalizam"], ["**TGA**: medicines and most supplements; **ACCC**: misleading marketing", "**TGA**: remédios e a maioria dos suplementos; **ACCC**: publicidade enganosa"], ["Special purpose foods: infant formula, FSMP, meal replacements, sports foods", "Alimentos para fins especiais: fórmula infantil, FSMP, substitutos de refeição, alimentos esportivos"]],
  src: ["https://www.foodstandards.gov.au/food-standards-code"]
}
],
checks: {2: [101, 102], 4: [104, 'n1']},
qs: [
  {stem: ["Which date mark is about SAFETY, so the food cannot legally be sold after it?", "Qual data é sobre SEGURANÇA, de modo que o alimento não pode ser vendido depois dela?"],
   opts: [["Use-by date", "Data 'use-by'"], ["Best-before date", "Data 'best-before'"], ["Baked-on date", "Data 'baked-on'"], ["Packed-on date", "Data 'packed-on'"]], ans: 0,
   why: ["Use-by dates are about safety; best-before dates are about quality.", "A data use-by é sobre segurança; a best-before é sobre qualidade."], src: "https://www.foodstandards.gov.au/consumer/labelling/dates"},
  {stem: ["The Health Star Rating is", "O Health Star Rating é"],
   opts: [["a voluntary front-of-pack rating for comparing similar products", "uma classificação voluntária na frente da embalagem para comparar produtos parecidos"], ["a mandatory label on all packaged foods", "um rótulo obrigatório em todos os alimentos embalados"], ["a rating of how natural a food is", "uma nota de quão natural é o alimento"], ["a measure of allergen risk", "uma medida de risco de alérgenos"]], ans: 0,
   why: ["HSR is voluntary and compares products within the same category.", "O HSR é voluntário e compara produtos da mesma categoria."], src: "https://baker.edu.au/health-hub/fact-sheets/label-reading"},
  {stem: ["FSANZ Standard 3.3.1 requires a food safety program for businesses serving food to", "A Standard 3.3.1 da FSANZ exige programa de segurança dos alimentos para quem serve comida a"],
   opts: [["hospital patients, aged care residents and children in childcare", "pacientes de hospital, residentes de ILPI e crianças em creches"], ["restaurant customers only", "só clientes de restaurantes"], ["supermarket shoppers", "clientes de supermercados"], ["people cooking at home", "pessoas cozinhando em casa"]], ans: 0,
   why: ["Standard 3.3.1 covers food service to vulnerable persons: hospitals, aged care, childcare and delivered meals.", "A Standard 3.3.1 cobre alimentação de pessoas vulneráveis: hospitais, ILPIs, creches e entrega de refeições."], src: "https://www.foodstandards.gov.au/business/food-safety-standards"},
  {stem: ["Which organisation regulates vitamin and mineral supplements sold as medicines in Australia?", "Qual órgão regula os suplementos de vitaminas e minerais vendidos como medicamentos na Austrália?"],
   opts: [["TGA", "TGA"], ["FSANZ", "FSANZ"], ["ACCC", "ACCC"], ["Dietitians Australia", "Dietitians Australia"]], ans: 0,
   why: ["The Therapeutic Goods Administration regulates medicines, including most complementary medicines and supplements.", "A Therapeutic Goods Administration regula medicamentos, incluindo a maioria dos medicamentos complementares e suplementos."], src: "https://www.foodstandards.gov.au/food-standards-code"}
]
});
