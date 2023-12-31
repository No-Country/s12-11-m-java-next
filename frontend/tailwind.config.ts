import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightViolet: "#6a1b9a",
        darkViolet: "#631997",
        textColor: "#f4f1f4",
        rosa: "#dcc6e0",
        negro: "#151515",
        whiteColor: "#F9F9F9",
        gray: "#DDDDDD",
        blackMd: "#626262",
        border: "#F9F9F9",
        navShadow: "#000000a4",
        purpleShadow: "#230145",
        purpleVanish: "#4336698a",
      },
      boxShadow: {
        shadowInset: "inset 0px -20px 20px -15px #111",
      },
      backgroundImage: {
        home_bg: "url('/production-home.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(110px, 1fr))",
      },
    },
  },
  plugins: [],
}
export default config
