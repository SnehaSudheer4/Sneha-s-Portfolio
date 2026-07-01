/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'diary-cream': '#F8F5EF',
        'diary-white': '#FFFDF9',
        'diary-brown': '#7B5E57',
        'diary-pink': '#D9A5A5',
        'diary-sage': '#A9B99E',
        'diary-blue': '#A5B8D8',
        'diary-beige': '#E8DDCF',
      },
      fontFamily: {
        'handwriting': ['Caveat', 'Kalam', 'Patrick Hand', 'cursive'],
        'body': ['Nunito', 'Inter', 'Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'scrapbook': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'polaroid': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
