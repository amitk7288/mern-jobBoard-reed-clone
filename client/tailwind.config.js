/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Red Hat Text", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        s: "575px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};