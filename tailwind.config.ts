import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // ΕΔΩ ΕΙΝΑΙ Η ΔΙΟΡΘΩΣΗ: Προσθέσαμε ξανά τους φακέλους χωρίς src
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Κρατάμε και αυτά για παν ενδεχόμενο
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f4f7f0',
          100: '#eef8e6',
          200: '#dceecf',
          300: '#bde0a7',
          400: '#96cc75',
          500: '#606c38',
          600: '#283618',
          700: '#3f4a25',
          800: '#343c22',
          900: '#2c331f',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-outfit)', 'sans-serif'],
        display: ['var(--font-italiana)', 'serif'], // <--- ΝΕΟ: Για τους Wow τίτλους
      },
    },
  },
  plugins: [],
};
export default config;