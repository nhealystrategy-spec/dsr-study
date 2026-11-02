MOD({
id: 16, mins: 30,
hook: ["A leaflet, a radio talk, or a cooking program built with the teenagers themselves: only one of these is usually the right exam answer. Learn the pattern behind it.", "Um folheto, uma palestra no rádio, ou um programa de culinária construído com os próprios adolescentes: só um costuma ser a resposta certa na prova. Aprenda o padrão por trás disso."],
teasers: [["The five Ottawa Charter action areas in plain words", "Os cinco campos de ação da Carta de Ottawa em palavras simples"], ["The difference between an output and an outcome", "A diferença entre produto e resultado num programa"], ["Why counting who turned up doesn't prove a program worked", "Por que contar quem compareceu não prova que o programa funcionou"]],
goals: [
  ["Explain social determinants and food insecurity in Australia", "Explicar os determinantes sociais e a insegurança alimentar na Austrália"],
  ["Sort actions into the 5 Ottawa Charter areas", "Classificar ações nas 5 áreas da Carta de Ottawa"],
  ["Plan a program with program logic and SMART objectives", "Planejar um programa com modelo lógico e objetivos SMART"],
  ["Choose process, impact or outcome evaluation", "Escolher avaliação de processo, impacto ou resultado"]
],
pages: [
{
  t: ["Determinants and food insecurity", "Determinantes e insegurança alimentar"],
  b: [
    P("What people eat depends on far more than knowledge: ==income, housing, transport, food prices and access, education, culture and discrimination==. **Food insecurity** means limited or uncertain access to enough nutritious, safe food.",
      "O que as pessoas comem depende de muito mais que conhecimento: ==renda, moradia, transporte, preço e acesso aos alimentos, educação, cultura e discriminação==. **{{Insegurança alimentar|Food insecurity}}** é o acesso limitado ou incerto a alimentos suficientes, nutritivos e seguros."),
    UL(
      ["Higher-risk groups: ==low-income households==, single parents, people experiencing homelessness, some migrants and refugees, people with disability, and ==Aboriginal and Torres Strait Islander people in remote communities==, where food costs much more and choice is limited.", "Grupos de maior risco: ==famílias de baixa renda==, pais e mães solo, pessoas em situação de rua, alguns migrantes e refugiados, pessoas com deficiência e ==povos aborígenes e das Ilhas do Estreito de Torres em comunidades remotas==, onde a comida custa bem mais e há pouca escolha."],
      ["==Upstream== actions change the conditions for everyone (policy, prices, environments); ==downstream== actions help individuals (counselling).", "Ações ==a montante (upstream)== mudam as condições para todos (políticas, preços, ambientes); ações ==a jusante (downstream)== ajudam indivíduos (aconselhamento)."]
    ),
    SORT(["Upstream (population) or downstream (individual)?", "A montante (população) ou a jusante (indivíduo)?"], [["Upstream", "A montante"], ["Downstream", "A jusante"]], [
      ["Subsidising fresh food in remote community stores", "Subsidiar comida fresca nos mercados de comunidades remotas", 0],
      ["One-to-one counselling for a client with diabetes", "Aconselhamento individual para um paciente com diabetes", 1],
      ["Mandatory folic acid in bread flour", "Ácido fólico obrigatório na farinha para pão", 0],
      ["Giving a client a meal plan", "Entregar um plano alimentar a um paciente", 1],
      ["Healthy food rules for all school canteens in a state", "Regras de alimentação saudável para todas as cantinas de um estado", 0]
    ]),
    NOTE('br', "Same ideas as 'segurança alimentar e nutricional' and the SUS approach. Remember the false friend: ==food security (segurança alimentar) ≠ food safety (segurança dos alimentos)==.",
      "As mesmas ideias de 'segurança alimentar e nutricional' e da abordagem do SUS. Lembre o falso cognato: ==food security (segurança alimentar) ≠ food safety (segurança dos alimentos)==.")
  ],
  key: [["Diet is shaped by **income, access, price, housing, culture**", "A alimentação é moldada por **renda, acesso, preço, moradia, cultura**"], ["High risk: low income, remote First Nations communities, homelessness, some migrants", "Alto risco: baixa renda, comunidades indígenas remotas, situação de rua, alguns migrantes"], ["**Upstream** = policy/environment; **downstream** = individual", "**A montante** = política/ambiente; **a jusante** = indivíduo"]],
  src: ["https://www.aihw.gov.au/reports/australias-health/social-determinants-of-health"]
},
{
  t: ["The Ottawa Charter", "A Carta de Ottawa"],
  b: [
    P("The **Ottawa Charter for Health Promotion** (WHO, 1986) gives five action areas. Strong programs work in ==several areas at once==.",
      "A **Carta de Ottawa para a Promoção da Saúde** (OMS, 1986) traz cinco campos de ação. Programas fortes atuam em ==vários campos ao mesmo tempo==."),
    OL(
      ["**Build healthy public policy**: laws, taxes, regulations, organisational policies.", "**Construir políticas públicas saudáveis**: leis, impostos, regulamentos, políticas das instituições."],
      ["**Create supportive environments**: make the healthy choice the easy choice.", "**Criar ambientes favoráveis**: tornar a escolha saudável a escolha fácil."],
      ["**Strengthen community action**: communities set priorities and lead.", "**Reforçar a ação comunitária**: a comunidade define prioridades e lidera."],
      ["**Develop personal skills**: education, cooking and label-reading skills.", "**Desenvolver habilidades pessoais**: educação, culinária, leitura de rótulos."],
      ["**Reorient health services**: towards prevention and primary care.", "**Reorientar os serviços de saúde**: para prevenção e atenção primária."]
    ),
    SORT(["Which Ottawa Charter area?", "Qual campo da Carta de Ottawa?"], [["Public policy", "Políticas públicas"], ["Supportive environments", "Ambientes favoráveis"], ["Community action", "Ação comunitária"], ["Personal skills", "Habilidades pessoais"], ["Reorient services", "Reorientar serviços"]], [
      ["A state law limiting sugary drinks in school canteens", "Uma lei estadual que limita bebidas açucaradas nas cantinas", 0],
      ["Free water stations and fruit at the workplace", "Bebedouros e fruta grátis no local de trabalho", 1],
      ["A community garden designed and run by residents", "Uma horta comunitária planejada e cuidada pelos moradores", 2],
      ["Cooking classes for new parents", "Aulas de culinária para pais de primeira viagem", 3],
      ["GPs routinely screening and referring to dietitians", "Médicos de família fazendo triagem e encaminhando a nutricionistas", 4],
      ["Healthy food policy in all hospital cafés", "Política de alimentação saudável em todos os cafés de hospitais", 0]
    ]),
    NOTE('exam', "Exam pattern: passive information (leaflets, posters, radio talks) is rarely the best answer. Choose ==targeted, participatory, multi-strategy== programs that change environments and build skills.",
      "Padrão da prova: informação passiva (folhetos, cartazes, palestras no rádio) raramente é a melhor resposta. Escolha programas ==direcionados, participativos e com várias estratégias== que mudam o ambiente e desenvolvem habilidades.")
  ],
  key: [["5 areas: **policy · environments · community action · personal skills · reorient services**", "5 campos: **políticas · ambientes · ação comunitária · habilidades pessoais · reorientar serviços**"], ["Best programs combine areas", "Os melhores programas combinam campos"], ["Leaflets alone are rarely the best answer", "Folhetos sozinhos raramente são a melhor resposta"]],
  src: ["https://www.aihw.gov.au/reports/australias-health/health-promotion"]
},
{
  t: ["Planning a program", "Planejando um programa"],
  b: [
    ORDER(["Put the program planning cycle in order", "Coloque o ciclo de planejamento de programa em ordem"], [
      ["Needs assessment (data + community voices)", "Diagnóstico de necessidades (dados + voz da comunidade)"],
      ["Set goals and SMART objectives", "Definir metas e objetivos SMART"],
      ["Choose evidence-based strategies, co-designed with the community", "Escolher estratégias baseadas em evidências, construídas com a comunidade"],
      ["Write the program logic and evaluation plan", "Escrever o modelo lógico e o plano de avaliação"],
      ["Implement", "Implementar"],
      ["Evaluate, report and plan for sustainability", "Avaliar, relatar e planejar a continuidade"]
    ]),
    FLOW(
      [["Inputs", "Insumos"], ["Staff, money, partners, venues", "Equipe, dinheiro, parceiros, locais"]],
      [["Activities", "Atividades"], ["What you do: cooking sessions, a canteen policy", "O que você faz: oficinas de culinária, política de cantina"]],
      [["Outputs", "Produtos"], ["==Counts==: 8 sessions run, 60 parents attended", "==Contagens==: 8 oficinas feitas, 60 pais participaram"]],
      [["Short and medium-term outcomes", "Resultados de curto e médio prazo"], ["Knowledge, skills, behaviour (e.g. vegetable serves)", "Conhecimento, habilidades, comportamento (ex. porções de hortaliças)"]],
      [["Long-term outcomes", "Resultados de longo prazo"], ["Health status (e.g. lower obesity prevalence)", "Estado de saúde (ex. menor prevalência de obesidade)"]]
    ),
    NOTE('tip', "**SMART** objective: ==Specific, Measurable, Achievable, Relevant, Time-bound==. Example: 'By June 2028, 60% of participating families will offer vegetables at dinner 5 nights a week.'",
      "Objetivo **SMART**: ==Específico, Mensurável, Alcançável, Relevante, com Tempo definido==. Exemplo: 'Até junho de 2028, 60% das famílias participantes vão oferecer hortaliças no jantar 5 noites por semana.'")
  ],
  key: [["Needs → **SMART objectives** → strategies (co-designed) → **program logic** → implement → evaluate", "Necessidades → **objetivos SMART** → estratégias (co-construídas) → **modelo lógico** → implementar → avaliar"], ["Program logic: **inputs → activities → outputs → outcomes**", "Modelo lógico: **insumos → atividades → produtos → resultados**"], ["Outputs are **counts**; outcomes are **changes**", "Produtos são **contagens**; resultados são **mudanças**"]],
  src: ["https://www.health.nsw.gov.au/research/Pages/developing-program-logic-guide.aspx"]
},
{
  t: ["Evaluation and Australian examples", "Avaliação e exemplos australianos"],
  b: [
    TABLE([["Type", "Tipo"], ["Question", "Pergunta"], ["Example measure", "Exemplo de medida"]],
      [["**Process**", "**Processo**"], ["Was it delivered as planned? Who did it reach?", "Foi feito como planejado? Quem alcançou?"], ["Attendance, sessions run, participant satisfaction", "Participação, oficinas feitas, satisfação dos participantes"]],
      [["**Impact**", "**Impacto**"], ["Did short-term knowledge, skills or behaviour change?", "Mudaram o conhecimento, as habilidades ou o comportamento no curto prazo?"], ["Vegetable serves at 3 months, label-reading skills", "Porções de hortaliças em 3 meses, habilidade de ler rótulos"]],
      [["**Outcome**", "**Resultado**"], ["Did long-term health change?", "Mudou a saúde no longo prazo?"], ["Obesity prevalence, diabetes rates after years", "Prevalência de obesidade, taxas de diabetes depois de anos"]]
    ),
    SORT(["Process, impact or outcome?", "Processo, impacto ou resultado?"], [["Process", "Processo"], ["Impact", "Impacto"], ["Outcome", "Resultado"]], [
      ["60 families attended 4 or more sessions", "60 famílias foram a 4 ou mais oficinas", 0],
      ["Parents' vegetable serves rose after 3 months", "As porções de hortaliças dos pais subiram depois de 3 meses", 1],
      ["Childhood overweight fell over 5 years", "O sobrepeso infantil caiu em 5 anos", 2],
      ["Participants rated sessions 4.5/5", "Os participantes deram nota 4,5/5 às oficinas", 0],
      ["Better label-reading quiz scores at the end", "Notas melhores no teste de leitura de rótulos no fim", 1]
    ]),
    UL(
      ["Australian policy examples: ==mandatory folic acid and iodine fortification of bread (2009)==, the voluntary ==Health Star Rating==, state school canteen policies, the ==National Preventive Health Strategy 2021–2030==.", "Exemplos de políticas australianas: ==fortificação obrigatória do pão com ácido fólico e iodo (2009)==, o ==Health Star Rating== voluntário, políticas estaduais de cantinas, a ==National Preventive Health Strategy 2021–2030==."]
    )
  ],
  key: [["**Process** = delivery and reach; **impact** = short-term change; **outcome** = long-term health", "**Processo** = execução e alcance; **impacto** = mudança de curto prazo; **resultado** = saúde no longo prazo"], ["Plan evaluation **before** the program starts", "Planeje a avaliação **antes** de o programa começar"], ["Examples: fortification 2009, HSR, canteen policies, preventive health strategy", "Exemplos: fortificação 2009, HSR, políticas de cantina, estratégia de prevenção"]],
  src: ["https://www.health.nsw.gov.au/research/Pages/planning-evaluations-guide.aspx", "https://www.health.gov.au/resources/publications/national-preventive-health-strategy-2021-2030"]
}
],
checks: {2: [111, 110], 4: [108, 109]},
qs: [
  {stem: ["Which action addresses an UPSTREAM determinant of poor diet?", "Qual ação atua num determinante A MONTANTE da má alimentação?"],
   opts: [["Subsidising fruit and vegetables in remote community stores", "Subsidiar frutas e hortaliças nos mercados de comunidades remotas"], ["One-to-one counselling for a client", "Aconselhamento individual para um paciente"], ["Giving a client a recipe book", "Dar um livro de receitas a um paciente"], ["Weighing children at a clinic visit", "Pesar as crianças numa consulta"]], ans: 0,
   why: ["Upstream actions change prices, policies and environments for whole populations.", "Ações a montante mudam preços, políticas e ambientes para populações inteiras."], src: "https://www.aihw.gov.au/reports/australias-health/social-determinants-of-health"},
  {stem: ["In program logic, 'number of cooking sessions run' is", "No modelo lógico, 'número de oficinas de culinária realizadas' é"],
   opts: [["an output", "um produto"], ["an input", "um insumo"], ["a long-term outcome", "um resultado de longo prazo"], ["a need", "uma necessidade"]], ans: 0,
   why: ["Outputs are counts of what was delivered; outcomes are the changes that follow.", "Produtos são contagens do que foi entregue; resultados são as mudanças que vêm depois."], src: "https://www.health.nsw.gov.au/research/Pages/developing-program-logic-guide.aspx"},
  {stem: ["Which is an OUTCOME (long-term) evaluation measure for a school obesity program?", "Qual é uma medida de avaliação de RESULTADO (longo prazo) para um programa escolar contra obesidade?"],
   opts: [["Change in overweight prevalence after 3 years", "Mudança na prevalência de sobrepeso depois de 3 anos"], ["Number of students who attended", "Número de alunos que participaram"], ["Teachers' satisfaction with the materials", "Satisfação dos professores com os materiais"], ["Knowledge quiz scores after 1 week", "Notas de conhecimento depois de 1 semana"]], ans: 0,
   why: ["Outcome evaluation looks at long-term health change. Attendance and satisfaction are process; short-term knowledge is impact.", "A avaliação de resultado olha a mudança de saúde no longo prazo. Participação e satisfação são processo; conhecimento de curto prazo é impacto."], src: "https://www.health.nsw.gov.au/research/Pages/planning-evaluations-guide.aspx"},
  {stem: ["Mandatory folic acid fortification of bread flour is an example of", "A fortificação obrigatória da farinha para pão com ácido fólico é um exemplo de"],
   opts: [["building healthy public policy (a population approach)", "construir políticas públicas saudáveis (abordagem populacional)"], ["developing personal skills", "desenvolver habilidades pessoais"], ["reorienting health services", "reorientar os serviços de saúde"], ["a high-risk individual approach", "uma abordagem individual de alto risco"]], ans: 0,
   why: ["Regulation that changes the food supply for everyone is healthy public policy.", "Uma regulação que muda a oferta de alimentos para todos é política pública saudável."], src: "https://www.aihw.gov.au/reports/australias-health/health-promotion"}
]
});
