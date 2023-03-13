/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F0F6",
        secondary: "#182825",
        action: "#2CDA9D",
        textBlackDark: "#0A0A0B",
        textBlackMedium: "#141415",
        textBlackLight: "#45454A",
        textWhiteDark: "#E7E7E9",
        textWhiteMedium: "#CFCFD3",
        textWhiteLight: "#CCD0DC",
      },
    },
  },
  plugins: [],
};
