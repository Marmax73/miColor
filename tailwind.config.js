/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nude: "#f5e9e2",
        lavanda: "#d6c7e8",
        rosa: "#f2b5d4",
        oro: "#e6c36d",
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
    addComponents({
      '.btn-primary': {
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
      },
      '.btn-secondary': {
        backgroundColor: '#6366f1',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
      },
      '.btn-success': {
        backgroundColor: '#10b981',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
      },
      '.btn-danger': {
        backgroundColor: '#ef4444',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
      },
      '.btn-warning': {
        backgroundColor: '#facc15',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
      },
      '.btn-gray': {
        backgroundColor: '#6b7280',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
      },
    });
   }
  ],
};
