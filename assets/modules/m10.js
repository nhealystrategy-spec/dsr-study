MOD({
id: 10, mins: 35,
hook: ["'Eating for two' is a myth: in the first trimester a pregnant woman needs no extra energy at all. The real numbers, and the cheese in her sandwich, are in here.", "'Comer por dois' é mito: no primeiro trimestre a gestante não precisa de nenhuma energia extra. Os números reais, e o queijo do sanduíche dela, estão aqui."],
teasers: [["The two supplements almost every pregnant woman in Australia should take", "Os dois suplementos que quase toda gestante na Austrália deve tomar"], ["The fish to eat only once a fortnight", "O peixe para comer só uma vez a cada 15 dias"], ["How long to wait after one drink before breastfeeding", "Quanto tempo esperar depois de uma dose antes de amamentar"]],
goals: [
  ["State extra energy needs and weight gain targets by BMI", "Dizer a energia extra e as metas de ganho de peso por IMC"],
  ["Advise on folic acid, iodine, iron and other supplements", "Orientar sobre ácido fólico, iodo, ferro e outros suplementos"],
  ["Sort foods into safe and avoid in pregnancy", "Classificar alimentos em seguros e a evitar na gestação"],
  ["Support breastfeeding nutrition, including alcohol advice", "Apoiar a nutrição na amamentação, incluindo a orientação sobre álcool"]
],
pages: [
{
  t: ["Energy and weight gain", "Energia e ganho de peso"],
  b: [
    P("'Eating for two' is a myth. Extra energy is needed only from the second trimester:", "'Comer por dois' é mito. Energia extra só é necessária a partir do segundo trimestre:"),
    TABLE([["Stage", "Fase"], ["Extra energy a day", "Energia extra por dia"]],
      [["1st trimester", "1º trimestre"], ["==None==", "==Nenhuma=="]],
      [["2nd trimester", "2º trimestre"], ["About ==1.4 MJ== (≈ 340 kcal)", "Cerca de ==1,4 MJ== (≈ 340 kcal)"]],
      [["3rd trimester", "3º trimestre"], ["About ==1.9 MJ== (≈ 450 kcal)", "Cerca de ==1,9 MJ== (≈ 450 kcal)"]],
      [["Breastfeeding", "Amamentação"], ["About ==2.0–2.1 MJ==", "Cerca de ==2,0–2,1 MJ=="]]
    ),
    TABLE([["Pre-pregnancy BMI", "IMC pré-gestacional"], ["Total weight gain", "Ganho de peso total"]],
      [["< 18.5", "< 18,5"], "12.5–18 kg"],
      [["18.5–24.9", "18,5–24,9"], "==11.5–16 kg=="],
      [["25–29.9", "25–29,9"], "7–11.5 kg"],
      [["≥ 30", "≥ 30"], "5–9 kg"]
    ),
    VIDEO('JAF8GeKZggM', 'Australian Government Department of Health', 1, ["Three steps to a healthy pregnancy", "Três passos para uma gestação saudável"],
      ["A 1-minute government message: eat foods rich in ==iodine, folate, iron, protein, calcium, vitamin D and B12==, ==no alcohol==, limit high-fat and sugary foods, and stay active. It also says ==eating for two is a myth==, like this page.",
       "Uma mensagem do governo em 1 minuto: comer alimentos ricos em ==iodo, folato, ferro, proteína, cálcio, vitamina D e B12==, ==nada de álcool==, limitar alimentos gordurosos e açucarados e fazer atividade física. Também diz que ==comer por dois é um mito==, como esta página."]),
    NUM(["The extra 1.4 MJ a day in the second trimester is about how many kcal? (1 kcal = 4.184 kJ)", "Os 1,4 MJ extras por dia no segundo trimestre são cerca de quantas kcal? (1 kcal = 4,184 kJ)"], 335, 10, "kcal",
      ["1400 kJ ÷ 4.184 ≈ 335 kcal — roughly a sandwich and a glass of milk, not a second meal.", "1400 kJ ÷ 4,184 ≈ 335 kcal — mais ou menos um sanduíche e um copo de leite, não uma segunda refeição."])
  ],
  key: [["No extra energy in the **1st** trimester; **+1.4 MJ** 2nd; **+1.9 MJ** 3rd", "Sem energia extra no **1º** trimestre; **+1,4 MJ** no 2º; **+1,9 MJ** no 3º"], ["Healthy BMI: gain **11.5–16 kg**; BMI ≥ 30: **5–9 kg**", "IMC saudável: ganhar **11,5–16 kg**; IMC ≥ 30: **5–9 kg**"], ["Breastfeeding: about **+2 MJ** a day", "Amamentação: cerca de **+2 MJ** por dia"]],
  src: ["https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients-dietary-energy-calculator", "https://www.pregnancybirthbaby.org.au/pregnancy/nutrition-and-lifestyle/guide-to-food-and-drink-during-pregnancy"]
},
{
  t: ["Supplements and key nutrients", "Suplementos e nutrientes-chave"],
  b: [
    TABLE([["Nutrient", "Nutriente"], ["Advice", "Orientação"]],
      [["**Folic acid**", "**Ácido fólico**"], ["==400 µg a day== from at least 1 month before conception to 3 months after. ==5 mg== if higher risk (previous neural tube defect, diabetes, obesity, some epilepsy medicines).", "==400 µg por dia== desde pelo menos 1 mês antes da concepção até 3 meses depois. ==5 mg== se risco maior (defeito do tubo neural anterior, diabetes, obesidade, alguns antiepilépticos)."]],
      [["**Iodine**", "**Iodo**"], ["==150 µg a day== in pregnancy and breastfeeding (check first if there is a thyroid condition).", "==150 µg por dia== na gestação e na amamentação (confira antes se houver doença da tireoide)."]],
      [["**Iron**", "**Ferro**"], ["RDI ==27 mg==. Food first (red meat, legumes with vitamin C); supplement if tests show deficiency.", "RDI ==27 mg==. Primeiro a comida (carne vermelha, leguminosas com vitamina C); suplementar se os exames mostrarem deficiência."]],
      [["**Vitamin D, B12, omega-3**", "**Vitamina D, B12, ômega-3**"], ["Vitamin D if low sun or deficient; B12 for vegans; fish for omega-3 (see mercury advice).", "Vitamina D se pouco sol ou deficiência; B12 para veganas; peixe pelo ômega-3 (veja a orientação sobre mercúrio)."]],
      [["**Vitamin A**", "**Vitamina A**"], ["==Avoid vitamin A (retinol) supplements== and large amounts of liver: risk of birth defects.", "==Evitar suplementos de vitamina A (retinol)== e grandes quantidades de fígado: risco de malformações."]]
    ),
    NOTE('aus', "Since 2009 Australia has ==mandatory folic acid in wheat flour for bread making== and ==iodised salt in bread== (organic bread is exempt). It helps, but doesn't replace the supplements.",
      "Desde 2009 a Austrália tem ==ácido fólico obrigatório na farinha de trigo para pão== e ==sal iodado no pão== (pão orgânico é exceção). Ajuda, mas não substitui os suplementos."),
    PICK(["Which woman should take 5 mg of folic acid rather than 400 µg?", "Qual mulher deve tomar 5 mg de ácido fólico em vez de 400 µg?"],
      [["A woman whose previous pregnancy had a neural tube defect", "Uma mulher cuja gestação anterior teve defeito do tubo neural"], ["A healthy 25-year-old", "Uma jovem saudável de 25 anos"], ["A woman who drinks two coffees a day", "Uma mulher que toma dois cafés por dia"], ["A woman expecting twins with no other risks", "Uma mulher esperando gêmeos sem outros riscos"]], 0,
      ["Higher-dose folic acid is for higher NTD risk: previous NTD, diabetes, obesity, some anti-epileptic medicines.", "A dose maior de ácido fólico é para risco maior de DTN: DTN anterior, diabetes, obesidade, alguns antiepilépticos."])
  ],
  key: [["Folic acid **400 µg** (≥ 1 month before → 3 months after); **5 mg** if high risk", "Ácido fólico **400 µg** (≥ 1 mês antes → 3 meses depois); **5 mg** se alto risco"], ["Iodine **150 µg** in pregnancy and breastfeeding", "Iodo **150 µg** na gestação e amamentação"], ["Iron RDI **27 mg**; avoid **vitamin A** supplements", "RDI de ferro **27 mg**; evitar suplementos de **vitamina A**"]],
  src: ["https://www.pregnancybirthbaby.org.au/vitamins-and-supplements-during-pregnancy"]
},
{
  t: ["Food safety in pregnancy", "Segurança dos alimentos na gestação"],
  b: [
    TABLE([["Risk", "Risco"], ["Avoid", "Evitar"]],
      [["**Listeria**", "**Listeria**"], ["==Soft and semi-soft cheeses== (brie, camembert, ricotta, feta) unless cooked steaming hot; ==cold deli meats==, pâté; ==pre-cut salads and fruit==; raw or smoked seafood, sushi; soft-serve ice-cream; unpasteurised milk", "==Queijos moles e semimoles== (brie, camembert, ricota, feta), a não ser cozidos bem quentes; ==frios fatiados==, patê; ==saladas e frutas já cortadas==; frutos do mar crus ou defumados, sushi; sorvete expresso; leite não pasteurizado"]],
      [["**Mercury** (FSANZ)", "**Mercúrio** (FSANZ)"], ["Shark (flake) and billfish (swordfish, marlin): ==max 1 serve a fortnight==, no other fish that fortnight. Orange roughy or catfish: 1 serve a week, no other fish that week. Other fish ==2–3 serves a week== is good.", "Tubarão (cação/'flake') e peixes-de-bico (espadarte, marlim): ==no máximo 1 porção a cada 15 dias==, sem outro peixe nessa quinzena. Orange roughy ou bagre: 1 porção por semana, sem outro peixe nessa semana. Outros peixes ==2–3 porções por semana== é bom."]],
      [["**Salmonella**, **toxoplasma**", "**Salmonela**, **toxoplasma**"], ["Raw egg (homemade mayonnaise, mousse); raw or undercooked meat; unwashed vegetables; gloves for gardening and cat litter", "Ovo cru (maionese caseira, mousse); carne crua ou malpassada; hortaliças mal lavadas; luvas para jardinagem e caixa de areia do gato"]],
      [["**Caffeine**, **alcohol**", "**Cafeína**, **álcool**"], ["Caffeine ==≤ 200 mg a day== (about 1–2 coffees, depending on strength); ==no alcohol==", "Cafeína ==≤ 200 mg por dia== (cerca de 1–2 cafés, conforme a força); ==nada de álcool=="]]
    ),
    SORT(["Safe or avoid in pregnancy?", "Seguro ou evitar na gestação?"], [["Safe", "Seguro"], ["Avoid", "Evitar"]], [
      ["Brie on a cold sandwich", "Brie num sanduíche frio", 1],
      ["Cheddar cheese", "Queijo cheddar", 0],
      ["Pre-cut fruit salad from a café", "Salada de frutas já cortada de um café", 1],
      ["Freshly cooked chicken, served hot", "Frango recém-cozido, servido quente", 0],
      ["Takeaway sushi", "Sushi para viagem", 1],
      ["Pasteurised yoghurt", "Iogurte pasteurizado", 0],
      ["Cold sliced ham from the deli", "Presunto fatiado do balcão", 1],
      ["Salmon cooked through", "Salmão bem cozido", 0]
    ])
  ],
  key: [["Listeria: soft cheese, deli meats, pre-cut salads/fruit, sushi, soft-serve", "Listeria: queijos moles, frios, saladas/frutas cortadas, sushi, sorvete expresso"], ["Shark/billfish **1 per fortnight**; other fish **2–3/week**", "Tubarão/peixes-de-bico **1 a cada 15 dias**; outros peixes **2–3/semana**"], ["Caffeine **≤ 200 mg/day**; **no alcohol**", "Cafeína **≤ 200 mg/dia**; **nada de álcool**"]],
  src: ["https://www.pregnancybirthbaby.org.au/pregnancy/nutrition-and-lifestyle/guide-to-food-and-drink-during-pregnancy"]
},
{
  t: ["Breastfeeding nutrition", "Nutrição na amamentação"],
  b: [
    UL(
      ["Energy: about ==+2 MJ a day==; serves rise to ==7½ vegetables and 9 grains==.", "Energia: cerca de ==+2 MJ por dia==; as porções sobem para ==7½ de hortaliças e 9 de cereais==."],
      ["Keep taking ==iodine 150 µg== while breastfeeding; vegans need B12.", "Continuar o ==iodo 150 µg== durante a amamentação; veganas precisam de B12."],
      ["Alcohol: ==not drinking is safest==. If she drinks, wait about ==2 hours per standard drink== before the next feed (or express before drinking).", "Álcool: ==não beber é o mais seguro==. Se beber, esperar cerca de ==2 horas por dose padrão== antes da próxima mamada (ou tirar o leite antes de beber)."],
      ["Low milk supply or attachment problems: refer to a ==lactation consultant or the Australian Breastfeeding Association==.", "Pouco leite ou problemas de pega: encaminhar para uma ==consultora em amamentação ou a Australian Breastfeeding Association==."]
    ),
    NOTE('tip', "GDM link: breastfeeding helps lower the mother's future type 2 diabetes risk. A postnatal OGTT at ==6–12 weeks== is still needed (Module 4).",
      "Ligação com o DMG: amamentar ajuda a reduzir o risco futuro de diabetes tipo 2 da mãe. O TOTG pós-parto em ==6–12 semanas== continua necessário (Módulo 4)."),
    PICK(["A breastfeeding mother has 1 standard drink at a party. The best advice is to", "Uma mãe que amamenta toma 1 dose padrão numa festa. A melhor orientação é"],
      [["wait about 2 hours before the next breastfeed", "esperar cerca de 2 horas antes da próxima mamada"], ["express and throw away milk for 24 hours", "tirar e descartar o leite por 24 horas"], ["stop breastfeeding altogether", "parar de amamentar de vez"], ["breastfeed straight away to clear the alcohol", "amamentar imediatamente para eliminar o álcool"]], 0,
      ["Alcohol leaves breast milk as it leaves the blood: about 2 hours per standard drink.", "O álcool sai do leite materno conforme sai do sangue: cerca de 2 horas por dose padrão."])
  ],
  key: [["Breastfeeding: **+2 MJ/day**; veg **7½**, grains **9**", "Amamentação: **+2 MJ/dia**; hortaliças **7½**, cereais **9**"], ["Continue **iodine 150 µg**", "Continuar **iodo 150 µg**"], ["Alcohol: safest none; else wait **~2 h per standard drink**", "Álcool: o mais seguro é nenhum; senão esperar **~2 h por dose padrão**"], ["Supply problems → **lactation consultant / ABA**", "Problemas de produção → **consultora de amamentação / ABA**"]],
  src: ["https://www.rch.org.au/kidsinfo/fact_sheets/Breastfeeding/", "https://www.nhmrc.gov.au/health-advice/alcohol"]
}
],
checks: {2: [69, 74], 4: [70, 73]},
qs: [
  {stem: ["In the second trimester, a woman's extra energy need is about", "No segundo trimestre, a necessidade extra de energia de uma mulher é cerca de"],
   opts: [["1.4 MJ (≈ 340 kcal) a day", "1,4 MJ (≈ 340 kcal) por dia"], ["none", "nenhuma"], ["4 MJ a day", "4 MJ por dia"], ["double her usual intake", "o dobro da ingestão habitual"]], ans: 0,
   why: ["No extra energy in the first trimester; about +1.4 MJ in the second and +1.9 MJ in the third.", "Sem energia extra no primeiro trimestre; cerca de +1,4 MJ no segundo e +1,9 MJ no terceiro."], src: "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients-dietary-energy-calculator"},
  {stem: ["Which woman should be advised to take 5 mg folic acid rather than 400 µg?", "Qual mulher deve ser orientada a tomar 5 mg de ácido fólico em vez de 400 µg?"],
   opts: [["One whose previous pregnancy had a neural tube defect", "Uma cuja gestação anterior teve defeito do tubo neural"], ["A healthy 25-year-old", "Uma jovem saudável de 25 anos"], ["A vegetarian with normal iron", "Uma vegetariana com ferro normal"], ["One who drinks one coffee a day", "Uma que toma um café por dia"]], ans: 0,
   why: ["5 mg is for higher neural tube defect risk: previous NTD, diabetes, obesity, some anti-epileptic medicines.", "5 mg é para risco maior de defeito do tubo neural: DTN anterior, diabetes, obesidade, alguns antiepilépticos."], src: "https://www.pregnancybirthbaby.org.au/vitamins-and-supplements-during-pregnancy"},
  {stem: ["Which of these is SAFE for a pregnant woman to eat?", "Qual destes é SEGURO para uma gestante comer?"],
   opts: [["Hard cheese such as cheddar", "Queijo duro como cheddar"], ["Cold sliced deli ham", "Presunto fatiado do balcão, frio"], ["Pre-cut fruit salad from a café", "Salada de frutas já cortada de um café"], ["Takeaway sushi", "Sushi para viagem"]], ans: 0,
   why: ["Hard cheeses are low risk. Deli meats, pre-cut fruit and sushi are listeria risks.", "Queijos duros têm baixo risco. Frios, frutas já cortadas e sushi são risco de listeria."], src: "https://www.pregnancybirthbaby.org.au/pregnancy/nutrition-and-lifestyle/guide-to-food-and-drink-during-pregnancy"},
  {stem: ["A breastfeeding mother has 1 standard drink. The safest advice is to", "Uma mãe que amamenta toma 1 dose padrão. A orientação mais segura é"],
   opts: [["wait about 2 hours before the next breastfeed", "esperar cerca de 2 horas antes da próxima mamada"], ["express and discard milk for 24 hours", "tirar e descartar o leite por 24 horas"], ["stop breastfeeding", "parar de amamentar"], ["breastfeed straight away", "amamentar imediatamente"]], ans: 0,
   why: ["Allow about 2 hours per standard drink before breastfeeding; not drinking is safest.", "Espere cerca de 2 horas por dose padrão antes de amamentar; não beber é o mais seguro."], src: "https://www.nhmrc.gov.au/health-advice/alcohol"}
]
});
