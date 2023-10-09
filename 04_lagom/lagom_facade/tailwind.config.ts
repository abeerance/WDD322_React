// import type { Config } from 'tailwindcss';
const defaultTheme = require("tailwindcss/defaultTheme");
const fontSize = require("./src/theme/font-size");
const colors = require("./src/theme/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // custom breakpoints
    screens: {
      xs: { max: "575px" },
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1360px",
    },
    // here you extend the tailwind theme
    extend: {
      lineHeight: {
        3.5: "0.875rem",
      },
      // here the custom font-sizes from font-size.js are added
      fontSize,
      boxShadow: {
        1: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        2: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 12px rgba(0, 0, 0, 0.25);",
      },
      // here the custom colors from colors.js are added
      colors,
      spacing: {
        4.5: "1.125rem",
        13: "3.25rem",
        18: "4.5rem",
        19: "4.75rem",
        21: "5.25rem",
        28: "7rem",
      },
      fontFamily: {
        bree: ["var(--font-bree)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
