/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#c3ffbe",
        "custom-blue-100": "#f1f9ff",
        "custom-blue-200": "#e3f3fc",
        "custom-blue-300": "#d9efff",
        "custom-blue-dark": "#105583",
      },
    },
  },
  plugins: [],
};
