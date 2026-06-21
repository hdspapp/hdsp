# Area Landing Pages + Lighthouse Fixes — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build 3 localized area landing pages (DHA, Clifton, Gulshan) with all 4 services per page, and fix pre-existing Lighthouse issues (heading hierarchy, color contrast).

**Architecture:** Single `AreaLanding.tsx` component parameterized by URL slug (`/area/:areaSlug`), driven by `AREA_DETAILS` data map in constants. Lighthouse fixes are CSS-only changes in `index.css` and heading level tweaks in `Home.tsx`.

**Tech Stack:** React 19, Vite 6, Tailwind CSS v4, react-router-dom v7, motion (framer-motion), lucide-react

---

## Task 1: Add AREA_DETAILS data + useSEO hook

**Files:**

- Modify: `src/data/constants.ts` — add `AREA_DETAILS` map
- Create: `src/hooks/useSEO.ts` — shared SEO hook
- Modify: `src/data/schema.ts` — add `generateAreaSchema()`

### Step 1: Add AREA_DETAILS to constants.ts

Append after `AREAS_SERVED`:

```typescript
export const AREA_DETAILS = {
  dha: {
    name: 'DHA',
    fullName: 'DHA (Defence Housing Authority)',
    slug: 'dha',
    subLocalities: [
      'Phase 2',
      'Phase 4',
      'Phase 6',
      'Phase 8',
      'Phase 1',
      'Phase 3',
      'Phase 5',
      'Phase 7',
      'DHA City',
    ],
    landmarks: [
      'Gulshan-e-Jinnah',
      'DHA Golf Club',
      'DHA Creek Club',
      'DHA Marina',
    ],
    heroSubtitle:
      'Karachi ke sabse organized area ke liye trusted domestic staff',
    seoTitle:
      'Top Domestic Staff in DHA Karachi — Maids, Nannies, Cooks & Drivers',
    seoDescription:
      'Need verified maids, nannies, cooks, or drivers in DHA Karachi? HDSP provides NADRA-checked, police-cleared domestic staff with 30-day replacement guarantee.',
    heroHeadline: 'DHA Mein Ghar Ke Liye Best Domestic Staff',
    whySection:
      'DHA Karachi is home to thousands of families who need reliable household help. From Phase 2 to Phase 8, busy professionals and large families alike trust HDSP for verified maids, nannies, cooks, and drivers who are trained, punctual, and background-checked.',
    faq: [
      {
        q: 'DHA mein maid service kitni hai?',
        a: 'Maid service charges DHA mein aap ki requirements pe depend karti hain — full-time ya part-time, daily cleaning ya specific tasks. WhatsApp karein to detailed pricing share kar denge.',
      },
      {
        q: 'DHA mein babysitter mil sakti hai?',
        a: 'Haan, DHA mein experienced babysitters available hain. Sab trained hain aur reference checks ke baad placed kiye jaate hain.',
      },
      {
        q: 'DHA mein cook kaise milega?',
        a: 'WhatsApp karein, hum 24 ghante mein aapke DHA location ke nearest available cook suggest kar denge.',
      },
      {
        q: 'Kya DHA mein weekend driver milta hai?',
        a: 'Yes, part-time aur weekend drivers available hain DHA mein. Friday/Saturday/Sunday ke liye temporary driver bhi le sakte hain.',
      },
      {
        q: 'DHA mein staff replacement guarantee kaise kaam karti hai?',
        a: '30 din ke andar agar koi issue hai to hum free replacement dete hain. Koi sawaal nahi, koi argument nahi.',
      },
    ],
    testimonials: [
      {
        name: 'Ayesha K.',
        loc: 'DHA Phase 6',
        text: "Found HDSP via WhatsApp group recommendation. It's been 4 months and I've had zero issues. The documentation sharing was very reassuring.",
      },
      {
        name: 'Farhan M.',
        loc: 'DHA Phase 8',
        text: "Returned from Dubai and was worried about local staffing. HDSP's process and accountability is exactly what Karachi needed.",
      },
      {
        name: 'Sana K.',
        loc: 'DHA Phase 4',
        text: 'Our HDSP driver has been with us for 2 months now. Punctual, careful, and great with our kids.',
      },
    ],
  },
  clifton: {
    name: 'Clifton',
    fullName: 'Clifton',
    slug: 'clifton',
    subLocalities: [
      'Block 1',
      'Block 2',
      'Block 3',
      'Block 4',
      'Block 5',
      'Block 6',
      'Block 7',
      'Block 8',
      'Block 9',
      'Clifton Beach',
    ],
    landmarks: ['Clifton Beach', 'Seaview', 'Dolmen Mall', 'Clifton Market'],
    heroSubtitle: 'Karachi ke prime area mein ghar ke liye professional staff',
    seoTitle:
      'Trusted Domestic Staff in Clifton Karachi — Maids, Nannies, Cooks & Drivers',
    seoDescription:
      'Looking for verified household staff in Clifton? HDSP offers CNIC-checked maids, trained nannies, professional cooks, and licensed drivers with 30-day replacement.',
    heroHeadline: 'Clifton Mein Professional Ghar Ka Staff',
    whySection:
      "Clifton is Karachi's premier residential area, home to professionals and families who demand high standards. HDSP matches you with domestic staff who understand the expectations of Clifton households — trained, verified, and ready to serve.",
    faq: [
      {
        q: 'Clifton mein full-time maid kitne ki hai?',
        a: 'Clifton mein maid ki pricing requirements ke hisaab se change hoti hai. WhatsApp karein to aapki specific needs ke according quote share kar denge.',
      },
      {
        q: 'Clifton mein nanny available hai?',
        a: 'Haan, Clifton mein trained nannies available hain. Sab first aid trained aur reference verified hain.',
      },
      {
        q: 'Clifton mein cook kaise book karein?',
        a: 'Bas WhatsApp karein. Hum aapki taste preferences aur diet requirements samajh kar suitable cook suggest karte hain.',
      },
      {
        q: 'Clifton mein driver ka verification process?',
        a: 'Har driver CNIC verified, police cleared, aur valid license ke saath aata hai. GPS tracking bhi available hai.',
      },
      {
        q: 'Kya Clifton mein trial le sakte hain?',
        a: 'Haan, temporary placement le kar trial kar sakte hain. 30-day replacement guarantee bhi included hai.',
      },
    ],
    testimonials: [
      {
        name: 'Samina R.',
        loc: 'Clifton',
        text: "HDSP sent us a wonderful maid who completely transformed our household. She's thorough, punctual, and my family is finally stress-free.",
      },
      {
        name: 'Tariq M.',
        loc: 'Clifton',
        text: 'I needed a temporary driver for a month while recovering from surgery. HDSP arranged a verified, professional driver within 24 hours.',
      },
      {
        name: 'Zainab T.',
        loc: 'Clifton',
        text: 'The cook HDSP placed with us makes the best homemade food. She adapts to our taste preferences and maintains excellent kitchen hygiene.',
      },
    ],
  },
  gulshan: {
    name: 'Gulshan',
    fullName: 'Gulshan-e-Iqbal',
    slug: 'gulshan',
    subLocalities: [
      'Block 1',
      'Block 2',
      'Block 3',
      'Block 4',
      'Block 5',
      'Block 6',
      'Block 7',
      'Block 10',
      'Block 13',
      'Gulshan Chowrangi',
    ],
    landmarks: [
      'NED University',
      'Gulshan Chowrangi',
      'Aisha Bawany Park',
      'Uzair Market',
    ],
    heroSubtitle: 'Karachi ke central area ke liye bharose ka domestic staff',
    seoTitle:
      'Verified Domestic Staff in Gulshan Karachi — Maids, Babysitters & More',
    seoDescription:
      'Find trusted, verified domestic staff in Gulshan-e-Iqbal Karachi. HDSP provides NADRA-checked maids, babysitters, home cooks, and drivers with police clearance.',
    heroHeadline: 'Gulshan-e-Iqbal Mein Verified Staff',
    whySection:
      "Gulshan-e-Iqbal is one of Karachi's largest and most diverse residential areas. With NED University nearby and thousands of families across its blocks, finding reliable domestic staff is a common challenge. HDSP bridges that gap with fully verified professionals.",
    faq: [
      {
        q: 'Gulshan mein maid service available hai?',
        a: 'Haan, Gulshan ke almost all blocks mein HDSP ki maid service available hai. Full-time aur part-time dono options hain.',
      },
      {
        q: 'Gulshan mein babysitter kitne ki hai?',
        a: 'Babysitter charges experience aur hours ke hisaab se vary karte hain. WhatsApp karein to details share kar denge.',
      },
      {
        q: 'Gulshan mein cook mil sakta hai?',
        a: 'Haan, Gulshan mein experienced cooks available hain jo daily meals, special dishes, aur diet-specific cooking kar sakte hain.',
      },
      {
        q: 'Gulshan mein areas kaun se aate hain?',
        a: 'Hum Gulshan ke Block 1 se 13 tak, Gulshan Chowrangi, aur nearby areas mein service provide karte hain.',
      },
      {
        q: 'Kya Gulshan mein emergency staff mil sakta hai?',
        a: 'Haan, emergency placements ke liye WhatsApp karein. Hum 24 ghante mein staff arrange karne ki koshish karte hain.',
      },
    ],
    testimonials: [
      {
        name: 'Zainab T.',
        loc: 'Gulshan-e-Iqbal',
        text: 'The cook HDSP placed with us makes the best homemade food. She adapts to our taste preferences and maintains excellent kitchen hygiene.',
      },
      {
        name: 'Fatima S.',
        loc: 'Gulshan-e-Iqbal',
        text: "The nanny HDSP arranged for our toddler is amazing with kids. She's patient, well-trained, and we feel completely at ease.",
      },
      {
        name: 'Rizwan A.',
        loc: 'Gulshan-e-Iqbal',
        text: "HDSP's verification process is incredibly thorough. The GPS tracking on our driver gives us complete peace of mind.",
      },
    ],
  },
} as const;

export type AreaSlug = keyof typeof AREA_DETAILS;
```

### Step 2: Create useSEO hook

Create `src/hooks/useSEO.ts`:

```typescript
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);
}
```

### Step 3: Add generateAreaSchema to schema.ts

Add after `generateServiceSchema`:

```typescript
interface AreaSchemaProps {
  areaName: string;
  areaDescription: string;
  areaSlug: string;
}

export function generateAreaSchema({
  areaName,
  areaDescription,
  areaSlug,
}: AreaSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Service'],
    name: `Domestic Staff in ${areaName}, Karachi — ${COMPANY_NAME}`,
    description: areaDescription,
    url: `https://hdsp.pk/area/${areaSlug}`,
    telephone: PHONE_NUMBER,
    areaServed: [{ '@type': 'City', name: `${areaName}, Karachi` }],
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      telephone: PHONE_NUMBER,
    },
  };
}
```

---

## Task 2: Create AreaLanding.tsx

**Files:**

- Create: `src/pages/AreaLanding.tsx`

Single parameterized component following the 9-section service page template. Uses `useSEO`, `AREA_DETAILS`, `generateAreaSchema`, WhatsApp CTAs.

### Step 1: Write AreaLanding.tsx

Reads `areaSlug` from `useParams()`, looks up `AREA_DETAILS[areaSlug]`, renders all sections. Falls back to `<Navigate to="/" />` for invalid slugs.

Sections: Hero → TrustBar → WhyThisArea → Services → HiringOptions → SubLocalities → FAQ → Testimonials → Guarantee → FinalCTA

### Step 2: TypeScript check

Run: `npm run lint` — should pass

---

## Task 3: Add routes + Navbar links

**Files:**

- Modify: `src/App.tsx` — add `/area/:areaSlug` route
- Modify: `src/components/Navbar.tsx` — add "Areas" dropdown or links

### Step 1: App.tsx

Add import and route after existing service routes:

```typescript
import AreaLanding from './pages/AreaLanding';
// ...
<Route path="/area/:areaSlug" element={<AreaLanding />} />
```

### Step 2: Navbar.tsx

Add 3 area links — DHA, Clifton, Gulshan. As a dropdown under "Areas" or as separate nav items.

---

## Task 4: Lighthouse fixes

**Files:**

- Modify: `src/index.css` — color contrast fixes
- Modify: `src/pages/Home.tsx` — heading hierarchy fix

### Step 1: Fix heading hierarchy in Home.tsx

- Pain point section titles (currently `h4`): change to `h3` — h1→h2→h3 (fixes skipped heading level)
- Verification step labels (currently `h4` under `h2`): change to `h3`

### Step 2: Fix color contrast in index.css

- `text-deep-charcoal/90` on headings → change to `text-deep-charcoal` (solid)
- Verify `warm-accent (#C1440E)` contrast on common backgrounds
- If needed, darken warm-accent for better WCAG AA compliance

---

## Task 5: Build, verify, deploy

### Step 1: Build

Run: `npm run build`
Expected: exit code 0, dist/ includes 404.html

### Step 2: TypeScript check

Run: `npm run lint`
Expected: exit code 0

### Step 3: Commit & push to main

```bash
git add -A
git commit -m "feat: add area landing pages (DHA, Clifton, Gulshan) + Lighthouse fixes"
git push origin main
```

### Step 4: Verify live site

Wait for GitHub Actions deploy to complete, then verify:

- `https://hdsp.pk/area/dha` — all sections render
- `https://hdsp.pk/area/clifton` — all sections render
- `https://hdsp.pk/area/gulshan` — all sections render
- `https://hdsp.pk/area/invalid` — redirects to /
- `https://hdsp.pk/` — heading hierarchy fixed, contrast improved
