# src/pages/ — Route Page Components

5 files, ~1940 lines combined (88% of app code).

## Page Map

| File                    | Route                  | Lines | Sections                                                                                   |
| ----------------------- | ---------------------- | ----- | ------------------------------------------------------------------------------------------ |
| `Home.tsx`              | `/`                    | 355   | Hero, PainPoints, Services, Verification, Testimonials, Guarantee, FinalCTA                |
| `MaidService.tsx`       | `/maid-service`        | 387   | Hero→TrustBar→ServiceDetails→HiringOptions→AreasServed→FAQ→Testimonials→Guarantee→FinalCTA |
| `BabysitterService.tsx` | `/babysitting-service` | 386   | Same 9-section pattern                                                                     |
| `HomeCookService.tsx`   | `/home-cook-service`   | 362   | Same 9-section pattern                                                                     |
| `DriverService.tsx`     | `/driver-service`      | 449   | Same 9-section + "Security & Verification"                                                 |

## Page Patterns

- **Export**: `export default function PageName()` — no props, no `React.FC`
- **Animations**: `motion.div` with `whileHover`, staggered children via `motion.div` parent `variants`
- **SEO**: Each page sets `document.title`, meta tags, and injects JSON-LD `<script>` via `useEffect` — all inline DOM manipulation
- **Data**: Every section (FAQ, testimonials, hiring options, service details, areas) uses inline static arrays. No imports from `src/data/`
- **Icons**: Each page imports its own subset of `lucide-react` icons individually

## Sections Shared Across Service Pages

All 4 service pages have identical (copied) section structure:

1. **Hero** — Full-screen gradient bg, heading, subtitle, CTA button
2. **TrustBar** — `<TrustBar />` component (from `src/components/`)
3. **ServiceDetails** — bento grid of service features
4. **HiringOptions** — 3-card row (full-time, part-time, trial)
5. **AreasServed** — Alphabetical grid of areas (12-14 entries, differs per page, none match `constants.ts`)
6. **FAQ** — Accordion-style Q&A (4-6 items)
7. **Testimonials** — 3-card testimonial row
8. **Guarantee** — Single bento card
9. **FinalCTA** — Gradient banner with WhatsApp link

Only DriverService adds a Security & Verification section between Guarantee and FinalCTA.

## Code Smells (Directory-Specific)

Full list in root AGENTS.md. Below are the ones specific to this directory:

- **Copy-paste service pages**: All 4 service pages are near-identical. Section components could be extracted and parameterized (service name, details, FAQ items, areas). ~1400 lines of boilerplate.
- **No barrel export**: No `src/pages/index.ts`. Routes in `App.tsx` import individual files directly.
- **Prop-less bloat**: Every page is a monolithic component. Sections (FAQ, Testimonials, AreasServed) are duplicated inline instead of being shared components that accept data props.
- **Inline data drift**: Each page's area array is hand-typed. Some include areas not in `constants.ts` (`const AREAS_SERVED` has 11 areas; pages have 12-14, partially overlapping).
- **Unique identifier gap**: No `data-page` attributes or route metadata. Hard to target pages programmatically.

## When Editing Pages

- **Add section**: Copy pattern from an existing page. Know you're adding to the duplication problem.
- **Fix area list**: Also update `constants.ts` `AREAS_SERVED` and the schema generators.
- **Add new service page**: Create new file in this directory, add route in `App.tsx`. Follow the 9-section template, expect ~380 lines.
