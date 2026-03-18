/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ubito: {
          cyan: '#00d4ff',
          dark: '#0a0e1a',
          surface: '#111827',
          green: '#00e5a0',
          red: '#ff6b6b',
          purple: '#a78bfa',
          text: '#e2e8f0',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(0, 212, 255, 0.08)',
        'glow-green': '0 0 30px rgba(0, 229, 160, 0.3)',
      }
    },
  },
  plugins: [],
}
