/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "4px 4px 4px 2px black",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "1" },
          "30%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fade: "fade 0.25s ease-out forwards",
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
