# Abdulmalik Almasud: Portfolio

Source for [abdulmalik.al-masud.com](https://abdulmalik.al-masud.com): a bilingual (English / Arabic) single-page portfolio for Finance & AI Transformation, SAP S/4HANA FI/CO, full-stack development and applied AI.

The design is a light "bilingual annual report": a career-by-segment chart, key figures with numbered source notes, product system diagrams with built / not-live-yet schedules, an experience ledger, credentials and contact. See `DESIGN.md` for the design system and `PRODUCT.md` for audience, positioning and content guardrails.

## Stack

- Next.js 14 (App Router, static output), React 18, TypeScript
- Tailwind CSS 3 with logical properties for RTL
- Archivo and Readex Pro via `next/font`
- CSS animations only (no animation library); `lucide-react` icons

## Editing content

All copy lives in `src/content/`:

- `en.ts` and `ar.ts`: every visible string, one file per language, typed by `types.ts`.
- `structure.ts`: language-independent data such as section order, chart positions, note targets, product status and contact links.

Every claim should trace to the resume or to the product repositories. Follow the guardrails in `PRODUCT.md` before adding figures or product features.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Assets

- `public/Abdulmalik_Almasud_CV.pdf`: the downloadable CV linked from the masthead, cover and contact section.
- `app/opengraph-image.tsx`: the generated share image. `app/icon.svg`: the brand mark.
