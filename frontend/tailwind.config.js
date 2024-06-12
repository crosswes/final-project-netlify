/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-dark': '#c47f17',
        yellow: '#dbac2c',
        'yellow-light': '#f1e9c9',
        'purple-dark': '#4b2995',
        purple: '#8047f8',
        'purple-light': '#ebe5f9',
        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574f4d',
        'base-lable': '#8d8686',
        'base-hover': '#d7d5d5',
        'base-button': '#e6e5e5',
        'base-input': '#ededed',
        'base-card': '#f3f2f2',
        background: '#fafafa',
      },
    },
  },
  plugins: [],
};
