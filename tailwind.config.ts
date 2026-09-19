import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C8A95B",
        maroon: "#6D071A",
        beige: "#F6F1E7",
        ivory: "#FFFDF7",
        deep: "#1E1A17",
      },
      backgroundImage: {
        luxury: "linear-gradient(135deg,#fffdf7,#f3e7d2,#fdfbf6)",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(109, 7, 26, 0.12)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(200,169,91,0.4)" },
          "50%": { boxShadow: "0 0 20px rgba(200,169,91,0.8)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
