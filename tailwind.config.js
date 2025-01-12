/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "4px 4px 4px 2px black",
      },
      keyframes: {
        radialPulse: {
          "0%": { transform: "scale(0)", opacity: "0.8" },
          "100%": { transform: "scale(100)", opacity: "0" },
        },
      },
      animation: {
        "pulse-radial": "radialPulse 1s linear",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
