/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#07689F",
        secondary: "#D9D9D9",
        neutral: "#F9F9F9",
        pri: "#A6A6A6",
      },
      fontSize: {
        sm: '12px',
        base: '16px',
        'l': '10px',
        xl: '20px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '44px',
        // '5xl': '3.052rem',
      },
    },
  },
  plugins: [],
};
