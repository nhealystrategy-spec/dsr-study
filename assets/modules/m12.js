MOD({
id: 12, mins: 30,
hook: ["Australian food labels must warn about lupin, but not about mustard. Learn the Australian list and the steps for anaphylaxis, and these questions become easy marks.", "Os rótulos australianos são obrigados a avisar sobre tremoço, mas não sobre mostarda. Aprenda a lista australiana e os passos da anafilaxia, e essas questões viram pontos fáceis."],
teasers: [["The first thing to do in anaphylaxis (it isn't an antihistamine)", "O primeiro passo na anafilaxia (não é anti-histamínico)"], ["The allergy test ASCIA says not to trust", "O teste de alergia em que a ASCIA diz para não confiar"], ["The first formula for a baby with cow's milk allergy", "A primeira fórmula para um bebê com alergia ao leite de vaca"]],
goals: [
  ["Tell IgE allergy, non-IgE allergy, intolerance and coeliac disease apart", "Diferenciar alergia IgE, alergia não IgE, intolerância e doença celíaca"],
  ["Follow the ASCIA anaphylaxis steps", "Seguir os passos da ASCIA na anafilaxia"],
  ["Keep an avoidance diet nutritionally complete", "Manter uma dieta de exclusão nutricionalmente completa"],
  ["Read allergens on Australian labels (PEAL)", "Ler os alérgenos nos rótulos australianos (PEAL)"]
],
pages: [
{
  t: ["Allergy or intolerance?", "Alergia ou intolerância?"],
  b: [
    TABLE([["", ""], ["IgE food allergy", "Alergia alimentar IgE"], ["Food intolerance", "Intolerância alimentar"]],
      [["What is it?", "O que é?"], ["==Immune== reaction", "Reação ==imune=="], ["==Non-immune== reaction", "Reação ==não imune=="]],
      [["How fast?", "Em quanto tempo?"], ["Minutes to 2 hours", "Minutos a 2 horas"], ["Hours, sometimes days", "Horas, às vezes dias"]],
      [["How much food?", "Quanto alimento?"], ["==Tiny amounts== can react", "==Quantidades mínimas== podem causar reação"], ["Often ==dose-related==", "Muitas vezes ==depende da dose=="]],
      [["Symptoms", "Sintomas"], ["Hives, swelling, vomiting; ==anaphylaxis==", "Urticária, inchaço, vômitos; ==anafilaxia=="], ["Wind, bloating, diarrhoea, headache", "Gases, distensão, diarreia, dor de cabeça"]],
      [["Examples", "Exemplos"], ["Peanut, egg, milk, shellfish", "Amendoim, ovo, leite, frutos do mar"], ["Lactose, FODMAPs, food chemicals (e.g. amines)", "Lactose, FODMAPs, químicos dos alimentos (ex. aminas)"]]
    ),
    UL(
      ["**Non-IgE allergies** are immune but delayed (e.g. FPIES with repeated vomiting hours after the food, some cow's milk allergy with gut symptoms or eczema).", "As **alergias não IgE** são imunes, mas tardias (ex. FPIES com vômitos repetidos horas depois do alimento, algumas alergias ao leite de vaca com sintomas intestinais ou eczema)."],
      ["Diagnosis: history plus skin prick or specific IgE tests, interpreted by a specialist; the ==oral food challenge== is the gold standard.", "Diagnóstico: história mais teste cutâneo ou IgE específica, interpretados por especialista; o ==teste de provocação oral== é o padrão-ouro."],
      ["ASCIA warns against ==unproven tests==: IgG food testing, kinesiology, hair analysis, Vega testing.", "A ASCIA alerta contra ==testes sem comprovação==: IgG para alimentos, cinesiologia, análise de cabelo, teste Vega."]
    ),
    SORT(["Which is it?", "O que é?"], [["IgE allergy", "Alergia IgE"], ["Non-IgE allergy", "Alergia não IgE"], ["Intolerance", "Intolerância"], ["Coeliac disease", "Doença celíaca"]], [
      ["Hives and lip swelling 20 minutes after peanut", "Urticária e inchaço nos lábios 20 minutos após amendoim", 0],
      ["Bloating after milk, fine with yoghurt and cheese", "Distensão depois do leite, tudo bem com iogurte e queijo", 2],
      ["Baby vomits repeatedly 2–4 hours after rice cereal (FPIES)", "Bebê vomita repetidamente 2–4 horas após cereal de arroz (FPIES)", 1],
      ["Gluten damages the small bowel lining", "O glúten lesa a mucosa do intestino delgado", 3],
      ["Wheeze and collapse after eating prawns", "Chiado e desmaio depois de comer camarão", 0],
      ["Headache after red wine and aged cheese", "Dor de cabeça após vinho tinto e queijo curado", 2]
    ])
  ],
  key: [["Allergy = **immune** (IgE fast; non-IgE delayed); intolerance = **non-immune**, dose-related", "Alergia = **imune** (IgE rápida; não IgE tardia); intolerância = **não imune**, depende da dose"], ["Diagnosis by specialist; **oral food challenge** is the gold standard", "Diagnóstico por especialista; **provocação oral** é o padrão-ouro"], ["No **IgG** tests, kinesiology or hair analysis", "Nada de testes de **IgG**, cinesiologia ou análise de cabelo"]],
  src: ["https://www.allergy.org.au/patients/food-allergy/ascia-dietary-avoidance-for-food-allergy"]
},
{
  t: ["Anaphylaxis: know the steps", "Anafilaxia: saiba os passos"],
  b: [
    P("Signs of anaphylaxis: ==difficult or noisy breathing, swelling of the tongue, swelling or tightness in the throat, wheeze or persistent cough, hoarse voice, persistent dizziness or collapse==; young children may become pale and floppy.",
      "Sinais de anafilaxia: ==respiração difícil ou ruidosa, inchaço da língua, inchaço ou aperto na garganta, chiado ou tosse persistente, voz rouca, tontura persistente ou desmaio==; crianças pequenas podem ficar pálidas e moles."),
    VIDEO('kqVOQLH_hco', 'ASCIA', 2, ["How to use an EpiPen trainer", "Como usar o EpiPen de treino"],
      ["ASCIA shows the steps with the needle-free trainer pen: lie down, then ==blue to the sky, orange to the thigh==. Families you counsel should practise with a trainer.",
       "A ASCIA mostra os passos com a caneta de treino, sem agulha: deitar e então ==azul para o céu, laranja para a coxa==. As famílias que você atende devem praticar com a caneta de treino."]),
    ORDER(["Put the ASCIA anaphylaxis action steps in order", "Coloque os passos de ação da ASCIA na anafilaxia em ordem"], [
      ["Lay the person flat (don't let them stand or walk)", "Deitar a pessoa (não deixar ficar em pé nem andar)"],
      ["Give the adrenaline autoinjector into the outer thigh", "Aplicar o autoinjetor de adrenalina na parte externa da coxa"],
      ["Phone an ambulance: 000", "Ligar para a ambulância: 000"],
      ["Phone family or an emergency contact", "Ligar para a família ou contato de emergência"],
      ["Further adrenaline after 5 minutes if no response", "Mais adrenalina após 5 minutos se não houver resposta"]
    ]),
    NOTE('warn', "==Adrenaline is the first-line treatment.== Antihistamines do not treat anaphylaxis. If in doubt, give adrenaline.",
      "==A adrenalina é o tratamento de primeira linha.== Anti-histamínicos não tratam anafilaxia. Na dúvida, aplique a adrenalina."),
    NOTE('aus', "**Adrenaline devices (2026):** autoinjectors such as ==EpiPen== and ==Jext== go into the ==outer mid-thigh==. A nasal spray, ==neffy==, has been on the PBS since ==1 July 2026==. Use the device the person was prescribed. If there is no response after 5 minutes, another dose can be given.",
      "**Dispositivos de adrenalina (2026):** autoinjetores como ==EpiPen== e ==Jext== vão na ==parte externa do meio da coxa==. Um spray nasal, o ==neffy==, está no PBS desde ==1º de julho de 2026==. Use o dispositivo prescrito para a pessoa. Se não houver resposta após 5 minutos, pode-se dar outra dose."),
    NOTE('tip', "The dietitian's job: ==avoidance education, label reading, eating out safely== and keeping the diet ==nutritionally adequate==. People at risk should have an ASCIA action plan and carry their autoinjector.",
      "O papel do nutricionista: ==orientar a exclusão, ensinar a ler rótulos, comer fora com segurança== e manter a dieta ==nutricionalmente adequada==. Quem tem risco deve ter um plano de ação da ASCIA e andar com o autoinjetor.")
  ],
  key: [["Lay flat → **adrenaline** (injector in the outer thigh, or nasal spray) → **000** → family → repeat after 5 min", "Deitar → **adrenalina** (autoinjetor na coxa ou spray nasal) → **000** → família → repetir após 5 min"], ["Antihistamines do **not** treat anaphylaxis", "Anti-histamínico **não** trata anafilaxia"], ["Dietitian: avoidance, labels, eating out, adequacy", "Nutricionista: exclusão, rótulos, comer fora, adequação"]],
  src: ["https://www.allergy.org.au/patients/food-allergy/ascia-dietary-avoidance-for-food-allergy", "https://www.allergy.org.au/hp/anaphylaxis/how-to-give-injector"]
},
{
  t: ["Prevention: the 2026 ASCIA advice", "Prevenção: a orientação da ASCIA de 2026"],
  b: [
    UL(
      ["Introduce ==well-cooked egg and peanut soon after the baby is ready for solids== (around 6 months, not before 4), and other common allergens in the first year.", "Introduzir ==ovo bem cozido e amendoim logo que o bebê estiver pronto para os sólidos== (por volta dos 6 meses, não antes dos 4) e outros alérgenos comuns no primeiro ano."],
      ["Once tolerated, give them ==at least once a week==: stopping may increase allergy risk.", "Depois de tolerados, oferecer ==pelo menos uma vez por semana==: parar pode aumentar o risco de alergia."],
      ["Breastfeeding mothers ==don't need to avoid allergens==.", "Mães que amamentam ==não precisam evitar alérgenos==."],
      ["==Hydrolysed and soy formulas are not recommended for allergy prevention==; nor are goat, rice, oat, pea or coconut 'milks'. Avoid brief cow's milk formula top-ups in the first week unless medically needed.", "==Fórmulas hidrolisadas e de soja não são recomendadas para prevenir alergia==; nem 'leites' de cabra, arroz, aveia, ervilha ou coco. Evitar complementos rápidos de fórmula de leite de vaca na primeira semana, salvo necessidade médica."],
      ["A mild rash around the mouth when eating is often not allergy; offer the food again and seek advice if wider symptoms appear.", "Uma vermelhidão leve ao redor da boca ao comer muitas vezes não é alergia; ofereça o alimento de novo e procure orientação se aparecerem sintomas mais amplos."]
    ),
    PICK(["A mother with a family history of allergy asks how to prevent allergy in her new baby. Best advice?", "Uma mãe com história familiar de alergia pergunta como prevenir alergia no bebê. Melhor orientação?"],
      [["Introduce egg and peanut soon after starting solids and keep them in the diet", "Introduzir ovo e amendoim logo no início dos sólidos e mantê-los na dieta"], ["Use a hydrolysed formula to prevent allergy", "Usar fórmula hidrolisada para prevenir alergia"], ["Avoid peanuts herself while breastfeeding", "Evitar amendoim enquanto amamenta"], ["Wait until 12 months to give egg", "Esperar até 12 meses para dar ovo"]], 0,
      ["Early and regular introduction lowers risk. Hydrolysed formula and maternal avoidance are not recommended for prevention.", "A introdução precoce e regular reduz o risco. Fórmula hidrolisada e exclusão materna não são recomendadas para prevenção."])
  ],
  key: [["Egg and peanut **soon after ready**; keep giving **≥ weekly**", "Ovo e amendoim **logo que pronto**; manter **≥ 1×/semana**"], ["No maternal avoidance; no hydrolysed or soy formula **for prevention**", "Sem exclusão materna; sem fórmula hidrolisada ou de soja **para prevenção**"], ["Mild perioral rash often isn't allergy", "Vermelhidão leve ao redor da boca muitas vezes não é alergia"]],
  src: ["https://allergy.org.au/hp/papers/infant-feeding-and-allergy-prevention/", "https://www.allergy.org.au/patients/allergy-prevention"]
},
{
  t: ["Avoidance diets that stay nutritious", "Dietas de exclusão que continuam nutritivas"],
  b: [
    TABLE([["Allergy", "Alergia"], ["Nutrition watch-points", "Pontos de atenção nutricional"]],
      [["**Cow's milk** (infant, not breastfed)", "**Leite de vaca** (bebê não amamentado)"], ["Usually an ==extensively hydrolysed formula== first; amino acid formula if severe; soy formula only from 6 months if suitable. After 12 months: ==calcium-fortified soy milk== (not rice milk under 4.5 years). Watch calcium, protein, energy, iodine, B12, riboflavin.", "Em geral, primeiro uma ==fórmula extensamente hidrolisada==; fórmula de aminoácidos se grave; fórmula de soja só a partir dos 6 meses se adequada. Depois dos 12 meses: ==bebida de soja fortificada com cálcio== (não bebida de arroz antes dos 4,5 anos). Atenção a cálcio, proteína, energia, iodo, B12, riboflavina."]],
      [["**Egg**", "**Ovo**"], ["Hidden in baked goods, mayonnaise, pasta; many children tolerate baked egg first. Usually outgrown.", "Escondido em assados, maionese, massas; muitas crianças toleram primeiro o ovo assado. Geralmente passa com o tempo."]],
      [["**Wheat**", "**Trigo**"], ["Swap to other grains; watch fibre and B vitamins.", "Trocar por outros cereais; atenção a fibra e vitaminas B."]],
      [["**Peanut, tree nuts, seafood**", "**Amendoim, castanhas, frutos do mar**"], ["Usually ==lifelong==; strict avoidance and an action plan.", "Geralmente ==para a vida toda==; exclusão rigorosa e plano de ação."]]
    ),
    NOTE('br', "Brazilian dietitians know this as ==APLV== (alergia à proteína do leite de vaca). The Australian first-line formula choice and labelling rules differ from Brazil, so learn the Australian versions.",
      "Nutricionistas brasileiras conhecem isso como ==APLV== (alergia à proteína do leite de vaca). A escolha australiana de fórmula de primeira linha e as regras de rotulagem são diferentes do Brasil, então aprenda as versões australianas.")
  ],
  key: [["CMPA infant: **extensively hydrolysed formula** first; soy only from **6 months**", "APLV no bebê: **fórmula extensamente hidrolisada** primeiro; soja só a partir dos **6 meses**"], ["After 12 months: **calcium-fortified soy milk**; no rice milk < **4.5 years**", "Após 12 meses: **bebida de soja fortificada com cálcio**; sem bebida de arroz < **4,5 anos**"], ["Milk and egg often outgrown; peanut, nuts, seafood usually lifelong", "Leite e ovo costumam passar; amendoim, castanhas, frutos do mar geralmente não"]],
  src: ["https://www.allergy.org.au/patients/food-allergy/ascia-dietary-avoidance-for-food-allergy"]
},
{
  t: ["Reading allergens on Australian labels", "Lendo alérgenos nos rótulos australianos"],
  b: [
    P("Under **Plain English Allergen Labelling (PEAL)**, mandatory since 2024, allergens must appear ==in bold in the ingredient list== using set names, plus a ==summary statement starting with 'Contains:'==.",
      "Pela **Plain English Allergen Labelling (PEAL)**, obrigatória desde 2024, os alérgenos devem aparecer ==em negrito na lista de ingredientes== com nomes padronizados, mais uma ==declaração-resumo começando com 'Contains:'== (Contém)."),
    P("Mandatory allergens: ==peanut, tree nuts (almond, Brazil nut, cashew, hazelnut, macadamia, pecan, pine nut, pistachio, walnut), egg, milk, fish, crustacean, mollusc, sesame, soy, wheat, lupin, gluten-containing cereals, and sulphites (≥ 10 mg/kg)==.",
      "Alérgenos obrigatórios: ==amendoim, castanhas (amêndoa, castanha-do-pará, caju, avelã, macadâmia, pecã, pinhão, pistache, nozes), ovo, leite, peixe, crustáceos, moluscos, gergelim, soja, trigo, tremoço (lupin), cereais com glúten e sulfitos (≥ 10 mg/kg)==."),
    SORT(["Mandatory allergen on Australian labels?", "Alérgeno obrigatório nos rótulos australianos?"], [["Yes", "Sim"], ["No", "Não"]], [
      ["Lupin", "Tremoço (lupin)", 0],
      ["Mustard", "Mostarda", 1],
      ["Sesame", "Gergelim", 0],
      ["Molluscs (e.g. squid, mussels)", "Moluscos (ex. lula, mexilhão)", 0],
      ["Celery", "Aipo", 1],
      ["Sulphites at 10 mg/kg or more", "Sulfitos a partir de 10 mg/kg", 0],
      ["Corn", "Milho", 1]
    ]),
    NOTE('exam', "'May contain traces of…' (precautionary labelling) is ==voluntary== and not regulated by the Food Standards Code. Advice depends on the person's allergy and their specialist.",
      "'Pode conter traços de…' (rotulagem preventiva) é ==voluntário== e não é regulado pelo Food Standards Code. A orientação depende da alergia da pessoa e do especialista dela.")
  ],
  key: [["PEAL: allergens **in bold** + **'Contains:'** statement", "PEAL: alérgenos **em negrito** + declaração **'Contains:'**"], ["Australia includes **lupin**, sulphites ≥ 10 mg/kg; **not mustard or celery**", "A Austrália inclui **tremoço**, sulfitos ≥ 10 mg/kg; **não mostarda nem aipo**"], ["'May contain' is **voluntary**", "'Pode conter' é **voluntário**"]],
  src: ["https://www.foodstandards.gov.au/consumer/labelling/allergen-labelling"]
}
],
checks: {2: [85, 'n1'], 4: [88, 'n2']},
qs: [
  {stem: ["Which test does ASCIA advise AGAINST for diagnosing food allergy?", "Qual teste a ASCIA desaconselha para diagnosticar alergia alimentar?"],
   opts: [["IgG food antibody testing", "Teste de anticorpos IgG para alimentos"], ["Skin prick testing with a specialist", "Teste cutâneo (prick) com especialista"], ["Specific IgE blood testing", "Exame de sangue de IgE específica"], ["A supervised oral food challenge", "Teste de provocação oral supervisionado"]], ans: 0,
   why: ["IgG food testing (like kinesiology and hair analysis) is unproven and not recommended.", "O teste de IgG para alimentos (como cinesiologia e análise de cabelo) não tem comprovação e não é recomendado."], src: "https://www.allergy.org.au/patients/food-allergy/ascia-dietary-avoidance-for-food-allergy"},
  {stem: ["The most important treatment for anaphylaxis is", "O tratamento mais importante da anafilaxia é"],
   opts: [["an adrenaline autoinjector into the outer thigh", "um autoinjetor de adrenalina na parte externa da coxa"], ["an antihistamine tablet", "um comprimido de anti-histamínico"], ["a glass of cold water", "um copo de água gelada"], ["walking the person to the car", "levar a pessoa andando até o carro"]], ans: 0,
   why: ["Adrenaline is first line. Lay the person flat; don't let them stand or walk.", "A adrenalina é a primeira linha. Deite a pessoa; não deixe ficar em pé nem andar."], src: "https://www.allergy.org.au/patients/food-allergy/ascia-dietary-avoidance-for-food-allergy"},
  {stem: ["For a formula-fed infant under 6 months with cow's milk allergy, the usual first choice is", "Para um bebê de menos de 6 meses alimentado com fórmula e com alergia ao leite de vaca, a primeira escolha usual é"],
   opts: [["an extensively hydrolysed formula", "uma fórmula extensamente hidrolisada"], ["a soy formula", "uma fórmula de soja"], ["goat's milk formula", "fórmula de leite de cabra"], ["rice milk", "bebida de arroz"]], ans: 0,
   why: ["Extensively hydrolysed formula is first line for most; amino acid formula if severe. Soy formula isn't used under 6 months; goat milk cross-reacts.", "A fórmula extensamente hidrolisada é a primeira linha para a maioria; de aminoácidos se grave. Fórmula de soja não é usada antes dos 6 meses; leite de cabra tem reação cruzada."], src: "https://www.allergy.org.au/patients/food-allergy/ascia-dietary-avoidance-for-food-allergy"},
  {stem: ["Which is NOT a mandatory allergen declaration on Australian food labels?", "Qual NÃO é uma declaração de alérgeno obrigatória nos rótulos australianos?"],
   opts: [["Mustard", "Mostarda"], ["Lupin", "Tremoço (lupin)"], ["Sesame", "Gergelim"], ["Molluscs", "Moluscos"]], ans: 0,
   why: ["Mustard and celery are mandatory in the EU but not in Australia. Lupin, sesame and molluscs are mandatory in Australia.", "Mostarda e aipo são obrigatórios na UE, mas não na Austrália. Tremoço, gergelim e moluscos são obrigatórios na Austrália."], src: "https://www.foodstandards.gov.au/consumer/labelling/allergen-labelling"}
]
});
