/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(200px, 1fr))",
      },
      animation: {
        blob: "blob 20s infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(0)",
          },
          "33%": {
            transform: "translate(30%, -50%) scale(1.1)",
          },
          "66%": {
            transform: "translate(-30%, 50%) scale(1.5)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
