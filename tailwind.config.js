// tailwind.config.js
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  mode:'jit',
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}

export default config;