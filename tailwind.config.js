/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      brand: {
        200: "#dfa921",
        500: "#af8e51",
      },
    },
    fontFamily: {
      navbar: "Montserrat",
      cinzel: "Cinzel",
      heroTitle: "Abril Fatface",
      heroDesc: "Playfair Display",
      giftingTitle: "Poetsen One",
      giftingDesc: "Reddit Sans",
      fairytale: "Great Vibes",
      store: "DM Serif Display",
      bondi: "Bodoni Moda",
    },
    fairytale_bg: {
      oneandonly: "/one&onlybackground.jpg.jpg",
      gemstone: "/gemstonebackground.jpg",
      pearls: "/pearlbackground.jpg.jpg",
      diamond: "/diamondbackground.jpg.jpg",
    },
  },
  plugins: [],
};
