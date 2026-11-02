MOD({
id: 11, mins: 30,
hook: ["Spirulina, seaweed and mushrooms are sold as vegan B12. None of them is reliable. The exam loves matching a person to the nutrient they lack, and this module trains exactly that.", "Spirulina, algas e cogumelos são vendidos como fonte vegana de B12. Nenhum é confiável. A prova adora ligar uma pessoa ao nutriente que falta, e este módulo treina exatamente isso."],
teasers: [["Why vegetarians need almost double the iron", "Por que vegetarianos precisam de quase o dobro de ferro"], ["The drink that cuts iron absorption at a lentil dinner", "A bebida que corta a absorção de ferro num jantar de lentilha"], ["Who needs 1300 mg of calcium a day", "Quem precisa de 1300 mg de cálcio por dia"]],
goals: [
  ["Name the types of vegetarian diets", "Nomear os tipos de dieta vegetariana"],
  ["List the nutrients at risk on a vegan diet and their sources", "Listar os nutrientes em risco na dieta vegana e suas fontes"],
  ["Improve iron absorption with simple meal changes", "Melhorar a absorção de ferro com mudanças simples nas refeições"],
  ["Recall calcium, vitamin D and B12 needs across life stages", "Lembrar as necessidades de cálcio, vitamina D e B12 nos ciclos da vida"]
],
pages: [
{
  t: ["Vegetarian diets can be complete", "Dietas vegetarianas podem ser completas"],
  b: [
    P("Well-planned vegetarian and vegan diets can meet needs at ==all life stages==. Plan protein across the day (no need to combine at the same meal): ==legumes, soy (tofu, tempeh), nuts, seeds, eggs and dairy==.",
      "Dietas vegetarianas e veganas bem planejadas atendem às necessidades em ==todos os ciclos da vida==. Planeje a proteína ao longo do dia (não precisa combinar na mesma refeição): ==leguminosas, soja (tofu, tempeh), oleaginosas, sementes, ovos e laticínios==."),
    SORT(["Which eating pattern is it?", "Qual é o padrão alimentar?"], [["Lacto-ovo vegetarian", "Ovolactovegetariano"], ["Lacto-vegetarian", "Lactovegetariano"], ["Pescatarian", "Pescetariano"], ["Vegan", "Vegano"], ["Flexitarian", "Flexitariano"]], [
      ["Eats eggs and dairy, no meat or fish", "Come ovos e laticínios, sem carne nem peixe", 0],
      ["Eats dairy but no eggs, meat or fish", "Come laticínios, mas não ovos, carne ou peixe", 1],
      ["Eats fish and seafood, but no other meat", "Come peixe e frutos do mar, mas nenhuma outra carne", 2],
      ["No animal products at all", "Nenhum produto de origem animal", 3],
      ["Mostly plants, meat now and then", "Principalmente vegetais, carne de vez em quando", 4]
    ]),
    NOTE('tip', "Ask, don't assume: 'vegetarian' means different things to different people. Ask exactly what is and isn't eaten, and why (health, ethics, religion, cost).",
      "Pergunte, não suponha: 'vegetariano' significa coisas diferentes para cada pessoa. Pergunte exatamente o que come e o que não come, e por quê (saúde, ética, religião, custo).")
  ],
  key: [["Well-planned vegetarian diets suit **all life stages**", "Dietas vegetarianas bem planejadas servem para **todos os ciclos da vida**"], ["Protein from **legumes, soy, nuts, seeds** (eggs and dairy if eaten), spread across the day", "Proteína de **leguminosas, soja, oleaginosas, sementes** (ovos e laticínios se consumidos), ao longo do dia"], ["Ask exactly what the person eats", "Pergunte exatamente o que a pessoa come"]],
  src: ["https://www.betterhealth.vic.gov.au/health/healthyliving/vegetarian-and-vegan-eating"]
},
{
  t: ["Nutrients to watch on a vegan diet", "Nutrientes de atenção na dieta vegana"],
  b: [
    TABLE([["Nutrient", "Nutriente"], ["Vegan sources", "Fontes veganas"]],
      [["**Vitamin B12** (most important)", "**Vitamina B12** (a mais importante)"], ["==Only fortified foods or a supplement==: fortified plant milks, fortified nutritional yeast. Spirulina, seaweed and mushrooms are ==not reliable==.", "==Só alimentos fortificados ou suplemento==: bebidas vegetais fortificadas, levedura nutricional fortificada. Spirulina, algas e cogumelos ==não são confiáveis==."]],
      [["**Iron**", "**Ferro**"], ["Legumes, tofu, fortified cereals, wholegrains, dark green vegetables, with ==vitamin C==", "Leguminosas, tofu, cereais fortificados, integrais, hortaliças verde-escuras, com ==vitamina C=="]],
      [["**Zinc**", "**Zinco**"], ["Legumes, nuts, seeds, wholegrains (soaking and sprouting help absorption)", "Leguminosas, oleaginosas, sementes, integrais (deixar de molho e germinar ajuda a absorção)"]],
      [["**Calcium**", "**Cálcio**"], ["==Plant milks with ≥ 100 mg calcium/100 mL==, calcium-set tofu, tahini, almonds", "==Bebidas vegetais com ≥ 100 mg de cálcio/100 mL==, tofu coagulado com cálcio, tahine, amêndoas"]],
      [["**Iodine**", "**Iodo**"], ["Iodised salt, commercial bread; seaweed is unreliable (kelp can give far too much)", "Sal iodado, pão comercial; algas não são confiáveis (a kelp pode dar iodo demais)"]],
      [["**Omega-3 (DHA)**", "**Ômega-3 (DHA)**"], ["ALA from flax, chia, walnuts, canola; ==algae-based DHA supplement== for long-chain omega-3", "ALA de linhaça, chia, nozes, canola; ==suplemento de DHA de algas== para ômega-3 de cadeia longa"]],
      [["**Vitamin D**", "**Vitamina D**"], ["Safe sun exposure, fortified foods, supplement if low", "Exposição solar segura, alimentos fortificados, suplemento se baixa"]]
    ),
    NOTE('warn', "Vegan ==infants and young children== need careful planning (energy, protein, B12, iron, zinc, calcium, iodine) and should see a dietitian. ==Rice milk is not suitable as a main milk under 4.5 years==.",
      "==Bebês e crianças pequenas== veganas precisam de planejamento cuidadoso (energia, proteína, B12, ferro, zinco, cálcio, iodo) e devem ver um nutricionista. ==Bebida de arroz não serve como leite principal antes dos 4,5 anos==."),
    PICK(["Which is a reliable source of vitamin B12 for a vegan?", "Qual é uma fonte confiável de vitamina B12 para um vegano?"],
      [["B12-fortified soy milk", "Bebida de soja fortificada com B12"], ["Spirulina", "Spirulina"], ["Mushrooms", "Cogumelos"], ["Nori seaweed", "Alga nori"]], 0,
      ["Only fortified foods and supplements reliably provide active B12.", "Só alimentos fortificados e suplementos fornecem B12 ativa de forma confiável."])
  ],
  key: [["**B12** only from fortified foods or supplements", "**B12** só de alimentos fortificados ou suplementos"], ["Also watch **iron, zinc, calcium, iodine, omega-3, vitamin D**", "Atenção também a **ferro, zinco, cálcio, iodo, ômega-3, vitamina D**"], ["Plant milk counts if **≥ 100 mg calcium/100 mL**", "Bebida vegetal conta se **≥ 100 mg de cálcio/100 mL**"], ["Vegan children → dietitian; no rice milk as main milk < **4.5 years**", "Crianças veganas → nutricionista; sem bebida de arroz como leite principal < **4,5 anos**"]],
  src: ["https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients", "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/vitamin-b12"]
},
{
  t: ["Iron: needs and absorption", "Ferro: necessidades e absorção"],
  b: [
    TABLE([["Group", "Grupo"], ["Iron RDI (mg/day)", "RDI de ferro (mg/dia)"]],
      [["Men 19+", "Homens 19+"], "8"],
      [["Women 19–50", "Mulheres 19–50"], "==18=="],
      [["Women 51+", "Mulheres 51+"], "8"],
      [["Girls 14–18 / boys 14–18", "Meninas 14–18 / meninos 14–18"], "15 / 11"],
      [["Pregnancy", "Gestação"], "==27=="],
      [["Vegetarians", "Vegetarianos"], ["About ==1.8 ×== the RDI", "Cerca de ==1,8 ×== a RDI"]]
    ),
    P("**Haem iron** (meat, fish, poultry) is well absorbed. **Non-haem iron** (plants, eggs, fortified foods) is absorbed less, and the rest of the meal changes how much.",
      "O **ferro heme** (carne, peixe, frango) é bem absorvido. O **ferro não heme** (vegetais, ovos, alimentos fortificados) é menos absorvido, e o resto da refeição muda quanto se absorve."),
    VIDEO('U1Ls9Vh-3m8', 'Khan Academy', 13, ["What is iron deficiency?", "O que é deficiência de ferro?"],
      ["Why low iron gives ==small red blood cells== (microcytic anaemia): iron is needed to make haem, and haem to make haemoglobin. Good background for exam cases about anaemia.",
       "Por que pouco ferro gera ==hemácias pequenas== (anemia microcítica): o ferro é necessário para fazer o heme, e o heme para fazer a hemoglobina. Boa base para casos de anemia na prova."]),
    SORT(["Helps or hinders non-haem iron absorption?", "Ajuda ou atrapalha a absorção do ferro não heme?"], [["Helps", "Ajuda"], ["Hinders", "Atrapalha"]], [
      ["Orange juice with the meal", "Suco de laranja junto da refeição", 0],
      ["A cup of tea with the meal", "Uma xícara de chá junto da refeição", 1],
      ["Capsicum and tomato in the dish", "Pimentão e tomate no prato", 0],
      ["Coffee straight after eating", "Café logo depois de comer", 1],
      ["A little meat or fish in the same meal", "Um pouco de carne ou peixe na mesma refeição", 0],
      ["A calcium supplement with the meal", "Suplemento de cálcio junto da refeição", 1],
      ["Lots of wheat bran (phytates)", "Muito farelo de trigo (fitatos)", 1]
    ]),
    NOTE('br', "Brazil's 'arroz, feijão e laranja' habit is a great iron combo: beans give non-haem iron and ==vitamin C from the orange helps absorb it==. Have coffee or chimarrão between meals instead of with them.",
      "O hábito brasileiro de 'arroz, feijão e laranja' é ótimo para o ferro: o feijão dá ferro não heme e ==a vitamina C da laranja ajuda a absorver==. Tome café ou chimarrão entre as refeições, e não junto.")
  ],
  key: [["RDI: women 19–50 **18 mg**, men **8 mg**, pregnancy **27 mg**, girls 14–18 **15 mg**", "RDI: mulheres 19–50 **18 mg**, homens **8 mg**, gestação **27 mg**, meninas 14–18 **15 mg**"], ["Vegetarians need **1.8 ×**", "Vegetarianos precisam de **1,8 ×**"], ["Vitamin C and meat **help**; tea, coffee, calcium, phytates **hinder**", "Vitamina C e carne **ajudam**; chá, café, cálcio, fitatos **atrapalham**"]],
  src: ["https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/iron"]
},
{
  t: ["Calcium, vitamin D and B12 across life", "Cálcio, vitamina D e B12 ao longo da vida"],
  b: [
    TABLE([["Calcium RDI (mg/day)", "RDI de cálcio (mg/dia)"], ["", ""]],
      [["Children 1–3 / 4–8 / 9–11", "Crianças 1–3 / 4–8 / 9–11"], "500 / 700 / 1000"],
      [["Teens 12–18", "Adolescentes 12–18"], "==1300=="],
      [["Adults 19–50 (and men to 70)", "Adultos 19–50 (e homens até 70)"], "1000"],
      [["Women 51+ and men 71+", "Mulheres 51+ e homens 71+"], "==1300=="]
    ),
    UL(
      ["**Vitamin D** comes mainly from ==sun on skin==. Adequate Intake: 5 µg (to 50 years), 10 µg (51–70), 15 µg (70+). Higher risk: ==housebound and aged care residents==, darker skin, skin covered for cultural reasons.", "A **vitamina D** vem principalmente do ==sol na pele==. Ingestão Adequada: 5 µg (até 50 anos), 10 µg (51–70), 15 µg (70+). Maior risco: ==pessoas acamadas e residentes de ILPI==, pele mais escura, pele coberta por motivos culturais."],
      ["**Vitamin B12** RDI ==2.4 µg== for adults. Deficiency causes anaemia and ==nerve damage== that can be permanent. Risk: vegans, older people (less stomach acid), long-term ==metformin or acid-reducing medicines==, gastrectomy or ileal disease.", "**Vitamina B12** RDI ==2,4 µg== para adultos. A deficiência causa anemia e ==lesão nervosa== que pode ser permanente. Risco: veganos, idosos (menos ácido no estômago), uso prolongado de ==metformina ou remédios que reduzem o ácido==, gastrectomia ou doença ileal."]
    ),
    PICK(["Which person is MOST likely to have vitamin D deficiency?", "Qual pessoa tem MAIS chance de ter deficiência de vitamina D?"],
      [["An 88-year-old who rarely leaves her aged care room", "Uma senhora de 88 anos que quase não sai do quarto na ILPI"], ["A 30-year-old outdoor gardener", "Um jardineiro de 30 anos que trabalha ao ar livre"], ["A child who plays outside every afternoon", "Uma criança que brinca fora toda tarde"], ["A lifeguard", "Um salva-vidas"]], 0,
      ["Little sun exposure plus older skin making less vitamin D puts housebound older people at highest risk.", "Pouca exposição ao sol e pele idosa produzindo menos vitamina D colocam idosos acamados no maior risco."])
  ],
  key: [["Calcium **1300 mg**: teens, women 51+, men 71+; otherwise 1000 (adults)", "Cálcio **1300 mg**: adolescentes, mulheres 51+, homens 71+; senão 1000 (adultos)"], ["Vitamin D: sun first; AI **5 / 10 / 15 µg**; housebound at risk", "Vitamina D: sol primeiro; AI **5 / 10 / 15 µg**; acamados em risco"], ["B12 **2.4 µg**; risk: vegans, older people, metformin, acid-reducers", "B12 **2,4 µg**; risco: veganos, idosos, metformina, redutores de ácido"]],
  src: ["https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/calcium", "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/vitamin-b12"]
}
],
checks: {2: [84, 'n1'], 4: [82, 83]},
qs: [
  {stem: ["A 16-year-old girl's iron RDI is", "A RDI de ferro de uma menina de 16 anos é"],
   opts: [["15 mg a day", "15 mg por dia"], ["8 mg a day", "8 mg por dia"], ["27 mg a day", "27 mg por dia"], ["45 mg a day", "45 mg por dia"]], ans: 0,
   why: ["Girls 14–18 need 15 mg (boys 11 mg); women 19–50 need 18 mg.", "Meninas de 14–18 anos precisam de 15 mg (meninos 11 mg); mulheres de 19–50, 18 mg."], src: "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/iron"},
  {stem: ["Which plant food is the BEST calcium source for a vegan?", "Qual alimento vegetal é a MELHOR fonte de cálcio para um vegano?"],
   opts: [["Calcium-set tofu", "Tofu coagulado com cálcio"], ["Spinach", "Espinafre"], ["White rice", "Arroz branco"], ["Apple", "Maçã"]], ans: 0,
   why: ["Calcium-set tofu and fortified plant milks are good sources. Spinach calcium is poorly absorbed (oxalates).", "Tofu coagulado com cálcio e bebidas vegetais fortificadas são boas fontes. O cálcio do espinafre é mal absorvido (oxalatos)."], src: "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/calcium"},
  {stem: ["For long-chain omega-3 (DHA) on a vegan diet, the best option is", "Para ômega-3 de cadeia longa (DHA) na dieta vegana, a melhor opção é"],
   opts: [["an algae-based DHA supplement", "um suplemento de DHA de algas"], ["coconut oil", "óleo de coco"], ["spirulina tablets", "comprimidos de spirulina"], ["olive oil", "azeite"]], ans: 0,
   why: ["The body converts plant ALA to DHA poorly; algae oil provides DHA directly.", "O corpo converte mal o ALA vegetal em DHA; o óleo de algas fornece DHA diretamente."], src: "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients"},
  {stem: ["A man has taken metformin and an acid-reducing medicine for 10 years and now has numb feet. Which nutrient should be checked?", "Um homem toma metformina e um remédio que reduz o ácido há 10 anos e agora tem dormência nos pés. Qual nutriente deve ser verificado?"],
   opts: [["Vitamin B12", "Vitamina B12"], ["Vitamin C", "Vitamina C"], ["Sodium", "Sódio"], ["Vitamin K", "Vitamina K"]], ans: 0,
   why: ["Both medicines reduce B12 absorption; deficiency can cause neuropathy.", "Os dois remédios reduzem a absorção de B12; a deficiência pode causar neuropatia."], src: "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/vitamin-b12"}
]
});
