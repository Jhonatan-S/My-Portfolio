import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     padding: {
      "px": ".5rem"
     },
     colors: {
      "primary-color": "#E74C3C",
      "text-light-color": ""
     }
    },
  },
  plugins: [],
};
export default config;
