/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["var(--font-ibm)"],
        bebas: ["var(--font-bebas)"],
        neue: ["var(--font-neue)"],
        montserrat: ["var(--font-montserrat)"],
        clash: ["var(--font-clash)"],
      },
      colors: {
        soothing_white: "#E2E3E4",
        main_primary: "#5D6BEA",
        primary: "#1E0B37",
        gray: "#868888",
        footer: "#1B1B1B",
      },
      screens: {
        sm: "496px",
        md: "712px",
        lg: "900px",
        xl: "1142px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
