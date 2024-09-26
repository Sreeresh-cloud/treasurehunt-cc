/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        openLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-150%)" },
        },
        openRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(150%)" },
        },
      },
      animation: {
        openLeft: "openLeft 3s forwards",
        openRight: "openRight 3s forwards",
      },
    },
  },
  plugins: [],
};
