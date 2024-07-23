/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}",
    "../../node_modules/notro/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", // Notro components (for monorepo)
    "./node_modules/notro/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", // Notro components
    "./cache/**/*.json" // Classes used in Notion
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
