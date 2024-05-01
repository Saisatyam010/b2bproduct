/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1512px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1920px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "rem",
        "2xl": "5rem",
        "3xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#3A0F46",
        secondary: "#FFF14E",
      },
    },
  },
  plugins: [],
};
