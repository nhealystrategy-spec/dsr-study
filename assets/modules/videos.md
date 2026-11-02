# Embedded videos

Every `VIDEO(...)` block in `m01.js` … `m19.js` is listed here. All were checked on **2 Nov 2026**: the oEmbed request returned 200 (the video exists and can be embedded), the channel is an official body, university or professional organisation, and the transcript or the creator's description matches the page. Captions only say what the video covers; nothing is quoted.

Recheck all of them at any time (YouTube 401/403 = embedding turned off, 404 = removed; Vimeo `domain_status_code` = blocked outside its own site):

```bash
node tools/check-modules.js --online
```

Single check by hand: `curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json"` or `curl -s "https://vimeo.com/api/oembed.json?url=https://vimeo.com/<ID>"`.

| Module | Page | Video id | Channel (oEmbed author) | Title on the host | Length | Checked |
|---|---|---|---|---|---|---|
| 1 | 1 | UgnF1w-H8vw | khanacademymedicine (Khan Academy) | Small intestine 1: Structure | 6:30 | 2 Nov 2026 |
| 1 | 2 | FE2jfTXAJHg | Khan Academy | Overview of glycolysis (from Thaynar's planner) | 13:30 | 2 Nov 2026 |
| 1 | 4 | I4lU4zQJQRk | khanacademymedicine (Khan Academy) | How does the body adapt to starvation? | 14:56 | 2 Nov 2026 |
| 2 | 2 | 7rgI5q-XnKg | Edith Cowan University | Facts about the Australian Guide to Healthy Eating (AGHE) - Refresh.ED | 2:26 | 2 Nov 2026 |
| 3 | 1 | pAiS9xoU2uk | Department of Health, Tasmania | DHHS Malnutrition Screening Tool | 3:31 | 2 Nov 2026 |
| 4 | 4 | eipo30sl5HM | Diabetes Australia | People living with type 2 diabetes can still have hypos | 1:37 | 2 Nov 2026 |
| 4 | 5 | 1DH29uMMaNo | Diabetes Australia | It's important that people with diabetes have a sick day management plan in place | 1:48 | 2 Nov 2026 |
| 5 | 1 | 2UMbE91HdpM | Heart Foundation | Lowering Your Risk of Heart Disease: Building Blocks of a Healthy Heart | 2:17 | 2 Nov 2026 |
| 5 | 3 | vimeo:1220142416 | NEMO (Queensland Health) | Tips to eat less salt | 6:02 | 2 Nov 2026 |
| 5 | 4 | Gb6pI2Grec4 | Heart Foundation | Cholesterol and heart disease | 1:51 | 2 Nov 2026 |
| 6 | 4 | stdYoA4G9Dg | Monash FODMAP | IBS Symptom relief using the FODMAP diet & Monash FODMAP app | 3:10 | 2 Nov 2026 |
| 7 | 1 | 0S_siSdD0MA | Kidney Health Australia | Understanding Kidney Disease | 1:45 | 2 Nov 2026 |
| 7 | 2 | vimeo:1221294310 | NEMO (Queensland Health) | What to eat when you have high potassium levels | 8:01 | 2 Nov 2026 |
| 7 | 5 | 9tRoJ31Mz30 | IDDSI | IDDSI 101 for Food Service Workers, Certified Nursing Assistants and Caregivers | 5:30 | 2 Nov 2026 |
| 8 | 2 | vimeo:523587289 | Metro North Health (Queensland Health NEMO) | Subjective Global Assessment Nutrition Assessment (from Thaynar's planner) | 14:45 | 2 Nov 2026 |
| 8 | 3 | DNXjN0HsA7I | PAH Dietitian (Princess Alexandra Hospital, listed on Queensland Health NEMO) | Easy High Protein High Energy Ways to Gain Weight - Part 1 of 2 | 9:22 | 2 Nov 2026 |
| 9 | 1 | lsy_TAHOvCQ | Raising Children Network | Common breastfeeding questions: enough milk, too much milk, expressing | 4:58 | 2 Nov 2026 |
| 9 | 2 | OdUWldYLOHI | Raising Children Network | Starting solids - Episode 1 | 4:23 | 2 Nov 2026 |
| 10 | 1 | JAF8GeKZggM | Australian Dept of Health, Disability and Ageing | Three steps to your healthy pregnancy and bub | 1:00 | 2 Nov 2026 |
| 11 | 3 | U1Ls9Vh-3m8 | khanacademymedicine (Khan Academy) | What is iron deficiency? | 12:35 | 2 Nov 2026 |
| 12 | 2 | kqVOQLH_hco | ASCIAeducation (ASCIA) | How to Use Epipen Trainer | 1:58 | 2 Nov 2026 |
| 13 | 4 | qa_9mWi6pJY | Aged Care Quality and Safety Commission | Aged Care Quality Standard 6 - Food and nutrition | 4:23 | 2 Nov 2026 |
| 13 | 5 | a8GW1DVDPCY | Aged Care Quality and Safety Commission | Food, nutrition, dining and dementia - for aged care providers and workers | 5:41 | 2 Nov 2026 |
| 14 | 2 | 1XuDziFDbNI | HealthShare NSW (NSW Health) | My Food Choice | 2:00 | 2 Nov 2026 |
| 14 | 4 | bJvHQQQw_AE | NSW Health | What is Munch and Move? | 1:11 | 2 Nov 2026 |
| 15 | 1 | RUeVNCEDbCo | NSWFoodAuthority (NSW Food Authority) | Four Golden Rules of food safety | 1:46 | 2 Nov 2026 |
| 15 | 2 | BJoeovZnPWM | Food Standards Australia New Zealand | Introduction to Standard 3.2.2A - Food Safety Management Tools | 2:01 | 2 Nov 2026 |
| 15 | 3 | 74dCWKSqDvY | Australian Dept of Health, Disability and Ageing | Health Star Rating – What is the Health Star Rating - Video | 1:25 | 2 Nov 2026 |
| 16 | 1 | _gNmnbt3x8E | VicHealth (Victorian Government) | Fair Foundations: the VicHealth framework for health equity | 11:07 | 2 Nov 2026 |
| 16 | 2 | y9THQTEqMaU | VicHealth (Victorian Government) | Understanding Health Promotion - A Short Introduction | 3:49 | 2 Nov 2026 |
| 17 | 1 | zmXBbHDUgY4 | Khan Academy | Types of studies | 5:19 | 2 Nov 2026 |
| 17 | 3 | hlM7zdf7zwU | Khan Academy | Confidence intervals and margin of error | 11:44 | 2 Nov 2026 |
| 18 | 2 | 6gMrHNJ33w8 | Dietitians Australia | Dietitians improve lives | 1:20 | 2 Nov 2026 |
| 18 | 3 | 7njabCKtUM4 | Indigenous Engagement Unit FMNHS Monash University | Part A Cultural Safety 1 | 4:51 | 2 Nov 2026 |
| 18 | 3 | 1U5okHcLZAE | Indigenous Engagement Unit FMNHS Monash University | Part B Cultural Safety 1 | 4:35 | 2 Nov 2026 |
| 19 | 1 | -zEpwxJlRQI | Heart Foundation | 5.Motivational Interviewing: Core clinician skills -- Introducing OARS | 16:56 | 2 Nov 2026 |
| 19 | 4 | 1Wl9qogPw1E | ACSQHC (Australian Commission on Safety and Quality in Health Care) | ISBAR - Case Study 1 | 4:28 | 2 Nov 2026 |

## Checked but not embedded

| Video | Why not |
|---|---|
| RCH "Feeding in the first year" (`Z0PnlmWZ2XE`) | oEmbed 401: embedding turned off. Watch on YouTube instead. |
| National Allergy Council "How to position a child or adult having a severe allergic reaction" (`ikA-XZTZfJc`) | Embedding turned off. |
| Queensland Health (RBWH) GDM webinars 1–3 (Vimeo `400486903`, `400486923`, `400486878`) | Vimeo oEmbed 403: private. Linked from the NEMO videos page. |
| Queensland Health (RBWH) gastrostomy and feeding-tube videos (Vimeo `216615284`, `349601937`) | Vimeo `domain_status_code` 403: only plays on Queensland Health's site. |
| Monash "What are FODMAPs…" (`rSBygqIDvQQ`) | YouTube shows an English title, but the audio and description are German. |
| AuSPEN refeeding webinar from the planner (Vimeo `1114731826`) | Embeddable, but published by an unnamed "Corp Comm" account, so left as a "Go deeper" link. |
| Coeliac Australia | No official YouTube or Vimeo channel found (Nov 2026). |

Good spares from the same trusted channels: Khan Academy Krebs cycle `juM2ROSLWfw` (in the planner), Khan "Insulin and glucagon" `Id2E72P8Fe0`, Heart Foundation "Practical ways to reduce salt" `1SrVu0WhqQU`, high protein high energy part 2 `IsOBC_IpQz8`, ACQSC dementia webinar `doVTwQeSlhA`, Monash cultural safety part C `HUeVlfv4EJ8`, Queensland Health NEMO "Eating when it's harder to eat" (Vimeo `972535203/6ebd2eb1f9`).
