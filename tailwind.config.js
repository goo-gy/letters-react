module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryStart: '#5eead4',
        primaryEnd: '#60a5fa',
        header: 'rgba(39,16,50, 0.6)',
        headerText: '#feeeee',
        section: 'rgba(255, 255, 255, 0.5)',
        componentSky: '#3b82f6',
        pointBlue: '#1d4ed8',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
