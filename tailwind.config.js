/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./db/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme.config.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0fa997",
        secondary: "#10c1ad",
        dprimary: "#C400FF",
        dsecondary: "#ff099e",
        light: "#f2fcfb",
        dark: "#291d29",
        blight: "#e6f9f8",
        bdark: "#3f283f",
      },
    },
  },
  plugins: [],
};
