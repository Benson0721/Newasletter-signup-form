/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css,scss}",
    "./src/scss/index.scss",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      fontWeight: {
        medium: "500",
        bold: "700",
      },
      colors: {
        Tomato: "hsl(4, 100%, 67%)",
        DarkSlateGrey: "hsl(234, 29%, 20%)",
        CharcoalGrey: "hsl(235, 18%, 26%)",
        Grey: "hsl(231, 7%, 60%)",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
    },
  },

  plugins: [],
};
