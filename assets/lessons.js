// Lesson content per study area. Each fact is a recall card: q = prompt, a = answer, src = citation.
// Typical clinical ranges are entry-level teaching values: always check the local protocol named in src.
const LESSONS = {
1: {
  why: "Basic science shows up inside clinical questions: why a fasting patient makes ketones, why refeeding drops phosphate. Learn the purpose of each pathway, not every enzyme.",
  facts: [
    {q: "Where are most nutrients absorbed?", a: "Small intestine (mostly jejunum). Iron and calcium mainly in the duodenum; vitamin B12 and bile salts in the terminal ileum.", src: "https://pressbooks.oer.hawaii.edu/humannutrition2e22/chapter/2-the-digestive-system/"},
    {q: "Why does ileal resection put someone at risk of B12 deficiency?", a: "B12 bound to intrinsic factor is absorbed in the terminal ileum. Remove it and B12 (and bile salt) absorption falls.", src: "https://pressbooks.oer.hawaii.edu/humannutrition2e22/chapter/2-the-digestive-system/"},
    {q: "What does glycolysis produce from one glucose?", a: "2 pyruvate, a net 2 ATP and 2 NADH, in the cytoplasm, without oxygen.", src: "https://www.youtube.com/watch?v=FE2jfTXAJHg"},
    {q: "Fed state vs fasting state: which hormone leads each?", a: "Fed: insulin (stores glucose as glycogen and fat). Fasting: glucagon (glycogenolysis, then gluconeogenesis, then fat use and ketones).", src: "https://openstax.org/books/anatomy-and-physiology-2e/pages/24-5-metabolic-states-of-the-body"},
    {q: "When do ketone bodies rise?", a: "When carbohydrate is low and insulin is low (prolonged fasting, very low carb, uncontrolled type 1 diabetes). The liver turns acetyl-CoA from fat into ketones.", src: "https://openstax.org/books/anatomy-and-physiology/pages/24-3-lipid-metabolism"},
    {q: "What happens to the nitrogen when amino acids are used for energy?", a: "Deamination removes it as ammonia, which the liver converts to urea for the kidneys to excrete.", src: "https://openstax.org/books/anatomy-and-physiology-2e/pages/24-4-protein-metabolism"},
    {q: "Energy units: kcal to kJ?", a: "1 kcal = 4.184 kJ (about 4.2). Australian labels and guidelines use kJ.", src: "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/serve-sizes"}
  ],
  au: ["Australian food labels show energy in kJ first. Practise thinking in kJ: 8700 kJ is the reference 'average adult' on labels (about 2080 kcal)."],
  extra: []
},
2: {
  why: "The official sample MCQ asks which food group a diet history is short on. You need the serve sizes and serve numbers by heart.",
  facts: [
    {q: "Name the five food groups of the Australian Guide to Healthy Eating.", a: "Vegetables and legumes/beans; fruit; grain (cereal) foods, mostly wholegrain; lean meats, poultry, fish, eggs, tofu, nuts, seeds, legumes; milk, yoghurt, cheese and/or alternatives, mostly reduced fat.", src: "https://www.eatforhealth.gov.au/guidelines/australian-guide-healthy-eating"},
    {q: "One standard serve of vegetables?", a: "About 75 g (100-350 kJ), e.g. ½ cup cooked vegetables, 1 cup salad, ½ medium potato.", src: "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/serve-sizes"},
    {q: "One standard serve of fruit?", a: "About 150 g (350 kJ), e.g. 1 medium apple or banana, 2 small apricots, 1 cup diced fruit.", src: "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/serve-sizes"},
    {q: "One standard serve of grain foods?", a: "500 kJ, e.g. 1 slice bread (40 g), ½ cup cooked rice/pasta, ½ cup porridge, ⅔ cup wheat cereal flakes.", src: "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/serve-sizes"},
    {q: "One standard serve of the meat/alternatives group?", a: "500-600 kJ: 65 g cooked lean red meat, 80 g cooked poultry, 100 g cooked fish, 2 large eggs, 1 cup cooked legumes, 170 g tofu, 30 g nuts/seeds.", src: "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/serve-sizes"},
    {q: "One standard serve of dairy?", a: "500-600 kJ: 1 cup (250 mL) milk, 2 slices (40 g) hard cheese, ¾ cup (200 g) yoghurt, 1 cup calcium-fortified plant milk (≥100 mg Ca/100 mL).", src: "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/serve-sizes"},
    {q: "Daily serves for a woman aged 19-50?", a: "Veg 5, fruit 2, grains 6, meat/alternatives 2½, dairy 2½.", src: "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/recommended-number-serves-adults"},
    {q: "Daily serves for a man aged 19-50?", a: "Veg 6, fruit 2, grains 6, meat/alternatives 3, dairy 2½.", src: "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/recommended-number-serves-adults"},
    {q: "One serve of discretionary food?", a: "About 600 kJ, e.g. 2 scoops ice-cream, 1 can soft drink, 2-3 sweet biscuits.", src: "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/serve-sizes"},
    {q: "EAR vs RDI vs AI vs UL?", a: "EAR meets needs of half of healthy people (use to assess groups). RDI meets needs of 97-98% (target for individuals). AI used when no EAR can be set. UL is the highest intake unlikely to cause harm.", src: "https://www.eatforhealth.gov.au/nutrient-reference-values/introduction"},
    {q: "AMDR for adults (% energy)?", a: "Protein 15-25%, fat 20-35%, carbohydrate 45-65%.", src: "https://www.eatforhealth.gov.au/nutrient-reference-values/introduction"},
    {q: "NHMRC alcohol guideline for healthy adults?", a: "No more than 10 standard drinks a week and no more than 4 on any one day. Under 18, pregnant or breastfeeding: none. 1 standard drink = 10 g alcohol.", src: "https://www.nhmrc.gov.au/health-advice/alcohol"}
  ],
  au: ["The 2013 guidelines are still current. NHMRC expects draft revised guidelines for public consultation in late 2026 and the final version later. Check eatforhealth.gov.au before the exam.", "Brazil's guide classifies foods by processing (NOVA). Australia uses food groups, serves and 'discretionary foods'. Answer in Australian terms."],
  extra: [{title: "Australian Dietary Guidelines review – NHMRC", url: "https://www.nhmrc.gov.au/health-advice/nutrition/australian-dietary-guidelines-review", why: "Status of the new guidelines."}]
},
3: {
  why: "Task 1 of the oral exam is pure assessment and diagnosis. Many MCQs are 'what would you do first' or 'what is the priority' questions built on the Nutrition Care Process.",
  facts: [
    {q: "The four steps of the Nutrition Care Process?", a: "Nutrition assessment, nutrition diagnosis, nutrition intervention, nutrition monitoring and evaluation.", src: "https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview"},
    {q: "Assessment domains (ABCDE style)?", a: "Anthropometry, biochemistry, clinical (medical history, medications, signs), dietary (intake, history), plus environmental/social and client history.", src: "https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview/nutrition-assessment"},
    {q: "Structure of a PES statement?", a: "Problem related to Etiology as evidenced by Signs/Symptoms. E.g. 'Excessive carbohydrate intake related to frequent sugary drinks as evidenced by diet history of 1.5 L soft drink/day and HbA1c 8.5%'.", src: "https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview/nutrition-diagnosis"},
    {q: "24-hour recall: main strength and main limitation?", a: "Strength: quick, low burden, does not change behaviour. Limitation: one day is not usual intake and relies on memory; multiple pass method reduces missed foods.", src: "https://www.measurement-toolkit.org/diet/diet-decision-matrix"},
    {q: "Diet history vs food frequency questionnaire?", a: "Diet history (Burke) estimates usual intake in a clinical interview. FFQ ranks habitual intake for large groups; poor for exact individual amounts.", src: "https://www.measurement-toolkit.org/diet/diet-decision-matrix"},
    {q: "Typical entry-level estimates for energy, protein and fluid in adult inpatients?", a: "Energy about 25-35 kcal/kg (or Schofield × activity/stress), protein about 1.0-1.5 g/kg depending on illness, fluid about 30-35 mL/kg. Always adjust to condition and local protocol.", src: "https://www.health.qld.gov.au/__data/assets/pdf_file/0022/144175/est-req.pdf"},
    {q: "Good monitoring indicators?", a: "Ones that follow from the PES signs and symptoms: e.g. weight, intake, HbA1c, symptoms. Set a measurable target and a review date.", src: "https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview/nutrition-monitoring-and-evaluation"}
  ],
  au: ["Australian pathology reports use SI units: glucose mmol/L, cholesterol mmol/L, creatinine µmol/L, HbA1c in % and mmol/mol. Use the converter on the Brazil → Australia page."],
  extra: [{title: "National Competency Standards for Dietitians + Evidence Guide – DA", url: "https://dietitiansaustralia.org.au/working-dietetics/standards-and-scope/national-competency-standards-dietitians", why: "The exam is written against these standards."}]
},
4: {
  why: "The official case-based sample is a man newly diagnosed with type 2 diabetes. Expect diet-history analysis, GI, hypos, GDM and follow-up timing.",
  facts: [
    {q: "General HbA1c target for most adults with type 2 diabetes?", a: "≤ 7% (53 mmol/mol), individualised.", src: "https://www.diabetesaustralia.com.au/living-with-diabetes/healthy-eating/"},
    {q: "Hypoglycaemia threshold and first treatment?", a: "Blood glucose below 4.0 mmol/L. Give 15-20 g fast-acting carbohydrate (e.g. 6-7 jelly beans, 150 mL regular soft drink, ½ glass juice), recheck in 15 minutes, repeat if still < 4, then a longer-acting carbohydrate if the next meal is not due.", src: "https://baker.edu.au/health-hub/fact-sheets/hypoglycaemia-management"},
    {q: "GI cut-offs?", a: "Low ≤ 55, medium 56-69, high ≥ 70.", src: "https://baker.edu.au/health-hub/fact-sheets/carbohydrates-gi"},
    {q: "One carbohydrate exchange in Australia?", a: "About 15 g carbohydrate (e.g. 1 slice bread, ⅓ cup cooked rice).", src: "https://www.baker.edu.au/health-hub/fact-sheets/carbohydrate-counting-exchanges"},
    {q: "GDM diagnosis on a 75 g OGTT (24-28 weeks)?", a: "Any one of: fasting ≥ 5.1, 1 hour ≥ 10.0, 2 hours ≥ 8.5 mmol/L.", src: "https://www.baker.edu.au/health-hub/fact-sheets/gestational-diabetes"},
    {q: "First dietary priority for a new type 2 with high saturated fat diet history (official sample)?", a: "Other than energy, reduce saturated fat (cardiovascular risk is the main cause of death in diabetes). Follow-up typically one month later.", src: "https://dietitiansaustralia.org.au/media/394"},
    {q: "Why spread carbohydrate across the day?", a: "Matches insulin action (own or injected), reduces post-meal spikes and hypo risk, especially on sulphonylureas or insulin.", src: "https://www.diabetesaustralia.com.au/living-with-diabetes/healthy-eating/"}
  ],
  au: ["Brazil reports glucose in mg/dL. Divide by 18 to get mmol/L (126 mg/dL ≈ 7.0 mmol/L).", "Know Australian low-GI foods: traditional rolled oats, grainy breads (e.g. 'Burgen'-style soy-linseed), basmati or Doongara rice, legumes, pasta."],
  extra: [{title: "Diabetes fact sheets – Diabetes Australia", url: "https://www.diabetesaustralia.com.au/diabetes-fact-sheets/", why: "On the official MCQ resource list."}, {title: "Health Hub fact sheets – Baker Institute", url: "https://baker.edu.au/health-hub/fact-sheets", why: "On the official MCQ resource list."}]
},
5: {
  why: "Heart disease and weight are the most common outpatient cases. Know the eating pattern, fats, salt, and respectful weight goals.",
  facts: [
    {q: "Heart Foundation core message?", a: "A heart-healthy eating pattern: plenty of vegetables, fruit, wholegrains; healthy protein (fish, legumes, nuts, seeds, some poultry and eggs, limited red meat); unflavoured dairy; healthy fats and oils; herbs and spices instead of salt.", src: "https://www.heartfoundation.org.au/healthy-living/healthy-eating/heart-healthy-eating-pattern"},
    {q: "Best swap for saturated fat?", a: "Replace with unsaturated fats (olive, canola, nuts, avocado, oily fish), not refined carbohydrate. Avoid trans fats.", src: "https://www.heartfoundation.org.au/healthy-living/healthy-eating/fats-oils-and-heart-health"},
    {q: "Salt target for adults?", a: "Less than 5 g salt (about 2000 mg sodium) a day. Most comes from processed foods: bread, processed meats, sauces, takeaway.", src: "https://www.heartfoundation.org.au/healthy-living/healthy-eating/salt-and-heart-health"},
    {q: "Sodium vs salt conversion?", a: "Salt (g) = sodium (g) × 2.5. Low-sodium food on a label: < 120 mg/100 g.", src: "https://www.heartfoundation.org.au/healthy-living/healthy-eating/salt-and-heart-health"},
    {q: "Waist circumference risk (European-origin adults)?", a: "Increased risk: men ≥ 94 cm, women ≥ 80 cm. Substantially increased: men ≥ 102 cm, women ≥ 88 cm.", src: "https://www.ccm.health.qld.gov.au/management-of-diagnosed-conditions/overweight-and-obesity-adult"},
    {q: "Realistic first weight goal?", a: "5-10% of body weight improves blood pressure, glucose and lipids. Use person-first, non-stigmatising language ('person with obesity').", src: "https://www.ccm.health.qld.gov.au/management-of-diagnosed-conditions/overweight-and-obesity-adult"},
    {q: "Oily fish recommendation?", a: "2-3 serves a week (≈ 250-500 mg/day EPA+DHA).", src: "https://www.heartfoundation.org.au/healthy-living/healthy-eating/fats-oils-and-heart-health"}
  ],
  au: ["Cholesterol: Brazil mg/dL ÷ 38.67 = mmol/L. Triglycerides: mg/dL ÷ 88.57 = mmol/L.", "Health Star Rating (½ to 5 stars) is the front-of-pack label. It is voluntary and compares products within a category."],
  extra: [{title: "Health professional online learning – Heart Foundation", url: "https://www.heartfoundation.org.au/for-professionals/health-professional-online-learning", why: "On the official MCQ resource list; free CPD modules."}]
},
6: {
  why: "GI conditions are common in MCQs because the management is very different: strict lifelong (coeliac), individualised (IBD), stepwise trial (IBS).",
  facts: [
    {q: "Before coeliac testing, what must the patient do?", a: "Keep eating gluten. Testing on a gluten-free diet gives false negatives. Coeliac Australia: at least 4 slices of wheat bread (or equivalent) daily for about 6 weeks before testing.", src: "https://coeliac.org.au/learn/diagnosis/"},
    {q: "How is coeliac disease diagnosed?", a: "Blood tests (tTG-IgA with total IgA, ± deamidated gliadin) then small bowel biopsy to confirm. HLA-DQ2/DQ8 gene testing is useful to rule it out (negative = very unlikely).", src: "https://coeliac.org.au/learn/diagnosis/"},
    {q: "Are oats suitable on an Australian gluten-free diet?", a: "Coeliac Australia does not recommend oats: they can be contaminated and the oat protein avenin can trigger damage in some people. Only after medical review with biopsy.", src: "https://coeliac.org.au/live/gluten-free-diet/"},
    {q: "'Gluten free' on an Australian label means?", a: "No detectable gluten (stricter than the 20 ppm used in many countries), and no oats or malt.", src: "https://coeliac.org.au/live/gluten-free-diet/"},
    {q: "Three phases of the low FODMAP diet?", a: "1) Restriction for 2-6 weeks, 2) reintroduction (challenge each FODMAP group), 3) personalisation (long-term, least restrictive diet).", src: "https://www.monashfodmap.com/about-fodmap-and-ibs/"},
    {q: "Exclusive enteral nutrition (EEN) is first-line for?", a: "Inducing remission in paediatric Crohn's disease (usually 6-8 weeks).", src: "https://crohnsandcolitis.org.au/living-with-crohns-colitis/lifestyle/nutrition/"},
    {q: "Low-fibre (low-residue) diet in Crohn's: when?", a: "Only short-term for people with strictures/narrowing or during flares, as advised. Not routine for everyone with IBD.", src: "https://crohnsandcolitis.org.au/living-with-crohns-colitis/lifestyle/nutrition/frequently-asked-dietary-questions-in-ibd/"}
  ],
  au: [],
  extra: [{title: "Health professionals hub – Coeliac Australia", url: "https://coeliac.org.au/health-professionals-hub/", why: "On the official MCQ resource list."}, {title: "Crohn's disease treatment – CCA", url: "https://crohnsandcolitis.org.au/about-crohns-colitis/crohns-disease/crohns-disease-treatment/", why: "On the official MCQ resource list."}]
},
7: {
  why: "Kidney, liver, cancer and dysphagia questions test whether you know when restrictions are needed and when they cause harm.",
  facts: [
    {q: "Protein needs in dialysis vs non-dialysis CKD?", a: "Dialysis increases needs (about 1.0-1.2 g/kg/day) because protein is lost in dialysis. Pre-dialysis CKD stages 3-5: avoid high protein (about 0.75-1.0 g/kg), individualised.", src: "https://kidney.org.au/your-kidneys/living-with-kidney-disease/health-and-wellbeing/diet-nutrition/"},
    {q: "When are potassium and phosphate restricted in CKD?", a: "Only when blood results show they are high. Restrictions depend on stage, blood results and treatment, not the diagnosis alone.", src: "https://kidney.org.au/your-kidneys/living-with-kidney-disease/health-and-wellbeing/diet-nutrition/"},
    {q: "Key nutrition advice in cirrhosis?", a: "Do not restrict protein (about 1.2-1.5 g/kg). Eat small frequent meals and a late-evening carbohydrate snack to limit overnight fasting and muscle loss. Limit sodium if ascites.", src: "https://www.health.qld.gov.au/__data/assets/pdf_file/0031/145948/gastro-cldlong.pdf"},
    {q: "IDDSI levels 0-7?", a: "0 thin, 1 slightly thick, 2 mildly thick, 3 moderately thick / liquidised, 4 extremely thick / pureed, 5 minced and moist, 6 soft and bite-sized, 7 regular (and easy to chew).", src: "https://www.iddsi.org/standards/framework"},
    {q: "Who assesses swallowing and prescribes the texture?", a: "The speech pathologist. The dietitian makes sure the modified diet still meets nutrition and fluid needs.", src: "https://www.iddsi.org/standards/framework"},
    {q: "Cancer patient with poor appetite: first approach?", a: "Small frequent high-energy high-protein meals and snacks, manage symptoms (nausea, taste change, mouth sores), oral supplements if intake stays low. Weight loss is not a goal during treatment.", src: "https://connect.cancer.org.au/cancer-information/living-and-coping/nutrition-for-people-with-cancer"}
  ],
  au: ["Creatinine in Australia is µmol/L. mg/dL × 88.4 = µmol/L."],
  extra: []
},
8: {
  why: "Malnutrition screening, assessment and refeeding are core entry-level hospital skills and appear in many case questions.",
  facts: [
    {q: "Malnutrition Screening Tool (MST): what score means at risk?", a: "MST score ≥ 2 (from unintentional weight loss and reduced appetite questions). Refer for full assessment.", src: "https://www.health.qld.gov.au/nutrition/patients/subjective-global-assessment-training-videos"},
    {q: "SGA ratings?", a: "A well nourished, B mild/moderate (suspected) malnutrition, C severely malnourished. Based on weight history, intake, GI symptoms, function and physical exam (fat and muscle loss, oedema).", src: "https://www.health.qld.gov.au/nutrition/patients/subjective-global-assessment-training-videos"},
    {q: "Food-first approach?", a: "Fortify usual foods (milk powder in milk, extra butter, cheese, sauces), small frequent meals and nourishing drinks before oral nutrition supplements.", src: "https://www.health.qld.gov.au/__data/assets/pdf_file/0021/145830/nemo-hphe.pdf"},
    {q: "Electrolytes that fall in refeeding syndrome?", a: "Phosphate (hallmark), potassium and magnesium, plus thiamine deficiency and fluid/sodium retention.", src: "https://www.auspen.org.au/resources-3/2025/5/28/-auspen-consensus-statements-on-refeeding-syndrome"},
    {q: "Classic NICE high-risk criteria for refeeding?", a: "One of: BMI < 16, > 15% unintentional weight loss in 3-6 months, little/no intake > 10 days, low K/PO4/Mg before feeding. Or two of: BMI < 18.5, > 10% weight loss, little intake > 5 days, alcohol misuse or some drugs (insulin, chemo, antacids, diuretics).", src: "https://www.nice.org.uk/guidance/cg32/chapter/Recommendations"},
    {q: "Starting feed and vitamins for high refeeding risk?", a: "Start low (NICE: max 10 kcal/kg/day, 5 if extreme), increase slowly over 4-7 days, give thiamine before and during feeding, monitor and replace electrolytes. Check the 2025 AuSPEN consensus for Australian practice.", src: "https://www.auspen.org.au/resources-3/2025/5/28/-auspen-consensus-statements-on-refeeding-syndrome"},
    {q: "Enteral vs parenteral: which first?", a: "If the gut works, use it (enteral). Parenteral only when the GI tract cannot be used or is not enough.", src: "https://www.nice.org.uk/guidance/cg32/chapter/Recommendations"}
  ],
  au: [],
  extra: []
},
9: {
  why: "Paediatric questions focus on infant feeding, starting solids, growth charts and when to refer.",
  facts: [
    {q: "When to start solids?", a: "Around 6 months, when the infant shows signs of readiness, but not before 4 months. Continue breastfeeding.", src: "https://www.rch.org.au/kidsinfo/fact_sheets/Nutrition_babies_toddlers/"},
    {q: "First foods should be rich in?", a: "Iron (iron-fortified cereal, meat, poultry, fish, tofu, legumes), because infant iron stores fall around 6 months.", src: "https://www.rch.org.au/kidsinfo/fact_sheets/Nutrition_babies_toddlers/"},
    {q: "Cow's milk as a main drink: from when?", a: "From 12 months. Small amounts in food from around 6 months is fine. No honey before 12 months (botulism).", src: "https://www.rch.org.au/kidsinfo/fact_sheets/Nutrition_babies_toddlers/"},
    {q: "Which growth charts in Australia?", a: "WHO charts for 0-2 years and CDC charts for 2-18 years (RCH guidance).", src: "https://www.rch.org.au/childgrowth/about_child_growth/Growth_charts/"},
    {q: "What matters more: one weight or the trend?", a: "The trend across serial measurements. Crossing two major centile lines is a concern that needs assessment.", src: "https://www.rch.org.au/clinicalguide/guideline_index/Slow_weight_gain/"},
    {q: "Toddler drinking 1 L+ of cow's milk a day: main risk?", a: "Iron deficiency anaemia (milk displaces iron-rich food and is low in iron). Advise about 500 mL/day.", src: "https://www.rch.org.au/kidsinfo/fact_sheets/Nutrition_babies_toddlers/"}
  ],
  au: [],
  extra: [{title: "Nutrition resources – Royal Children's Hospital", url: "https://www.rch.org.au/nutrition/resources/", why: "On the official MCQ resource list."}]
},
10: {
  why: "Pregnancy questions combine supplements, food safety (listeria, mercury) and weight gain.",
  facts: [
    {q: "Folic acid supplement in pregnancy?", a: "400 µg/day from at least 1 month before conception and for the first 3 months. Higher dose (5 mg) if high risk (e.g. previous neural tube defect, diabetes, obesity, some anticonvulsants).", src: "https://www.pregnancybirthbaby.org.au/vitamins-and-supplements-during-pregnancy"},
    {q: "Iodine supplement in pregnancy and breastfeeding?", a: "150 µg/day (NHMRC), unless thyroid disease – check with a doctor.", src: "https://www.pregnancybirthbaby.org.au/vitamins-and-supplements-during-pregnancy"},
    {q: "Australian food fortification since 2009?", a: "Mandatory folic acid in bread-making wheat flour and iodised salt in bread (not organic bread).", src: "https://www.pregnancybirthbaby.org.au/vitamins-and-supplements-during-pregnancy"},
    {q: "Foods to avoid in pregnancy (listeria)?", a: "Soft/semi-soft cheeses (brie, camembert, ricotta, feta unless cooked), deli meats, pâté, pre-cut salads, raw or smoked seafood, sushi, soft-serve ice-cream, unpasteurised milk.", src: "https://www.pregnancybirthbaby.org.au/pregnancy/nutrition-and-lifestyle/guide-to-food-and-drink-during-pregnancy"},
    {q: "Mercury guidance for fish in pregnancy (FSANZ)?", a: "Shark (flake), billfish (swordfish, marlin): max 1 serve a fortnight and no other fish that fortnight. Orange roughy or catfish: 1 serve a week and no other fish that week. Other fish 2-3 serves a week.", src: "https://www.pregnancybirthbaby.org.au/pregnancy/nutrition-and-lifestyle/guide-to-food-and-drink-during-pregnancy"},
    {q: "Iron RDI in pregnancy?", a: "27 mg/day (vs 18 mg for women 19-50).", src: "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/iron"},
    {q: "Recommended weight gain, healthy BMI pre-pregnancy?", a: "About 11.5-16 kg (BMI < 18.5: 12.5-18; 25-29.9: 7-11.5; ≥ 30: 5-9).", src: "https://www.pregnancybirthbaby.org.au/pregnancy/nutrition-and-lifestyle/guide-to-food-and-drink-during-pregnancy"}
  ],
  au: [],
  extra: []
},
11: {
  why: "The official extended-matching sample asks which nutrient is of most concern for a vegan child, a teenager with heavy periods and a woman trying to conceive.",
  facts: [
    {q: "Nutrients to watch on a vegan diet?", a: "Vitamin B12 (most important, needs fortified food or supplement), iron, zinc, calcium, iodine, omega-3 (long-chain), vitamin D, and protein quality in children.", src: "https://www.betterhealth.vic.gov.au/health/healthyliving/vegetarian-and-vegan-eating"},
    {q: "Iron needs for vegetarians?", a: "About 1.8 × the RDI, because non-haem iron is less well absorbed.", src: "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/iron"},
    {q: "What improves non-haem iron absorption? What reduces it?", a: "Improves: vitamin C, meat/fish/poultry in the same meal. Reduces: tea, coffee, calcium, phytates (large amounts of bran).", src: "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/iron"},
    {q: "Iron RDI adults?", a: "Men 8 mg, women 19-50 18 mg, women 51+ 8 mg, pregnancy 27 mg.", src: "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/iron"},
    {q: "Calcium RDI adults?", a: "1000 mg/day; women 51+ and men 71+ 1300 mg/day. Teens 12-18: 1300 mg.", src: "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/calcium"},
    {q: "B12 RDI adults and best vegan sources?", a: "2.4 µg/day. Fortified plant milks, fortified nutritional yeast or a supplement. Plant foods like spirulina are not reliable sources.", src: "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/vitamin-b12"}
  ],
  au: ["Plant milks are not all fortified. On the label look for ≥ 100 mg calcium per 100 mL and added B12."],
  extra: []
},
12: {
  why: "Allergy questions test the difference between allergy and intolerance, current ASCIA prevention advice and Australian label law.",
  facts: [
    {q: "Allergy vs intolerance?", a: "Allergy is an immune reaction (IgE-mediated can cause anaphylaxis) – strict avoidance. Intolerance (e.g. lactose) is non-immune – often a threshold amount is tolerated.", src: "https://www.allergy.org.au/patients/food-allergy/ascia-dietary-avoidance-for-food-allergy"},
    {q: "ASCIA advice for introducing common allergens to infants?", a: "Introduce peanut and well-cooked egg (and other allergens) in the first year when starting solids, around 6 months but not before 4 months, and keep giving them regularly (e.g. twice a week). Delaying increases risk. Check the 2026 ASCIA update.", src: "https://allergy.org.au/hp/papers/infant-feeding-and-allergy-prevention/"},
    {q: "Mandatory allergens on Australian labels (PEAL)?", a: "Peanut, tree nuts (named: almond, Brazil nut, cashew, hazelnut, macadamia, pecan, pine nut, pistachio, walnut), egg, milk, fish, crustacean, mollusc, sesame, soy, wheat, lupin, gluten (cereals), and sulphites ≥ 10 mg/kg. Bold in the ingredient list plus a 'Contains' summary.", src: "https://www.foodstandards.gov.au/consumer/labelling/allergen-labelling"},
    {q: "Is 'may contain' (precautionary labelling) regulated?", a: "No, it is voluntary. It indicates cross-contact risk; advice depends on the person's allergy and their specialist.", src: "https://www.foodstandards.gov.au/consumer/labelling/allergen-labelling"},
    {q: "Dietitian's main role in cow's milk allergy in a child?", a: "Keep the diet nutritionally adequate on avoidance: calcium, protein, energy, iodine, vitamin B12 – choose a suitable formula or fortified alternative. Not rice milk under 4.5 years.", src: "https://www.allergy.org.au/patients/food-allergy/ascia-dietary-avoidance-for-food-allergy"}
  ],
  au: ["Lupin is a mandatory allergen in Australia – unusual in other countries."],
  extra: []
},
13: {
  why: "Aged care is a large employer of new dietitians. Know screening tools, malnutrition risks and the strengthened Aged Care Quality Standards.",
  facts: [
    {q: "MNA-SF score bands?", a: "12-14 normal, 8-11 at risk of malnutrition, 0-7 malnourished.", src: "https://www.agedcarequality.gov.au/quality-standards/guide-completing-mini-nutritional-assessment-short-form"},
    {q: "Which Aged Care Quality Standard covers food and nutrition?", a: "Standard 6 (Food and nutrition) of the strengthened standards: nutrition, hydration, choice and the dining experience.", src: "https://www.health.gov.au/resources/videos/new-aged-care-act-strengthened-aged-care-quality-standards-standard-6-the-food-and-nutrition"},
    {q: "Older person losing weight: should you prescribe a weight-loss or 'diabetic' diet?", a: "Usually no. Liberalise restrictive diets, focus on enjoyable energy- and protein-dense food, mealtime help, oral health, mood and swallowing.", src: "https://www.agedcarequality.gov.au/providers/food-nutrition-dining/food-nutrition-dining-resources-providers"},
    {q: "Protein needs in older adults?", a: "Higher than younger adults: about 1.0-1.2 g/kg/day for healthy older adults, more if unwell or malnourished, to limit sarcopenia.", src: "https://www.agedcarequality.gov.au/providers/food-nutrition-dining/food-nutrition-dining-resources-providers"},
    {q: "Why are older people at risk of dehydration?", a: "Reduced thirst, fear of incontinence, needing help to drink, cognitive impairment, diuretics.", src: "https://www.agedcarequality.gov.au/providers/food-nutrition-dining/food-nutrition-dining-resources-providers"}
  ],
  au: [],
  extra: [{title: "Food, nutrition and dining information – Aged Care Commission", url: "https://www.agedcarequality.gov.au/providers/food-nutrition-dining-information-providers", why: "On the official MCQ resource list."}, {title: "Nutrition and food quality standards for adults in Vic PSRACS", url: "https://www.health.vic.gov.au/sites/default/files/2022-08/nutrition-food-quality-standards-for-adults-vic-psracs-full-doc-pdf.PDF", why: "On the official MCQ resource list; detailed menu standards."}]
},
14: {
  why: "Food service is often weak for overseas dietitians. The official sample asks which setting suits a one-week menu cycle.",
  facts: [
    {q: "Which setting suits a short (one-week) menu cycle?", a: "Short-stay settings such as acute hospitals, where patients stay only a few days. Long-stay settings (aged care, childcare) need longer cycles (e.g. 3-4 weeks) and seasonal menus.", src: "https://dietitiansaustralia.org.au/media/394"},
    {q: "Cook-fresh vs cook-chill?", a: "Cook-fresh: cooked and served the same day. Cook-chill: cooked, rapidly chilled, stored (up to about 5 days) and rethermalised. Cook-freeze stores longer.", src: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9796490/"},
    {q: "Centralised vs decentralised plating?", a: "Centralised: meals plated in the main kitchen (consistent portions, less food at ward). Decentralised: bulk food sent to wards and plated there (more choice, warmer food, more staff at ward).", src: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9796490/"},
    {q: "How do you assess a menu?", a: "Check it against the setting's nutrition standard (serves, energy, protein), variety, choice, texture-modified and therapeutic options, cultural needs, cost and food safety.", src: "https://aci.health.nsw.gov.au/projects/nutrition-standards"},
    {q: "Long day care: what share of daily needs?", a: "Victorian HEAS guidelines: children in care for 8 hours should get at least 50% of their daily needs (e.g. a main meal and two snacks).", src: "https://heas.health.vic.gov.au/government-policies-and-guidelines/menu-planning-guidelines-for-long-day-care/"}
  ],
  au: [],
  extra: [{title: "Healthy Eating Advisory Service (HEAS)", url: "https://heas.health.vic.gov.au/", why: "On the official MCQ resource list."}]
},
15: {
  why: "Food safety and labelling questions are pure Australian rules. They are easy marks once learnt.",
  facts: [
    {q: "Temperature danger zone?", a: "Between 5 °C and 60 °C. Keep cold food at 5 °C or below and hot food at 60 °C or above.", src: "https://www.foodstandards.gov.au/business/food-safety/2-hour-4-hour-rule"},
    {q: "The 2-hour / 4-hour rule?", a: "Ready-to-eat potentially hazardous food between 5-60 °C: under 2 hours total – use or refrigerate; 2-4 hours – use, do not refrigerate; over 4 hours – throw out.", src: "https://www.foodstandards.gov.au/business/food-safety/2-hour-4-hour-rule"},
    {q: "Cooling rule for cooked food?", a: "From 60 °C to 21 °C within 2 hours, then from 21 °C to 5 °C within a further 4 hours.", src: "https://www.foodstandards.gov.au/business/food-safety/cooling-and-reheating-food"},
    {q: "Seven HACCP principles?", a: "Hazard analysis; identify critical control points; set critical limits; monitor; corrective action; verification; record keeping.", src: "https://www.foodauthority.nsw.gov.au/industry/audits-and-compliance/food-safety-programs-haccp"},
    {q: "Nutrition Information Panel shows?", a: "Per serve and per 100 g (or 100 mL): energy (kJ), protein, fat, saturated fat, carbohydrate, sugars, sodium. Use per 100 g to compare products.", src: "https://baker.edu.au/health-hub/fact-sheets/label-reading"},
    {q: "How are ingredients listed?", a: "In descending order by ingoing weight, with the percentage of characterising ingredients (e.g. '% strawberries') shown.", src: "https://www.foodstandards.gov.au/consumer/labelling/ingredients"},
    {q: "Who writes Australia's food standards?", a: "Food Standards Australia New Zealand (FSANZ) develops the Food Standards Code; states and territories enforce it.", src: "https://www.foodstandards.gov.au/food-standards-code"}
  ],
  au: [],
  extra: []
},
16: {
  why: "Public health questions ask which intervention will work best for a group. The official sample prefers a targeted, participatory program over handing out information.",
  facts: [
    {q: "Ottawa Charter five action areas?", a: "Build healthy public policy; create supportive environments; strengthen community action; develop personal skills; reorient health services.", src: "https://www.aihw.gov.au/reports/australias-health/health-promotion"},
    {q: "Which interventions tend to work best?", a: "Targeted, participatory, multi-strategy programs that change environments (e.g. after-school program for the target group) beat passive information (leaflets, radio).", src: "https://dietitiansaustralia.org.au/media/394"},
    {q: "Process, impact and outcome evaluation?", a: "Process: was it delivered as planned (reach, attendance). Impact: short-term change (knowledge, behaviour). Outcome: long-term health change (obesity rates).", src: "https://www.health.nsw.gov.au/research/Pages/planning-evaluations-guide.aspx"},
    {q: "Program logic links?", a: "Needs → inputs → activities → outputs → short/medium/long-term outcomes.", src: "https://www.health.nsw.gov.au/research/Pages/developing-program-logic-guide.aspx"},
    {q: "Groups at higher risk of food insecurity in Australia?", a: "Low-income households, Aboriginal and Torres Strait Islander people (especially remote), people experiencing homelessness, some migrants and refugees, single-parent families.", src: "https://www.aihw.gov.au/reports/australias-health/social-determinants-of-health"},
    {q: "SMART objective?", a: "Specific, Measurable, Achievable, Relevant, Time-bound.", src: "https://www.health.nsw.gov.au/research/Pages/planning-evaluations-guide.aspx"}
  ],
  au: [],
  extra: [{title: "Public health – NHMRC", url: "https://www.nhmrc.gov.au/health-advice/public-health", why: "On the official MCQ resource list."}]
},
17: {
  why: "Expect questions on study design, bias and interpreting results. Learn which design answers which question.",
  facts: [
    {q: "Best design to test whether a diet causes an outcome?", a: "Randomised controlled trial (systematic review of RCTs is highest, NHMRC level I).", src: "https://www.cebm.ox.ac.uk/resources/ebm-tools/glossary"},
    {q: "Cohort vs case-control?", a: "Cohort follows exposed and unexposed people forward to see who gets the outcome (gives incidence, relative risk). Case-control starts with people who have the outcome and looks back at exposure (good for rare diseases, gives odds ratio).", src: "https://www.cebm.ox.ac.uk/resources/ebm-tools/glossary"},
    {q: "What is confounding?", a: "A third factor linked to both exposure and outcome that distorts the association (e.g. smoking in coffee and heart disease studies).", src: "https://www.cebm.ox.ac.uk/resources/ebm-tools/glossary"},
    {q: "How to read a 95% confidence interval for a relative risk?", a: "If the interval includes 1.0, the result is not statistically significant. Narrow interval = more precise.", src: "https://www.cebm.ox.ac.uk/resources/ebm-tools/glossary"},
    {q: "Sensitivity vs specificity?", a: "Sensitivity: proportion of people with the condition the test correctly finds (screening tools need this high). Specificity: proportion without it correctly ruled out.", src: "https://www.cebm.ox.ac.uk/resources/ebm-tools/glossary"},
    {q: "Cross-sectional study shows?", a: "Prevalence at one time point; it cannot show cause because exposure and outcome are measured together.", src: "https://www.cebm.ox.ac.uk/resources/ebm-tools/glossary"}
  ],
  au: [],
  extra: [{title: "Guideline development – NHMRC", url: "https://www.nhmrc.gov.au/research-policy/guideline-development", why: "On the official MCQ resource list."}]
},
18: {
  why: "This is where Brazilian training differs most. Know how dietitians are funded and regulated in Australia and how to give culturally safe care.",
  facts: [
    {q: "Are dietitians registered with AHPRA?", a: "No. Dietetics is self-regulated. Dietitians Australia runs the Accredited Practising Dietitian (APD) credential, which Medicare, DVA, NDIS and private health insurers recognise.", src: "https://dietitiansaustralia.org.au/working-dietetics/standards-and-scope/code-conduct-dietitians-and-nutritionists"},
    {q: "How does a patient get Medicare-subsidised dietitian visits (from 1 July 2025)?", a: "A GP Chronic Condition Management Plan (GPCCMP, replaced GPMP/TCA) plus a GP referral: up to 5 allied health services per calendar year, shared across all allied health (10 for Aboriginal and Torres Strait Islander people under separate items). Verify on MBS Online.", src: "https://www.health.gov.au/about-us/the-australian-health-system"},
    {q: "Four roles of the National Competency Standards (2021)?", a: "1) Practising professionally, 2) positively influencing the health of individuals, groups and populations, 3) applying critical thinking and integrating evidence into practice, 4) collaborating with clients and stakeholders. 55 criteria in total.", src: "https://dietitiansaustralia.org.au/working-dietetics/standards-and-scope/national-competency-standards-dietitians"},
    {q: "Cultural safety means?", a: "The person receiving care decides whether care is culturally safe. The clinician reflects on their own culture, power and assumptions; it goes beyond awareness.", src: "https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/aboriginal-and-torres-strait-islander-cultural-awareness"},
    {q: "Respectful terms?", a: "'Aboriginal and Torres Strait Islander people' or 'First Nations people' (ask the person's preference). Avoid acronyms like 'ATSI' in speech and documents.", src: "https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/aboriginal-and-torres-strait-islander-cultural-awareness"},
    {q: "When must you use an interpreter?", a: "When the client has limited English: use a professional interpreter (TIS National is free for Medicare-funded private consults), not family members, especially children.", src: "https://www.health.gov.au/about-us/the-australian-health-system"},
    {q: "Required before applying for DSR?", a: "Complete the Aboriginal and Torres Strait Islander Cultural Awareness reading and online assessment.", src: "https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/australian-cultural-awareness-assessment"}
  ],
  au: ["Other funders to know: NDIS (disability), DVA (veterans), private health insurance 'extras', Eating Disorder Treatment Plans (up to 20 dietetic services a year).", "Brazilian nutritionists register with the CRN council. In Australia the closest thing is the APD credential plus the Code of Conduct."],
  extra: [{title: "Aboriginal and Torres Strait Islander health – NHMRC", url: "https://www.nhmrc.gov.au/health-advice/aboriginal-and-torres-strait-islander-health", why: "On the official MCQ resource list."}, {title: "MBS Online", url: "https://www.mbsonline.gov.au/", why: "Official source for Medicare item rules."}]
},
19: {
  why: "The oral exam is three role plays you must pass all of. Practise out loud with a timer using the Oral exam page.",
  facts: [
    {q: "Oral exam structure?", a: "120 minutes on Zoom. 30 minutes reading time, then Task 1 assessment/diagnosis (20 min), Task 2 education and counselling (30 min, assume you see them again in a month), Task 3 interprofessional phone call (10 min). Must pass all three.", src: "https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/oral-exam"},
    {q: "MCQ exam structure?", a: "Online, 120 multiple-choice questions in 150 minutes. Formats: stand-alone, case-based and extended matching. Pass mark varies by paper. Up to 3 attempts; pass MCQ and oral within 3 years.", src: "https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/written-mcq-exam-and-sample-exam-paper"},
    {q: "OARS in motivational interviewing?", a: "Open questions, Affirmations, Reflective listening, Summaries.", src: "https://www.racgp.org.au/afp/2012/september/motivational-interviewing-techniques"},
    {q: "Teach-back?", a: "Ask the client to explain in their own words what they will do ('So I know I explained it well, can you tell me...'). It checks your explanation, not their intelligence.", src: "https://www.seslhd.health.nsw.gov.au/teach-back"},
    {q: "ISBAR for Task 3 phone calls?", a: "Identify (yourself and the patient), Situation, Background, Assessment, Recommendation/Request. Finish by confirming the plan and who does what.", src: "https://dietitiansaustralia.org.au/media/1328"},
    {q: "Stages of change?", a: "Precontemplation, contemplation, preparation, action, maintenance (and relapse). Match the conversation to the stage.", src: "https://www.racgp.org.au/afp/2012/september/motivational-interviewing-techniques"}
  ],
  au: ["Use plain Australian English with clients: 'bub' and 'arvo' are not needed, but know food words like capsicum, zucchini, rockmelon, lollies, chips (crisps and fries), biscuits (cookies), Weet-Bix, Vegemite, Milo."],
  extra: [{title: "DSR quiz – Dietitians Australia (paid)", url: "https://member.dietitiansaustralia.org.au/Portal/Portal/Store/Item_Detail.aspx?iProductCode=25DSRQUIZ&Category=TOPCLASS", why: "Official practice quiz listed in the MCQ resource list."}]
}
};
