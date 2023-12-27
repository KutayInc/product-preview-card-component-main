/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      widest: ".3em",
    },
    extend: {
      colors: {
        cream: "hsl(30, 38%, 92%)",
        green: "hsl(158, 36%, 37%)",
        darkGreen: "hsl(158, 28%, 25%)",
      },
      fontFamily: {
        sans: ["Fraunces", "Montserrat"],
      },
      textColor: {
        blue: "hsl(228, 12%, 48%)",
        green: "hsl(158, 36%, 37%)",
      },
    },
  },
  plugins: [],
};
