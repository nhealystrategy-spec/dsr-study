MOD({
id: 18, mins: 35,
hook: ["In Brazil you register with the CRN. In Australia, dietitians are not registered with the government health regulator at all. So who decides if you can work? Start here.", "No Brasil você se registra no CRN. Na Austrália, os nutricionistas nem são registrados no órgão regulador de saúde do governo. Então quem decide se você pode trabalhar? Comece aqui."],
teasers: [["How many Medicare-funded visits a client gets a year, and the report you must send", "Quantas consultas pelo Medicare o paciente tem por ano, e o relatório que você precisa mandar"], ["Who decides whether your care was culturally safe (it isn't you)", "Quem decide se o seu cuidado foi culturalmente seguro (não é você)"], ["Why a client's 12-year-old daughter should never interpret for her", "Por que a filha de 12 anos nunca deve ser a intérprete da paciente"]],
goals: [
  ["Explain Medicare, private health insurance, NDIS, DVA and public services", "Explicar Medicare, planos de saúde, NDIS, DVA e serviços públicos"],
  ["Know the GPCCMP rules for dietitians (from July 2025)", "Conhecer as regras do GPCCMP para nutricionistas (desde julho de 2025)"],
  ["Describe the APD credential and professional obligations", "Descrever a credencial APD e as obrigações profissionais"],
  ["Practise culturally safe care with Aboriginal and Torres Strait Islander people", "Praticar cuidado culturalmente seguro com povos aborígenes e das Ilhas do Estreito de Torres"],
  ["Apply consent, privacy and the Code of Conduct", "Aplicar consentimento, privacidade e o Código de Conduta"]
],
pages: [
{
  t: ["How care is paid for", "Como o cuidado é pago"],
  b: [
    P("**Medicare** is Australia's public health insurance (similar in spirit to the SUS): free public hospital care and subsidised GP visits. ==GPs are the gateway==: most allied health visits need a GP referral. States run public hospitals; the federal government funds Medicare, medicines (PBS) and aged care.",
      "O **Medicare** é o seguro público de saúde da Austrália (com espírito parecido com o SUS): hospital público gratuito e consultas médicas subsidiadas. ==O médico de família (GP) é a porta de entrada==: a maioria dos atendimentos de profissões da saúde precisa de encaminhamento do GP. Os estados administram os hospitais públicos; o governo federal financia Medicare, remédios (PBS) e cuidado ao idoso."),
    TABLE([["Pathway", "Caminho"], ["What it gives for dietetics", "O que oferece para a nutrição"]],
      [["**GP Chronic Condition Management Plan (GPCCMP)** — from 1 July 2025", "**GP Chronic Condition Management Plan (GPCCMP)** — desde 1º de julho de 2025"], ["Chronic condition (≥ 6 months) + GP referral letter: up to ==5 allied health services a calendar year==, shared across all allied health (==10 for Aboriginal and Torres Strait Islander people==). Each ≥ 20 min. ==Report to the GP after the first and last service==. Type 2 diabetes: plus up to 8 group sessions.", "Condição crônica (≥ 6 meses) + carta de encaminhamento do GP: até ==5 atendimentos de profissões da saúde por ano civil==, divididos entre todas elas (==10 para aborígenes e ilhéus do Estreito de Torres==). Cada um ≥ 20 min. ==Relatório ao GP após o primeiro e o último atendimento==. Diabetes tipo 2: mais até 8 sessões em grupo."]],
      [["**Eating Disorder Treatment Plan**", "**Eating Disorder Treatment Plan**"], ["Up to ==20 dietetic services== a year", "Até ==20 atendimentos de nutrição== por ano"]],
      [["**NDIS**", "**NDIS**"], ["Disability-related supports in the person's plan (e.g. mealtime management)", "Apoios relacionados à deficiência no plano da pessoa (ex. manejo das refeições)"]],
      [["**DVA**", "**DVA**"], ["Eligible veterans (e.g. Gold Card)", "Veteranos elegíveis (ex. Gold Card)"]],
      [["**Private health insurance 'extras'**", "**Plano de saúde 'extras'**"], ["Part of the fee, depending on the policy", "Parte do valor, conforme o plano"]],
      [["**Public hospital and community services**", "**Hospitais públicos e serviços comunitários**"], ["Free inpatient and outpatient dietetics", "Nutrição gratuita na internação e no ambulatório"]]
    ),
    NOTE('aus', "Plans made before 1 July 2025 (GPMP/TCA) can still be used until ==30 June 2027==. A GPCCMP must have been prepared or reviewed in the ==last 18 months== for services to continue. Always check MBS Online for current rules.",
      "Planos feitos antes de 1º de julho de 2025 (GPMP/TCA) ainda valem até ==30 de junho de 2027==. O GPCCMP precisa ter sido feito ou revisado nos ==últimos 18 meses== para os atendimentos continuarem. Sempre confira as regras atuais no MBS Online.")
  ],
  key: [["GP = gateway; Medicare ≈ public insurance", "GP = porta de entrada; Medicare ≈ seguro público"], ["GPCCMP: **5** allied health services/year (shared; **10** for First Nations), ≥ 20 min, **report after first and last**", "GPCCMP: **5** atendimentos/ano (divididos; **10** para indígenas), ≥ 20 min, **relatório após o primeiro e o último**"], ["EDP **20** dietetic services; NDIS, DVA, PHI extras, public services", "EDP **20** atendimentos de nutrição; NDIS, DVA, plano de saúde, serviços públicos"]],
  src: ["https://www.servicesaustralia.gov.au/services-available-under-gp-chronic-condition-management-plan?context=20", "https://www.health.gov.au/about-us/the-australian-health-system"]
},
{
  t: ["The profession: APD, scope and standards", "A profissão: APD, âmbito e normas"],
  b: [
    UL(
      ["Dietetics is ==not registered with AHPRA==. It is ==self-regulated==: Dietitians Australia runs the **Accredited Practising Dietitian (APD)** credential, recognised by Medicare, DVA, NDIS and private insurers.", "A nutrição ==não é registrada na AHPRA==. É ==autorregulada==: a Dietitians Australia administra a credencial **Accredited Practising Dietitian (APD)**, reconhecida por Medicare, DVA, NDIS e planos de saúde."],
      ["APD obligations: ==at least 30 hours of CPD a year== with learning goals, recency of practice, professional indemnity insurance, and the Code of Conduct. New APDs start as Provisional APDs with a mentor.", "Obrigações do APD: ==pelo menos 30 horas de educação continuada por ano== com metas de aprendizagem, prática recente, seguro de responsabilidade profissional e o Código de Conduta. Novos APDs começam como APD provisórios com mentor."],
      ["The **National Competency Standards (2021)** describe 4 roles: ==practising professionally; influencing health; applying critical thinking and evidence; collaborating with clients and stakeholders== (55 criteria). The DSR exams test against them.", "As **National Competency Standards (2021)** descrevem 4 papéis: ==exercer com profissionalismo; influenciar a saúde; aplicar pensamento crítico e evidências; colaborar com pacientes e partes interessadas== (55 critérios). As provas do DSR avaliam com base nelas."],
      ["Stay in ==scope==: e.g. don't change medicine doses; recommend and refer to the GP or pharmacist.", "Fique no seu ==âmbito de atuação==: ex. não mude doses de remédios; recomende e encaminhe ao GP ou farmacêutico."]
    ),
    NOTE('br', "In Brazil you register with the CRN and follow the CFN Code of Ethics. In Australia the closest equivalent is ==APD credential + DA Code of Conduct==. Anyone can call themselves a 'nutritionist'; APD is the recognised standard.",
      "No Brasil você se registra no CRN e segue o Código de Ética do CFN. Na Austrália, o mais próximo é ==credencial APD + Código de Conduta da DA==. Qualquer pessoa pode se chamar 'nutritionist'; o APD é o padrão reconhecido."),
    VIDEO('6gMrHNJ33w8', 'Dietitians Australia', 1, ["Dietitians improve lives", "Nutricionistas melhoram vidas"],
      ["Dietitians Australia's own short video. It says ==APDs are the gold standard== in Australia: the only nutrition credential recognised by ==Medicare, DVA and many private health funds==.",
       "Vídeo curto da própria Dietitians Australia. Diz que os ==APDs são o padrão-ouro== na Austrália: a única credencial de nutrição reconhecida pelo ==Medicare, DVA e muitos planos de saúde privados==."]),
    PICK(["Which credential lets a dietitian provide Medicare-subsidised services?", "Qual credencial permite ao nutricionista oferecer atendimentos subsidiados pelo Medicare?"],
      [["Accredited Practising Dietitian (APD)", "Accredited Practising Dietitian (APD)"], ["AHPRA registration", "Registro na AHPRA"], ["A nutritionist certificate", "Um certificado de 'nutritionist'"], ["CRN registration from Brazil", "Registro no CRN do Brasil"]], 0,
      ["Medicare, DVA, NDIS and insurers recognise the APD credential. Dietetics is not an AHPRA profession.", "Medicare, DVA, NDIS e planos reconhecem a credencial APD. A nutrição não é profissão da AHPRA."])
  ],
  key: [["Self-regulated: **APD** (not AHPRA)", "Autorregulada: **APD** (não AHPRA)"], ["APD: **≥ 30 h CPD/year**, recency, indemnity insurance, Code of Conduct", "APD: **≥ 30 h de educação continuada/ano**, prática recente, seguro, Código de Conduta"], ["NCS 2021: **4 roles, 55 criteria**", "NCS 2021: **4 papéis, 55 critérios**"]],
  src: ["https://dietitiansaustralia.org.au/working-dietetics/credentialing-dietitians", "https://dietitiansaustralia.org.au/working-dietetics/standards-and-scope/national-competency-standards-dietitians"]
},
{
  t: ["Cultural safety", "Segurança cultural"],
  b: [
    FLOW(
      [["Cultural awareness", "Conscientização cultural"], ["Knowing that cultures differ.", "Saber que as culturas são diferentes."]],
      [["Cultural sensitivity", "Sensibilidade cultural"], ["Respecting differences and reflecting on your own culture.", "Respeitar as diferenças e refletir sobre a própria cultura."]],
      [["Cultural competence", "Competência cultural"], ["Skills to work well across cultures.", "Habilidades para trabalhar bem entre culturas."]],
      [["Cultural safety", "Segurança cultural"], ["Care that ==the person receiving it== judges to be safe: free of racism, assumptions and power imbalance.", "Cuidado que ==quem o recebe== julga seguro: livre de racismo, suposições e desequilíbrio de poder."]]
    ),
    UL(
      ["Aboriginal and Torres Strait Islander people experience a large health gap, rooted in ==colonisation, dispossession and racism==, not in culture.", "Os povos aborígenes e das Ilhas do Estreito de Torres vivem uma grande diferença de saúde, enraizada na ==colonização, na expropriação e no racismo==, e não na cultura."],
      ["Work with ==Aboriginal Community Controlled Health Services== and ==Aboriginal Health Workers/Practitioners==; involve family as the person wishes.", "Trabalhe com os ==Serviços de Saúde Comunitários Aborígenes== e os ==Aboriginal Health Workers/Practitioners==; envolva a família como a pessoa desejar."],
      ["Ask about ==traditional foods== (bush tucker, fishing, hunting), local store access and cost; build advice around them.", "Pergunte sobre ==comidas tradicionais== (bush tucker, pesca, caça), acesso e preço no mercadinho local; construa a orientação em torno delas."],
      ["Use respectful terms: 'Aboriginal and Torres Strait Islander people' or 'First Nations people' (ask preference); ==avoid 'ATSI'==.", "Use termos respeitosos: 'Aboriginal and Torres Strait Islander people' ou 'First Nations people' (pergunte a preferência); ==evite 'ATSI'==."]
    ),
    VIDEO('7njabCKtUM4', 'Monash University', 5, ["Cultural safety, part A: Aunty Di at a new clinic", "Segurança cultural, parte A: Aunty Di numa clínica nova"],
      ["Aunty Di goes to a mainstream clinic for the first time, about stomach pains. Watch the front desk and the consultation closely: ==what could make Aunty Di feel judged or unsafe?==",
       "Aunty Di vai pela primeira vez a uma clínica comum, por causa de dores de estômago. Observe com atenção a recepção e a consulta: ==o que pode causar em Aunty Di a sensação de ser julgada ou de falta de segurança?=="]),
    VIDEO('1U5okHcLZAE', 'Monash University', 5, ["Cultural safety, part B: Aunty Di at the Aboriginal Medical Service", "Segurança cultural, parte B: Aunty Di no Aboriginal Medical Service"],
      ["Now Aunty Di visits the Aboriginal Medical Service. Compare it with part A: how do the staff ==build trust and make Aunty Di feel welcome==? That difference is cultural safety, judged by the person receiving care.",
       "Agora Aunty Di vai ao Aboriginal Medical Service. Compare com a parte A: como a equipe ==cria confiança e acolhe Aunty Di==? Essa diferença é segurança cultural, avaliada por quem recebe o cuidado."]),
    REVEAL(["Uncle Ray (Aboriginal man, CKD) says he's had 'too many doctors telling me what not to eat'. How do you start?", "Uncle Ray (homem aborígene, DRC) diz que já teve 'médicos demais dizendo o que não comer'. Como você começa?"],
      ["Introduce yourself and your role, ==ask permission==, acknowledge his experience ('That sounds frustrating'), let the Aboriginal Health Practitioner help lead, ask what ==he== wants from today and about family, community and the foods he enjoys (fish, bush tucker, store food). Build ==one or two small changes== together, not a list of bans.",
       "Apresente-se e explique sua função, ==peça permissão==, reconheça a experiência dele ('Isso parece frustrante'), deixe o Aboriginal Health Practitioner ajudar a conduzir, pergunte o que ==ele== quer da consulta e sobre família, comunidade e as comidas de que gosta (peixe, bush tucker, comida do mercadinho). Construam juntos ==uma ou duas mudanças pequenas==, não uma lista de proibições."]),
    NOTE('exam', "DSR requirement: complete the ==Aboriginal and Torres Strait Islander Cultural Awareness reading and online assessment before you apply==.",
      "Exigência do DSR: concluir a ==leitura e a avaliação online de Cultural Awareness sobre povos aborígenes e das Ilhas do Estreito de Torres antes de se inscrever==.")
  ],
  key: [["Cultural **safety** is judged by the **person receiving care**", "A **segurança** cultural é julgada por **quem recebe o cuidado**"], ["Health gap comes from **colonisation and racism**", "A diferença de saúde vem da **colonização e do racismo**"], ["Work with ACCHS and Aboriginal Health Workers; ask about traditional foods; no 'ATSI'", "Trabalhe com ACCHS e Aboriginal Health Workers; pergunte sobre comidas tradicionais; sem 'ATSI'"], ["DSR: cultural awareness assessment **before applying**", "DSR: avaliação de cultural awareness **antes da inscrição**"]],
  src: ["https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/aboriginal-and-torres-strait-islander-cultural-awareness", "https://www.nhmrc.gov.au/health-advice/aboriginal-and-torres-strait-islander-health"]
},
{
  t: ["Ethics, consent and privacy", "Ética, consentimento e privacidade"],
  b: [
    UL(
      ["**Consent**: informed, voluntary, by a person with capacity; it can be withdrawn.", "**Consentimento**: informado, voluntário, dado por quem tem capacidade; pode ser retirado."],
      ["**Privacy and confidentiality** (Privacy Act and Australian Privacy Principles): share information only for the person's care or with their consent, except legal or safety exceptions (e.g. child protection reporting).", "**Privacidade e sigilo** (Privacy Act e Australian Privacy Principles): compartilhe informações só para o cuidado da pessoa ou com o consentimento dela, salvo exceções legais ou de segurança (ex. notificação de proteção infantil)."],
      ["**Interpreters**: book a professional (e.g. TIS National), never children.", "**Intérpretes**: agende um profissional (ex. TIS National), nunca crianças."],
      ["**Conflicts of interest**: declare them; don't promote products you profit from.", "**Conflitos de interesse**: declare; não promova produtos dos quais você lucra."]
    ),
    SORT(["OK or not OK under the Code of Conduct?", "Ok ou não ok pelo Código de Conduta?"], [["OK", "Ok"], ["Not OK", "Não ok"]], [
      ["Telling a client's adult son her results without her consent", "Contar os resultados ao filho adulto da paciente sem o consentimento dela", 1],
      ["Booking a TIS phone interpreter for a client with limited English", "Agendar um intérprete da TIS por telefone para paciente com inglês limitado", 0],
      ["Selling clients a supplement you earn commission on, without saying so", "Vender aos pacientes um suplemento com comissão, sem avisar", 1],
      ["Sending the referring GP a report after the first visit", "Mandar relatório ao GP que encaminhou depois da primeira consulta", 0],
      ["Telling a client to halve his insulin dose", "Dizer ao paciente para cortar a dose de insulina pela metade", 1],
      ["Asking a client how she would like her family involved", "Perguntar à paciente como ela quer envolver a família", 0]
    ])
  ],
  key: [["Consent: **informed, voluntary, capacity**", "Consentimento: **informado, voluntário, com capacidade**"], ["Share information only for care or **with consent** (legal exceptions apply)", "Compartilhe só para o cuidado ou **com consentimento** (há exceções legais)"], ["Professional interpreters; declare conflicts; stay in scope", "Intérpretes profissionais; declare conflitos; fique no seu âmbito"]],
  src: ["https://dietitiansaustralia.org.au/working-dietetics/standards-and-scope/code-conduct-dietitians-and-nutritionists"]
}
],
checks: {2: [124, 'n0'], 4: [126, 125]},
qs: [
  {stem: ["Under a GP Chronic Condition Management Plan, after the first and last dietetic service the dietitian must", "Num GP Chronic Condition Management Plan, depois do primeiro e do último atendimento o nutricionista deve"],
   opts: [["send a written report to the referring GP", "enviar um relatório escrito ao GP que encaminhou"], ["ask the client to sign a new plan", "pedir ao paciente que assine um novo plano"], ["notify AHPRA", "avisar a AHPRA"], ["book a group session", "marcar uma sessão em grupo"]], ans: 0,
   why: ["MBS rules require a written report to the referring practitioner after the first and last service.", "As regras do MBS exigem um relatório escrito ao médico que encaminhou após o primeiro e o último atendimento."], src: "https://www.servicesaustralia.gov.au/services-available-under-gp-chronic-condition-management-plan?context=20"},
  {stem: ["How many MBS allied health services can an Aboriginal or Torres Strait Islander person access per calendar year under a GPCCMP?", "Quantos atendimentos de profissões da saúde pelo MBS uma pessoa aborígene ou das Ilhas do Estreito de Torres pode ter por ano civil num GPCCMP?"],
   opts: [["Up to 10", "Até 10"], ["Up to 5", "Até 5"], ["Up to 20", "Até 20"], ["Unlimited", "Ilimitados"]], ans: 0,
   why: ["Up to 5 a year for most people, and up to 10 for Aboriginal and Torres Strait Islander people.", "Até 5 por ano para a maioria, e até 10 para aborígenes e ilhéus do Estreito de Torres."], src: "https://www.servicesaustralia.gov.au/services-available-under-gp-chronic-condition-management-plan?context=20"},
  {stem: ["APDs must complete at least how many hours of continuing professional development a year?", "Os APDs devem fazer pelo menos quantas horas de educação continuada por ano?"],
   opts: [["30", "30"], ["5", "5"], ["100", "100"], ["None", "Nenhuma"]], ans: 0,
   why: ["The APD program requires at least 30 CPD hours a year, with learning goals.", "O programa APD exige pelo menos 30 horas de educação continuada por ano, com metas de aprendizagem."], src: "https://dietitiansaustralia.org.au/working-dietetics/credentialing-dietitians"},
  {stem: ["Which term is MOST respectful when writing about Aboriginal and Torres Strait Islander clients?", "Qual termo é MAIS respeitoso ao escrever sobre pacientes aborígenes e das Ilhas do Estreito de Torres?"],
   opts: [["Aboriginal and Torres Strait Islander people", "Aboriginal and Torres Strait Islander people"], ["ATSI people", "ATSI people"], ["Natives", "Nativos"], ["The Aboriginals", "Os aborígenes (genérico)"]], ans: 0,
   why: ["Use the full term or 'First Nations people' (ask the person's preference). Avoid acronyms like 'ATSI'.", "Use o termo completo ou 'First Nations people' (pergunte a preferência da pessoa). Evite siglas como 'ATSI'."], src: "https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/aboriginal-and-torres-strait-islander-cultural-awareness"}
]
});
