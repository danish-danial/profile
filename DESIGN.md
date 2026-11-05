# Design: Danish Danial

Shared by the homepage, notes archive and Markdown reading layout. Retains the owner’s Hallmark [Ink reference](https://www.usehallmark.com/themes/ink/) with Lexend for the owner’s reading comfort. The owner requested a compact index inspired by jackpearkes.com, with much less text.

## System

- Nearly white paper, hueless black, fine rules and restrained teal. Flat surfaces; no cards, shadows, decorative imagery or promotional hero.
- Lexend throughout, self-hosted through Astro Fontsource. Body 400, project titles and name 600; prose emphasis uses upright 600 rather than italics. No synthetic faces or tight heading tracking. The owner requested this to try improving reading comfort with dyslexia; it is a preference, not a guaranteed benefit.
- Work alongside opinions, presented as a personal index rather than a pitch.
- Homepage: name, one-line introduction, two project entries, notes and contact links. Each project has one sentence; native disclosures retain technical details.
- No current-work section, duplicate directory, oversized statement, call-to-action buttons or personal colophon: these repeated information instead of helping visitors find the work.
- Keep the projects and empty notebook honest. No invented essays, metrics, screenshots, dates or availability claims. Project names are not links until a working public destination exists.

## Tokens and layout

`src/styles/tokens.css` owns colours, fonts and sizing through Tailwind’s `@theme static` block and `:root`.

- Paper: `oklch(99.5% 0.003 100)`; ink: `oklch(16% 0 0)`; muted: `oklch(44% 0 0)`.
- Teal: `oklch(50% 0.095 188)` for hover and focus. Pale teal and deep teal pair for selection.
- `--font-display: var(--font-lexend), ui-sans-serif, system-ui, sans-serif`; body inherits it.
- One centred 704px `.page-width`, including 24px gutters; 16px gutters below 40rem. Content stays narrow on large displays.
- Body 18px at 1.6; prose at 1.6 and no more than 65ch. Name and page titles 32px, project and section headings 20px, secondary controls 14px.
- Single-column reading order at every breakpoint. Section headings continue into a quiet horizontal rule. Whitespace separates projects; no boxes.

## Controls and adaptation

- Plain text links; no primary button needed on this personal index.
- Instant 2px teal focus outlines and a skip link. Links and disclosure controls have at least 44px target height.
- Shared header shows the name once: the homepage h1, or a home link on inner pages. Inner pages retain their own h1.
- Footer contains Email and GitHub, once each. The notes heading links to the archive; inner pages return home through the nameplate.
- Still by design: no animation or client-side JavaScript. Native disclosures work without scripting; base.css retains the reduced-motion fallback.
- Both `html` and `body` use `overflow-x: clip`. Long headings wrap; there are no fixed-width visuals.

## Exports

`src/styles/tokens.css`, `src/styles/base.css`, `src/styles/global.css`. Shared chrome: `src/layouts/Layout.astro`. Reading layout: `src/layouts/PostLayout.astro`.
