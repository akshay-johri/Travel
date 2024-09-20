/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#1f1925",
      },
      colors: {
        polarNight: '#2e3440',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
        keyframes: {
          'fade-in': {
            '0%': { opacity: '0', transform: 'translateX(50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
        },
        animation: {
          'fade-in': 'fade-in 0.8s ease-out',
        },
      },
    },
  },
  plugins: [],
};

