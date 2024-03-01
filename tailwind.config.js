/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'],
    theme: {
        extend: {
            colors: {
                primary: '#07689F',
                secondary: '#D9D9D9',
                neutral: '#F9F9F9',
                pri: '#A6A6A6',
            },
            fontSize: {
                l: '10px',
                sm: '12px',
                ba: '14px',
                base: '16px',
                x: '18px',
                xl: '20px',
                xxl: '24px',
                '2xl': '32px',
                '3xl': '40px',
                '4xl': '44px',
                // '5xl': '3.052rem',
            },
        },
    },
    plugins: [],
};
