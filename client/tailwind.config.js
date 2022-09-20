/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#0C1116",
        secondaryBackground: "#171A22",
        secondaryText: "#A3B2AD",
        textColor: "#FEFEFF",
        fancyTestStart: "#4CA4FE",
        fanctTextEnd: "#B077F8",
        borderColor: "#40A1FE",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
