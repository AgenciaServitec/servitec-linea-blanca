/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": {
          50: "#edfcfe",
          100: "#d2f3fb",
          200: "#abe8f6",
          300: "#71d5ef",
          400: "#30b9e0",
          500: "#16a8d4",
          600: "#147da6",
          700: "#176587",
          800: "#1c536e",
          900: "#1b465e",
          950: "#0c2d40",
        },
        "secondary-color": {
          50: "#eff7ff",
          100: "#deeeff",
          200: "#b6dfff",
          300: "#76c6ff",
          400: "#2daaff",
          500: "#028ff5",
          600: "#0070d2",
          700: "#0059aa",
          800: "#004e90",
          900: "#073f73",
          950: "#04284d",
        },
        "tertiary-color": {
          50: "#eff7ff",
          100: "#deefff",
          200: "#b5e1ff",
          300: "#73c9ff",
          400: "#28adff",
          500: "#0093fb",
          600: "#0073d7",
          700: "#005cae",
          800: "#004e8f",
          900: "#044176",
          950: "#032d57",
        },
      },
      width: {
        98: "26rem",
        100: "30rem",
      },
      height: {
        98: "26rem",
        100: "30rem",
      },
      fontFamily: {
        sans: ["Nunito Variable", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: false, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
