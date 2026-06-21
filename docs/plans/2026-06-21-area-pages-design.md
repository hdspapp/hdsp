# Area Landing Pages — Design

## Overview

3 localized landing pages for DHA, Clifton, and Gulshan, each covering all 4 HDSP services (Maid, Babysitter, Home Cook, Driver) with area-specific SEO content, testimonials, and WhatsApp CTAs.

## URLs & Routing

- `/area/dha` — DHA landing page
- `/area/clifton` — Clifton landing page
- `/area/gulshan` — Gulshan-e-Iqbal landing page
- Single component `AreaLanding.tsx` parameterized by area slug
- Route pattern: `<Route path="/area/:areaSlug" element={<AreaLanding />} />`

## Page Structure (9 sections, matching service pages)

| #   | Section            | Content                                                                                                                        |
| --- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 1   | **Hero**           | Full-screen gradient bg. Headline: "_Top Domestic Staff in [Area] Karachi_". Subtitle with local context. WhatsApp CTA button. |
| 2   | **TrustBar**       | Reuse `<TrustBar />` component                                                                                                 |
| 3   | **Why This Area**  | 2-3 paragraph localized intro — schools, hospitals, busy households in the area                                                |
| 4   | **Services**       | All 4 services (Maid, Babysitter, Home Cook, Driver) listed with area-specific descriptions                                    |
| 5   | **Hiring Options** | Full-time / Part-time / Temporary — same pattern as service pages                                                              |
| 6   | **Areas Served**   | Sub-localities within that area (e.g., DHA Phase 2, 4, 6, 8; Clifton Block 1-9; Gulshan Block 1-13)                            |
| 7   | **FAQ**            | 5-6 area-specific questions (pricing trends, availability, response time in that area)                                         |
| 8   | **Testimonials**   | 3 testimonials from residents of that specific area (pulled from area data)                                                    |
| 9   | **Guarantee**      | Reuse guarantee section                                                                                                        |
| 10  | **FinalCTA**       | Gradient banner with WhatsApp link (area-specific pre-filled message)                                                          |

## Data Architecture

### `src/data/constants.ts` — New `AREA_DETAILS` map

```typescript
export const AREA_DETAILS = {
  dha: {
    name: 'DHA',
    fullName: 'DHA (Defence Housing Authority)',
    slug: 'dha',
    subLocalities: ['Phase 2', 'Phase 4', 'Phase 6', 'Phase 8'],
    landmarks: ['Gulshan-e-Jinnah', 'DHA Golf Club', 'DHA Creek Club'],
    heroSubtitle: 'Karachi ke sabse organized area ke liye trusted domestic staff',
    seoTitle: 'Top Domestic Staff in DHA Karachi — Maids, Nannies, Cooks & Drivers',
  },
  clifton: { ... },
  gulshan: { ... },
} as const;
```

### `src/data/schema.ts` — `generateAreaSchema()`

Generate `LocalBusiness` + `Service` JSON-LD with area-specific `areaServed`, targeting local search.

### `AreaLanding.tsx` — Single parameterized component

- Reads `areaSlug` from URL params
- Looks up area data from `AREA_DETAILS`
- Renders all sections populated with area-specific data
- Falls back to 404/redirect if unknown area slug

## SEO

- Each page: unique `<title>`, `<meta description>`, OG tags via shared `useSEO` hook
- JSON-LD schema via `generateAreaSchema()` — fixes the inline schema anti-pattern
- h1 includes area name + service keywords
- Canonical URL: `https://hdsp.pk/area/{slug}`

## Lighthouse Fixes (included in this phase)

### Heading Hierarchy

- Pain point labels on Home: `h4` → `h3` (currently h1→h2→h4, skipping h3)
- Verification steps on Home: `h4` → `h3`
- Same pattern on service pages if applicable

### Color Contrast

- `text-deep-charcoal/90` on headings → use opaque `text-deep-charcoal`
- Verify warm-accent (#C1440E) on backgrounds meets WCAG AA contrast
- Adjust if needed

## No New Components

- No extraction/refactoring of shared section components (deferred)
- The areas page uses a single new file, inline sections matching existing pattern
- Lighthouse fixes are CSS-only changes
