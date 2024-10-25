/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8a2be2",
        bgprimary: "#13141c",
        bgSecondary: "#1e202b",
        "dark-overlay": "rgba(1,1,1,0.5)",
      },
    },
  },
  plugins: [],
};
