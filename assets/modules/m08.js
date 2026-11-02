MOD({
id: 8, mins: 40,
hook: ["For years, hospitals fed very malnourished patients very slowly to avoid refeeding syndrome. In 2025, Australia's experts said to stop. Learn the new rule before you meet it in a question.", "Por anos, os hospitais alimentaram pacientes muito desnutridos bem devagar para evitar a síndrome de realimentação. Em 2025, os especialistas australianos disseram para parar. Aprenda a nova regra antes de encontrá-la numa questão."],
teasers: [["The blood test that sounds like a nutrition marker but isn't", "O exame de sangue que parece marcador nutricional, mas não é"], ["The two questions that screen for malnutrition in about a minute", "As duas perguntas que fazem a triagem de desnutrição em cerca de um minuto"], ["The vitamin to give before the first meal or tube feed", "A vitamina a dar antes da primeira refeição ou dieta por sonda"]],
goals: [
  ["Diagnose malnutrition with SGA and the GLIM criteria", "Diagnosticar desnutrição com a ASG e os critérios GLIM"],
  ["Score the Malnutrition Screening Tool", "Pontuar a Malnutrition Screening Tool"],
  ["Escalate from food-first to tube feeding", "Escalonar do 'food-first' até a sonda"],
  ["Choose an enteral route", "Escolher a via enteral"],
  ["Identify and manage refeeding risk the AuSPEN 2025 way", "Identificar e manejar o risco de realimentação pelo método AuSPEN 2025"]
],
pages: [
{
  t: ["Why malnutrition matters", "Por que a desnutrição importa"],
  b: [
    P("Malnutrition is common in hospitals and aged care (large Australian studies have found around ==1 in 3 adult inpatients==) and it is often missed. It means ==longer stays, more infections, falls and pressure injuries, and higher death rates==.",
      "A desnutrição é comum em hospitais e ILPIs (grandes estudos australianos encontraram cerca de ==1 em cada 3 adultos internados==) e muitas vezes passa despercebida. Ela significa ==internações mais longas, mais infecções, quedas e lesões por pressão, e mais mortes==."),
    P("The **GLIM criteria** diagnose malnutrition with ==at least one phenotypic AND one aetiologic criterion==:",
      "Os **critérios GLIM** diagnosticam desnutrição com ==pelo menos um critério fenotípico E um etiológico==:"),
    TABLE([["Phenotypic (what you see)", "Fenotípico (o que se vê)"], ["Aetiologic (the cause)", "Etiológico (a causa)"]],
      [["Unintentional weight loss", "Perda de peso não intencional"], ["Reduced food intake or absorption", "Ingestão ou absorção de alimentos reduzida"]],
      [["Low BMI", "IMC baixo"], ["Inflammation / disease burden", "Inflamação / carga de doença"]],
      [["Reduced muscle mass", "Massa muscular reduzida"], ["", ""]]
    ),
    SORT(["Phenotypic or aetiologic?", "Fenotípico ou etiológico?"], [["Phenotypic", "Fenotípico"], ["Aetiologic", "Etiológico"]], [
      ["Lost 8% of body weight in 3 months", "Perdeu 8% do peso em 3 meses", 0],
      ["Eating less than half of meals for 2 weeks", "Comendo menos da metade das refeições há 2 semanas", 1],
      ["Visible wasting at the temples and shoulders", "Perda visível de músculo nas têmporas e ombros", 0],
      ["Active Crohn's disease", "Doença de Crohn ativa", 1],
      ["BMI 17.8", "IMC 17,8", 0],
      ["Short bowel after surgery (poor absorption)", "Intestino curto após cirurgia (má absorção)", 1]
    ]),
    NOTE('exam', "==Albumin is not a nutrition marker==: it falls with inflammation, illness and fluid shifts. Don't use it alone to diagnose malnutrition.",
      "==Albumina não é marcador nutricional==: ela cai com inflamação, doença e alterações de líquidos. Não a use sozinha para diagnosticar desnutrição.")
  ],
  key: [["Common (~**1 in 3** inpatients) and often missed", "Comum (~**1 em 3** internados) e muitas vezes despercebida"], ["GLIM: **≥ 1 phenotypic + ≥ 1 aetiologic**", "GLIM: **≥ 1 fenotípico + ≥ 1 etiológico**"], ["Albumin ≠ nutrition marker", "Albumina ≠ marcador nutricional"]],
  src: ["https://www.health.qld.gov.au/nutrition/patients/subjective-global-assessment-training-videos"]
},
{
  t: ["Screening and assessment tools", "Ferramentas de triagem e avaliação"],
  b: [
    TABLE([["Tool", "Ferramenta"], ["Use", "Uso"]],
      [["**MST** Malnutrition Screening Tool", "**MST** Malnutrition Screening Tool"], ["Quick screen in hospitals; ==score ≥ 2 = at risk==", "Triagem rápida no hospital; ==escore ≥ 2 = em risco=="]],
      [["**MNA-SF**", "**MNA-SF**"], ["Screen older people (aged care)", "Triagem de idosos (ILPI)"]],
      [["**MUST**", "**MUST**"], ["Screen in community and some hospitals", "Triagem na comunidade e em alguns hospitais"]],
      [["**SGA** Subjective Global Assessment", "**ASG** Avaliação Subjetiva Global"], ["Full assessment: ==A well nourished, B mild–moderate, C severe==", "Avaliação completa: ==A bem nutrido, B leve–moderada, C grave=="]],
      [["**PG-SGA**", "**ASG-PPP**"], ["SGA adapted for people with cancer", "ASG adaptada para pessoas com câncer"]]
    ),
    TABLE([["MST question", "Pergunta da MST"], ["Score", "Pontos"]],
      [["Lost weight without trying? No", "Perdeu peso sem querer? Não"], "0"],
      [["Unsure", "Não sabe"], "2"],
      [["Yes: 0.5–5 kg / 6–10 kg / 11–15 kg / > 15 kg", "Sim: 0,5–5 kg / 6–10 kg / 11–15 kg / > 15 kg"], "1 / 2 / 3 / 4"],
      [["Eating poorly because of a decreased appetite? Yes", "Comendo mal por falta de apetite? Sim"], "1"]
    ),
    VIDEO('vimeo:523587289', 'Queensland Health (Metro North)', 15, ["How to do a Subjective Global Assessment (SGA)", "Como fazer a Subjective Global Assessment (SGA)"],
      ["Queensland Health's SGA training video, from your study planner. As you watch, match each part to this page: the ==history== (weight, intake, symptoms, function) and the ==physical exam== (fat, muscle, oedema). Then rate the patient ==A, B or C==. Five practice cases are on the Queensland Health page in the sources below.",
       "O vídeo de treinamento da SGA da Queensland Health, do seu plano de estudos. Enquanto assiste, ligue cada parte a esta página: a ==história== (peso, ingestão, sintomas, função) e o ==exame físico== (gordura, músculo, edema). Depois classifique o paciente em ==A, B ou C==. Há cinco casos para praticar na página da Queensland Health nas fontes abaixo."]),
    NUM(["A patient lost 7 kg without trying and is eating poorly because of a low appetite. What is the MST score?", "Um paciente perdeu 7 kg sem querer e está comendo mal por falta de apetite. Qual é o escore MST?"], 3, 0, "",
      ["6–10 kg = 2 points, poor appetite = 1 point → 3: at risk, refer for full assessment.", "6–10 kg = 2 pontos, falta de apetite = 1 ponto → 3: em risco, encaminhar para avaliação completa."]),
    NOTE('tip', "SGA physical exam: look for ==fat loss== (around the eyes, triceps, ribs) and ==muscle wasting== (temples, collarbones, shoulders, shoulder blades, thighs), and oedema.",
      "Exame físico da ASG: procure ==perda de gordura== (ao redor dos olhos, tríceps, costelas) e ==perda muscular== (têmporas, clavículas, ombros, escápulas, coxas), e edema.")
  ],
  key: [["MST **≥ 2** → refer for assessment", "MST **≥ 2** → encaminhar para avaliação"], ["Older people: **MNA-SF**; cancer: **PG-SGA**", "Idosos: **MNA-SF**; câncer: **ASG-PPP**"], ["SGA: **A / B / C** from history + physical exam", "ASG: **A / B / C** pela história + exame físico"]],
  src: ["https://www.health.qld.gov.au/nutrition/patients/subjective-global-assessment-training-videos"]
},
{
  t: ["Food first, then escalate", "Primeiro a comida, depois escalonar"],
  b: [
    P("Start with ==food-first== strategies: they are cheap, enjoyable and often enough. Escalate only when intake stays too low.",
      "Comece com estratégias ==food-first== (alimentação primeiro): são baratas, agradáveis e muitas vezes suficientes. Escalone só quando a ingestão continuar baixa demais."),
    TABLE([["Fortify with…", "Enriqueça com…"], ["Example", "Exemplo"]],
      [["Milk powder", "Leite em pó"], ["2 tablespoons in milk, porridge, soup or mashed potato", "2 colheres de sopa no leite, mingau, sopa ou purê"]],
      [["Cheese, butter, oil, cream", "Queijo, manteiga, óleo, creme de leite"], ["Grated cheese on vegetables; margarine on bread and vegetables", "Queijo ralado nas hortaliças; margarina no pão e nas hortaliças"]],
      [["Eggs, nut butters, yoghurt", "Ovos, pastas de oleaginosas, iogurte"], ["Extra egg in scrambled eggs; peanut butter on toast", "Ovo extra nos ovos mexidos; pasta de amendoim na torrada"]],
      [["Nourishing drinks", "Bebidas nutritivas"], ["Milkshakes, smoothies, milky coffee between meals", "Vitaminas, smoothies, café com leite entre as refeições"]]
    ),
    VIDEO('DNXjN0HsA7I', 'Queensland Health (Princess Alexandra Hospital)', 9, ["High protein, high energy: easy ways to gain weight (part 1)", "Alta proteína e alta energia: jeitos fáceis de ganhar peso (parte 1)"],
      ["Made by Queensland Health dietitians to go with the NEMO high protein high energy handout. It shows ==food-first== ideas: adding protein and energy to everyday meals and snacks, plus tips for a poor appetite or nausea. Part 2 is on YouTube too.",
       "Feito por nutricionistas da Queensland Health para acompanhar o folheto NEMO de alta proteína e alta energia. Mostra ideias de ==food-first== (comida em primeiro lugar): colocar proteína e energia nas refeições e lanches do dia a dia, e dicas para falta de apetite ou náusea. A parte 2 também está no YouTube."]),
    ORDER(["Put the nutrition support ladder in order (least to most invasive)", "Coloque a escada de suporte nutricional em ordem (do menos ao mais invasivo)"], [
      ["High energy, high protein food and fortification", "Comida hipercalórica e hiperproteica e enriquecimento"],
      ["Nourishing drinks and snacks", "Bebidas e lanches nutritivos"],
      ["Oral nutrition supplements", "Suplementos nutricionais orais"],
      ["Enteral (tube) feeding", "Nutrição enteral (sonda)"],
      ["Parenteral nutrition", "Nutrição parenteral"]
    ]),
    NOTE('aus', "Hospitals use ==protected mealtimes== and mealtime assistance (opening packets, positioning, help to eat) — simple fixes that raise intake.",
      "Os hospitais usam ==refeições protegidas== e ajuda nas refeições (abrir embalagens, posicionar, ajudar a comer) — soluções simples que aumentam a ingestão.")
  ],
  key: [["**Food first**: fortify, small frequent meals, nourishing drinks", "**Alimentação primeiro**: enriquecer, refeições pequenas e frequentes, bebidas nutritivas"], ["Then **ONS** → **enteral** → **parenteral**", "Depois **SNO** → **enteral** → **parenteral**"], ["Protected mealtimes and mealtime help", "Refeições protegidas e ajuda para comer"]],
  src: ["https://www.health.qld.gov.au/__data/assets/pdf_file/0021/145830/nemo-hphe.pdf"]
},
{
  t: ["Enteral and parenteral nutrition", "Nutrição enteral e parenteral"],
  b: [
    P("==If the gut works, use it.== Enteral feeding is safer and cheaper than parenteral nutrition (PN). PN is for when the gut cannot be used or cannot absorb enough.",
      "==Se o intestino funciona, use-o.== A nutrição enteral é mais segura e barata que a parenteral (NP). A NP é para quando o intestino não pode ser usado ou não absorve o suficiente."),
    TABLE([["Route", "Via"], ["When", "Quando"]],
      [["Nasogastric (NG)", "Nasogástrica (SNG)"], ["Short term (usually < 4–6 weeks)", "Curto prazo (em geral < 4–6 semanas)"]],
      [["Nasojejunal (NJ)", "Nasojejunal (SNE)"], ["Poor stomach emptying, high aspiration risk, pancreatitis", "Esvaziamento gástrico ruim, alto risco de aspiração, pancreatite"]],
      [["Gastrostomy (PEG) / jejunostomy", "Gastrostomia (PEG) / jejunostomia"], ["==Long term== (> 4–6 weeks), e.g. after stroke or in motor neurone disease", "==Longo prazo== (> 4–6 semanas), ex. após AVC ou na doença do neurônio motor"]],
      [["Parenteral (central line)", "Parenteral (acesso central)"], ["Gut not working: obstruction, severe short bowel, prolonged ileus", "Intestino sem funcionar: obstrução, intestino curto grave, íleo prolongado"]]
    ),
    UL(
      ["Monitor: tolerance (nausea, bloating, bowels), aspiration (head of bed ≥ 30°), ==refeeding bloods==, glucose, fluid balance, weight.", "Monitorar: tolerância (náusea, distensão, intestino), aspiração (cabeceira ≥ 30°), ==exames de realimentação==, glicose, balanço hídrico, peso."],
      ["Standard feeds give about 1 kcal (4.2 kJ) per mL; energy-dense feeds 1.5–2 kcal per mL for fluid-restricted patients.", "As dietas padrão dão cerca de 1 kcal (4,2 kJ) por mL; as hipercalóricas 1,5–2 kcal por mL para quem tem restrição hídrica."]
    ),
    PICK(["A man after a major stroke will need tube feeding for at least 3 months. The usual route is", "Um homem após um AVC grave vai precisar de sonda por pelo menos 3 meses. A via usual é"],
      [["A gastrostomy (PEG)", "Uma gastrostomia (PEG)"], ["A nasogastric tube for 3 months", "Uma sonda nasogástrica por 3 meses"], ["Parenteral nutrition", "Nutrição parenteral"], ["Oral supplements only", "Só suplementos orais"]], 0,
      ["Long-term feeding (> 4–6 weeks) usually moves to a gastrostomy. The gut works, so PN isn't needed.", "Alimentação de longo prazo (> 4–6 semanas) costuma passar para gastrostomia. O intestino funciona, então não precisa de NP."])
  ],
  key: [["**Gut works → use it** (enteral before parenteral)", "**Intestino funciona → use-o** (enteral antes de parenteral)"], ["NG short term; **PEG long term** (> 4–6 weeks); NJ for poor gastric emptying", "SNG curto prazo; **PEG longo prazo** (> 4–6 semanas); SNE para esvaziamento gástrico ruim"], ["PN only when the gut can't be used", "NP só quando o intestino não pode ser usado"]],
  src: ["https://www.nice.org.uk/guidance/cg32/chapter/Recommendations", "https://aci.health.nsw.gov.au/__data/assets/pdf_file/0010/159805/ACI-Parenteral-nutrition-pocketbook.pdf"]
},
{
  t: ["Refeeding syndrome: the 2025 AuSPEN approach", "Síndrome de realimentação: a abordagem AuSPEN 2025"],
  b: [
    P("When feeding restarts after starvation, insulin rises and drives ==phosphate, potassium and magnesium into cells==, and thiamine is used up. Blood levels can drop dangerously (==low phosphate is the hallmark==), with fluid overload and heart or breathing problems.",
      "Quando a alimentação recomeça depois de um período de fome, a insulina sobe e leva ==fosfato, potássio e magnésio para dentro das células==, e a tiamina é consumida. Os níveis no sangue podem cair perigosamente (==fosfato baixo é o marcador clássico==), com sobrecarga de líquidos e problemas cardíacos ou respiratórios."),
    P("**At risk (AuSPEN 2025)** = ==two or more== of:", "**Em risco (AuSPEN 2025)** = ==dois ou mais== de:"),
    UL(
      ["Unintentional weight loss ==> 10% in 3 months==, or moderate–severe malnutrition (SGA B/C)", "Perda de peso não intencional ==> 10% em 3 meses==, ou desnutrição moderada a grave (ASG B/C)"],
      ["Little or no intake for ==7 days or more==", "Pouca ou nenhuma ingestão por ==7 dias ou mais=="],
      ["==Problematic alcohol use==", "==Uso problemático de álcool=="],
      ["Gastrointestinal losses (vomiting, diarrhoea)", "Perdas gastrointestinais (vômitos, diarreia)"]
    ),
    FLOW(
      [["Before feeding", "Antes de alimentar"], ["==Thiamine== (100 mg IV or 100–300 mg oral), then daily for ==7–10 days==; multivitamin for 10 days; check baseline electrolytes.", "==Tiamina== (100 mg IV ou 100–300 mg oral) e depois diariamente por ==7–10 dias==; multivitamínico por 10 dias; eletrólitos basais."]],
      [["Start", "Começar"], ["At ==50% or more of estimated needs==.", "Com ==50% ou mais das necessidades estimadas==."]],
      [["Progress", "Progredir"], ["Reach goal within ==24–72 hours==, with ==daily electrolytes== and replacement until stable. Pause progression only if levels drop severely.", "Chegar à meta em ==24–72 horas==, com ==eletrólitos diários== e reposição até estabilizar. Pausar a progressão só se os níveis caírem muito."]]
    ),
    NOTE('exam', "Older guidance (NICE 2006) said 'start low, go slow' (10 kcal/kg, or 5 if extreme). AuSPEN 2025 says this is ==no longer supported== because underfeeding harms malnourished patients. You may still see older protocols; know both, and lead with AuSPEN in Australia.",
      "A orientação antiga (NICE 2006) dizia 'começar baixo e ir devagar' (10 kcal/kg, ou 5 nos extremos). A AuSPEN 2025 diz que isso ==não é mais recomendado==, porque a subalimentação prejudica o paciente desnutrido. Você ainda pode ver protocolos antigos; conheça os dois e priorize a AuSPEN na Austrália."),
    SORT(["Does it count toward AuSPEN refeeding risk?", "Conta para o risco de realimentação da AuSPEN?"], [["Counts", "Conta"], ["Doesn't count on its own", "Sozinho não conta"]], [
      ["11% weight loss in 3 months", "Perda de 11% do peso em 3 meses", 0],
      ["Almost no food for 9 days", "Quase nada de comida há 9 dias", 0],
      ["Drinks heavily every day", "Bebe muito todos os dias", 0],
      ["Ongoing vomiting and diarrhoea", "Vômitos e diarreia persistentes", 0],
      ["High blood pressure", "Pressão alta", 1],
      ["Aged 70", "Ter 70 anos", 1]
    ])
  ],
  key: [["Hallmark: **low phosphate** (also K, Mg, thiamine)", "Marcador: **fosfato baixo** (também K, Mg, tiamina)"], ["At risk: **≥ 2** of weight loss/malnutrition, **≥ 7 days** little intake, alcohol, GI losses", "Em risco: **≥ 2** entre perda de peso/desnutrição, **≥ 7 dias** de pouca ingestão, álcool, perdas GI"], ["**Thiamine** before feeding + 7–10 days; start **≥ 50%** of needs; goal in **24–72 h**; daily electrolytes", "**Tiamina** antes + 7–10 dias; começar com **≥ 50%** das necessidades; meta em **24–72 h**; eletrólitos diários"]],
  src: ["https://www.auspen.org.au/resources-3/2025/5/28/-auspen-consensus-statements-on-refeeding-syndrome"]
}
],
checks: {2: [60, 'n0'], 4: [61, 62]},
qs: [
  {stem: ["A patient lost 7 kg without trying and is eating poorly because of a low appetite. The MST score is", "Um paciente perdeu 7 kg sem querer e está comendo mal por falta de apetite. O escore MST é"],
   opts: [["3: at risk", "3: em risco"], ["1: not at risk", "1: sem risco"], ["2: not at risk", "2: sem risco"], ["8: severe malnutrition", "8: desnutrição grave"]], ans: 0,
   why: ["6–10 kg loss = 2, poor appetite = 1. A score of 2 or more means at risk.", "Perda de 6–10 kg = 2, falta de apetite = 1. Escore 2 ou mais significa risco."], src: "https://www.health.qld.gov.au/nutrition/patients/subjective-global-assessment-training-videos"},
  {stem: ["The GLIM criteria diagnose malnutrition when there is", "Os critérios GLIM diagnosticam desnutrição quando há"],
   opts: [["at least one phenotypic and one aetiologic criterion", "pelo menos um critério fenotípico e um etiológico"], ["a BMI below 18.5 only", "só IMC abaixo de 18,5"], ["a low serum albumin", "albumina sérica baixa"], ["two aetiologic criteria and no weight data", "dois critérios etiológicos e nenhum dado de peso"]], ans: 0,
   why: ["GLIM needs one phenotypic (weight loss, low BMI, low muscle) plus one aetiologic (low intake/absorption, inflammation).", "O GLIM exige um fenotípico (perda de peso, IMC baixo, pouco músculo) mais um etiológico (pouca ingestão/absorção, inflamação)."], src: "https://www.health.qld.gov.au/nutrition/patients/subjective-global-assessment-training-videos"},
  {stem: ["A patient will need tube feeding for at least 3 months after a stroke. The most suitable route is usually", "Um paciente vai precisar de sonda por pelo menos 3 meses após um AVC. A via mais adequada costuma ser"],
   opts: [["a gastrostomy (PEG)", "uma gastrostomia (PEG)"], ["a nasogastric tube", "uma sonda nasogástrica"], ["parenteral nutrition", "nutrição parenteral"], ["a nasojejunal tube for life", "uma sonda nasojejunal para sempre"]], ans: 0,
   why: ["Feeding longer than about 4–6 weeks usually moves to a gastrostomy.", "Alimentação por mais de 4–6 semanas costuma passar para gastrostomia."], src: "https://www.nice.org.uk/guidance/cg32/chapter/Recommendations"},
  {stem: ["Under AuSPEN 2025, thiamine for a patient at refeeding risk should be given", "Pela AuSPEN 2025, a tiamina para um paciente em risco de realimentação deve ser dada"],
   opts: [["before feeding starts, then daily for 7–10 days", "antes de começar a alimentação e depois diariamente por 7–10 dias"], ["only if symptoms appear", "só se aparecerem sintomas"], ["once the goal rate is reached", "quando a meta for atingida"], ["only to patients with diabetes", "só a pacientes com diabetes"]], ans: 0,
   why: ["Give thiamine before nutrition support starts and daily for 7–10 days (100 mg IV or 100–300 mg oral).", "Dê tiamina antes de iniciar o suporte nutricional e diariamente por 7–10 dias (100 mg IV ou 100–300 mg oral)."], src: "https://www.auspen.org.au/resources-3/2025/5/28/-auspen-consensus-statements-on-refeeding-syndrome"}
]
});
