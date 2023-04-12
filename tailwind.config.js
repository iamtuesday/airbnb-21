/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dd3333',
        secondary: '#15142A',
        content: '#6B6B6B',
        titles: '#252525'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        phone: '414px',
        phonexl: '640px',
        tablet: '768px',
        tabletlg: '960px',
        tabletxl: '1024px',
        laptop: '1200px',
        laptoplg: '1400px',
        desktop: '1700px',
      },
    },
  },
  plugins: [],
}
