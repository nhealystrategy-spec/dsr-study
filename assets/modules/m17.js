MOD({
id: 17, mins: 30,
hook: ["If 8% of the control group fall and 4% of the treated group fall, how many people must you treat to stop one fall? You will do it in your head by page 3.", "Se 8% do grupo controle caem e 4% do grupo tratado caem, quantas pessoas é preciso tratar para evitar uma queda? Você vai fazer de cabeça até a página 3."],
teasers: [["The study design made for rare diseases", "O desenho de estudo feito para doenças raras"], ["The one number that tells you a result isn't significant", "O único número que mostra que um resultado não é significativo"], ["Why a screening tool needs high sensitivity", "Por que uma ferramenta de triagem precisa de alta sensibilidade"]],
goals: [
  ["Match a research question to the right study design", "Ligar uma pergunta de pesquisa ao desenho de estudo certo"],
  ["Use the NHMRC levels of evidence", "Usar os níveis de evidência do NHMRC"],
  ["Spot bias and confounding", "Identificar viés e confundimento"],
  ["Interpret RR, OR, confidence intervals and NNT", "Interpretar RR, RC, intervalos de confiança e NNT"],
  ["Run the 5 steps of evidence-based practice", "Seguir os 5 passos da prática baseada em evidências"]
],
pages: [
{
  t: ["Study designs and evidence levels", "Desenhos de estudo e níveis de evidência"],
  b: [
    TABLE([["Design", "Desenho"], ["Best for", "Melhor para"], ["Watch out", "Cuidado"]],
      [["**Randomised controlled trial**", "**Ensaio clínico randomizado**"], ["==Does an intervention cause an effect?==", "==Uma intervenção causa um efeito?=="], ["Costly; may not reflect real life", "Caro; pode não refletir a vida real"]],
      [["**Cohort** (prospective)", "**Coorte** (prospectiva)"], ["Exposure → who develops the outcome; ==incidence, relative risk==", "Exposição → quem desenvolve o desfecho; ==incidência, risco relativo=="], ["Takes years; people drop out (loss to follow-up)", "Leva anos; pessoas abandonam (perda de seguimento)"]],
      [["**Case-control**", "**Caso-controle**"], ["==Rare outcomes==: start with cases, look back at exposure; odds ratio", "==Desfechos raros==: parte dos casos e olha para trás a exposição; razão de chances"], ["==Recall bias==", "==Viés de memória=="]],
      [["**Cross-sectional**", "**Transversal**"], ["==Prevalence== at one point in time", "==Prevalência== num momento"], ["Can't show cause", "Não mostra causa"]],
      [["**Qualitative**", "**Qualitativo**"], ["Experiences, beliefs, meanings", "Experiências, crenças, significados"], ["Not generalisable as numbers", "Não generalizável como números"]]
    ),
    P("**NHMRC levels (intervention questions)**: ==I== systematic review of RCTs · ==II== RCT · ==III-1== pseudo-randomised trial · ==III-2== comparative study with concurrent controls (e.g. cohort, case-control) · ==III-3== comparative study without concurrent controls · ==IV== case series.",
      "**Níveis do NHMRC (perguntas de intervenção)**: ==I== revisão sistemática de ECRs · ==II== ECR · ==III-1== ensaio pseudorrandomizado · ==III-2== estudo comparativo com controles concomitantes (ex. coorte, caso-controle) · ==III-3== estudo comparativo sem controles concomitantes · ==IV== série de casos."),
    SORT(["Best design for the question?", "Melhor desenho para a pergunta?"], [["RCT", "ECR"], ["Cohort", "Coorte"], ["Case-control", "Caso-controle"], ["Cross-sectional", "Transversal"], ["Qualitative", "Qualitativo"]], [
      ["Does a new supplement reduce falls compared with usual care?", "Um novo suplemento reduz quedas comparado ao cuidado usual?", 0],
      ["What % of adults meet the vegetable guideline today?", "Que % dos adultos atinge hoje a recomendação de hortaliças?", 3],
      ["Was childhood diet linked to a rare cancer?", "A dieta na infância está ligada a um câncer raro?", 2],
      ["Do heavy soft-drink drinkers develop more diabetes over 10 years?", "Quem toma muito refrigerante desenvolve mais diabetes em 10 anos?", 1],
      ["How do migrants experience Australian dietary advice?", "Como os migrantes vivenciam a orientação alimentar australiana?", 4]
    ])
  ],
  key: [["Cause → **RCT**; incidence → **cohort**; rare outcome → **case-control**; prevalence → **cross-sectional**; experiences → **qualitative**", "Causa → **ECR**; incidência → **coorte**; desfecho raro → **caso-controle**; prevalência → **transversal**; experiências → **qualitativo**"], ["NHMRC: **I** SR of RCTs · **II** RCT · **III-1/2/3** comparative · **IV** case series", "NHMRC: **I** RS de ECRs · **II** ECR · **III-1/2/3** comparativos · **IV** série de casos"]],
  src: ["https://www.cebm.ox.ac.uk/resources/ebm-tools/glossary", "https://www.nhmrc.gov.au/research-policy/guideline-development"]
},
{
  t: ["Bias and confounding", "Viés e confundimento"],
  b: [
    UL(
      ["**Selection bias**: the people studied differ from the people you care about (e.g. healthy volunteers).", "**Viés de seleção**: as pessoas estudadas diferem das que importam (ex. voluntários saudáveis)."],
      ["**Recall bias**: people with a disease remember past exposures differently (common in case-control studies).", "**Viés de memória**: quem tem a doença lembra as exposições passadas de outro jeito (comum em caso-controle)."],
      ["**Measurement / reporting bias**: e.g. under-reporting snacks in food records.", "**Viés de medida / relato**: ex. não registrar os lanches no registro alimentar."],
      ["**Confounding**: a third factor linked to both exposure and outcome distorts the result (e.g. smoking in coffee and heart disease).", "**Confundimento**: um terceiro fator ligado à exposição e ao desfecho distorce o resultado (ex. tabagismo em café e doença cardíaca)."]
    ),
    P("RCTs reduce bias with ==randomisation (balances confounders), allocation concealment, blinding== and ==intention-to-treat== analysis (analyse people in the group they were randomised to).",
      "Os ECRs reduzem o viés com ==randomização (equilibra os fatores de confusão), sigilo da alocação, cegamento== e análise por ==intenção de tratar== (analisar cada pessoa no grupo para o qual foi sorteada)."),
    SORT(["Which problem is it?", "Qual é o problema?"], [["Selection bias", "Viés de seleção"], ["Recall bias", "Viés de memória"], ["Reporting bias", "Viés de relato"], ["Confounding", "Confundimento"]], [
      ["Volunteers for a diet trial are fitter than average", "Os voluntários de um estudo de dieta são mais em forma que a média", 0],
      ["Cancer patients over-remember eating fried food", "Pacientes com câncer 'lembram' de comer mais fritura", 1],
      ["Participants leave lollies out of their food diaries", "Os participantes não anotam as balas no diário alimentar", 2],
      ["The coffee–heart link is explained by smoking", "A ligação café–coração é explicada pelo tabagismo", 3]
    ])
  ],
  key: [["Selection, recall and reporting **bias**; **confounding** by a third factor", "**Viés** de seleção, memória e relato; **confundimento** por um terceiro fator"], ["RCT tools: **randomisation, concealment, blinding, intention-to-treat**", "Ferramentas do ECR: **randomização, sigilo, cegamento, intenção de tratar**"]],
  src: ["https://www.cebm.ox.ac.uk/resources/ebm-tools/critical-appraisal-tools"]
},
{
  t: ["Reading the results", "Lendo os resultados"],
  b: [
    UL(
      ["**Relative risk (RR) / odds ratio (OR)**: ==1 = no difference==, above 1 = higher risk, below 1 = lower risk.", "**Risco relativo (RR) / razão de chances (RC)**: ==1 = nenhuma diferença==, acima de 1 = risco maior, abaixo de 1 = risco menor."],
      ["**95% confidence interval**: if it ==includes 1== (for RR/OR) or ==0== (for a difference), the result is ==not statistically significant==. Narrow = more precise.", "**Intervalo de confiança de 95%**: se ==incluir 1== (para RR/RC) ou ==0== (para uma diferença), o resultado ==não é estatisticamente significativo==. Estreito = mais preciso."],
      ["**Absolute risk reduction (ARR)** = control risk − intervention risk. **NNT** = ==1 ÷ ARR==: how many people need treating for one to benefit.", "**Redução absoluta do risco (RAR)** = risco no controle − risco na intervenção. **NNT** = ==1 ÷ RAR==: quantas pessoas precisam ser tratadas para uma se beneficiar."],
      ["Statistically significant ≠ clinically important: always ask 'how big is the effect?'", "Estatisticamente significativo ≠ clinicamente importante: sempre pergunte 'qual o tamanho do efeito?'"]
    ),
    NUM(["Falls: 10% in the control group, 6% with the intervention. What is the NNT?", "Quedas: 10% no grupo controle, 6% com a intervenção. Qual é o NNT?"], 25, 0, "",
      ["ARR = 10% − 6% = 4% = 0.04. NNT = 1 ÷ 0.04 = 25.", "RAR = 10% − 6% = 4% = 0,04. NNT = 1 ÷ 0,04 = 25."]),
    PICK(["RR 0.80 (95% CI 0.70–0.92) for diabetes with a diet program. This means", "RR 0,80 (IC 95% 0,70–0,92) para diabetes com um programa alimentar. Isso significa"],
      [["About 20% lower risk, statistically significant", "Cerca de 20% menos risco, estatisticamente significativo"], ["No difference, because the CI is narrow", "Nenhuma diferença, porque o IC é estreito"], ["80% lower risk", "80% menos risco"], ["Higher risk with the program", "Mais risco com o programa"]], 0,
      ["RR 0.80 = 20% relative reduction; the CI doesn't include 1, so it is significant.", "RR 0,80 = 20% de redução relativa; o IC não inclui 1, então é significativo."])
  ],
  key: [["RR/OR **1 = no effect**; CI including **1** (or **0**) = not significant", "RR/RC **1 = sem efeito**; IC que inclui **1** (ou **0**) = não significativo"], ["**NNT = 1 ÷ ARR**", "**NNT = 1 ÷ RAR**"], ["Statistical ≠ clinical significance", "Significância estatística ≠ clínica"]],
  src: ["https://www.cebm.ox.ac.uk/resources/ebm-tools/glossary", "https://www.khanacademy.org/math/statistics-probability"]
},
{
  t: ["Screening tests and evidence-based practice", "Testes de triagem e prática baseada em evidências"],
  b: [
    UL(
      ["**Sensitivity**: the share of people ==with== the condition the test correctly finds. Screening tools need ==high sensitivity== (few missed).", "**Sensibilidade**: a proporção de pessoas ==com== a condição que o teste identifica corretamente. Ferramentas de triagem precisam de ==alta sensibilidade== (poucos casos perdidos)."],
      ["**Specificity**: the share of people ==without== the condition correctly ruled out (few false alarms).", "**Especificidade**: a proporção de pessoas ==sem== a condição corretamente descartadas (poucos alarmes falsos)."]
    ),
    ORDER(["Put the 5 steps of evidence-based practice in order", "Coloque os 5 passos da prática baseada em evidências em ordem"], [
      ["Ask a focused question (PICO)", "Fazer uma pergunta focada (PICO)"],
      ["Acquire the best evidence", "Buscar a melhor evidência"],
      ["Appraise it critically", "Avaliar criticamente"],
      ["Apply it with the client's values and context", "Aplicar com os valores e o contexto do paciente"],
      ["Assess the result", "Avaliar o resultado"]
    ]),
    NOTE('aus', "Where Australian dietitians look: ==PEN (Practice-based Evidence in Nutrition)== through Dietitians Australia membership, the DA journal ==Nutrition & Dietetics==, NHMRC guidelines, and appraisal checklists from the Oxford CEBM.",
      "Onde os nutricionistas australianos buscam: ==PEN (Practice-based Evidence in Nutrition)== pela associação da Dietitians Australia, a revista da DA ==Nutrition & Dietetics==, diretrizes do NHMRC e checklists de avaliação crítica do Oxford CEBM.")
  ],
  key: [["Screening: **high sensitivity**; confirming: high specificity", "Triagem: **alta sensibilidade**; confirmar: alta especificidade"], ["EBP: **Ask (PICO) → Acquire → Appraise → Apply → Assess**", "PBE: **Perguntar (PICO) → Buscar → Avaliar → Aplicar → Reavaliar**"], ["Sources: PEN, Nutrition & Dietetics, NHMRC", "Fontes: PEN, Nutrition & Dietetics, NHMRC"]],
  src: ["https://www.cebm.ox.ac.uk/resources/ebm-tools/critical-appraisal-tools", "https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/exam-preparation"]
}
],
checks: {2: [119, 'n0'], 4: [117, 118]},
qs: [
  {stem: ["Recall bias is MOST likely in which study design?", "O viés de memória é MAIS provável em qual desenho de estudo?"],
   opts: [["Case-control study", "Estudo caso-controle"], ["Randomised controlled trial", "Ensaio clínico randomizado"], ["Systematic review of RCTs", "Revisão sistemática de ECRs"], ["Prospective cohort using blood biomarkers", "Coorte prospectiva com biomarcadores no sangue"]], ans: 0,
   why: ["Case-control studies ask people with and without a disease to remember past exposures.", "Os estudos caso-controle pedem que pessoas com e sem a doença lembrem exposições passadas."], src: "https://www.cebm.ox.ac.uk/resources/ebm-tools/glossary"},
  {stem: ["In an RCT, 8% of the control group and 4% of the intervention group had a fall. The number needed to treat (NNT) is", "Num ECR, 8% do grupo controle e 4% do grupo intervenção tiveram queda. O número necessário para tratar (NNT) é"],
   opts: [["25", "25"], ["4", "4"], ["50", "50"], ["2", "2"]], ans: 0,
   why: ["ARR = 8% − 4% = 4% (0.04); NNT = 1 ÷ 0.04 = 25.", "RAR = 8% − 4% = 4% (0,04); NNT = 1 ÷ 0,04 = 25."], src: "https://www.cebm.ox.ac.uk/resources/ebm-tools/glossary"},
  {stem: ["In the NHMRC hierarchy for intervention studies, a well-conducted RCT is level", "Na hierarquia do NHMRC para estudos de intervenção, um ECR bem conduzido é nível"],
   opts: [["II", "II"], ["I", "I"], ["III-2", "III-2"], ["IV", "IV"]], ans: 0,
   why: ["Level I is a systematic review of level II studies (RCTs); a single RCT is level II.", "O nível I é uma revisão sistemática de estudos nível II (ECRs); um ECR isolado é nível II."], src: "https://www.nhmrc.gov.au/research-policy/guideline-development"},
  {stem: ["The FIRST step of evidence-based practice is to", "O PRIMEIRO passo da prática baseada em evidências é"],
   opts: [["ask a focused clinical question (e.g. PICO)", "fazer uma pergunta clínica focada (ex. PICO)"], ["apply the findings to the client", "aplicar os achados ao paciente"], ["appraise the evidence", "avaliar a evidência"], ["search a database", "pesquisar numa base de dados"]], ans: 0,
   why: ["Ask → acquire → appraise → apply → assess.", "Perguntar → buscar → avaliar → aplicar → reavaliar."], src: "https://www.cebm.ox.ac.uk/resources/ebm-tools/critical-appraisal-tools"}
]
});
