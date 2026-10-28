// Business details and settings used across the site.

// TODO: Paste your Formspree endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'.
// While this is empty, the form just shows the thank-you message (demo mode)
// and nothing is sent anywhere.
export const FORM_ENDPOINT = '';

export const SITE = {
  name: 'FaithPro Painting Ltd.',
  title: 'FaithPro Painting Ltd. | Painters in the Lower Mainland & Fraser Valley',
  description:
    'FaithPro Painting Ltd. provides professional interior, exterior, cabinet and commercial painting for homes and businesses across the Lower Mainland and Fraser Valley, since 2010.',
  phone: '778-798-2535',
  phoneHref: 'tel:17787982535',
  email: 'info@faithpropainting.ca',
  reviewUrl: 'https://g.page/r/CXSEfgMDmth5EBE/review',
  areas: ['Surrey', 'Vancouver', 'Maple Ridge', 'Richmond', 'Port Coquitlam', 'Coquitlam', 'Chilliwack', 'Fraser Valley'],
};

// Job photos. These currently load from the client's live site (faithpropainting.ca/assets/).
// TODO: download them (or get the originals from the client) and drop them into
// src/assets/photos/ using the same file names. The site picks up local files
// automatically and converts them to optimised WebP; no code changes needed.
export const PHOTOS = {
  heroBefore: { file: 'hero-before.webp', remote: 'https://faithpropainting.ca/assets/hero-before.webp' },
  heroAfter: { file: 'hero-after.webp', remote: 'https://faithpropainting.ca/assets/hero-after.webp' },
  exteriorWork: { file: 'exterior-work.webp', remote: 'https://faithpropainting.ca/assets/exterior-work.webp' },
};
