// Generated from Thaynar's study planner spreadsheet (links checked 28 Sep 2026).
const SHEET_TOPICS = [
 {
  "id": 1,
  "area": "Science and assessment",
  "title": "Core nutrition science",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Digestion and absorption",
    "url": "https://pressbooks.oer.hawaii.edu/humannutrition2e22/chapter/2-the-digestive-system/",
    "title": "The digestive system — University of Hawai‘i",
    "format": "Illustrated reading",
    "focus": "Follow food through the gut and identify where nutrients are absorbed. US teaching resource; use Australian NRVs for requirements.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Glycolysis",
    "url": "https://www.youtube.com/watch?v=FE2jfTXAJHg",
    "title": "Overview of glycolysis — Khan Academy",
    "format": "Video",
    "focus": "Understand glucose to pyruvate, ATP and NADH. Start with the overall purpose.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Krebs / citric acid cycle",
    "url": "https://www.youtube.com/watch?v=juM2ROSLWfw",
    "title": "Krebs cycle — Khan Academy",
    "format": "Video",
    "focus": "Connect acetyl-CoA, the cycle and energy carriers to the next stage.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Electron transport and ATP",
    "url": "https://www.khanacademy.org/science/biology/cellular-respiration/oxidative-phosphorylation/a/oxidative-phosphorylation-etc",
    "title": "Oxidative phosphorylation — Khan Academy",
    "format": "Illustrated reading",
    "focus": "Focus on the electron transport chain, proton gradient and ATP synthase.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Glycogen and gluconeogenesis",
    "url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/24-2-carbohydrate-metabolism",
    "title": "Carbohydrate metabolism — OpenStax",
    "format": "Textbook chapter",
    "focus": "Review storage, breakdown and synthesis of glucose. Use for physiology revision.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Fat metabolism",
    "url": "https://openstax.org/books/anatomy-and-physiology/pages/24-3-lipid-metabolism",
    "title": "Lipid metabolism — OpenStax",
    "format": "Textbook chapter",
    "focus": "Revise triglycerides, fatty-acid breakdown and ketone production.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Amino acids and nitrogen",
    "url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/24-4-protein-metabolism",
    "title": "Protein metabolism — OpenStax",
    "format": "Textbook chapter",
    "focus": "Review amino-acid use, deamination and nitrogen disposal.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Fed and fasting states",
    "url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/24-5-metabolic-states-of-the-body",
    "title": "Metabolic states of the body — OpenStax",
    "format": "Textbook chapter",
    "focus": "Compare the roles of insulin, stored fuel and fasting metabolism.",
    "access": "Free"
   }
  ],
  "focus": "Digestion, metabolism, carbohydrate, fat and protein pathways. Refresh the concepts that feel rusty.",
  "selfCheck": "Explain what happens to carbohydrate after a meal and during fasting."
 },
 {
  "id": 2,
  "area": "Science and assessment",
  "title": "Australian Dietary Guidelines and NRVs",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Australian healthy eating",
    "url": "https://www.eatforhealth.gov.au/guidelines/guidelines",
    "title": "The Australian guidelines — Eat for Health",
    "format": "Guidelines + PDFs",
    "focus": "Begin with the summary, then use the educator guide for detail.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Five food groups",
    "url": "https://www.eatforhealth.gov.au/guidelines/australian-guide-healthy-eating",
    "title": "Australian Guide to Healthy Eating — Eat for Health",
    "format": "Visual guide",
    "focus": "Learn the food groups and how the visual guide is used with clients.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Standard serves",
    "url": "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/serve-sizes",
    "title": "Serve sizes — Eat for Health",
    "format": "Illustrated reference",
    "focus": "Distinguish a standard serve from the portion someone actually eats.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Serves by age and life stage",
    "url": "https://www.eatforhealth.gov.au/food-essentials/how-much-do-we-need-each-day/recommended-number-serves-adults",
    "title": "Recommended serves for adults — Eat for Health",
    "format": "Reference table",
    "focus": "Compare adults, older adults, pregnancy and breastfeeding.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "EAR, RDI, AI and UL",
    "url": "https://www.eatforhealth.gov.au/nutrient-reference-values/introduction",
    "title": "Introduction to NRVs — Eat for Health",
    "format": "Reading",
    "focus": "Understand which reference value answers which kind of question.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Individual nutrient requirements",
    "url": "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients-dietary-energy-calculator",
    "title": "Nutrients and energy calculator — Eat for Health",
    "format": "Interactive reference",
    "focus": "Practise selecting age and life stage. Use published values, not draft proposals.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Alcohol recommendations",
    "url": "https://www.nhmrc.gov.au/health-advice/alcohol",
    "title": "Australian alcohol guidance — NHMRC",
    "format": "Guideline summary",
    "focus": "Review Australian guidance and differences for pregnancy and younger people.",
    "access": "Free"
   }
  ],
  "focus": "Five food groups, standard serves, life stages and Australian nutrient reference values.",
  "selfCheck": "Compare one day of food with Australian guidance and explain two useful changes."
 },
 {
  "id": 3,
  "area": "Science and assessment",
  "title": "Nutrition assessment and the Nutrition Care Process",
  "resources": [
   {
    "route": "Start 1",
    "learn": "The four-step care process",
    "url": "https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview",
    "title": "Nutrition Care Process overview — Academy of Nutrition and Dietetics",
    "format": "Reading",
    "focus": "Connect assessment, diagnosis, intervention and monitoring/evaluation.",
    "access": "Free overview"
   },
   {
    "route": "Start 2",
    "learn": "A dietary recall in practice",
    "url": "https://www.measurement-toolkit.org/diet/videos/diet-24-hour-dietary-recall",
    "title": "24-hour diet recall — MRC DAPA Toolkit",
    "format": "Video demonstration",
    "focus": "Watch the questioning and prompts, then practise with a partner.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "PES statements",
    "url": "https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview/nutrition-diagnosis",
    "title": "Nutrition diagnosis — Academy of Nutrition and Dietetics",
    "format": "Reading",
    "focus": "Link the nutrition problem to its cause and supporting evidence.",
    "access": "Free overview"
   },
   {
    "route": "If needed",
    "learn": "Diet-assessment methods",
    "url": "https://www.measurement-toolkit.org/diet/diet-decision-matrix",
    "title": "Dietary assessment decision matrix — MRC DAPA Toolkit",
    "format": "Comparison tool",
    "focus": "Choose between recall, diaries, FFQs and other methods; compare limitations.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Clinical nutrition assessment",
    "url": "https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview/nutrition-assessment",
    "title": "Nutrition assessment — Academy of Nutrition and Dietetics",
    "format": "Reading",
    "focus": "Review food history, clinical findings, measurements and relevant investigations.",
    "access": "Free overview"
   },
   {
    "route": "If needed",
    "learn": "Monitoring and evaluation",
    "url": "https://www.eatrightpro.org/practice/nutrition-care-process/ncp-overview/nutrition-monitoring-and-evaluation",
    "title": "Monitoring and evaluation — Academy of Nutrition and Dietetics",
    "format": "Reading",
    "focus": "Choose indicators that follow logically from the nutrition diagnosis and intervention.",
    "access": "Free overview"
   },
   {
    "route": "If needed",
    "learn": "Estimating clinical requirements",
    "url": "https://www.health.qld.gov.au/__data/assets/pdf_file/0022/144175/est-req.pdf",
    "title": "Estimating energy, protein and fluid needs — Queensland Health NEMO",
    "format": "Professional PDF",
    "focus": "Review estimation methods and their limitations in different clinical settings.",
    "access": "Free"
   }
  ],
  "focus": "Dietary assessment, clinical information, nutrition diagnosis, intervention and review.",
  "selfCheck": "Write a brief assessment, one PES statement and two measurable follow-up outcomes."
 },
 {
  "id": 4,
  "area": "Clinical nutrition",
  "title": "Diabetes",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Diabetes foundations",
    "url": "https://www.baker.edu.au/health-hub/fact-sheets/understanding-diabetes",
    "title": "Understanding diabetes — Baker Institute",
    "format": "Fact sheet",
    "focus": "Refresh glucose regulation and differences between common diabetes types.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Carbohydrates and GI",
    "url": "https://baker.edu.au/health-hub/fact-sheets/carbohydrates-gi",
    "title": "Carbohydrates and glycaemic index — Baker Institute",
    "format": "Fact sheet",
    "focus": "Identify carbohydrate foods and explain realistic lower-GI swaps.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Carbohydrate counting",
    "url": "https://www.baker.edu.au/health-hub/fact-sheets/carbohydrate-counting-exchanges",
    "title": "Carbohydrate counting in exchanges — Baker Institute",
    "format": "Practical guide",
    "focus": "Practise identifying and comparing carbohydrate amounts in meals.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Low blood glucose",
    "url": "https://baker.edu.au/health-hub/fact-sheets/hypoglycaemia-management",
    "title": "Hypoglycaemia — Baker Institute",
    "format": "Fact sheet",
    "focus": "Review recognition, treatment principles and prevention.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Gestational diabetes",
    "url": "https://www.baker.edu.au/health-hub/fact-sheets/gestational-diabetes",
    "title": "Gestational diabetes — Baker Institute",
    "format": "Fact sheet",
    "focus": "Connect food choices and meal pattern with pregnancy needs.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Meal planning",
    "url": "https://www.diabetesaustralia.com.au/living-with-diabetes/healthy-eating/",
    "title": "Healthy eating with diabetes — Diabetes Australia",
    "format": "Reading",
    "focus": "Translate nutrition principles into an individualised eating pattern.",
    "access": "Free"
   }
  ],
  "focus": "Types of diabetes, carbohydrate management, glycaemic index, hypoglycaemia and pregnancy.",
  "selfCheck": "Explain a realistic first dietary change for someone with type 2 diabetes."
 },
 {
  "id": 5,
  "area": "Clinical nutrition",
  "title": "Cardiovascular health and weight management",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Heart-healthy eating",
    "url": "https://www.heartfoundation.org.au/healthy-living/healthy-eating/heart-healthy-eating-pattern",
    "title": "Heart-healthy eating pattern — Heart Foundation",
    "format": "Reading",
    "focus": "Prioritise the overall dietary pattern and practical food choices.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Dietary fat and cholesterol",
    "url": "https://www.heartfoundation.org.au/healthy-living/healthy-eating/fats-oils-and-heart-health",
    "title": "Fats, oils and heart health — Heart Foundation",
    "format": "Reading",
    "focus": "Distinguish saturated, unsaturated and trans fats and useful substitutions.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Salt and blood pressure",
    "url": "https://www.heartfoundation.org.au/healthy-living/healthy-eating/salt-and-heart-health",
    "title": "Salt and heart health — Heart Foundation",
    "format": "Reading",
    "focus": "Identify sodium sources and how to discuss salt reduction.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Portions and meal structure",
    "url": "https://www.baker.edu.au/health-hub/fact-sheets/the-portion-guide",
    "title": "Portion plate guide — Baker Institute",
    "format": "Visual fact sheet",
    "focus": "Use a visual explanation and adapt it to a person’s needs and preferences.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Weight assessment and management",
    "url": "https://www.ccm.health.qld.gov.au/management-of-diagnosed-conditions/overweight-and-obesity-adult",
    "title": "Adult overweight and obesity — Queensland Health",
    "format": "Clinical guide",
    "focus": "Review assessment, goal setting and follow-up; use respectful person-centred language.",
    "access": "Free"
   }
  ],
  "focus": "Dietary pattern, fats, sodium, blood pressure and individualised weight goals.",
  "selfCheck": "Suggest food swaps and explain why they suit the person’s health and preferences."
 },
 {
  "id": 6,
  "area": "Clinical nutrition",
  "title": "Gastrointestinal nutrition",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Coeliac testing",
    "url": "https://coeliac.org.au/learn/diagnosis/",
    "title": "Coeliac diagnosis — Coeliac Australia",
    "format": "Reading",
    "focus": "Learn the testing pathway and why dietary changes can affect testing.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Gluten-free management",
    "url": "https://coeliac.org.au/live/gluten-free-diet/",
    "title": "Gluten-free diet — Coeliac Australia",
    "format": "Practical guide",
    "focus": "Review suitable foods, gluten sources and practical management.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "IBD nutrition",
    "url": "https://crohnsandcolitis.org.au/living-with-crohns-colitis/lifestyle/nutrition/",
    "title": "Nutrition with Crohn’s and colitis — CCA",
    "format": "Reading",
    "focus": "Distinguish general nutrition support from disease-specific dietary therapy.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "IBD symptoms, fibre and intake",
    "url": "https://crohnsandcolitis.org.au/living-with-crohns-colitis/lifestyle/nutrition/frequently-asked-dietary-questions-in-ibd/",
    "title": "Frequently asked dietary questions in IBD — CCA",
    "format": "Reading",
    "focus": "Review common misconceptions and why advice depends on the clinical picture.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "IBS and FODMAPs",
    "url": "https://www.monashfodmap.com/about-fodmap-and-ibs/",
    "title": "About FODMAPs and IBS — Monash University",
    "format": "Guide + visual resources",
    "focus": "Understand restriction, reintroduction and personalisation. This page is free; the app/course is separate.",
    "access": "Free page"
   },
   {
    "route": "If needed",
    "learn": "Other GI conditions",
    "url": "https://www.gesa.org.au/resources/clinical-practice-resources/",
    "title": "Clinical practice resources — GESA",
    "format": "Topic directory",
    "focus": "Use the condition-specific resources for haemochromatosis and other GI revision.",
    "access": "Free / varies"
   }
  ],
  "focus": "Coeliac disease, IBD, IBS, malabsorption and symptom-aware dietary advice.",
  "selfCheck": "Explain how coeliac disease, IBD and IBS differ in assessment and nutrition management."
 },
 {
  "id": 7,
  "area": "Clinical nutrition",
  "title": "Other clinical nutrition",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Kidney disease and diet",
    "url": "https://kidney.org.au/your-kidneys/living-with-kidney-disease/health-and-wellbeing/diet-nutrition/",
    "title": "Diet and nutrition — Kidney Health Australia",
    "format": "Reading",
    "focus": "Understand why restrictions depend on stage, blood results and treatment.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Liver disease",
    "url": "https://www.health.qld.gov.au/__data/assets/pdf_file/0031/145948/gastro-cldlong.pdf",
    "title": "Nutrition in advanced liver disease — Queensland Health",
    "format": "Patient education PDF",
    "focus": "Identify common problems with intake, muscle loss and meal timing.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Cancer nutrition",
    "url": "https://connect.cancer.org.au/cancer-information/living-and-coping/nutrition-for-people-with-cancer",
    "title": "Nutrition for people with cancer — Cancer Council",
    "format": "Practical guide",
    "focus": "Review poor appetite, symptoms, weight change and dietetic support.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Dysphagia and textures",
    "url": "https://www.iddsi.org/standards/framework",
    "title": "The IDDSI framework — IDDSI",
    "format": "Framework + tools",
    "focus": "Learn the texture and fluid levels and follow links to testing methods.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Therapeutic diets",
    "url": "https://aci.health.nsw.gov.au/projects/diet-specifications/adult",
    "title": "Adult diet specifications — NSW ACI",
    "format": "Professional reference",
    "focus": "Look up relevant diets for surgery, renal care and other conditions. These are food-service specifications.",
    "access": "Free"
   }
  ],
  "focus": "Kidney, liver, cancer and swallowing-related nutrition issues at entry-level depth.",
  "selfCheck": "Identify the main nutrition risks and when specialist input is needed."
 },
 {
  "id": 8,
  "area": "Clinical nutrition",
  "title": "Malnutrition and nutrition support",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Malnutrition assessment",
    "url": "https://www.health.qld.gov.au/nutrition/patients/subjective-global-assessment-training-videos",
    "title": "Subjective Global Assessment training — Queensland Health",
    "format": "Videos + cases",
    "focus": "Watch the assessment and work through a case before viewing its discussion.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Food-first nutrition support",
    "url": "https://www.health.qld.gov.au/__data/assets/pdf_file/0021/145830/nemo-hphe.pdf",
    "title": "High protein high energy diet — Queensland Health",
    "format": "Patient education PDF",
    "focus": "Practise turning low intake into achievable fortified meals and snacks.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Refeeding risk and management",
    "url": "https://vimeo.com/1114731826/c1adf0ea47?share=copy",
    "title": "Refeeding syndrome in acute care — AuSPEN",
    "format": "Webinar",
    "focus": "Review the 2025 Australasian consensus and team-based management.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Refeeding written guidance",
    "url": "https://www.auspen.org.au/resources-3/2025/5/28/-auspen-consensus-statements-on-refeeding-syndrome",
    "title": "Refeeding consensus — AuSPEN",
    "format": "Consensus document",
    "focus": "Use alongside the webinar for identification and monitoring principles.",
    "access": "Free resource"
   },
   {
    "route": "If needed",
    "learn": "Enteral and parenteral routes",
    "url": "https://www.nice.org.uk/guidance/cg32/chapter/Recommendations",
    "title": "Nutrition support recommendations — NICE CG32",
    "format": "Clinical guideline",
    "focus": "Review indications and monitoring. UK guidance; compare with current Australian protocols, including AuSPEN.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Parenteral nutrition",
    "url": "https://aci.health.nsw.gov.au/__data/assets/pdf_file/0010/159805/ACI-Parenteral-nutrition-pocketbook.pdf",
    "title": "Parenteral nutrition pocketbook — NSW ACI",
    "format": "Professional PDF",
    "focus": "Read the introductory, monitoring and complication sections at entry-level depth.",
    "access": "Free"
   }
  ],
  "focus": "Screening, assessment, food fortification, feeding routes and refeeding risk.",
  "selfCheck": "Explain when food-first care may need escalation and what the team should monitor."
 },
 {
  "id": 9,
  "area": "Life stages",
  "title": "Infants, children and growth",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Infant and toddler feeding",
    "url": "https://www.rch.org.au/kidsinfo/fact_sheets/Nutrition_babies_toddlers/",
    "title": "Nutrition: babies and toddlers — Royal Children’s Hospital",
    "format": "Reading",
    "focus": "Review milk, complementary foods, textures and balanced feeding.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Growth measurement",
    "url": "https://www.rch.org.au/childgrowth/child_growth_e-learning/",
    "title": "Child growth e-learning — Royal Children’s Hospital",
    "format": "Interactive learning",
    "focus": "Review accurate measurement and interpretation of growth over time.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Growth charts",
    "url": "https://www.rch.org.au/childgrowth/about_child_growth/Growth_charts/",
    "title": "Growth chart collection — Royal Children’s Hospital",
    "format": "Reference charts",
    "focus": "Choose the appropriate chart and practise plotting serial measurements.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Slow weight gain",
    "url": "https://www.rch.org.au/clinicalguide/guideline_index/Slow_weight_gain/",
    "title": "Slow weight gain — Royal Children’s Hospital",
    "format": "Clinical guideline",
    "focus": "Consider causes, assessment and referral before changing feeding.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Breastfeeding",
    "url": "https://www.rch.org.au/kidsinfo/fact_sheets/Breastfeeding/",
    "title": "Breastfeeding — Royal Children’s Hospital",
    "format": "Reading",
    "focus": "Revise practical feeding support and when to seek additional help.",
    "access": "Free"
   }
  ],
  "focus": "Infant feeding, starting solids, growth assessment and feeding concerns.",
  "selfCheck": "Interpret a growth pattern and identify what else to ask before giving advice."
 },
 {
  "id": 10,
  "area": "Life stages",
  "title": "Pregnancy and breastfeeding",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Healthy eating in pregnancy",
    "url": "https://www.pregnancybirthbaby.org.au/pregnancy/nutrition-and-lifestyle/guide-to-food-and-drink-during-pregnancy",
    "title": "Food and drink during pregnancy — Pregnancy, Birth and Baby",
    "format": "Reading",
    "focus": "Review dietary pattern, nutrient priorities and food-safety considerations.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Folate, iodine and supplements",
    "url": "https://www.pregnancybirthbaby.org.au/vitamins-and-supplements-during-pregnancy",
    "title": "Vitamins and supplements in pregnancy — Pregnancy, Birth and Baby",
    "format": "Reading",
    "focus": "Learn the main supplement considerations and individual assessment needs.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Pregnancy nutrient requirements",
    "url": "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients-dietary-energy-calculator",
    "title": "NRVs by age and life stage — Eat for Health",
    "format": "Interactive reference",
    "focus": "Compare pregnancy and lactation with non-pregnant adult requirements.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Gestational diabetes",
    "url": "https://www.baker.edu.au/health-hub/fact-sheets/gestational-diabetes",
    "title": "Gestational diabetes — Baker Institute",
    "format": "Fact sheet",
    "focus": "Apply carbohydrate and meal-pattern principles without compromising pregnancy nutrition.",
    "access": "Free"
   }
  ],
  "focus": "Nutrient priorities, food safety, gestational diabetes and lactation.",
  "selfCheck": "Explain the most relevant nutrient and food-safety priorities for a pregnancy case."
 },
 {
  "id": 11,
  "area": "Life stages",
  "title": "Vegetarian diets and micronutrients",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Vegetarian and vegan adequacy",
    "url": "https://www.betterhealth.vic.gov.au/health/healthyliving/vegetarian-and-vegan-eating",
    "title": "Vegetarian and vegan eating — Better Health Channel",
    "format": "Reading",
    "focus": "Review protein and micronutrient planning across life stages; verify fortification on product labels.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Micronutrient functions and needs",
    "url": "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients",
    "title": "Nutrient reference pages — Eat for Health",
    "format": "Nutrient directory",
    "focus": "Choose unfamiliar vitamins and minerals; review functions, deficiency risks and reference values.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Vitamin B12",
    "url": "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/vitamin-b12",
    "title": "Vitamin B12 — Eat for Health",
    "format": "Nutrient reference",
    "focus": "Focus on vegan diets, absorption, life stages and deficiency risk.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Iron",
    "url": "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/iron",
    "title": "Iron — Eat for Health",
    "format": "Nutrient reference",
    "focus": "Compare haem/non-haem iron, absorption and life-stage requirements.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Calcium",
    "url": "https://www.eatforhealth.gov.au/nutrient-reference-values/nutrients/calcium",
    "title": "Calcium — Eat for Health",
    "format": "Nutrient reference",
    "focus": "Review bone health, dietary adequacy and changes in requirements.",
    "access": "Free"
   }
  ],
  "focus": "Plant-based food choices, nutrient adequacy, deficiency risks and supplements.",
  "selfCheck": "Plan a nutritionally adequate vegan day and identify nutrients needing extra attention."
 },
 {
  "id": 12,
  "area": "Life stages",
  "title": "Food allergy and intolerance",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Food allergy management",
    "url": "https://www.allergy.org.au/patients/food-allergy/ascia-dietary-avoidance-for-food-allergy",
    "title": "Dietary avoidance for food allergy — ASCIA",
    "format": "Practical reading",
    "focus": "Review avoidance, substitutes, cross-contact and protecting dietary adequacy.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Infant allergy prevention",
    "url": "https://allergy.org.au/hp/papers/infant-feeding-and-allergy-prevention/",
    "title": "2026 infant feeding recommendations — ASCIA",
    "format": "Guideline summary",
    "focus": "Use the current recommendations for introduction and ongoing inclusion of allergens.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Explaining prevention to families",
    "url": "https://www.allergy.org.au/patients/allergy-prevention",
    "title": "Allergy prevention — ASCIA",
    "format": "Reading + video links",
    "focus": "Use the animated video links and family resources to practise plain-language explanation.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Allergen labels",
    "url": "https://www.foodstandards.gov.au/consumer/labelling/allergen-labelling",
    "title": "Allergen labelling — FSANZ",
    "format": "Australian guidance",
    "focus": "Identify mandatory declarations and current plain-English label requirements.",
    "access": "Free"
   }
  ],
  "focus": "Prevention, food avoidance, labels, nutritional adequacy and safety boundaries.",
  "selfCheck": "Distinguish allergy from intolerance and explain safe substitutions."
 },
 {
  "id": 13,
  "area": "Life stages",
  "title": "Older adults and aged care",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Nutrition screening in older people",
    "url": "https://www.agedcarequality.gov.au/quality-standards/guide-completing-mini-nutritional-assessment-short-form",
    "title": "MNA short-form guide — Aged Care Quality and Safety Commission",
    "format": "Guide + video",
    "focus": "Practise identifying nutrition risk using the screening tool.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Food and nutrition standards",
    "url": "https://www.health.gov.au/resources/videos/new-aged-care-act-strengthened-aged-care-quality-standards-standard-6-the-food-and-nutrition",
    "title": "Standard 6: food and nutrition — Australian Government",
    "format": "Video",
    "focus": "Understand the role of preferences, nutrition and dining experience.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Menu and dining improvement",
    "url": "https://www.agedcarequality.gov.au/providers/food-nutrition-dining/food-nutrition-dining-resources-providers",
    "title": "Food, nutrition and dining resources — Aged Care Commission",
    "format": "Guides + videos",
    "focus": "Focus on malnutrition, hydration, mealtimes and resident choice.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Current aged-care requirements",
    "url": "https://www.health.gov.au/our-work/improving-food-nutrition-aged-care/regulation-compliance",
    "title": "Food and nutrition regulation — Australian Government",
    "format": "Current guidance",
    "focus": "Check the current Australian requirements before relying on older training material.",
    "access": "Free"
   }
  ],
  "focus": "Malnutrition, hydration, food choice, dining experience and Australian aged-care standards.",
  "selfCheck": "Identify nutrition and dining changes for an older person losing weight."
 },
 {
  "id": 14,
  "area": "Food and public health",
  "title": "Food service and menu planning",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Menu planning principles",
    "url": "https://heas.health.vic.gov.au/training/planning-healthy-menus-for-long-day-care/",
    "title": "Planning healthy menus for long day care — HEAS",
    "format": "Self-paced module",
    "focus": "A practical introduction to menu planning and assessment in one service setting.",
    "access": "Free account"
   },
   {
    "route": "Start 2",
    "learn": "Hospital menu adequacy",
    "url": "https://aci.health.nsw.gov.au/projects/nutrition-standards",
    "title": "Nutrition standards — NSW ACI",
    "format": "Professional guide",
    "focus": "Review patient choice, nutrition goals and menu design.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Menu planning requirements",
    "url": "https://heas.health.vic.gov.au/government-policies-and-guidelines/menu-planning-guidelines-for-long-day-care/",
    "title": "Long day care menu guidelines — HEAS",
    "format": "Detailed guide",
    "focus": "Compare a sample menu with serves, variety and dietary requirements.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Production and delivery systems",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9796490/",
    "title": "Hospital foodservice systems — DA-listed research paper",
    "format": "Research reading",
    "focus": "Find cook-fresh/cook-chill and centralised/decentralised systems; compare practical trade-offs.",
    "access": "Free"
   }
  ],
  "focus": "Menu adequacy, food-service systems, different settings and quality improvement.",
  "selfCheck": "Assess a menu for adequacy, choice, safety and practicality."
 },
 {
  "id": 15,
  "area": "Food and public health",
  "title": "Food safety, labels and Australian food law",
  "resources": [
   {
    "route": "Start 1",
    "learn": "HACCP and food safety plans",
    "url": "https://www.foodauthority.nsw.gov.au/industry/audits-and-compliance/food-safety-programs-haccp",
    "title": "Food safety programs — NSW Food Authority",
    "format": "Reading",
    "focus": "Identify hazards, control points, monitoring, corrective action and review.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Reading Australian food labels",
    "url": "https://baker.edu.au/health-hub/fact-sheets/label-reading",
    "title": "Label reading — Baker Institute",
    "format": "Visual fact sheet",
    "focus": "Practise per-serve versus per-100-g comparisons using Australian products.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Time and temperature",
    "url": "https://www.foodstandards.gov.au/business/food-safety/2-hour-4-hour-rule",
    "title": "The 2-hour / 4-hour rule — FSANZ",
    "format": "Practical guide",
    "focus": "Apply the rule to a food-service scenario and distinguish it from cooling requirements.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Cooling and reheating",
    "url": "https://www.foodstandards.gov.au/business/food-safety/cooling-and-reheating-food",
    "title": "Cooling and reheating food — FSANZ",
    "format": "Practical guide",
    "focus": "Review the separate cooling and reheating requirements.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Allergens and ingredients",
    "url": "https://www.foodstandards.gov.au/consumer/labelling/ingredients",
    "title": "Ingredient lists and percentage labelling — FSANZ",
    "format": "Reading",
    "focus": "Understand ingredient order, compound ingredients and declared percentages.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Food law and standards",
    "url": "https://www.foodstandards.gov.au/food-standards-code",
    "title": "Australia New Zealand Food Standards Code — FSANZ",
    "format": "Reference directory",
    "focus": "Learn where to find labelling, claims, additives and special-purpose food rules.",
    "access": "Free"
   }
  ],
  "focus": "HACCP, temperature control, allergens, ingredients and food standards.",
  "selfCheck": "Read a label accurately and identify controls for a food-service hazard."
 },
 {
  "id": 16,
  "area": "Food and public health",
  "title": "Public health nutrition",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Social determinants and food insecurity",
    "url": "https://www.aihw.gov.au/reports/australias-health/social-determinants-of-health",
    "title": "Social determinants of health — AIHW",
    "format": "Reading",
    "focus": "Connect income, housing, food access and health literacy with nutrition outcomes.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Health promotion and prevention",
    "url": "https://www.aihw.gov.au/reports/australias-health/health-promotion",
    "title": "Health promotion and protection — AIHW",
    "format": "Reading",
    "focus": "Compare education, policy and environmental approaches and the role of different organisations.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Planning a community program",
    "url": "https://www.health.nsw.gov.au/research/Pages/developing-program-logic-guide.aspx",
    "title": "Developing and using program logic — NSW Health",
    "format": "Practical guide",
    "focus": "Map needs, inputs, activities and expected outcomes.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Process, impact and outcome evaluation",
    "url": "https://www.health.nsw.gov.au/research/Pages/planning-evaluations-guide.aspx",
    "title": "Planning and managing evaluations — NSW Health",
    "format": "Practical guide",
    "focus": "Select evaluation questions and measures before a program starts.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Evaluation designs",
    "url": "https://www.health.nsw.gov.au/research/Pages/study-design-for-interventions-guide.aspx",
    "title": "Study design for population interventions — NSW Health",
    "format": "Professional guide",
    "focus": "Compare possible study designs and their strengths and limitations.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Australian prevention priorities",
    "url": "https://www.health.gov.au/resources/publications/national-preventive-health-strategy-2021-2030",
    "title": "National Preventive Health Strategy 2021-2030 — Australian Government",
    "format": "Strategy document",
    "focus": "Review prevention, equity and population approaches. Skim relevant nutrition sections first.",
    "access": "Free"
   }
  ],
  "focus": "Determinants, food insecurity, prevention, program planning and evaluation.",
  "selfCheck": "Design a small community program with a clear need, action and outcome measure."
 },
 {
  "id": 17,
  "area": "Food and public health",
  "title": "Research, statistics and evidence",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Appraising research",
    "url": "https://www.cebm.ox.ac.uk/resources/ebm-tools/critical-appraisal-tools",
    "title": "Critical appraisal tools — Oxford CEBM",
    "format": "Tools + examples",
    "focus": "Use an appraisal sheet on one nutrition paper and discuss validity and applicability.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Research terminology",
    "url": "https://www.cebm.ox.ac.uk/resources/ebm-tools/glossary",
    "title": "Evidence-based medicine glossary — Oxford CEBM",
    "format": "Reference glossary",
    "focus": "Revise study designs, bias, confounding and commonly reported measures.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Statistics refresh",
    "url": "https://www.khanacademy.org/math/statistics-probability",
    "title": "Statistics and probability — Khan Academy",
    "format": "Lessons + practice",
    "focus": "Select sampling, confidence intervals and hypothesis testing if rusty; no need to complete the whole course.",
    "access": "Free"
   }
  ],
  "focus": "Study design, bias, interpreting evidence and applying findings to practice.",
  "selfCheck": "Explain whether a study’s results are trustworthy and useful for a particular client."
 },
 {
  "id": 18,
  "area": "Practice and exams",
  "title": "Australian practice and cultural safety",
  "resources": [
   {
    "route": "Start 1",
    "learn": "The Australian health system",
    "url": "https://www.health.gov.au/about-us/the-australian-health-system",
    "title": "Australian health system overview — Department of Health",
    "format": "Reading",
    "focus": "Understand Medicare, public/private services and common care pathways.",
    "access": "Free"
   },
   {
    "route": "Start 2",
    "learn": "Cultural awareness preparation",
    "url": "https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/exam-preparation",
    "title": "DSR preparation and required cultural-awareness reading — Dietitians Australia",
    "format": "Official reading + assessment links",
    "focus": "Follow the current essential reading and assessment instructions in the cultural-awareness section.",
    "access": "Free page; assessment access"
   },
   {
    "route": "If needed",
    "learn": "Professional expectations",
    "url": "https://dietitiansaustralia.org.au/working-dietetics/standards-and-scope/national-competency-standards-dietitians",
    "title": "National Competency Standards — Dietitians Australia",
    "format": "Standards + guide",
    "focus": "Use the four roles as a check on your preparation across settings.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Ethics and scope",
    "url": "https://dietitiansaustralia.org.au/working-dietetics/standards-and-scope/code-conduct-dietitians-and-nutritionists",
    "title": "Code of Conduct — Dietitians Australia",
    "format": "Professional code",
    "focus": "Review consent, confidentiality, boundaries, evidence and safe practice.",
    "access": "Free"
   }
  ],
  "focus": "Health system, professional standards, ethics and culturally safe care.",
  "selfCheck": "Describe a referral pathway and adapt a consultation without making cultural assumptions."
 },
 {
  "id": 19,
  "area": "Practice and exams",
  "title": "Counselling, oral skills and exam preparation",
  "resources": [
   {
    "route": "Start 1",
    "learn": "Consultation communication",
    "url": "https://xerte.nottingham.ac.uk/play_13244",
    "title": "DIET-COMMS — University of Nottingham",
    "format": "Interactive training",
    "focus": "Practise structure, empathy, listening and collaborative goals. UK examples need adaptation to Australian practice.",
    "access": "Free; browser JavaScript"
   },
   {
    "route": "Start 2",
    "learn": "Official question style",
    "url": "https://dietitiansaustralia.org.au/media/394",
    "title": "Sample DSR MCQs — Dietitians Australia",
    "format": "Questions + answers PDF",
    "focus": "Answer before reading the key and explain your reasoning. These are samples, not past papers.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Motivation and behaviour change",
    "url": "https://www.racgp.org.au/afp/2012/september/motivational-interviewing-techniques",
    "title": "Motivational interviewing — RACGP",
    "format": "Reading + examples",
    "focus": "Practise open questions, reflections and eliciting the client’s own reasons for change.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Checking understanding",
    "url": "https://www.seslhd.health.nsw.gov.au/teach-back",
    "title": "Teach-back — South Eastern Sydney LHD",
    "format": "Training module link",
    "focus": "Learn how to check understanding without making the client feel tested.",
    "access": "Free module"
   },
   {
    "route": "If needed",
    "learn": "Oral task expectations",
    "url": "https://dietitiansaustralia.org.au/working-dietetics/skills-recognition-australia/process-overseas-educated-dietitians/oral-exam",
    "title": "Oral exam format — Dietitians Australia",
    "format": "Official guide",
    "focus": "Practise task 1 for 20 minutes, task 2 for 30 minutes and task 3 for 10 minutes.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "Oral consultation preparation",
    "url": "https://dietitiansaustralia.org.au/media/1328",
    "title": "2026 oral checklist — Dietitians Australia",
    "format": "Official PDF",
    "focus": "Check your communication, cultural safety and interprofessional practice.",
    "access": "Free"
   },
   {
    "route": "If needed",
    "learn": "MCQ breadth and resource list",
    "url": "https://dietitiansaustralia.org.au/sites/default/files/2026-07/Resource%20list%20for%20MCQ%20examination.pdf",
    "title": "2026 MCQ preparation resources — Dietitians Australia",
    "format": "Official PDF",
    "focus": "Use this to check scope. The official resource list is explicitly non-exhaustive.",
    "access": "Free"
   }
  ],
  "focus": "Communication, shared goals, team conversations and the official exam format.",
  "selfCheck": "Practise assessment, education and interprofessional role-plays with feedback."
 }
];
