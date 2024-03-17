/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstColor: 'rgb(36, 26, 73)',
        secondColor: 'rgb(14, 17, 36)',
        productItem: 'rgb(19, 23, 42)',
        buttonGradient1: 'rgb(225, 64, 180)',
        buttonGradient2: 'rgb(126, 43, 237)',
        orderItems: 'rgb(12, 13, 54)',
      },
      boxShadow: {
        orderComfirm: '0 0 5px rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}