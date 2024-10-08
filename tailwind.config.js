/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#000C14",
        50: "#007ACC",
        100: "#006EB7",
        200: "#00558E",
        300: "#003D66",
        400: "#00243D",
        500: "#000C14",
        600: "#06080C",
        700: "#001524",
        800: "#00060A",
        900: "#001C30",
        950: "#000000",
      },
      secondary: {
        DEFAULT: "#FF8343",
        50: "#FFFCFB",
        100: "#FFEFE6",
        200: "#FFD4BD",
        300: "#FFB995",
        400: "#FF9E6C",
        500: "#FF8343",
        600: "#FF5E0B",
        700: "#D24700",
        800: "#9A3400",
        900: "#622100",
        950: "#461800",
      },
      customPink: {
        DEFAULT: "#FF8225",
        50: "#FFEBDD",
        100: "#FFE0C8",
        200: "#FFC89F",
        300: "#FFB177",
        400: "#FF994E",
        500: "#FF8225",
        600: "#EC6500",
        700: "#B44D00",
        800: "#7C3500",
        900: "#441D00",
        950: "#281100",
      },
      customPink: {
        DEFAULT: '#AD49E1',
        50: '#F4E7FB',
        100: '#ECD5F8',
        200: '#DCB2F2',
        300: '#CD8FED',
        400: '#BD6CE7',
        500: '#AD49E1',
        600: '#9422D0',
        700: '#721AA0',
        800: '#50126F',
        900: '#2D0A3F',
        950: '#1C0627'
      },
      darken: "rgba(0,0,0,0.7)",
      fadedarken: "rgba(0,0,0,0.6)",
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Varela: ["Varela Round", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Rubik: ["Rubik", "sans-serif"],
      TitilliumWeb: ["Titillium Web", "sans-serif"],
    },

    extend: {
      boxShadow: {
        "3xl": "-1px 34px 47px -29px rgb(32 32 32 / 100%)",
        "4xl": " 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)",
        "5xl": " 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)",
        glass: "1px 5px 12px 1px rgba(189, 108, 231, 1",
        "glass-card": "4px 4px 4px 4px rgba(189, 108, 231, 1",
        "card-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        "dark-shadow": "10px 10px 5px 0px rgba(130,130,130,0.75)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".flex-center": {
          "@apply flex justify-center items-center": {},
        },
        ".overlay-content": {
          "@apply absolute h-full w-full top-0 left-0": {},
        },
      });
    },
  ],
});
