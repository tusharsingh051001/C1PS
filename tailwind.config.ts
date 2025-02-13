import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        snell: ["Snell Roundhand"],
        cormorant: ["Cormorant Garamond"],
        bloverly: ["Bloverly"],
      },
      fontSize: {
        '5xl':'5rem',
        '6xl': '6rem', // 96px
        '10xl': '10rem', // 160px
        '11xl': '12rem', // 192px
        '18xl': '18rem', // 224px
      },
    },
  },
  plugins: [],
} satisfies Config;
