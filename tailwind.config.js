/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'racing-red': '#E10600',
        'electric-cyan': '#00A3E0',
        'amber': '#F3A900',
        'carbon-gray': '#1C1C21',
        'carbon-line': '#24242B',
        'bg-base': '#0A0A0C',
        'bg-surface': '#121216',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A5',
        'text-muted': '#5C5C66',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        heading: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
      }
    },
  },
  plugins: [],
}
