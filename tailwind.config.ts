import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      48: "48px",
      64: "64px",
      72: "72px",
      80: "80px",
      96: "96px",
      128: "128px",
      192: "192px",
      256: "256px",
      512: "512px",
    },
    fontSize: {
      body: "14px",
      h3: "24px",
      h2: "32px",
      h1: "64px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      red: "#FF0000",
      cyan: "#00FFFF",
      yellow: "#FFFF00",
    },
    extend: {
      keyframes: {
        flashColor: {
          "0%": { color: "#FF0000" },
          "50%": { color: "#00FFFF" },
          "100%": { color: "#FFFF00" },
        },
      },
      animation: {
        flashColor: "flashColor 1000ms infinite steps(2, end)",
      },
    },
  },
  plugins: [],
};
export default config;
