# DSR Study: dietitian in Australia

An interactive course for Thaynar's Dietitians Australia DSR exams, with Portuguese support. Plain HTML/JS: no build step.

- **Live:** https://nhealystrategy-spec.github.io/dsr-study/
- **Open locally:** double-click `index.html`.
- **Progress** (modules, points, streaks, cards) saves in the browser on each device. Clearing browser data resets it.

## How the course works
19 modules, one per study area. Each module plays one full-screen page at a time: pages with highlighted key facts, exercises and short videos from official sources, quick-check questions after every couple of pages, a module quiz, a mini review (key points + questions to revisit), flip cards, then a finish screen. Points, levels, a daily streak, badges and confetti keep it fun. The 🔊 button reads each page aloud (browser voices, Australian English or Brazilian Portuguese), highlighting the part being read; the speed button slows it to 0.85× or 0.7×. Language switch: English (tap underlined words for Portuguese) or Português (tap terms for the English exam word).

## Where things live
- `assets/modules/kit.js`: authoring helpers (`P`, `UL`, `TABLE`, `FLOW`, `NOTE`, `VIDEO`, `SORT`, `ORDER`, `NUM`, `PICK`, `REVEAL`). Text is always `[english, portuguese]`; `**term**` bolds, `==fact==` highlights, `{{palavra|English term}}` (Portuguese text only) shows the English term on tap.
- `assets/modules/m01.js` … `m19.js`: module pages, exercises, quick-check placement (`checks`) and new questions (`qs`, which also join Practice and the mock exam).
- `assets/modules/videos.md`: every embedded video (YouTube or Vimeo) with its channel and check date. Videos only load when tapped. Add a video only from an official body, university or professional organisation, after an oEmbed check, and list it here.
- `assets/questions.js` + `pt-questions.js`: the original 135-question bank (append-only: progress is stored by position).
- `assets/lessons.js` + `pt-lessons.js`: flashcard facts per module (also used by daily review).
- `assets/topics-sheet.js`: the 19 areas and 102 links from her original spreadsheet ("Go deeper" on each finish screen).
- `assets/glossary.js`: English→Portuguese terms and the Brazil curriculum map. `assets/oral.js`: oral exam role plays.
- Each module also has a `hook` (opening line on its intro page) and three `teasers` ("You'll find out" on the intro, the home card and the previous module's finish screen).
- `assets/icons.js`: Phosphor icons (MIT licence), only the ones the site uses. Add a name to `tools/build-icons.py` and rerun it against the `@phosphor-icons/web` package to add more.
- Design: Lexend headings and Source Sans 3 body text (Google Fonts), Brazilian flag colours for the brand, one colour per study area. Tokens are at the top of `assets/style.css`.
- `tools/check-modules.js`: run `node tools/check-modules.js` after any content edit. It checks translations, markup, exercise answers, question links and videos; add `--online` to recheck every video with oEmbed.
- `MISSION.md`, `NOTES.md`: `/teach` workspace files.
