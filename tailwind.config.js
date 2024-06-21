/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#269acd",
        light01: "#4DC4F9",
        light02: "#99E4FF",
        dark01: "#0077AD",
        dark02: "#004B66",
      },
    },
  },
  plugins: [],
};
