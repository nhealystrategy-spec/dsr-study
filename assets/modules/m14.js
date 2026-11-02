MOD({
id: 14, mins: 30,
hook: ["Your Brazilian UAN training is a real advantage here: 'cook-chill' is just 'cocção-resfriamento'. The Australian twist is in the menu rules.", "Sua formação em UAN no Brasil é uma vantagem de verdade aqui: 'cook-chill' é só 'cocção-resfriamento'. A diferença australiana está nas regras de cardápio."],
teasers: [["Why a hospital can use a one-week menu but an aged care home can't", "Por que um hospital pode usar um cardápio de uma semana e uma ILPI não"], ["The only two drinks an Australian childcare centre should offer", "As únicas duas bebidas que uma creche australiana deve oferecer"], ["The best way to see what residents really eat", "A melhor forma de ver o que os residentes realmente comem"]],
goals: [
  ["Compare cook-fresh, cook-chill, cook-freeze and assembly-serve systems", "Comparar os sistemas cook-fresh, cook-chill, cook-freeze e assembly-serve"],
  ["Choose menu type and cycle length for each setting", "Escolher o tipo de cardápio e o tamanho do ciclo para cada serviço"],
  ["Assess and improve a menu (plate waste, satisfaction, standards)", "Avaliar e melhorar um cardápio (resto-ingestão, satisfação, normas)"],
  ["Apply childcare and school canteen guidelines", "Aplicar as orientações de creches e cantinas escolares"]
],
pages: [
{
  t: ["Production systems", "Sistemas de produção"],
  b: [
    TABLE([["System", "Sistema"], ["How it works", "Como funciona"], ["Trade-offs", "Prós e contras"]],
      [["**Cook-fresh** (cook-serve)", "**Cook-fresh** (cocção e distribuição)"], ["Cooked and served the same day", "Preparado e servido no mesmo dia"], ["Fresh taste; needs cooks at every meal time, peaks of work", "Sabor fresco; precisa de cozinheiros em todo horário, picos de trabalho"]],
      [["**Cook-chill**", "**Cook-chill**"], ["Cooked, ==chilled rapidly==, stored up to about 5 days, ==rethermalised== before serving", "Preparado, ==resfriado rapidamente==, armazenado até cerca de 5 dias e ==regenerado== antes de servir"], ["Production planned ahead, steady staffing; needs strict temperature control", "Produção planejada, equipe estável; exige controle rígido de temperatura"]],
      [["**Cook-freeze**", "**Cook-freeze**"], ["Cooked and frozen; stored for weeks to months", "Preparado e congelado; armazenado por semanas a meses"], ["Long storage; some foods freeze badly", "Armazenamento longo; alguns alimentos não congelam bem"]],
      [["**Assembly-serve**", "**Assembly-serve**"], ["Buys ready-prepared food; heats and assembles", "Compra comida pronta; aquece e monta"], ["Less kitchen space and skill; less control over quality and cost", "Menos espaço e habilidade na cozinha; menos controle de qualidade e custo"]]
    ),
    P("**Centralised plating**: meals plated in the main kitchen (consistent portions, less food in the ward). **Decentralised**: bulk food sent to wards and plated there (more choice at the bedside, hotter food, more ward staff).",
      "**Porcionamento centralizado**: refeições montadas na cozinha central (porções padronizadas, menos comida na enfermaria). **Descentralizado**: comida a granel enviada às enfermarias e montada lá (mais escolha à beira do leito, comida mais quente, mais equipe na enfermaria)."),
    SORT(["Which system is it?", "Qual sistema é?"], [["Cook-fresh", "Cook-fresh"], ["Cook-chill", "Cook-chill"], ["Cook-freeze", "Cook-freeze"], ["Assembly-serve", "Assembly-serve"]], [
      ["Lasagne made Monday, chilled, reheated Thursday", "Lasanha feita na segunda, resfriada, reaquecida na quinta", 1],
      ["Soup cooked at 10 am and served at noon", "Sopa feita às 10 h e servida ao meio-dia", 0],
      ["Casseroles stored for 2 months, then reheated", "Ensopados armazenados por 2 meses e depois reaquecidos", 2],
      ["Bought-in frozen meals heated in a small kitchen", "Refeições congeladas compradas e aquecidas numa cozinha pequena", 3]
    ]),
    NOTE('br', "Same concepts as UAN: 'cocção e distribuição imediata' = cook-fresh; 'cocção-resfriamento' = cook-chill. Learn the English names, they are used as-is in exam questions.",
      "Os mesmos conceitos da UAN: 'cocção e distribuição imediata' = cook-fresh; 'cocção-resfriamento' = cook-chill. Aprenda os nomes em inglês, eles aparecem assim nas questões.")
  ],
  key: [["**Cook-chill**: chill rapidly → store ≤ ~5 days → rethermalise", "**Cook-chill**: resfriar rápido → armazenar ≤ ~5 dias → regenerar"], ["Cook-freeze: weeks to months; assembly-serve: bought-in food", "Cook-freeze: semanas a meses; assembly-serve: comida comprada pronta"], ["Centralised vs decentralised **plating**", "Porcionamento **centralizado** x **descentralizado**"]],
  src: ["https://pmc.ncbi.nlm.nih.gov/articles/PMC9796490/"]
},
{
  t: ["Planning the menu", "Planejando o cardápio"],
  b: [
    UL(
      ["**Selective** menus let people choose (often bedside or electronic ordering); **non-selective** menus serve one set meal.", "Cardápios **seletivos** deixam a pessoa escolher (muitas vezes pedido à beira do leito ou eletrônico); **não seletivos** servem uma refeição fixa."],
      ["**Cycle length** depends on length of stay: ==short stays (acute hospital) → short cycles, about 1–2 weeks==; ==long stays (aged care, childcare) → longer cycles (3–4+ weeks) and seasonal changes==.", "O **tamanho do ciclo** depende do tempo de permanência: ==internação curta (hospital de agudos) → ciclos curtos, cerca de 1–2 semanas==; ==permanência longa (ILPI, creche) → ciclos mais longos (3–4+ semanas) e mudanças sazonais==."],
      ["Check the menu against the setting's ==nutrition standard== (e.g. NSW Agency for Clinical Innovation hospital standards; aged care menu standards).", "Confira o cardápio com a ==norma de nutrição== do serviço (ex. normas hospitalares da NSW Agency for Clinical Innovation; normas de cardápio para ILPI)."],
      ["Include ==therapeutic and texture-modified (IDDSI)== options, allergy management, and ==cultural and religious needs== (halal, kosher, vegetarian).", "Inclua opções ==terapêuticas e de textura modificada (IDDSI)==, manejo de alergias e ==necessidades culturais e religiosas== (halal, kosher, vegetariana)."]
    ),
    VIDEO('1XuDziFDbNI', 'HealthShare NSW', 2, ["My Food Choice in NSW public hospitals", "My Food Choice nos hospitais públicos de NSW"],
      ["A real ==selective menu==. Staff take a picture menu on an iPad to the bedside, and patients order ==closer to mealtime==, with ==more choice==. The ward's diet order goes straight into the food service system.",
       "Um ==cardápio seletivo== de verdade. A equipe leva um cardápio com fotos num iPad até o leito, e o paciente pede ==mais perto da hora da refeição==, com ==mais opções==. A prescrição de dieta da enfermaria vai direto para o sistema do serviço de alimentação."]),
    ORDER(["Put the menu planning steps in order", "Coloque as etapas de planejamento do cardápio em ordem"], [
      ["Know the clients and their needs", "Conhecer os clientes e suas necessidades"],
      ["Set the nutrition standard to meet", "Definir a norma de nutrição a atingir"],
      ["Plan the cycle, meals and choices", "Planejar o ciclo, as refeições e as escolhas"],
      ["Standardise recipes and cost them", "Padronizar receitas e calcular custos"],
      ["Analyse against the standard and trial", "Analisar contra a norma e testar"],
      ["Implement, then review with feedback", "Implantar e revisar com o retorno"]
    ])
  ],
  key: [["Selective (choice) vs non-selective menus", "Cardápio seletivo (com escolha) x não seletivo"], ["Short stay → **short cycle**; long stay → **longer, seasonal cycle**", "Permanência curta → **ciclo curto**; longa → **ciclo maior e sazonal**"], ["Meet the **standard**; include therapeutic, IDDSI, allergy and cultural options", "Atender à **norma**; incluir opções terapêuticas, IDDSI, alergias e culturais"]],
  src: ["https://aci.health.nsw.gov.au/projects/nutrition-standards", "https://aci.health.nsw.gov.au/projects/diet-specifications/adult"]
},
{
  t: ["Assessing and improving a menu", "Avaliando e melhorando um cardápio"],
  b: [
    P("A good menu is ==adequate, varied, chosen, eaten and safe==. Paper adequacy means nothing if people don't eat the food.",
      "Um bom cardápio é ==adequado, variado, escolhido, comido e seguro==. Adequação no papel não vale nada se as pessoas não comem."),
    TABLE([["Check", "Verificar"], ["How", "Como"]],
      [["Nutritional adequacy", "Adequação nutricional"], ["Compare with the nutrition standard (energy, protein, serves)", "Comparar com a norma (energia, proteína, porções)"]],
      [["What is actually eaten", "O que é realmente comido"], ["==Plate waste audits==, intake charts", "==Auditorias de resto-ingestão==, registros de ingestão"]],
      [["Satisfaction", "Satisfação"], ["Patient or resident surveys, food committees", "Pesquisas com pacientes ou residentes, comitês de alimentação"]],
      [["Mealtime environment", "Ambiente das refeições"], ["Mealtime audits: protected mealtimes, help to eat, positioning", "Auditorias das refeições: refeições protegidas, ajuda para comer, posicionamento"]],
      [["Safety", "Segurança"], ["Food safety program, temperatures, allergen controls", "Programa de segurança dos alimentos, temperaturas, controle de alérgenos"]]
    ),
    REVEAL(["An aged care home serves soup and sandwiches every evening on a 2-week cycle. Residents say the food is repetitive. What would you change?", "Uma ILPI serve sopa e sanduíches todas as noites, num ciclo de 2 semanas. Os residentes dizem que a comida é repetitiva. O que você mudaria?"],
      ["Lengthen the cycle (e.g. 4 weeks) with ==seasonal== changes and resident input; make the evening meal ==more substantial== (or add a nourishing supper) because a light dinner plus a long overnight fast raises malnutrition risk; check texture-modified meals look appealing; run a plate waste audit and a satisfaction survey before and after.",
       "Alongar o ciclo (ex. 4 semanas) com mudanças ==sazonais== e participação dos residentes; tornar o jantar ==mais substancioso== (ou incluir uma ceia nutritiva), porque um jantar leve somado ao longo jejum noturno aumenta o risco de desnutrição; conferir se as refeições de textura modificada estão apetitosas; fazer uma auditoria de resto-ingestão e uma pesquisa de satisfação antes e depois."])
  ],
  key: [["Adequate on paper ≠ eaten: use **plate waste** and intake data", "Adequado no papel ≠ comido: use **resto-ingestão** e dados de ingestão"], ["Measure **satisfaction** and the mealtime environment", "Medir a **satisfação** e o ambiente das refeições"], ["Light evening meal + long overnight fast = malnutrition risk", "Jantar leve + longo jejum noturno = risco de desnutrição"]],
  src: ["https://www.health.vic.gov.au/sites/default/files/2022-08/nutrition-food-quality-standards-for-adults-vic-psracs-full-doc-pdf.PDF"]
},
{
  t: ["Childcare and schools", "Creches e escolas"],
  b: [
    UL(
      ["Long day care (HEAS, based on ==Get Up & Grow==): a menu with morning tea, lunch and afternoon tea should give 1–5 year olds ==about half (50%) of their daily needs== from the five food groups.", "Creche (HEAS, baseada no ==Get Up & Grow==): um cardápio com lanche da manhã, almoço e lanche da tarde deve dar às crianças de 1 a 5 anos ==cerca de metade (50%) das necessidades diárias== nos cinco grupos."],
      ["Drinks: ==water and plain milk== only. Discretionary foods are not part of the everyday menu.", "Bebidas: ==só água e leite puro==. Alimentos discricionários não fazem parte do cardápio do dia a dia."],
      ["Plan around allergies with families and written action plans.", "Planejar em torno das alergias com as famílias e planos de ação por escrito."],
      ["School canteens follow ==state policies== that rate foods (e.g. 'everyday' vs 'occasional', or green/amber/red).", "As cantinas escolares seguem ==políticas estaduais== que classificam os alimentos (ex. 'todo dia' x 'ocasional', ou verde/amarelo/vermelho)."]
    ),
    VIDEO('bJvHQQQw_AE', 'NSW Health', 1, ["What is Munch & Move?", "O que é o Munch & Move?"],
      ["NSW Health's healthy eating and active play program for ==early childhood education and care== services. It ==trains and supports educators==, and they share resources with families, such as ideas for a healthy lunchbox.",
       "Programa da NSW Health de alimentação saudável e brincadeira ativa para ==serviços de educação infantil==. Ele ==capacita e apoia os educadores==, que compartilham materiais com as famílias, como ideias de lancheira saudável."]),
    PICK(["Which drinks should an Australian childcare centre offer?", "Quais bebidas uma creche australiana deve oferecer?"],
      [["Water and plain milk", "Água e leite puro"], ["Fruit juice at every meal", "Suco de fruta em toda refeição"], ["Cordial on hot days", "Refresco nos dias quentes"], ["Flavoured milk every day", "Leite com sabor todo dia"]], 0,
      ["Water and plain milk only; juice, cordial and flavoured milk add sugar.", "Só água e leite puro; suco, refresco e leite com sabor acrescentam açúcar."]),
    NOTE('br', "Australia has no national school meal program like Brazil's PNAE. Most children bring lunch from home or buy from the canteen, which is why canteen policies matter.",
      "A Austrália não tem um programa nacional de alimentação escolar como o PNAE. A maioria das crianças leva lanche de casa ou compra na cantina, por isso as políticas de cantina importam.")
  ],
  key: [["Long day care menu ≈ **50%** of daily needs (morning tea, lunch, afternoon tea)", "Cardápio de creche ≈ **50%** das necessidades (lanche da manhã, almoço, lanche da tarde)"], ["Drinks: **water and plain milk**", "Bebidas: **água e leite puro**"], ["No national school meals; state **canteen policies**", "Sem alimentação escolar nacional; **políticas estaduais de cantina**"]],
  src: ["https://heas.health.vic.gov.au/government-policies-and-guidelines/menu-planning-guidelines-for-long-day-care/", "https://heas.health.vic.gov.au/training/planning-healthy-menus-for-long-day-care/"]
}
],
checks: {2: [99, 'n1'], 4: [98, 100]},
qs: [
  {stem: ["An advantage of cook-chill over cook-fresh is that", "Uma vantagem do cook-chill sobre o cook-fresh é que"],
   opts: [["production can be planned ahead, separate from meal times", "a produção pode ser planejada com antecedência, separada dos horários das refeições"], ["food never needs reheating", "a comida nunca precisa ser reaquecida"], ["no food safety program is needed", "não é preciso programa de segurança dos alimentos"], ["food can be stored for a year", "a comida pode ser armazenada por um ano"]], ans: 0,
   why: ["Cook-chill separates production from service, smoothing staffing, but needs rapid chilling, strict temperatures and rethermalising.", "O cook-chill separa produção de distribuição, equilibrando a equipe, mas exige resfriamento rápido, temperaturas rígidas e regeneração."], src: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9796490/"},
  {stem: ["A hospital menu where patients choose their meals from options is called", "Um cardápio hospitalar em que os pacientes escolhem entre opções é chamado"],
   opts: [["a selective menu", "cardápio seletivo"], ["a non-selective menu", "cardápio não seletivo"], ["a static menu", "cardápio estático"], ["a set menu", "cardápio fixo"]], ans: 0,
   why: ["Selective menus offer choice; non-selective menus serve a set meal.", "Cardápios seletivos oferecem escolha; os não seletivos servem uma refeição fixa."], src: "https://aci.health.nsw.gov.au/projects/nutrition-standards"},
  {stem: ["The BEST way to find out how much residents actually eat from a new menu is", "A MELHOR forma de saber quanto os residentes realmente comem de um cardápio novo é"],
   opts: [["a plate waste audit", "uma auditoria de resto-ingestão"], ["counting the recipes", "contar as receitas"], ["checking the food budget", "conferir o orçamento de alimentos"], ["asking the cook", "perguntar ao cozinheiro"]], ans: 0,
   why: ["Plate waste audits measure what is left, showing actual intake.", "A auditoria de resto-ingestão mede o que sobra, mostrando a ingestão real."], src: "https://www.health.vic.gov.au/sites/default/files/2022-08/nutrition-food-quality-standards-for-adults-vic-psracs-full-doc-pdf.PDF"},
  {stem: ["Which drinks should an Australian childcare centre offer?", "Quais bebidas uma creche australiana deve oferecer?"],
   opts: [["Water and plain milk", "Água e leite puro"], ["Fruit juice with every meal", "Suco de fruta em toda refeição"], ["Cordial", "Refresco"], ["Flavoured milk daily", "Leite com sabor todos os dias"]], ans: 0,
   why: ["Water and plain milk only, in line with the Australian Dietary Guidelines and Get Up & Grow.", "Só água e leite puro, conforme as Diretrizes Alimentares Australianas e o Get Up & Grow."], src: "https://heas.health.vic.gov.au/government-policies-and-guidelines/menu-planning-guidelines-for-long-day-care/"}
]
});
