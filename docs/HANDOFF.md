# Handoff: FaithPro Painting website

## Overview
One-page rebuild of faithpropainting.ca: premium residential painting. The goal is quote requests. The palette is navy #071A35 / #123E7C. Headings use Libre Caslon Text to match the logo, body text uses Montserrat.

## About the design files
These are **design references built in HTML**, not production code. Rebuild them in a real stack. If there's no existing codebase, use **Astro or Next.js (static export) + Tailwind**, deployed on Vercel.
- `*.dc.html`: the source prototype. All copy and data arrays are in the script at the bottom.
- `preview.html`: a clickable preview. Unzip the folder first, because some images load from the asset folder next to it.
- The asset folder holds the logo and photos.
- `support.js`: prototype runtime only. **Do not ship it.**

## Fidelity
**High fidelity.** Colours, type, spacing, copy and interactions are final. Exact values are inline in the prototype. Copy comes from the client's current site. **Don't add services, reviews, prices or claims.**

## Shared conventions
- **Easing:** `cubic-bezier(.16,.84,.3,1)` throughout.
- **Hero load animation:** text rises in, staggered about 100ms between elements; the hero image eases from a slight zoom.
- **Scroll reveal:** `[data-reveal]` elements fade up 28–36px as they enter the viewport, staggered about 80ms between siblings.
- **Reduced motion:** respect `prefers-reduced-motion`.
- **Shape:** square corners. Max width 1440px. Side padding clamp(18px, 4vw, 48px).
- **Mobile (below 1000px):** nav hides, and a sticky bottom bar (Call + Quote) appears. Pad the footer so the bar doesn't cover it.
- **Footer:** includes "Powered by Backpack Digital Media" (https://backpackdigitalmedia.com).

## To finish at build time
- Connect the form to email (e.g. Formspree or Resend).
- Add a page title and description, Open Graph image, favicon, and LocalBusiness JSON-LD.
- Convert images to WebP or AVIF and lazy-load them below the fold.

## Sections
1. **Hero:** a before/after house slider is the first thing visitors see. Headline: "Finish with …".
2. **Services:** their 6 services.
3. **The standard:** "Beautiful results begin with …".
4. **Process:** their 3 steps, "From first walkthrough …".
5. **Reviews:** 3 Google reviews and a link to leave a review (https://g.page/r/CXSEfgMDmth5EBE/review).
6. **Quote:** "Ready to transform …" with the form.

## Images
**The photos are hot-linked from faithpropainting.ca/assets/:** hero-before.webp, hero-after.webp and exterior-work.webp. Download these from their live site, or get the originals from the client, and serve them locally.

## Tokens
- **Navy:** #071A35 / #0B1F3D / #123E7C
- **Light blue:** #9FB3D1 / #C9D6EA
- **Stone:** #E2E0D9 / #CFCCC2
- **Body text:** #55617A / #3E4A62

## Contact
778-798-2535 · info@faithpropainting.ca

## Confirm with client
- More job photos. Only three were available.
