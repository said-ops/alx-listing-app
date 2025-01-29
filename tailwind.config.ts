import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors : {
      primaryColor : '#34967C',
      seconadyColor : '#161117',
      accentColor: '#FFA800',
     },
     screens: {
      'xl2': '1440px',
      'xl3': '1728px',
    },
    }
  },
  plugins: [],
} satisfies Config;
