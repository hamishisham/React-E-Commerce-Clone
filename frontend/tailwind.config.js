/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IBM: '"IBM Plex Sans", serif',
        inika: '"Inika", serif',
        main: '"Inter", serif',
      },
      backgroundImage: {
        "footer-divider":
          "linear-gradient(to bottom,rgba(0,0,0,0.14),rgba(0,0,0,0.03) 3px,transparent)",
        "footer-after":
          "linear-gradient(to left,#fff,rgba(255,255,255,0),#fff)",
      },
    },
  },
  plugins: [],
};
