# FaithPro Painting website

The one-page website for **FaithPro Painting Ltd.**, built with [Astro](https://astro.build) from the design handoff in `docs/HANDOFF.md`.
It's a plain static site with no database and no server code. Styles are plain CSS and the small amount of JavaScript is vanilla.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22.22 or newer.

```bash
npm install      # first time only: downloads the tools
npm run dev      # starts a local preview at http://localhost:4321 that updates as you edit
npm run build    # builds the finished site into the dist/ folder
```

## Where to change things

| What | File |
| --- | --- |
| Services, reviews, trust strip, process steps, project-type chips | `src/data/content.ts` |
| Phone, email, service areas, page title & description | `src/data/site.ts` |
| **Quote form destination** | `FORM_ENDPOINT` in `src/data/site.ts` |
| Colours, fonts, spacing | `src/styles/global.css` (colours are at the top) |
| Page layout and headings | `src/pages/index.astro` |
| Slider, reviews, form and scroll animations | `src/scripts/main.ts` |
| Logo | `src/assets/faithpro-logo.png` |
| Favicon / social share image | `public/favicon.png`, `public/og-image.png` |

### Connect the quote form

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`).
2. Paste it into `FORM_ENDPOINT` in `src/data/site.ts`.

Until you do this, the form only shows the thank-you message and **doesn't send anything**.

### Job photos

The three photos (before/after slider and the "standard" section) currently load from the client's live site at `faithpropainting.ca/assets/`. **These will break once this new site replaces the old one on that domain**, so before launch:

1. Download `hero-before.webp`, `hero-after.webp` and `exterior-work.webp` (or get the originals from the client).
2. Put them in `src/assets/photos/` with exactly those names (`.jpg`/`.png` also work if you change the `file` name in `src/data/site.ts`).

The site picks them up automatically and creates optimised WebP sizes. You don't need to change any code.

## Deploy on Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), choose **Add New → Project** and import the repo.
3. Vercel detects **Astro** automatically. Leave every setting as it is and click **Deploy**.

Every push to `main` will redeploy the site.

The domain is set in `astro.config.mjs` (`site: 'https://faithpropainting.ca'`). It's used for the canonical link and the social share image, so update it if the site goes live somewhere else.

## Before launch: confirm with client

From the design handoff:

- More job photos. Only three were available.

Also to do:

- Set `FORM_ENDPOINT` (see above).
- Serve the three job photos locally (see above).
- Confirm the final domain in `astro.config.mjs`.
