/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  // theme: {
  //   colors: {
  //     transparent: "transparent",
  //     darkGray: "#202729",
  //     greenPrimary: "#4ba173",
  //     greenSecondary: "#63d297",
  //     white: "#ffffff",
  //     lightGray: "#e5e7eb",
  //     lightEmerald: "#ecfdf5",
  //     red: "#dc2626",
  //     // beige: "#fbd1a2",
  //     // blackgrey: "#1f2937",
  //     // gray: "#9ca3af",
  //     // bluegreen: "#0d98ba",
  //     // lightOrange: "#fff7ed",
  //   },
  // },
};
