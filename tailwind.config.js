/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          deep: '#164B60',
          dark: '#0E3646',
          light: '#205E77',
          surface: '#EBF3F6',
        },
        ivory: {
          DEFAULT: '#F8F5EF',
          warm: '#F4EFE6',
          light: '#FAF8F4',
        },
        gold: {
          muted: '#D69B36',
          deep: '#B88228',
          light: '#F8F0E1',
        },
        charcoal: {
          DEFAULT: '#252525',
          dark: '#1A1A1A',
          light: '#3D3D3D',
        },
        neutral: {
          grey: '#5A6065',
          light: '#8C9298',
          border: '#E2DCD2',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['Cinzel', '"Playfair Display"', 'serif'],
      },
      borderRadius: {
        'sm': '3px',
        DEFAULT: '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 12px -2px rgba(22, 75, 96, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 25px -5px rgba(22, 75, 96, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
