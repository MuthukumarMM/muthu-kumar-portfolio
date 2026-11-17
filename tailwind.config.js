/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#fffaf7',
          900: '#fff3ee',
          800: '#f8e5df',
          700: '#efd0c8',
          600: '#dfaca1',
        },
        brand: {
          50: '#fff5f2',
          100: '#ffe5df',
          200: '#f9c9c0',
          300: '#e9a198',
          400: '#d47770',
          500: '#a63d4d',
          600: '#8d2f3e',
          700: '#742535',
          800: '#5d1d2c',
          900: '#481622',
          950: '#32101a',
        },
        electric: {
          400: '#d99b82',
          500: '#bd705f',
          600: '#9f5148',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-faint':
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        'radial-glow':
          'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        gradientShift: 'gradientShift 8s ease infinite',
        blink: 'blink 1s step-end infinite',
        spinSlow: 'spinSlow 16s linear infinite',
      },
    },
  },
  plugins: [],
};
