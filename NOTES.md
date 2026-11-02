# Notes

- Learner: Thaynar, dietitian educated in Brazil, preparing for the DA DSR exams (target MCQ: 8 September 2027). Built by her partner Nathan.
- Started from her spreadsheet "Dietetic_Skills_Recognition_Study_Planner.xlsx" (19 study areas, links checked 28 Sep 2026). All its links are kept in `assets/topics-sheet.js`.
- Nathan's preferences (Nov 2026): module-by-module, one full page at a time with Next; quick questions every couple of pages; a mini review at the end; key facts highlighted; interactive and fun; Portuguese available but not cluttered (one language at a time).
- Official sample MCQs use three formats: stand-alone, case-based, extended matching. Official samples and DA's 2026 oral checklist use Australian foods (Rice Bubbles, Vegemite, Weet-Bix, high-fibre low-GI white bread).
- Content rewritten in our own words from the sources linked on each page (not copied). Facts re-checked Nov 2026; corrections made then:
  - Refeeding: AuSPEN 2025 replaces "start low, go slow" (risk = 2+ of weight loss >10%/3 months or SGA B/C, little or no intake ≥7 days, problematic alcohol, GI losses; start ≥50% of needs, goal in 24–72 h, thiamine 7–10 days).
  - ASCIA 2026: egg and peanut soon after the baby is ready for solids; keep giving at least once a week.
  - Hypo (Baker): 15 g fast carbohydrate = 150 mL regular soft drink, 3 glucose tablets or 3–5 jelly beans (brand dependent); recheck in 10–15 min.
  - HEAS long day care: menu (morning tea, lunch, afternoon tea) ≈ 50% of daily needs (not tied to "8 hours").
  - TIS Free Interpreting Service for private dietitians only covers listed council areas (plus some PHN programs).
  - Medicare GPCCMP (from 1 Jul 2025): 5 allied health services/year (10 for First Nations), ≥20 min each, report to GP after first and last service, plan reviewed within 18 months, GPMP/TCA valid until 30 Jun 2027.
- Videos added Nov 2026: 37 click-to-load videos (1–3 per module) from official Australian bodies, universities, Khan Academy and IDDSI; list and check dates in `assets/modules/videos.md`. New facts checked then:
  - ASCIA 2026: adrenaline devices include autoinjectors (EpiPen, Jext; outer mid-thigh) and the neffy nasal spray (PBS from 1 Jul 2026); another dose after 5 min if no response.
  - Kidney Health Australia: about 1 in 7 adults have signs of kidney disease (1 in 5 First Nations adults); the 2023 video still says 1 in 10.
- Facts that change often, recheck before the exam (and run `node tools/check-modules.js --online` for the videos): Australian Dietary Guidelines (draft consultation late 2026, final likely 2027), Medicare item rules, ASCIA, AuSPEN, Aged Care Quality Standards.
- After editing content run `node tools/check-modules.js`.
