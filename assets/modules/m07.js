MOD({
id: 7, mins: 40,
hook: ["Banana, beans, orange juice, avocado: four Brazilian favourites that can push potassium too high in kidney disease. You don't have to ban them. Here is what you do instead.", "Banana, feijão, suco de laranja, abacate: quatro preferidos brasileiros que podem subir demais o potássio na doença renal. Não precisa proibir. Veja o que fazer no lugar."],
teasers: [["The bedtime snack that protects muscle in liver disease", "O lanche antes de dormir que protege o músculo na doença hepática"], ["The kitchen trick that lowers the potassium in potatoes", "O truque de cozinha que reduz o potássio da batata"], ["Who decides the IDDSI level, and what your job is after that", "Quem decide o nível IDDSI, e qual é o seu papel depois disso"]],
goals: [
  ["Match CKD advice to stage, blood results and dialysis", "Adequar a orientação na DRC ao estágio, aos exames e à diálise"],
  ["Sort foods into high and low potassium", "Classificar alimentos em ricos e pobres em potássio"],
  ["Give the key cirrhosis and fatty liver advice", "Dar as orientações-chave na cirrose e na gordura no fígado"],
  ["Manage common cancer treatment symptoms with food", "Manejar com a alimentação os sintomas comuns do tratamento do câncer"],
  ["Use the IDDSI levels and know who prescribes them", "Usar os níveis IDDSI e saber quem os prescreve"]
],
pages: [
{
  t: ["Chronic kidney disease: it depends on the stage", "Doença renal crônica: depende do estágio"],
  b: [
    TABLE([["Stage", "Estágio"], ["eGFR (mL/min/1.73 m²)", "TFGe (mL/min/1,73 m²)"]],
      ["1", ["≥ 90 (with kidney damage)", "≥ 90 (com lesão renal)"]], ["2", "60–89"], ["3a", "45–59"], ["3b", "30–44"], ["4", "15–29"], ["5", ["< 15 (kidney failure)", "< 15 (falência renal)"]]
    ),
    UL(
      ["Everyone: ==less than 5 g salt a day==, control blood pressure and glucose, healthy weight.", "Para todos: ==menos de 5 g de sal por dia==, controlar pressão e glicemia, peso saudável."],
      ["Protein before dialysis: ==avoid high-protein diets== (about 0.75–1.0 g/kg in later stages, set by the renal dietitian) while preventing malnutrition.", "Proteína antes da diálise: ==evitar dietas hiperproteicas== (cerca de 0,75–1,0 g/kg nos estágios avançados, definido pelo nutricionista renal) e ao mesmo tempo prevenir desnutrição."],
      ["Potassium and phosphate: restrict ==only if the blood levels are high==. Reduce portions rather than banning foods.", "Potássio e fosfato: restringir ==só se os níveis no sangue estiverem altos==. Reduzir porções em vez de proibir alimentos."],
      ["Phosphate ==additives== in processed foods (processed meats, cola drinks, processed cheese) are absorbed far more than natural phosphate.", "Os ==aditivos== de fosfato dos alimentos processados (embutidos, refrigerantes de cola, queijo processado) são muito mais absorvidos que o fosfato natural."],
      ["Fluid: drink to thirst unless the team sets a limit (oedema, dialysis).", "Líquidos: beber conforme a sede, a não ser que a equipe defina um limite (edema, diálise)."]
    ),
    NOTE('warn', "Most 'salt substitutes' contain ==potassium chloride==: dangerous in CKD with high potassium.", "A maioria dos 'substitutos do sal' contém ==cloreto de potássio==: perigoso na DRC com potássio alto."),
    VIDEO('0S_siSdD0MA', 'Kidney Health Australia', 2, ["Understanding kidney disease", "Entendendo a doença renal"],
      ["What kidneys do and who is at risk: diabetes, high blood pressure, smoking, age over 60 and more. People can lose ==up to 90% of kidney function== before they feel sick. The video (2023) says 1 in 10 Australians; Kidney Health Australia's ==newer figure is about 1 in 7 adults== (1 in 5 First Nations adults).",
       "O que os rins fazem e quem tem risco: diabetes, pressão alta, tabagismo, idade acima de 60 anos e outros. A pessoa pode perder ==até 90% da função renal== antes de se sentir mal. O vídeo (2023) diz 1 em cada 10 australianos; o ==número mais novo da Kidney Health Australia é cerca de 1 em cada 7 adultos== (1 em cada 5 entre adultos aborígenes e ilhéus do Estreito de Torres)."])
  ],
  key: [["Stage by **eGFR**: 3a 45–59, 3b 30–44, 4 15–29, 5 < 15", "Estágio pela **TFGe**: 3a 45–59, 3b 30–44, 4 15–29, 5 < 15"], ["Salt < **5 g/day** for everyone", "Sal < **5 g/dia** para todos"], ["Restrict potassium/phosphate **only if blood levels are high**", "Restringir potássio/fosfato **só se o sangue estiver alto**"], ["Avoid high protein before dialysis; prevent malnutrition", "Evitar excesso de proteína antes da diálise; prevenir desnutrição"]],
  src: ["https://kidney.org.au/your-kidneys/living-with-kidney-disease/health-and-wellbeing/diet-nutrition/", "https://kidney.org.au/your-kidneys/what-is-kidney-disease/"]
},
{
  t: ["Dialysis and potassium", "Diálise e potássio"],
  b: [
    P("On dialysis, ==protein needs go up== (about ==1.0–1.2 g/kg==) because protein is lost into the dialysis fluid. Haemodialysis patients often need ==potassium, phosphate and fluid limits== between sessions; peritoneal dialysis is usually more flexible, but glucose from the dialysis fluid adds energy.",
      "Na diálise, a ==necessidade de proteína sobe== (cerca de ==1,0–1,2 g/kg==) porque se perde proteína no líquido da diálise. Pacientes em hemodiálise costumam precisar de ==limites de potássio, fosfato e líquidos== entre as sessões; a diálise peritoneal costuma ser mais flexível, mas a glicose do líquido de diálise soma energia."),
    UL(
      ["Lower the potassium in potatoes and vegetables by ==boiling them in plenty of water and draining==.", "Reduza o potássio de batatas e hortaliças ==cozinhando em bastante água e escorrendo==."],
      ["==Phosphate binders== are taken ==with meals== to work.", "Os ==quelantes de fósforo== devem ser tomados ==junto com as refeições== para funcionar."]
    ),
    VIDEO('vimeo:1221294310', 'Queensland Health (NEMO)', 8, ["What to eat when your potassium is high", "O que comer quando o potássio está alto"],
      ["Patient advice from Queensland Health's kidney dietitians. Notice how they explain high-potassium foods in plain words. You can borrow that wording for the oral exam.",
       "Orientações para pacientes feitas pelos nutricionistas de nefrologia da Queensland Health. Repare como explicam os alimentos ricos em potássio em palavras simples. Você pode usar esse jeito de falar no exame oral."]),
    SORT(["High or low potassium?", "Rico ou pobre em potássio?"], [["Higher potassium", "Mais potássio"], ["Lower potassium", "Menos potássio"]], [
      ["Banana", "Banana", 0],
      ["Apple", "Maçã", 1],
      ["Potato (baked)", "Batata (assada)", 0],
      ["White rice", "Arroz branco", 1],
      ["Orange juice", "Suco de laranja", 0],
      ["Tomato paste", "Extrato de tomate", 0],
      ["Cucumber", "Pepino", 1],
      ["Avocado", "Abacate", 0],
      ["Pineapple", "Abacaxi", 1]
    ]),
    NOTE('br', "Brazilian favourites like ==beans, banana, orange juice and avocado== are high in potassium. With high blood potassium, keep them but ==smaller portions==; don't remove them all.",
      "Preferidos brasileiros como ==feijão, banana, suco de laranja e abacate== são ricos em potássio. Com potássio alto no sangue, mantenha, mas em ==porções menores==; não tire tudo.")
  ],
  key: [["Dialysis: protein **↑ to 1.0–1.2 g/kg**", "Diálise: proteína **↑ para 1,0–1,2 g/kg**"], ["Haemodialysis: often **K, phosphate and fluid** limits", "Hemodiálise: frequentemente limites de **K, fosfato e líquidos**"], ["Boil and drain vegetables to lower potassium; binders **with meals**", "Cozinhe e escorra hortaliças para baixar o potássio; quelantes **com as refeições**"]],
  src: ["https://kidney.org.au/your-kidneys/living-with-kidney-disease/health-and-wellbeing/diet-nutrition/"]
},
{
  t: ["Liver disease", "Doença hepática"],
  b: [
    P("People with **cirrhosis** are often malnourished and lose muscle quickly, because the liver stores little glycogen and the body burns muscle overnight.",
      "Pessoas com **{{cirrose|cirrhosis}}** costumam estar desnutridas e perdem músculo rápido, porque o fígado guarda pouco glicogênio e o corpo queima músculo durante a noite."),
    UL(
      ["==Do not restrict protein== (about ==1.2–1.5 g/kg==), even with hepatic encephalopathy.", "==Não restrinja proteína== (cerca de ==1,2–1,5 g/kg==), mesmo com encefalopatia hepática."],
      ["Eat ==every 3–4 hours== and have a ==carbohydrate-rich late evening snack== to shorten the overnight fast.", "Comer ==a cada 3–4 horas== e fazer um ==lanche noturno rico em carboidrato== para encurtar o jejum da noite."],
      ["Ascites: ==moderate salt restriction== (no added salt, fewer salty foods); very strict limits make food taste bad and intake falls.", "Ascite: ==restrição moderada de sal== (sem sal adicionado, menos alimentos salgados); limites muito rígidos deixam a comida sem gosto e a ingestão cai."],
      ["Fluid restriction only if blood sodium is low. No alcohol.", "Restrição de líquidos só se o sódio no sangue estiver baixo. Nada de álcool."]
    ),
    NOTE('aus', "Fatty liver disease is now called **MASLD** (metabolic dysfunction-associated steatotic liver disease). First-line treatment: ==7–10% weight loss==, a Mediterranean-style diet, fewer sugary drinks, less alcohol, more activity.",
      "A gordura no fígado agora se chama **MASLD** (doença hepática esteatótica associada à disfunção metabólica). Tratamento de primeira linha: ==perda de 7–10% do peso==, dieta estilo mediterrâneo, menos bebidas açucaradas, menos álcool, mais atividade."),
    PICK(["A man with cirrhosis and muscle loss: which advice is MOST important?", "Homem com cirrose e perda muscular: qual orientação é MAIS importante?"],
      [["Add a carbohydrate-rich snack before bed", "Incluir um lanche rico em carboidrato antes de dormir"], ["Restrict protein to 0.5 g/kg", "Restringir proteína a 0,5 g/kg"], ["Fast overnight for 14 hours", "Jejuar 14 horas à noite"], ["Avoid all fat", "Evitar toda gordura"]], 0,
      ["A late evening snack reduces overnight muscle breakdown. Protein should not be restricted.", "Um lanche noturno reduz a quebra muscular durante a noite. A proteína não deve ser restringida."])
  ],
  key: [["Cirrhosis: **no protein restriction** (1.2–1.5 g/kg)", "Cirrose: **sem restrição de proteína** (1,2–1,5 g/kg)"], ["Small frequent meals + **late evening snack**", "Refeições pequenas e frequentes + **lanche noturno**"], ["Ascites: **moderate** salt restriction; fluid limit only if sodium is low", "Ascite: restrição **moderada** de sal; limitar líquidos só se o sódio estiver baixo"], ["MASLD: **7–10%** weight loss, Mediterranean pattern", "MASLD: perda de **7–10%** do peso, padrão mediterrâneo"]],
  src: ["https://www.health.qld.gov.au/__data/assets/pdf_file/0031/145948/gastro-cldlong.pdf"]
},
{
  t: ["Eating through cancer treatment", "Comer durante o tratamento do câncer"],
  b: [
    P("Malnutrition and muscle loss are common in cancer and make treatment harder. Screen early (MST) and treat symptoms. ==Weight loss is not a goal during treatment==, even in people with a high BMI.",
      "Desnutrição e perda muscular são comuns no câncer e dificultam o tratamento. Faça triagem cedo (MST) e trate os sintomas. ==Perder peso não é meta durante o tratamento==, mesmo em quem tem IMC alto."),
    TABLE([["Symptom", "Sintoma"], ["Try", "Tente"]],
      [["Poor appetite", "Pouco apetite"], ["==Small, frequent, energy- and protein-dense== meals and snacks; nourishing drinks", "Refeições e lanches ==pequenos, frequentes e densos em energia e proteína==; bebidas nutritivas"]],
      [["Nausea", "Náusea"], ["Cold or room-temperature bland foods, dry snacks, ginger; anti-nausea medicine on time", "Alimentos frios ou em temperatura ambiente e leves, lanches secos, gengibre; antiemético no horário"]],
      [["Taste changes / metallic taste", "Alteração do paladar / gosto metálico"], ["==Plastic cutlery==, marinades, herbs; swap red meat for chicken, eggs, dairy or legumes", "==Talheres de plástico==, marinadas, ervas; trocar carne vermelha por frango, ovos, laticínios ou leguminosas"]],
      [["Sore mouth (mucositis)", "Boca dolorida (mucosite)"], ["Soft, moist, cool foods; avoid acidic, spicy, rough foods", "Alimentos macios, úmidos e frescos; evitar ácidos, picantes e ásperos"]],
      [["Early fullness", "Saciedade precoce"], ["Drink ==between== meals, not with them; eat the most nourishing part first", "Beber ==entre== as refeições, não junto; comer primeiro a parte mais nutritiva"]]
    ),
    NOTE('warn', "During low white cell counts (neutropenia), follow ==food safety== advice (avoid high-risk foods like soft cheeses, raw eggs and deli meats). Be careful with unproven 'cancer diets' (alkaline, juice fasts): they can cause harmful weight loss.",
      "Com glóbulos brancos baixos (neutropenia), siga as orientações de ==segurança dos alimentos== (evitar alimentos de risco como queijos moles, ovos crus e frios). Cuidado com 'dietas anticâncer' sem comprovação (alcalina, jejum de sucos): podem causar perda de peso prejudicial."),
    REVEAL(["A woman on chemotherapy says meat tastes like metal and she has stopped eating protein. What would you suggest?", "Uma mulher em quimioterapia diz que a carne tem gosto de metal e parou de comer proteína. O que você sugeriria?"],
      ["Validate it, then offer swaps: ==eggs, dairy, legumes, chicken or fish==; marinate meats; use ==plastic cutlery==; cold dishes; nourishing drinks if intake stays low. Monitor weight weekly.",
       "Acolha a queixa e ofereça trocas: ==ovos, laticínios, leguminosas, frango ou peixe==; marinar carnes; usar ==talheres de plástico==; pratos frios; bebidas nutritivas se a ingestão continuar baixa. Monitorar o peso semanalmente."])
  ],
  key: [["Screen early; **don't aim for weight loss** in treatment", "Triagem cedo; **não buscar perda de peso** no tratamento"], ["Small, frequent, energy- and protein-dense meals", "Refeições pequenas, frequentes, densas em energia e proteína"], ["Metallic taste: plastic cutlery, alternative proteins", "Gosto metálico: talheres de plástico, outras proteínas"], ["Neutropenia: **food safety**, not unproven diets", "Neutropenia: **segurança dos alimentos**, não dietas sem comprovação"]],
  src: ["https://connect.cancer.org.au/cancer-information/living-and-coping/nutrition-for-people-with-cancer"]
},
{
  t: ["Dysphagia and the IDDSI levels", "Disfagia e os níveis IDDSI"],
  b: [
    P("Signs of swallowing problems: ==coughing or a wet voice after eating==, food left in the mouth, recurrent chest infections, weight loss. The ==speech pathologist== assesses the swallow and prescribes the IDDSI level; the ==dietitian== makes the modified diet meet nutrition and fluid needs.",
      "Sinais de problema de deglutição: ==tosse ou voz molhada depois de comer==, comida parada na boca, infecções respiratórias de repetição, perda de peso. O ==fonoaudiólogo== avalia a deglutição e prescreve o nível IDDSI; o ==nutricionista== garante que a dieta modificada atenda às necessidades de nutrientes e líquidos."),
    TABLE([["Level", "Nível"], ["Drinks", "Bebidas"], ["Foods", "Alimentos"]],
      ["0 ⚪", ["Thin", "Fino"], "—"],
      ["1 🩶", ["Slightly thick", "Levemente espessado"], "—"],
      ["2 🩷", ["Mildly thick", "Pouco espessado"], "—"],
      ["3 🟡", ["Moderately thick", "Moderadamente espessado"], ["Liquidised", "Liquidificado"]],
      ["4 🟢", ["Extremely thick", "Extremamente espessado"], ["==Pureed==", "==Pastoso (purê)=="]],
      ["5 🟠", "—", ["Minced & moist (lumps ≤ 4 mm in adults)", "Picado e úmido (pedaços ≤ 4 mm em adultos)"]],
      ["6 🔵", "—", ["Soft & bite-sized (pieces ≤ 1.5 cm in adults)", "Macio e em pedaços pequenos (≤ 1,5 cm em adultos)"]],
      ["7 ⚫", "—", ["Regular (and 7 easy to chew)", "Normal (e 7 fácil de mastigar)"]]
    ),
    P("Test it: the ==flow test== (10 mL syringe, 10 seconds) for drinks; ==fork pressure, fork drip and spoon tilt tests== for foods.",
      "Teste: o ==teste de fluxo== (seringa de 10 mL, 10 segundos) para bebidas; ==testes de pressão do garfo, gotejamento no garfo e inclinação da colher== para alimentos."),
    VIDEO('9tRoJ31Mz30', 'IDDSI', 6, ["IDDSI 101: the basics", "IDDSI 101: o básico"],
      ["The official IDDSI basics in about 5 minutes: what IDDSI is and why one ==international set of levels and names== keeps people with swallowing problems safe. It was made in the USA, but the levels are the same in Australia.",
       "O básico oficial do IDDSI em cerca de 5 minutos: o que é o IDDSI e por que ==um só conjunto internacional de níveis e nomes== protege quem tem dificuldade para engolir. Foi feito nos EUA, mas os níveis são os mesmos na Austrália."]),
    ORDER(["Order the food textures from smoothest to most solid", "Ordene as texturas de alimento da mais lisa à mais sólida"], [
      ["Liquidised (3)", "Liquidificado (3)"],
      ["Pureed (4)", "Pastoso (4)"],
      ["Minced & moist (5)", "Picado e úmido (5)"],
      ["Soft & bite-sized (6)", "Macio e em pedaços (6)"],
      ["Regular (7)", "Normal (7)"]
    ]),
    NOTE('tip', "Texture-modified diets often have ==less energy and protein== and thickened drinks reduce fluid intake. Fortify meals, offer drinks often and watch for dehydration.",
      "Dietas de textura modificada costumam ter ==menos energia e proteína==, e bebidas espessadas reduzem a ingestão de líquidos. Enriqueça as refeições, ofereça bebidas com frequência e fique atenta à desidratação.")
  ],
  key: [["Speech pathologist **prescribes** the level; dietitian protects **nutrition and fluids**", "O fonoaudiólogo **prescreve** o nível; o nutricionista protege **nutrientes e líquidos**"], ["Drinks 0–4; foods 3–7; **4 = pureed**, **5 = minced & moist**, **6 = soft & bite-sized**", "Bebidas 0–4; alimentos 3–7; **4 = pastoso**, **5 = picado e úmido**, **6 = macio em pedaços**"], ["Check with flow, fork and spoon tests", "Confira com testes de fluxo, garfo e colher"]],
  src: ["https://www.iddsi.org/standards/framework"]
}
],
checks: {2: [46, 44], 4: ['n3', 'n1']},
qs: [
  {stem: ["In CKD not on dialysis, a potassium restriction is needed", "Na DRC sem diálise, a restrição de potássio é necessária"],
   opts: [["only when blood potassium is high", "só quando o potássio no sangue está alto"], ["for everyone from stage 3", "para todos a partir do estágio 3"], ["never", "nunca"], ["only for people who eat bananas", "só para quem come banana"]], ans: 0,
   why: ["Potassium (and phosphate) limits depend on blood results, not the diagnosis alone.", "Os limites de potássio (e fosfato) dependem dos exames, não só do diagnóstico."], src: "https://kidney.org.au/your-kidneys/living-with-kidney-disease/health-and-wellbeing/diet-nutrition/"},
  {stem: ["First-line treatment for fatty liver disease (MASLD) is", "O tratamento de primeira linha da gordura no fígado (MASLD) é"],
   opts: [["7–10% weight loss with a Mediterranean-style diet", "perda de 7–10% do peso com dieta estilo mediterrâneo"], ["a strict protein restriction", "uma restrição rígida de proteína"], ["a 3-day juice cleanse", "um detox de sucos de 3 dias"], ["extra fructose to rest the liver", "frutose extra para descansar o fígado"]], ans: 0,
   why: ["Weight loss of 7–10%, a Mediterranean pattern, less sugar-sweetened drinks and alcohol, and activity are first line.", "Perda de 7–10% do peso, padrão mediterrâneo, menos bebidas açucaradas e álcool e atividade física são a primeira linha."], src: "https://www.gesa.org.au/resources/clinical-practice-resources/"},
  {stem: ["An adult prescribed IDDSI level 5 needs food that is", "Um adulto com prescrição IDDSI nível 5 precisa de alimento"],
   opts: [["minced and moist, lumps no bigger than 4 mm", "picado e úmido, pedaços de no máximo 4 mm"], ["a smooth puree with no lumps", "em purê liso, sem pedaços"], ["soft bite-sized pieces up to 1.5 cm", "macio em pedaços de até 1,5 cm"], ["any regular food", "qualquer alimento normal"]], ans: 0,
   why: ["Level 5 = minced & moist (≤ 4 mm lumps for adults). Level 4 is pureed; level 6 soft & bite-sized.", "Nível 5 = picado e úmido (pedaços ≤ 4 mm para adultos). Nível 4 é pastoso; nível 6 macio em pedaços."], src: "https://www.iddsi.org/standards/framework"},
  {stem: ["Before advising a client with CKD and high potassium to use a 'salt substitute', you should know that most are", "Antes de sugerir um 'substituto do sal' a um paciente com DRC e potássio alto, saiba que a maioria é"],
   opts: [["potassium chloride, so they can be dangerous", "cloreto de potássio, então pode ser perigoso"], ["completely sodium- and potassium-free", "totalmente sem sódio e sem potássio"], ["made of calcium, which helps the kidneys", "feito de cálcio, que ajuda os rins"], ["recommended by Kidney Health Australia", "recomendado pela Kidney Health Australia"]], ans: 0,
   why: ["Potassium chloride substitutes can raise blood potassium to dangerous levels in CKD.", "Substitutos com cloreto de potássio podem elevar o potássio no sangue a níveis perigosos na DRC."], src: "https://kidney.org.au/your-kidneys/living-with-kidney-disease/health-and-wellbeing/diet-nutrition/"}
]
});
