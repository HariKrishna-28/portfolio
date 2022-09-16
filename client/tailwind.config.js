/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#1A1A1A",
        textColor: "#FFFFFF",
        secondaryTextColor: "rgb(140,93,247)",
        secondaryHeading: "#8F14FF",
        aboutTile: "#8859F5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
