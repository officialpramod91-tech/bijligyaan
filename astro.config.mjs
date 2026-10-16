// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bijligyaan.in',

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    // 1. RCCB Safety Guide
    '/2026/01/ghar-mein-rccb-lagana-kyun-zaruri-hai.html': '/articles/ghar-mein-rccb-lagana-kyun-zaruri-hai/',

    // 2. Geyser Installation Safety Guide
    '/2026/01/geyser-lagane-se-pehle-kya-dhyan-rakhe.html': '/articles/geyser-lagane-se-pehle-kya-dhyan-rakhe/',

    // 3. Stabilizer Guide
    '/2026/03/stabilizer-kya-hota-hai-ac-fridge-tv-guide-2026.html': '/articles/stabilizer-kya-hota-hai-ac-fridge-tv-guide/',

    // 4. AC Comparison Guide
    '/2026/02/5-star-vs-3-star-vs-inverter-ac-bijli-bill-comparison.html': '/articles/5-star-vs-3-star-vs-inverter-ac-bijli-bill-comparison/',

    // 5. Solar Inverter Guide
    '/2026/03/solar-inverter-vs-normal-inverter.html': '/articles/solar-inverter-vs-normal-inverter/',

    // 6. Best Geyser Buying Guide
    '/2026/01/best-geyser-for-small-family-in-india.html': '/articles/best-geyser-for-small-family-in-india/',

    // 7. Winter Bill Saving Guide
    '/2026/01/winter-me-bijli-bill-kaise-kam-kare-7.html': '/articles/winter-me-bijli-bill-kaise-kam-kare/',

    // 8. Cooler Buying Guide
    '/2026/04/cooler-kharidne-se-pehle-kya-dhyan-de.html': '/articles/cooler-kharidne-se-pehle-kya-dhyan-de/',

    '/p/about-us.html': '/about/',
  },

  integrations: [sitemap()],
});