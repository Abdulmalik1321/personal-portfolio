# Design: The Bilingual Annual Report

The portfolio is filed as a Saudi bilingual annual report: a cover, a career-by-segment chart, key figures, colour-coded segments and numbered notes that hold the source behind each claim. It deliberately avoids the dark developer hero with skill badges and card grids, and the cream-and-serif editorial page.

Product context, audience and truthfulness rules live in `PRODUCT.md`. The direction contract lives in `.impeccable/briefs/home.md`.

## World

| Token | Value | Role |
| --- | --- | --- |
| `paper` | `#FFFFFF` | Report stock, default background |
| `stock` | `#F3F5F8` | Second stock: experience ledger, system diagrams |
| `ink` | `#12151C` | Text, 1.5px borders, Delivery segment |
| `ink-2` | `#454C5A` | Secondary text |
| `ink-3` | `#6A7180` | Tertiary text, white backgrounds only (4.9:1) |
| `rule` | `#DCE0E7` | Hairline rules |
| `finance` | `#0B7A53` (`deep` `#075C3E`, `mist` `#E6F4EE`) | Finance & ERP; owns Key figures |
| `eng` | `#2848D6` (`deep` `#1D36A8`, `tint` `#E7ECFC`) | Engineering; owns the Products band |
| `ai` | `#F2A71B` (`deep` `#8A5B00`, `tint` `#FDF1DA`) | Applied AI; owns Contact; `ai-deep` for text on white |

Rules: square corners, 1.5px ink borders, flat fills. No shadows, gradients, glass or blur. Depth comes only from overlapping flat sheets (the note sheet sits on an offset segment-coloured under-sheet). Saffron never carries white text; text on saffron is ink.

## Type

- Archivo (variable, `wdth` axis) for Latin, Readex Pro for Arabic. The stack is `Archivo, Readex Pro`, so Arabic glyphs fall through to Readex Pro.
- Display sizes use `wdth 112` (`.wide`) with tight negative tracking: `.cover-name`, `.section-title`, `.figure-lead`, `.product-title`, `.contact-email`.
- Figures use tabular lining numerals (`.tabular`).
- Arabic: letter-spacing is forced to 0 (tracking breaks joining), body line-height is 1.8 and display line-heights are relaxed.

## Layout

- `.shell`: 1440px max, 20 / 32 / 40 / 56px side padding.
- Sections share `SectionHeader`: 2px top rule, section number in the margin column, title across six columns, intro in the last four.
- Section rhythm: white cover, green Key figures, white Expertise, cobalt Products band, white Products, stock Experience, white Credentials, saffron Contact, white footer.
- All direction-sensitive spacing uses logical properties (`ms-`, `pe-`, `start-`, `insetInlineStart`), so Arabic mirrors without separate layouts.

## Components

- **Masthead**: sticky; brand mark (three stacked segment bars), name, numbered contents with scroll-spy at `xl`, language toggle, CV button; a "Contents" panel below `xl`.
- **Career chart**: lanes for Finance & ERP, Engineering and Applied AI over 2018–2027. Solid bars mark roles and products, outlined bars mark study, diamonds mark milestones, and a dashed line marks "Now". Rows in `structure.ts` are assigned so labels never collide at ≥1024px. A runway after the axis end gives late labels room. Below 1024px it becomes a per-lane list with mini tracks. Positions are approximate to the month; visible text carries the exact periods.
- **Key figures**: one winning figure (SAR 50,000+) at monumental scale, then five supporting figures. Every figure has a note marker.
- **Expertise**: a four-column ruled grid; each segment has a solid header field, items and a tools line. Columns share subgrid rows at `xl`. An aside states how AI assistants are used to build.
- **Products**: each product shows a status stamp, segment chips, summary and role. A layered system diagram shows real architecture (users → application → services → external), with AI components on a saffron tint. A Built / Not-live-yet schedule shows unfinished work as dashed ghost rows. ElectroNex follows as an earlier build.
- **Experience**: a ledger with period, organisation and role, and contributions. Entries have `id="exp-*"` so notes can jump to them.
- **Notes**: numbered markers (numbering follows first appearance) open a non-modal note sheet with title, body, source and "Go to the entry". The sheet takes focus. Escape closes it and returns focus to the marker; clicking outside also closes it. "Go to the entry" scrolls to the source, focuses it and flashes it once.

## Motion

- Chart bars "post" (scale in from the inline start) in chronological order by start year; labels fade in after their bar.
- Below-fold blocks rise in once when scrolled into view. Content above the fold at load is never hidden, and nothing is hidden without JavaScript.
- `prefers-reduced-motion: reduce` collapses every animation and transition to 1ms and disables smooth scrolling.

## Accessibility

- Target: WCAG 2.2 AA in both languages.
- Skip link; one `h1`; `h2` per section; landmarks; `aria-current` on the active contents item.
- Note markers have descriptive labels, `aria-haspopup="dialog"` and `aria-expanded`. Their hit area is extended to about 37px.
- Visible focus is a 2px cobalt outline.
- Each chart is exposed once: the desktop chart and the mobile list toggle with `display`, and periods are present as screen-reader text on desktop.

## Rasters and provenance

- `app/opengraph-image.tsx` generates the 1200×630 share image at build time with `next/og`. Its lane bars are derived from the same `timeline` data as the career chart; the text is set in the default `next/og` font.
- `app/icon.svg` is a vector of the brand mark.
- The site ships no photographs, logos or third-party imagery.

## Finish review

The review was run in-thread against the direction contract. The Impeccable reviewer and documenter tooling was not available in this environment.

- **Thesis, world, first viewport:** met at 1440×900. The name, headline, intro, actions and the start of the chart are visible. At 1024×768 the chart starts just below the fold.
- **Form raises:** all present (ghost rows, overlap-only depth, one winning figure, real topology, named diagram parts); so are the signature interaction and the motion grammar.
- **Checked:** EN and AR at 1440, 1024 and 390px with no horizontal overflow and no console errors. The reveal leaves nothing hidden. Note open, Escape and click-outside close, focus return, and go-to-entry with highlight are verified.
- **Fixed during review:**
  - The lead figure wrapped its unit.
  - Expertise columns didn't align.
  - Chart labels overflowed at 1024px.
  - The masthead name truncated on phones.
  - Header numbers were low-contrast.
  - The note under-sheet was invisible on the green field.
  - The cobalt segment had no region of its own.
- **Verdict:** ships.
- **Open items** (owner-dependent, listed in the PR): replace the CV PDF, confirm certificate names, and confirm the Pioneers.dev start month.
