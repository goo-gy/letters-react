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

        primaryStartWarm: '#fdba74',
        primaryEndWarm: '#f87171',
        headerWarm: 'rgba(50,20,50, 0.6)',
        headerTextWarm: '#feeeee',
        sectionWarm: 'rgba(255, 255, 255, 0.5)',
        componentWarm: '#3b82f6',
        pointWarm: '#1d4ed8',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class',
};
