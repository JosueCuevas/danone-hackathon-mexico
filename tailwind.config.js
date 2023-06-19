/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://images.ctfassets.net/sbt660ufyk41/6J8dzSA6E9ptzlHvnbQnlh/0be7631133cd0825005998980505fae2/hero_image.png')",
      },
      colors: {
        blue2: "#0C26FF",
        darkBlue1: "#0A135C",
        darkBlue2: "#10249F",
        lightBlue1: "#85B4FF",
        lightBlue2: "#B3D3FF",
        lightBlue3: "#D5E8FF",
        lightBlue4: "#E8F3FF",
        violetBlue: "#324BAA",
        vividCerulean: "#11ACED",
        heroMask: "#00000080",
        whiteDan: "#F4F2F2",
      },
    },
  },
  plugins: [],
};
