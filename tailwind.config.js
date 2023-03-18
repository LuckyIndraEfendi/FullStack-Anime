/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greenlight: {
          500: '"#CAE962"',
        },
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      public: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    // all the following default to ['responsive']
    mixBlendMode: ["responsive"],
    backgroundBlendMode: ["responsive"],
    isolation: ["responsive"],
  },
  plugins: [
    require("tailwindcss-blend-mode"), // no options to configure
  ],
};
