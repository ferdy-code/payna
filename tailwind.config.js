/** @type {import('tailwindcss').Config} */
import colors, { orange, purple, yellow } from 'tailwindcss/colors'

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#070F18',
        'secondary': '#575455',
        'darkblue': '#191046',
        blue: {
          ...colors.blue,
          'DEFAULT': '#1F7CFF',
        },
        orange: {
          ...colors.orange,
          'DEFAULT': '#F75C4E',
        },
        pink: {
          ...colors.pink,
          'DEFAULT': '#FF1FB3',
        },
        purple: {
          ...colors.purple,
          'DEFAULT': '#5C4EF7',
        },
        yellow: {
          ...colors.yellow,
          'DEFAULT': '#F7954E',
        },
        gray: {
          ...colors.gray,
          '1': '#F5F6FB',
          '2': '#EAECF2',
        }
      },
      fontSize: {
        'logo': '28px',
        'title': '55px'
      },
      gap: {
        '13': '3.125rem',
        '15': '3.75rem',
      }
    },
  },
  plugins: [],
}

