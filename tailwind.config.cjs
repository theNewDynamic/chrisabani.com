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
          ['Amatic\\ SC', 'Helvetica', 'sans-serif'],
          'condensed':
          ['IBM\\ Plex\\ Sans\\ Condensed', 'Helvetica', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
