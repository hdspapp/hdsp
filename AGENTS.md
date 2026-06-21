# HDSP — Home Domestic Services Provider

**Stack:** React 19 + Vite 6 + TypeScript + Tailwind CSS v4 + react-router-dom v7  
**Hosting:** GitHub Pages (`hdsp.pk`) via GitHub Actions  
**Branch:** `feature/service-pages` (active)

## Structure

```
src/
├── pages/        # 5 route pages (88% of code, ~1940 lines)
├── components/   # 4 shared components (Navbar, Footer, FloatingWA, TrustBar)
├── data/         # Constants + JSON-LD schema generators
├── App.tsx       # Router shell (BrowserRouter + 5 routes)
├── main.tsx      # Entry point (StrictMode + createRoot)
└── index.css     # Tailwind v4 theme (custom colors, fonts, utilities)
```

## Where to Look

| Task                            | Location                                  |
| ------------------------------- | ----------------------------------------- |
| Add/edit service page           | `src/pages/*Service.tsx`                  |
| Edit navbar links               | `src/components/Navbar.tsx`               |
| Change WhatsApp/phone/areas     | `src/data/constants.ts`                   |
| Update JSON-LD schema           | `src/data/schema.ts` (prefer over inline) |
| Change CSS theme (colors/fonts) | `src/index.css` `@theme` block            |
| Add/remove routes               | `src/App.tsx`                             |

## Conventions

- **Exports**: `export default function ComponentName()` — no `React.FC`, no named exports for pages
- **Imports**: relative paths, `.tsx` extension required for components, `.ts` extension omitted for data files
- **CSS**: Tailwind v4 `@theme` directives in `index.css` — custom utility classes for bento-card, glass-nav, btn-primary
- **Icons**: `lucide-react` — imported individually per component
- **Animations**: `motion` (framer-motion successor) — `motion.div` with `whileHover`, staggered children
- **WhatsApp CTA**: All pages funnel to `wa.me/923358172235`
- **Linting**: `tsc --noEmit` (no ESLint)
- **Format**: Prettier (`semi`, `singleQuote`, `tabWidth: 2`)

## Anti-Patterns (DO NOT REPEAT)

- **Inline JSON-LD**: Service pages inject schema via manual `document.createElement('script')` — use `src/data/schema.ts` generators instead
- **Inline SEO**: Each page sets `document.title` and meta tags in `useEffect` — extract to a shared `useSEO` hook
- **Orphaned schema.ts**: `generateServiceSchema()` is never imported — pages copy identical schema inline
- **Area array drift**: Shared `AREAS_SERVED` in constants.ts has 11 entries, but **each page** defines its own inline array of 12-14 entries
- **No tests**: Zero test infrastructure (no vitest, no testing-library)
- **Missing strict mode**: `tsconfig.json` lacks `strict: true`
- **`@` alias points to root, not `./src`**
- **No barrel exports**: No `index.ts` — direct file-path imports only

## Commands

```bash
npm run dev      # Dev server on :3000 (HMR)
npm run build    # Production build → dist/
npm run preview  # Preview build locally
npm run lint     # tsc --noEmit type-check
npm run clean    # Remove dist/
```

## Notes

- **Pre-commit**: husky runs `lint-staged` (Prettier) + `npm run lint` (tsc). Commits blocked on type errors.
- **Deploy**: Push to `main` → GitHub Actions → build → deploy to `hdsp.pk`
- **Custom domain**: `hdsp.pk` via CNAME file. OG meta tags still reference `hdsp.app` — needs fix.
- **No `.nojekyll`**: GitHub Pages may skip files starting with `_`
- **`patient-care.jpg`** exists in `public/images/` but is no longer used
