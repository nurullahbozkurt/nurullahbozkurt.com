module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    boxShadow: {
      specialB:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      specialA:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      specialY:
        "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      specialX:
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      special:
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    },
    fontFamily: {
      nunito: ["Nunito"],
      electrolize: ["Electrolize"],
    },
    extend: {
      backgroundImage: {
        bg: "url('/img/bg3.jpg')",
        bgGr: "linear-gradient(to right bottom, #2c121f, #2a1725, #271b2a, #241f2c, #23232e, #21252f, #202730, #202930, #1f2a30, #1e2b2f, #1f2c2d, #202d2c);",
      },
      colors: {
        darkTailwindBody: "#111a2d",
        darkTailwindHeader: "#0e1729",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
