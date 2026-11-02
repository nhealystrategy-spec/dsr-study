MOD({
id: 1, mins: 25,
hook: ["Take away the stomach and one vitamin can never be absorbed from food again. Links like that between the gut and a deficiency are classic exam questions, and so is thinking in kilojoules.", "Sem o estômago, uma vitamina nunca mais é absorvida pela comida. Ligações assim entre o intestino e uma deficiência são questões clássicas de prova, e pensar em quilojoules também."],
teasers: [["Which part of the gut takes in iron, and why coeliac disease drains it", "Que parte do intestino absorve o ferro, e por que a celíaca o esgota"], ["The fuel the brain switches to after a few days without food", "O combustível que o cérebro passa a usar depois de alguns dias sem comer"], ["The quick sum that turns any Brazilian meal plan into Australian units", "A conta rápida que transforma qualquer plano alimentar brasileiro em unidades australianas"]],
goals: [
  ["Say where each nutrient is absorbed, and what a gut resection takes away", "Dizer onde cada nutriente é absorvido e o que uma ressecção intestinal tira"],
  ["Explain the fed and fasting states using insulin and glucagon", "Explicar os estados alimentado e de jejum usando insulina e glucagon"],
  ["Follow fat and protein to ketones and urea", "Acompanhar gordura e proteína até cetonas e ureia"],
  ["Convert kcal and kJ quickly", "Converter kcal e kJ rapidamente"]
],
pages: [
{
  t: ["Where nutrients are absorbed", "Onde os nutrientes são absorvidos"],
  b: [
    P("Digestion breaks food into pieces small enough to absorb. Most absorption happens in the **small intestine**, but the exact place matters: it explains the deficiencies that follow surgery or disease.",
      "A digestão quebra o alimento em partes pequenas o suficiente para serem absorvidas. A maior parte da absorção acontece no **intestino delgado**, mas o local exato importa: ele explica as deficiências depois de cirurgias ou doenças."),
    FLOW(
      [["Mouth and stomach", "Boca e estômago"], ["Starch digestion starts (amylase). The stomach makes acid and ==intrinsic factor==, which B12 needs later.", "A digestão do amido começa (amilase). O estômago produz ácido e ==fator intrínseco==, de que a B12 vai precisar depois."]],
      [["Duodenum", "Duodeno"], ["==Iron and calcium== are mainly absorbed here. Bile and pancreatic enzymes arrive.", "==Ferro e cálcio== são absorvidos principalmente aqui. Chegam a bile e as enzimas pancreáticas."]],
      [["Jejunum", "Jejuno"], ["==Most nutrients==: sugars, amino acids, fats, most vitamins and minerals.", "==A maioria dos nutrientes==: açúcares, aminoácidos, gorduras, a maior parte das vitaminas e minerais."]],
      [["Terminal ileum", "Íleo terminal"], ["==Vitamin B12== (bound to intrinsic factor) and ==bile salts==.", "==Vitamina B12== (ligada ao fator intrínseco) e ==sais biliares==."]],
      [["Colon", "Cólon"], ["Water and electrolytes. Bacteria ferment fibre into short-chain fatty acids.", "Água e eletrólitos. As bactérias fermentam a fibra em ácidos graxos de cadeia curta."]]
    ),
    NOTE('exam', "Exams link anatomy to deficiency. Stomach removed → no intrinsic factor → ==B12 injections for life==. Terminal ileum removed → B12 and bile salts lost → fat malabsorption and low fat-soluble vitamins (A, D, E, K). Duodenal damage (e.g. coeliac disease) → ==iron and calcium==.",
      "As provas ligam anatomia a deficiência. Sem estômago → sem fator intrínseco → ==B12 injetável para sempre==. Sem íleo terminal → perde B12 e sais biliares → má absorção de gordura e vitaminas lipossolúveis baixas (A, D, E, K). Lesão no duodeno (ex. doença celíaca) → ==ferro e cálcio=="),
    PICK(["After a total gastrectomy (stomach removed), which vitamin will the patient need by injection for life?", "Depois de uma gastrectomia total (sem estômago), qual vitamina o paciente vai precisar tomar injetável para sempre?"],
      [["Vitamin B12", "Vitamina B12"], ["Vitamin C", "Vitamina C"], ["Folate", "Folato"], ["Vitamin K", "Vitamina K"]], 0,
      ["No stomach means no intrinsic factor, so B12 from food can't be absorbed in the ileum.", "Sem estômago não há fator intrínseco, então a B12 dos alimentos não é absorvida no íleo."])
  ],
  key: [["Most absorption: **jejunum**", "Maior parte da absorção: **jejuno**"], ["Iron and calcium: **duodenum**", "Ferro e cálcio: **duodeno**"], ["B12 and bile salts: **terminal ileum** (B12 needs intrinsic factor from the stomach)", "B12 e sais biliares: **íleo terminal** (a B12 precisa do fator intrínseco do estômago)"], ["Colon: water, electrolytes, fibre fermentation", "Cólon: água, eletrólitos, fermentação da fibra"]],
  src: ["https://pressbooks.oer.hawaii.edu/humannutrition2e22/chapter/2-the-digestive-system/"]
},
{
  t: ["Turning glucose into energy", "Transformando glicose em energia"],
  b: [
    P("Cells release energy from glucose in stages. You don't need every enzyme: know **what each stage is for**, where it happens and whether it needs oxygen.",
      "As células liberam a energia da glicose em etapas. Você não precisa de cada enzima: saiba **para que serve cada etapa**, onde acontece e se precisa de oxigênio."),
    FLOW(
      [["1. Glycolysis (cytoplasm)", "1. Glicólise (citoplasma)"], ["Glucose → 2 pyruvate. Net ==2 ATP== and 2 NADH. ==No oxygen needed.==", "Glicose → 2 piruvatos. Saldo de ==2 ATP== e 2 NADH. ==Não precisa de oxigênio.=="]],
      [["2. Link step (mitochondria)", "2. Etapa de ligação (mitocôndria)"], ["With oxygen, pyruvate becomes ==acetyl-CoA==.", "Com oxigênio, o piruvato vira ==acetil-CoA==."]],
      [["3. Krebs (citric acid) cycle", "3. Ciclo de Krebs (ácido cítrico)"], ["Acetyl-CoA is oxidised to CO2. It fills the energy carriers NADH and FADH2.", "O acetil-CoA é oxidado a CO2. Ele 'carrega' os transportadores de energia NADH e FADH2."]],
      [["4. Electron transport chain", "4. Cadeia transportadora de elétrons"], ["NADH and FADH2 drive ATP synthase. This makes ==most of the ATP== and needs oxygen (water is made).", "NADH e FADH2 movem a ATP sintase. Aqui se produz ==a maior parte do ATP==, e precisa de oxigênio (forma-se água)."]],
      [["No oxygen?", "Sem oxigênio?"], ["Pyruvate → ==lactate== (very hard exercise, shock).", "Piruvato → ==lactato== (exercício muito intenso, choque)."]]
    ),
    NOTE('tip', "**Acetyl-CoA is the crossroads.** Carbohydrate, fat and some amino acids all feed into it. When there is lots of acetyl-CoA but little carbohydrate, the liver turns it into ketones (page 4).",
      "**O acetil-CoA é o cruzamento.** Carboidrato, gordura e alguns aminoácidos entram por ele. Quando há muito acetil-CoA e pouco carboidrato, o fígado o transforma em cetonas (página 4)."),
    SORT(["Which stage is it?", "Qual é a etapa?"], [["Glycolysis", "Glicólise"], ["Krebs cycle", "Ciclo de Krebs"], ["Electron transport chain", "Cadeia de elétrons"]], [
      ["Happens in the cytoplasm", "Acontece no citoplasma", 0],
      ["Works without oxygen", "Funciona sem oxigênio", 0],
      ["Makes most of the ATP", "Produz a maior parte do ATP", 2],
      ["Uses acetyl-CoA and releases CO2", "Usa acetil-CoA e libera CO2", 1],
      ["Oxygen is the final electron acceptor", "O oxigênio é o aceptor final de elétrons", 2],
      ["Ends with pyruvate", "Termina em piruvato", 0]
    ])
  ],
  key: [["Glycolysis: cytoplasm, no oxygen, net **2 ATP**", "Glicólise: citoplasma, sem oxigênio, saldo de **2 ATP**"], ["Acetyl-CoA links carbohydrate, fat and protein", "O acetil-CoA liga carboidrato, gordura e proteína"], ["Electron transport chain makes **most ATP** and needs oxygen", "A cadeia de elétrons produz **a maior parte do ATP** e precisa de oxigênio"], ["No oxygen → pyruvate becomes **lactate**", "Sem oxigênio → o piruvato vira **lactato**"]],
  src: ["https://www.khanacademy.org/science/biology/cellular-respiration/oxidative-phosphorylation/a/oxidative-phosphorylation-etc"]
},
{
  t: ["Fed or fasting?", "Alimentado ou em jejum?"],
  b: [
    P("Your body switches between **storing** fuel after meals and **releasing** it between meals. Two hormones from the pancreas run the switch: ==insulin== and ==glucagon==.",
      "O corpo alterna entre **armazenar** combustível depois das refeições e **liberar** combustível entre elas. Dois hormônios do pâncreas comandam a troca: ==insulina== e ==glucagon==."),
    TABLE([["", ""], ["Fed (after a meal)", "Alimentado (após refeição)"], ["Fasting", "Jejum"]],
      [["Main hormone", "Hormônio principal"], ["==Insulin== up", "==Insulina== alta"], ["==Glucagon== up (plus cortisol, adrenaline)", "==Glucagon== alto (mais cortisol, adrenalina)"]],
      [["Glucose", "Glicose"], ["Taken into muscle and fat cells; stored as ==glycogen==", "Entra nas células musculares e de gordura; armazenada como ==glicogênio=="], ["Released from liver glycogen", "Liberada do glicogênio do fígado"]],
      [["After about 24 hours", "Após cerca de 24 horas"], ["–", "–"], ["Liver glycogen runs low → ==gluconeogenesis== from amino acids, lactate and glycerol", "O glicogênio do fígado acaba → ==gliconeogênese== a partir de aminoácidos, lactato e glicerol"]],
      [["Fat", "Gordura"], ["Stored", "Armazenada"], ["Broken down (lipolysis) for fuel", "Quebrada (lipólise) para gerar energia"]],
      [["Several days", "Vários dias"], ["–", "–"], ["Liver makes ==ketones==; the brain adapts to use them, sparing muscle protein", "O fígado produz ==cetonas==; o cérebro se adapta a usá-las, poupando a proteína muscular"]]
    ),
    SORT(["Fed or fasting?", "Alimentado ou jejum?"], [["Fed", "Alimentado"], ["Fasting", "Jejum"]], [
      ["Insulin is high", "Insulina alta", 0],
      ["Glucagon is high", "Glucagon alto", 1],
      ["Glycogen is being made", "Glicogênio sendo formado", 0],
      ["Gluconeogenesis", "Gliconeogênese", 1],
      ["Ketones are rising", "Cetonas subindo", 1],
      ["Fat is being stored", "Gordura sendo armazenada", 0],
      ["Lipolysis", "Lipólise", 1]
    ]),
    NOTE('exam', "This switch sits behind many clinical questions: why ==refeeding drops phosphate== (the insulin surge pulls phosphate into cells), why uncontrolled type 1 diabetes makes ketones, and why a fasting patient loses muscle.",
      "Essa troca está por trás de muitas questões clínicas: por que a ==realimentação derruba o fosfato== (o pico de insulina puxa o fosfato para dentro das células), por que o diabetes tipo 1 descontrolado produz cetonas e por que um paciente em jejum perde músculo.")
  ],
  key: [["Fed: **insulin** → store glucose as glycogen and fat", "Alimentado: **insulina** → armazena glicose como glicogênio e gordura"], ["Fasting: **glucagon** → glycogen breakdown, then **gluconeogenesis**", "Jejum: **glucagon** → quebra do glicogênio, depois **gliconeogênese**"], ["Liver glycogen lasts about **24 hours**", "O glicogênio do fígado dura cerca de **24 horas**"], ["Long fasts: **ketones** feed the brain and spare muscle", "Jejum longo: as **cetonas** alimentam o cérebro e poupam músculo"]],
  src: ["https://openstax.org/books/anatomy-and-physiology-2e/pages/24-5-metabolic-states-of-the-body"]
},
{
  t: ["Fat, protein and ketones", "Gordura, proteína e cetonas"],
  b: [
    P("Fatty acids are broken down by **beta-oxidation** into acetyl-CoA. The glycerol backbone of a triglyceride can become glucose, but ==fatty acids cannot==.",
      "Os ácidos graxos são quebrados pela **beta-oxidação** em acetil-CoA. O glicerol do triglicerídeo pode virar glicose, mas ==os ácidos graxos não==."),
    UL(
      ["**Ketones** are made in the ==liver== when insulin and carbohydrate are low. Muscles and, after a few days, the brain can use them.", "As **cetonas** são produzidas no ==fígado== quando a insulina e o carboidrato estão baixos. Os músculos e, depois de alguns dias, o cérebro conseguem usá-las."],
      ["Danger: with ==no insulin== (type 1 diabetes) ketones build up → **diabetic ketoacidosis (DKA)**. SGLT2-inhibitor medicines plus a very low carbohydrate diet can also cause ketoacidosis.", "Perigo: ==sem insulina== (diabetes tipo 1) as cetonas se acumulam → **cetoacidose diabética (CAD)**. Remédios inibidores de SGLT2 junto com dieta muito pobre em carboidrato também podem causar cetoacidose."],
      ["**Protein**: amino acids build tissue. Extras are **deaminated**: the nitrogen becomes ammonia, then ==urea== in the liver, which the kidneys excrete.", "**Proteína**: os aminoácidos constroem tecidos. O excesso é **desaminado**: o nitrogênio vira amônia e depois ==ureia== no fígado, que os rins eliminam."],
      ["Protein (g) ≈ nitrogen (g) × ==6.25==.", "Proteína (g) ≈ nitrogênio (g) × ==6,25==."]
    ),
    NUM(["A patient's daily intake contains 12 g of nitrogen. About how many grams of protein is that?", "A ingestão diária de um paciente tem 12 g de nitrogênio. Isso é cerca de quantos gramas de proteína?"], 75, 1, "g",
      ["12 × 6.25 = 75 g of protein.", "12 × 6,25 = 75 g de proteína."]),
    NOTE('warn', "In liver failure, ammonia is not turned into urea well and can cause confusion (hepatic encephalopathy). Modern practice does ==not== restrict protein for this. You will meet it again in Module 7.",
      "Na insuficiência hepática, a amônia não vira ureia direito e pode causar confusão (encefalopatia hepática). A prática atual ==não== restringe proteína por isso. Você vai rever isso no Módulo 7.")
  ],
  key: [["Fatty acids → acetyl-CoA (never net glucose); glycerol → glucose", "Ácidos graxos → acetil-CoA (nunca glicose); glicerol → glicose"], ["Ketones: made in the liver when insulin is low", "Cetonas: feitas no fígado quando a insulina está baixa"], ["No insulin → **DKA**", "Sem insulina → **cetoacidose**"], ["Amino acid nitrogen → ammonia → **urea**; protein = N × **6.25**", "Nitrogênio dos aminoácidos → amônia → **ureia**; proteína = N × **6,25**"]],
  src: ["https://openstax.org/books/anatomy-and-physiology/pages/24-3-lipid-metabolism", "https://openstax.org/books/anatomy-and-physiology-2e/pages/24-4-protein-metabolism"]
},
{
  t: ["Kilojoules: think like an Australian", "Quilojoules: pense como australiana"],
  b: [
    P("Australian labels, guidelines and hospital charts use **kilojoules (kJ)**. Calories still appear, but kJ comes first. Large amounts are written in **megajoules (MJ)**: 1 MJ = 1000 kJ.",
      "Rótulos, diretrizes e prontuários australianos usam **quilojoules (kJ)**. As calorias ainda aparecem, mas o kJ vem primeiro. Valores grandes são escritos em **megajoules (MJ)**: 1 MJ = 1000 kJ."),
    TABLE([["Per gram of…", "Por grama de…"], "kJ", "kcal"],
      [["Fat", "Gordura"], "==37==", "9"],
      [["Alcohol", "Álcool"], "==29==", "7"],
      [["Protein", "Proteína"], "==17==", "4"],
      [["Carbohydrate", "Carboidrato"], "==17==", "4"],
      [["Dietary fibre", "Fibra alimentar"], "==8==", "2"]
    ),
    NOTE('tip', "Quick maths: ==kcal × 4.2 ≈ kJ== (exactly 4.184). 1000 kJ ≈ 240 kcal. The 'average adult' on Australian labels eats ==8700 kJ== a day (about 2080 kcal).",
      "Conta rápida: ==kcal × 4,2 ≈ kJ== (exatamente 4,184). 1000 kJ ≈ 240 kcal. O 'adulto médio' dos rótulos australianos come ==8700 kJ== por dia (cerca de 2080 kcal)."),
    NUM(["A Brazilian meal plan gives 1800 kcal a day. About how many kJ is that?", "Um plano alimentar brasileiro tem 1800 kcal por dia. Isso dá cerca de quantos kJ?"], 7530, 150, "kJ",
      ["1800 × 4.184 ≈ 7530 kJ, or about 7.5 MJ.", "1800 × 4,184 ≈ 7530 kJ, ou cerca de 7,5 MJ."]),
    NOTE('br', "In Brazil you plan in kcal. In Australia, talk and write in ==kJ or MJ== with clients, on charts and in the exam. Practise until it feels automatic.",
      "No Brasil você planeja em kcal. Na Austrália, fale e escreva em ==kJ ou MJ== com os pacientes, nos prontuários e na prova. Pratique até ficar automático.")
  ],
  key: [["kJ per gram: fat **37**, alcohol **29**, protein **17**, carbohydrate **17**, fibre **8**", "kJ por grama: gordura **37**, álcool **29**, proteína **17**, carboidrato **17**, fibra **8**"], ["kcal × **4.184** = kJ; 1 MJ = 1000 kJ", "kcal × **4,184** = kJ; 1 MJ = 1000 kJ"], ["Label reference adult: **8700 kJ**", "Adulto de referência do rótulo: **8700 kJ**"]],
  src: ["https://www.foodstandards.gov.au/food-standards-code"]
}
],
checks: {2: [0, 'n3'], 4: [2, 1]},
qs: [
  {stem: ["Per gram, which provides the MOST energy?", "Por grama, qual fornece MAIS energia?"],
   opts: [["Fat", "Gordura"], ["Alcohol", "Álcool"], ["Protein", "Proteína"], ["Carbohydrate", "Carboidrato"]], ans: 0,
   why: ["Fat 37 kJ/g, alcohol 29, protein and carbohydrate 17, fibre 8.", "Gordura 37 kJ/g, álcool 29, proteína e carboidrato 17, fibra 8."], src: "https://www.foodstandards.gov.au/food-standards-code"},
  {stem: ["Iron is MAINLY absorbed in the", "O ferro é absorvido PRINCIPALMENTE no"],
   opts: [["duodenum", "duodeno"], ["terminal ileum", "íleo terminal"], ["colon", "cólon"], ["stomach", "estômago"]], ans: 0,
   why: ["Iron and calcium are mainly absorbed in the duodenum, which is why coeliac disease often causes iron deficiency.", "Ferro e cálcio são absorvidos principalmente no duodeno; por isso a doença celíaca causa deficiência de ferro com frequência."], src: "https://pressbooks.oer.hawaii.edu/humannutrition2e22/chapter/2-the-digestive-system/"},
  {stem: ["During a 3-day fast, which can the liver NOT turn into glucose?", "Num jejum de 3 dias, o que o fígado NÃO consegue transformar em glicose?"],
   opts: [["Fatty acids", "Ácidos graxos"], ["Glycerol", "Glicerol"], ["Lactate", "Lactato"], ["Amino acids", "Aminoácidos"]], ans: 0,
   why: ["Fatty acids become acetyl-CoA, which cannot make net glucose. Glycerol, lactate and most amino acids can feed gluconeogenesis.", "Os ácidos graxos viram acetil-CoA, que não gera glicose. Glicerol, lactato e a maioria dos aminoácidos alimentam a gliconeogênese."], src: "https://openstax.org/books/anatomy-and-physiology/pages/24-3-lipid-metabolism"},
  {stem: ["Lactate rises during very hard exercise MAINLY because", "O lactato sobe no exercício muito intenso PRINCIPALMENTE porque"],
   opts: [["pyruvate becomes lactate when oxygen is short", "o piruvato vira lactato quando falta oxigênio"], ["the liver releases lactate from glycogen", "o fígado libera lactato do glicogênio"], ["fat is turned into lactate in muscle", "a gordura vira lactato no músculo"], ["protein breakdown produces lactate", "a quebra de proteína produz lactato"]], ans: 0,
   why: ["Without enough oxygen, pyruvate from glycolysis is converted to lactate so glycolysis can keep making ATP.", "Sem oxigênio suficiente, o piruvato da glicólise vira lactato para a glicólise continuar produzindo ATP."], src: "https://www.youtube.com/watch?v=FE2jfTXAJHg"}
]
});
