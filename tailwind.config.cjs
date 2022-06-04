module.exports = {
  mode: "JIT",
  darkMode: "class",
  // purge: {
  //   content: ["./public/**/*.html", "./src/**/*.{astro,js,ts}"],
  //   safelist: ["dark"],
  // },
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brand':
          ['Amatic\\ SC', 'Helvetica']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
