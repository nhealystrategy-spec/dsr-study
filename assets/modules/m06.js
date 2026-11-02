MOD({
id: 6, mins: 40,
hook: ["A client who has already stopped gluten can get a 'normal' coeliac test and still have coeliac disease. The fix is in here, along with why Australia won't call oats gluten free.", "Uma paciente que já parou o glúten pode ter um exame de celíaca 'normal' e mesmo assim ter a doença. A solução está aqui, junto com o motivo de a Austrália não chamar a aveia de sem glúten."],
teasers: [["How much bread a day, and for how long, before a coeliac blood test", "Quanto pão por dia, e por quanto tempo, antes do exame de sangue da celíaca"], ["Why onion and garlic can be a problem in IBS", "Por que cebola e alho podem ser um problema na SII"], ["The gut condition where nuts and seeds are fine, despite the old advice", "A condição intestinal em que oleaginosas e sementes estão liberadas, apesar do conselho antigo"]],
goals: [
  ["Explain the coeliac testing pathway and the gluten challenge", "Explicar o caminho do diagnóstico da celíaca e a prova com glúten"],
  ["Teach an Australian gluten-free diet safely", "Ensinar com segurança uma dieta sem glúten australiana"],
  ["Run first-line IBS advice and the 3-phase low FODMAP diet", "Fazer a orientação de primeira linha na SII e a dieta low FODMAP em 3 fases"],
  ["Compare Crohn's disease and ulcerative colitis nutrition issues", "Comparar as questões nutricionais da doença de Crohn e da retocolite"],
  ["Give correct advice for lactose intolerance, diverticular disease and haemochromatosis", "Orientar corretamente intolerância à lactose, doença diverticular e hemocromatose"]
],
pages: [
{
  t: ["Coeliac disease: testing first", "Doença celíaca: primeiro o exame"],
  b: [
    P("Coeliac disease is an ==autoimmune== reaction to gluten that damages the small bowel. It affects about ==1 in 70 Australians==, and most don't know they have it. Symptoms vary: bloating, diarrhoea, tiredness, ==iron deficiency==, or none at all.",
      "A doença celíaca é uma reação ==autoimune== ao glúten que lesa o intestino delgado. Atinge cerca de ==1 em cada 70 australianos==, e a maioria não sabe. Os sintomas variam: distensão, diarreia, cansaço, ==deficiência de ferro== ou nenhum sintoma."),
    FLOW(
      [["Keep eating gluten", "Continuar comendo glúten"], ["If gluten was cut out: a ==gluten challenge== of about ==4 slices of wheat bread a day (8–10 g gluten) for at least 6 weeks== (children: 2 slices).", "Se o glúten foi cortado: uma ==prova com glúten== de cerca de ==4 fatias de pão de trigo por dia (8–10 g de glúten) por pelo menos 6 semanas== (crianças: 2 fatias)."]],
      [["Blood tests (serology)", "Exames de sangue (sorologia)"], ["tTG-IgA with total IgA (or tTG-IgA plus DGP-IgG).", "tTG-IgA com IgA total (ou tTG-IgA mais DGP-IgG)."]],
      [["Gastroscopy with small bowel biopsy", "Endoscopia com biópsia do intestino delgado"], ["==Confirms== the diagnosis (some children may not need a biopsy).", "==Confirma== o diagnóstico (algumas crianças podem não precisar de biópsia)."]],
      [["Gene test (HLA-DQ2/DQ8)", "Teste genético (HLA-DQ2/DQ8)"], ["A ==negative== result practically ==rules coeliac out==. Positive only means it is possible.", "Um resultado ==negativo== praticamente ==descarta== a celíaca. Positivo só quer dizer que é possível."]]
    ),
    NOTE('exam', "Classic exam trap: the client has already gone gluten free and feels better. The right answer is to ==reintroduce gluten before testing==, not to continue the gluten-free diet.",
      "Pegadinha clássica: o paciente já tirou o glúten e se sente melhor. A resposta certa é ==reintroduzir o glúten antes do exame==, e não continuar sem glúten."),
    ORDER(["Put the coeliac pathway in order", "Coloque o caminho diagnóstico da celíaca em ordem"], [
      ["Symptoms or risk noticed (e.g. iron deficiency)", "Sintomas ou risco percebidos (ex. deficiência de ferro)"],
      ["Make sure the person is eating gluten", "Garantir que a pessoa está comendo glúten"],
      ["Blood tests: tTG-IgA and total IgA", "Exames de sangue: tTG-IgA e IgA total"],
      ["Gastroscopy and biopsy to confirm", "Endoscopia e biópsia para confirmar"],
      ["Strict lifelong gluten-free diet with a dietitian", "Dieta sem glúten rigorosa e para a vida toda com nutricionista"]
    ])
  ],
  key: [["Test **while eating gluten**: challenge ≈ **4 slices wheat bread/day for ≥ 6 weeks**", "Testar **comendo glúten**: prova ≈ **4 fatias de pão de trigo/dia por ≥ 6 semanas**"], ["Serology → **biopsy confirms**", "Sorologia → **biópsia confirma**"], ["Negative HLA-DQ2/DQ8 **rules it out**", "HLA-DQ2/DQ8 negativo **descarta**"]],
  src: ["https://coeliac.org.au/learn/diagnosis/", "https://coeliac.org.au/article/diagnosing-coeliac-disease-the-key-facts/"]
},
{
  t: ["Gluten free, Australian style", "Sem glúten, do jeito australiano"],
  b: [
    P("Treatment is a ==strict, lifelong gluten-free diet==. Gluten is in ==wheat (including spelt), rye, barley and triticale==. Australia adds two rules that surprise many overseas dietitians:",
      "O tratamento é uma ==dieta sem glúten rigorosa e para a vida toda==. Há glúten no ==trigo (inclusive espelta), centeio, cevada e triticale==. A Austrália tem duas regras que surpreendem muitos nutricionistas de fora:"),
    UL(
      ["A '**gluten free**' label means ==no detectable gluten== (stricter than the 20 ppm used in many countries) and no oats or malt.", "O rótulo '**gluten free**' significa ==glúten não detectável== (mais rígido que os 20 ppm usados em muitos países) e sem aveia ou malte."],
      ["==Oats are not recommended== by Coeliac Australia: contamination is common and the oat protein avenin harms some people.", "A ==aveia não é recomendada== pela Coeliac Australia: a contaminação é comum e a proteína da aveia (avenina) faz mal a algumas pessoas."]
    ),
    NOTE('warn', "Nutrition risks: lower ==fibre==, ==iron== and ==B vitamins==. Gluten-free breads are not covered by the mandatory ==folic acid and thiamine== fortification of wheat bread flour. Check calcium and vitamin D (bone health) and review at 6–12 months.",
      "Riscos nutricionais: menos ==fibra==, ==ferro== e ==vitaminas do complexo B==. Os pães sem glúten não entram na fortificação obrigatória com ==ácido fólico e tiamina== da farinha de trigo para pão. Confira cálcio e vitamina D (saúde óssea) e reavalie em 6–12 meses."),
    SORT(["Safe, contains gluten, or not recommended?", "Seguro, tem glúten ou não recomendado?"], [["Safe", "Seguro"], ["Contains gluten", "Tem glúten"], ["Not recommended", "Não recomendado"]], [
      ["Rice noodles", "Macarrão de arroz", 0],
      ["Spelt bread", "Pão de espelta", 1],
      ["Buckwheat", "Trigo-sarraceno", 0],
      ["Regular beer", "Cerveja comum", 1],
      ["Rolled oats", "Aveia em flocos", 2],
      ["Polenta", "Polenta", 0],
      ["Barley", "Cevada", 1],
      ["Quinoa", "Quinoa", 0],
      ["Regular soy sauce (made with wheat)", "Molho de soja comum (feito com trigo)", 1]
    ]),
    NOTE('br', "Good news from Brazil: ==tapioca, cassava (mandioca), pão de queijo, rice and beans== are naturally gluten free. Check cross-contact and added flours.",
      "Boa notícia do Brasil: ==tapioca, mandioca, pão de queijo, arroz e feijão== são naturalmente sem glúten. Confira contato cruzado e farinhas adicionadas.")
  ],
  key: [["Gluten: **wheat (incl. spelt), rye, barley, triticale**", "Glúten: **trigo (incl. espelta), centeio, cevada, triticale**"], ["AU 'gluten free' = **no detectable gluten**; **no oats**", "'Gluten free' na AU = **glúten não detectável**; **sem aveia**"], ["Watch **fibre, iron, folate, thiamine, calcium**", "Atenção a **fibra, ferro, folato, tiamina, cálcio**"]],
  src: ["https://coeliac.org.au/live/gluten-free-diet/"]
},
{
  t: ["IBS: first-line advice", "SII: orientação de primeira linha"],
  b: [
    P("**Irritable bowel syndrome** causes recurrent abdominal pain linked with bowel habit changes. Before diet changes, make sure ==coeliac disease and red flags== have been checked by the doctor.",
      "A **{{síndrome do intestino irritável|irritable bowel syndrome}}** causa dor abdominal recorrente ligada a mudanças do hábito intestinal. Antes de mexer na dieta, garanta que ==doença celíaca e sinais de alarme== foram avaliados pelo médico."),
    NOTE('warn', "Red flags = refer to the GP: ==unintended weight loss, blood in the stool, anaemia, new symptoms after age 50, family history of bowel cancer or IBD==, waking at night with diarrhoea.",
      "Sinais de alarme = encaminhar ao médico: ==perda de peso não intencional, sangue nas fezes, anemia, sintomas novos depois dos 50 anos, história familiar de câncer de intestino ou DII==, acordar à noite com diarreia."),
    UL(
      ["Regular meals, not too large; eat slowly.", "Refeições regulares, não muito grandes; comer devagar."],
      ["Limit ==caffeine, alcohol, fatty and spicy foods== and sugar-free gums (polyols).", "Limitar ==cafeína, álcool, alimentos gordurosos e picantes== e chicletes sem açúcar (polióis)."],
      ["Adjust fibre: ==soluble fibre (psyllium, oats)== often helps; too much insoluble fibre may worsen bloating.", "Ajustar a fibra: ==fibra solúvel (psyllium, aveia)== costuma ajudar; fibra insolúvel demais pode piorar a distensão."],
      ["Enough fluid; a food and symptom diary for 1–2 weeks.", "Líquidos suficientes; um diário de alimentos e sintomas por 1–2 semanas."],
      ["If symptoms persist: ==second line is the low FODMAP diet, with a dietitian== (next page).", "Se os sintomas continuarem: ==a segunda linha é a dieta low FODMAP, com nutricionista== (próxima página)."]
    )
  ],
  key: [["Exclude **coeliac** and **red flags** first", "Primeiro excluir **celíaca** e **sinais de alarme**"], ["First line: regular meals, less caffeine/alcohol/fat, **soluble fibre**, diary", "Primeira linha: refeições regulares, menos cafeína/álcool/gordura, **fibra solúvel**, diário"], ["Second line: **low FODMAP** with a dietitian", "Segunda linha: **low FODMAP** com nutricionista"]],
  src: ["https://www.monashfodmap.com/about-fodmap-and-ibs/", "https://www.gesa.org.au/resources/clinical-practice-resources/"]
},
{
  t: ["The low FODMAP diet in 3 phases", "A dieta low FODMAP em 3 fases"],
  b: [
    P("FODMAPs are short-chain carbohydrates that are poorly absorbed, draw in water and are fermented by gut bacteria. The diet was developed at ==Monash University in Melbourne==.",
      "FODMAPs são carboidratos de cadeia curta mal absorvidos, que puxam água e são fermentados pelas bactérias do intestino. A dieta foi desenvolvida na ==Universidade Monash, em Melbourne==."),
    TABLE([["Group", "Grupo"], ["Examples", "Exemplos"]],
      [["**O**ligosaccharides: fructans, GOS", "**O**ligossacarídeos: frutanos, GOS"], ["Wheat, rye, ==onion, garlic==; legumes", "Trigo, centeio, ==cebola, alho==; leguminosas"]],
      [["**D**isaccharide: lactose", "**D**issacarídeo: lactose"], ["Milk, soft cheese, yoghurt", "Leite, queijos moles, iogurte"]],
      [["**M**onosaccharide: excess fructose", "**M**onossacarídeo: excesso de frutose"], ["Honey, mango, apple, high-fructose corn syrup", "Mel, manga, maçã, xarope de milho rico em frutose"]],
      [["**P**olyols: sorbitol, mannitol", "**P**olióis: sorbitol, manitol"], ["Stone fruit, mushrooms, cauliflower, sugar-free mints and gum", "Frutas de caroço, cogumelos, couve-flor, balas e chicletes sem açúcar"]]
    ),
    FLOW(
      [["1. Restrict (2–6 weeks)", "1. Restringir (2–6 semanas)"], ["Swap high-FODMAP foods for low-FODMAP ones.", "Trocar alimentos ricos em FODMAP por pobres em FODMAP."]],
      [["2. Reintroduce", "2. Reintroduzir"], ["Test ==one FODMAP group at a time== to find personal triggers.", "Testar ==um grupo de FODMAP por vez== para achar os gatilhos pessoais."]],
      [["3. Personalise", "3. Personalizar"], ["Long term: the ==least restrictive== diet that controls symptoms.", "Longo prazo: a dieta ==menos restritiva== que controla os sintomas."]]
    ),
    VIDEO('stdYoA4G9Dg', 'Monash FODMAP', 3, ["IBS symptom relief with the FODMAP diet", "Alívio dos sintomas da SII com a dieta FODMAP"],
      ["From the Monash University team that created the diet. An animation shows ==how and why FODMAPs trigger IBS symptoms== inside the gut, and where to find more help. Remember the 3 phases on this page, always ==with a dietitian==.",
       "Da equipe da Monash University que criou a dieta. Uma animação mostra ==como e por que os FODMAPs causam os sintomas da SII== dentro do intestino e onde buscar mais ajuda. Lembre das 3 fases desta página, sempre ==com um nutricionista==."]),
    SORT(["Which FODMAP group?", "Qual grupo de FODMAP?"], [["Oligosaccharides", "Oligossacarídeos"], ["Lactose", "Lactose"], ["Excess fructose", "Excesso de frutose"], ["Polyols", "Polióis"]], [
      ["Onion", "Cebola", 0],
      ["Cow's milk", "Leite de vaca", 1],
      ["Honey", "Mel", 2],
      ["Mushrooms", "Cogumelos", 3],
      ["Chickpeas", "Grão-de-bico", 0],
      ["Sugar-free mints", "Balas sem açúcar", 3],
      ["Mango", "Manga", 2]
    ]),
    NOTE('warn', "Not a forever diet and not a weight-loss diet. Avoid in people with or at risk of ==eating disorders==, and watch fibre, calcium and gut bacteria during restriction.",
      "Não é dieta para sempre nem para emagrecer. Evite em pessoas com ou em risco de ==transtornos alimentares==, e cuide de fibra, cálcio e bactérias intestinais durante a restrição.")
  ],
  key: [["**F**ermentable **O**ligo-, **D**i-, **M**ono-saccharides **A**nd **P**olyols", "**F**ermentáveis: **O**ligo-, **D**i-, **M**onossacarídeos **A** e **P**olióis"], ["Phases: **restrict 2–6 weeks → reintroduce one group at a time → personalise**", "Fases: **restringir 2–6 semanas → reintroduzir um grupo por vez → personalizar**"], ["Onion and garlic = fructans; honey = fructose; mushrooms = polyols", "Cebola e alho = frutanos; mel = frutose; cogumelos = polióis"]],
  src: ["https://www.monashfodmap.com/about-fodmap-and-ibs/"]
},
{
  t: ["Inflammatory bowel disease (IBD)", "Doença inflamatória intestinal (DII)"],
  b: [
    TABLE([["", ""], ["Crohn's disease", "Doença de Crohn"], ["Ulcerative colitis", "Retocolite ulcerativa"]],
      [["Where", "Onde"], ["Anywhere mouth to anus, patchy; often ==terminal ileum==", "Em qualquer parte da boca ao ânus, em áreas salteadas; muitas vezes ==íleo terminal=="], ["==Colon and rectum only==, continuous", "==Só cólon e reto==, contínua"]],
      [["Nutrition risks", "Riscos nutricionais"], ["Malnutrition, ==B12== and bile salt loss (ileal disease or resection), iron, strictures", "Desnutrição, perda de ==B12== e sais biliares (doença ou ressecção ileal), ferro, estenoses"], ["Iron deficiency (blood loss), dehydration in flares", "Deficiência de ferro (perda de sangue), desidratação nas crises"]]
    ),
    UL(
      ["No single food causes IBD. Avoid ==unnecessary restriction==; in remission, a varied, Mediterranean-style diet suits most people.", "Nenhum alimento sozinho causa DII. Evite ==restrições desnecessárias==; na remissão, uma dieta variada estilo mediterrâneo serve para a maioria."],
      ["A ==low-fibre (low-residue) diet== is only for people with ==strictures== or for short periods in flares.", "A ==dieta pobre em fibras (pobre em resíduos)== é só para quem tem ==estenoses== ou por períodos curtos nas crises."],
      ["Children with active Crohn's: ==exclusive enteral nutrition (6–8 weeks)== is first-line to induce remission.", "Crianças com Crohn ativo: ==nutrição enteral exclusiva (6–8 semanas)== é primeira linha para induzir remissão."],
      ["Steroids: protect bones with ==calcium and vitamin D==.", "Corticoides: proteger os ossos com ==cálcio e vitamina D==."]
    ),
    PICK(["A man with Crohn's disease in remission asks if he must avoid all fibre. Best answer?", "Um homem com Crohn em remissão pergunta se precisa evitar toda fibra. Melhor resposta?"],
      [["Only if he has a stricture; otherwise a varied diet is best", "Só se tiver estenose; fora isso, uma dieta variada é o melhor"], ["Yes, fibre always triggers flares", "Sim, fibra sempre desencadeia crises"], ["Yes, but fruit juice is fine", "Sim, mas suco de fruta pode"], ["No, and he should take a fibre supplement", "Não, e ele deve tomar um suplemento de fibra"]], 0,
      ["Low-fibre diets are for strictures (obstruction risk) or short-term in flares, not routine in remission.", "Dietas pobres em fibra são para estenoses (risco de obstrução) ou por pouco tempo nas crises, não rotina na remissão."])
  ],
  key: [["Crohn's: anywhere, patchy, **terminal ileum → B12**; UC: **colon only**", "Crohn: qualquer parte, salteada, **íleo terminal → B12**; RCU: **só cólon**"], ["Low fibre only for **strictures** or short-term flares", "Pouca fibra só para **estenoses** ou crises curtas"], ["Paediatric Crohn's: **EEN 6–8 weeks** first-line", "Crohn pediátrico: **NEE 6–8 semanas** é primeira linha"]],
  src: ["https://crohnsandcolitis.org.au/living-with-crohns-colitis/lifestyle/nutrition/", "https://crohnsandcolitis.org.au/living-with-crohns-colitis/lifestyle/nutrition/frequently-asked-dietary-questions-in-ibd/"]
},
{
  t: ["Other common gut conditions", "Outras condições intestinais comuns"],
  b: [
    TABLE([["Condition", "Condição"], ["What to advise", "O que orientar"]],
      [["**Lactose intolerance**", "**Intolerância à lactose**"], ["Not an allergy. Most people tolerate ==small amounts==, hard cheese and yoghurt; use lactose-free milk; keep calcium up.", "Não é alergia. A maioria tolera ==pequenas quantidades==, queijo duro e iogurte; usar leite sem lactose; manter o cálcio."]],
      [["**Diverticular disease**", "**Doença diverticular**"], ["==High-fibre diet== with fluids. There is ==no need to avoid nuts, seeds or popcorn==. During acute diverticulitis, a short low-fibre period may be advised.", "==Dieta rica em fibras== com líquidos. ==Não é preciso evitar oleaginosas, sementes ou pipoca==. Na diverticulite aguda, pode-se orientar pouca fibra por um tempo curto."]],
      [["**Haemochromatosis**", "**Hemocromatose**"], ["Treatment is ==venesection== (removing blood). No strict low-iron diet; avoid ==iron and vitamin C supplements== and iron-fortified foods in excess; limit alcohol (liver).", "O tratamento é a ==sangria terapêutica==. Sem dieta rígida pobre em ferro; evitar ==suplementos de ferro e de vitamina C== e excesso de alimentos fortificados com ferro; limitar álcool (fígado)."]],
      [["**Reflux (GORD)**", "**Refluxo (DRGE)**"], ["Smaller meals, no food 2–3 hours before bed, weight loss if needed, limit personal triggers (alcohol, fatty meals).", "Refeições menores, não comer 2–3 horas antes de deitar, perder peso se necessário, limitar os gatilhos pessoais (álcool, refeições gordurosas)."]]
    ),
    PICK(["A client with haemochromatosis asks what to avoid. Best advice?", "Um paciente com hemocromatose pergunta o que evitar. Melhor orientação?"],
      [["Iron and vitamin C supplements, and limit alcohol", "Suplementos de ferro e de vitamina C, e limitar álcool"], ["All red meat and green vegetables forever", "Toda carne vermelha e verduras para sempre"], ["Dairy foods", "Laticínios"], ["Tea and coffee", "Chá e café"]], 0,
      ["Venesection treats the iron overload; diet only needs to avoid extra iron and vitamin C supplements and limit alcohol.", "A sangria trata o excesso de ferro; a dieta só precisa evitar suplementos extras de ferro e vitamina C e limitar o álcool."])
  ],
  key: [["Lactose intolerance: **small amounts OK**, keep calcium", "Intolerância à lactose: **pequenas quantidades ok**, manter cálcio"], ["Diverticular disease: **high fibre**; nuts and seeds are fine", "Doença diverticular: **muita fibra**; oleaginosas e sementes ok"], ["Haemochromatosis: venesection; avoid **iron and vitamin C supplements**", "Hemocromatose: sangria; evitar **suplementos de ferro e vitamina C**"]],
  src: ["https://www.gesa.org.au/resources/clinical-practice-resources/"]
}
],
checks: {2: [36, 37], 4: [39, 'n2']},
qs: [
  {stem: ["Before coeliac testing, Coeliac Australia advises an adult who has stopped gluten to eat", "Antes do exame para celíaca, a Coeliac Australia orienta um adulto que parou o glúten a comer"],
   opts: [["about 4 slices of wheat bread a day for at least 6 weeks", "cerca de 4 fatias de pão de trigo por dia por pelo menos 6 semanas"], ["1 slice of bread a week for 2 weeks", "1 fatia de pão por semana por 2 semanas"], ["oats every day for 3 days", "aveia todos os dias por 3 dias"], ["no gluten until after the biopsy", "nada de glúten até depois da biópsia"]], ans: 0,
   why: ["About 8–10 g gluten (≈ 4 slices wheat bread) a day for at least 6 weeks; children 2 slices.", "Cerca de 8–10 g de glúten (≈ 4 fatias de pão de trigo) por dia por pelo menos 6 semanas; crianças 2 fatias."], src: "https://coeliac.org.au/article/diagnosing-coeliac-disease-the-key-facts/"},
  {stem: ["Why may Australians on a gluten-free diet get less folic acid?", "Por que australianos em dieta sem glúten podem ingerir menos ácido fólico?"],
   opts: [["Gluten-free breads are not covered by mandatory folic acid fortification of wheat bread flour", "Os pães sem glúten não entram na fortificação obrigatória da farinha de trigo para pão com ácido fólico"], ["Gluten is needed to absorb folate", "O glúten é necessário para absorver folato"], ["Rice blocks folate absorption", "O arroz bloqueia a absorção de folato"], ["Folate is only found in wheat", "Só há folato no trigo"]], ans: 0,
   why: ["Mandatory folic acid (and thiamine) fortification applies to wheat flour for bread making, so gluten-free breads may miss out.", "A fortificação obrigatória com ácido fólico (e tiamina) vale para a farinha de trigo para pão, então os pães sem glúten podem ficar sem."], src: "https://coeliac.org.au/live/gluten-free-diet/"},
  {stem: ["Which food is HIGH in FODMAPs (fructans)?", "Qual alimento é RICO em FODMAP (frutanos)?"],
   opts: [["Onion", "Cebola"], ["Carrot", "Cenoura"], ["Rice", "Arroz"], ["Strawberries", "Morangos"]], ans: 0,
   why: ["Onion and garlic are major sources of fructans. Carrot, rice and strawberries are low FODMAP.", "Cebola e alho são grandes fontes de frutanos. Cenoura, arroz e morango são pobres em FODMAP."], src: "https://www.monashfodmap.com/about-fodmap-and-ibs/"},
  {stem: ["A man with diverticular disease asks if he must avoid nuts and seeds. The best answer is", "Um homem com doença diverticular pergunta se precisa evitar oleaginosas e sementes. A melhor resposta é"],
   opts: [["No: a high-fibre diet, including nuts and seeds, is recommended", "Não: recomenda-se dieta rica em fibras, incluindo oleaginosas e sementes"], ["Yes, they lodge in the pouches and cause diverticulitis", "Sim, elas entram nos divertículos e causam diverticulite"], ["Only if they are blended", "Só se forem batidas"], ["Avoid all fibre for life", "Evitar toda fibra para sempre"]], ans: 0,
   why: ["Evidence does not support avoiding nuts, seeds or popcorn; a high-fibre diet is recommended.", "As evidências não apoiam evitar oleaginosas, sementes ou pipoca; recomenda-se dieta rica em fibras."], src: "https://www.gesa.org.au/resources/clinical-practice-resources/"}
]
});
