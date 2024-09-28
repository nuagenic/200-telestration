import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        vh: "100vh",
        "1/2vh": "50vh",
        "3/4vh": "75vh",
      },
      height: {
        vh: "100vh",
        "1/2vh": "50vh",
        "3/4vh": "75vh",
      },
      fontFamily: {
        KoPub: ["KoPubWorldBatang", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
