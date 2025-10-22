import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        charcoal: '#0B0D10',
        graphite: '#1A1F24',
        'soft-graphite': '#242B33',
        offwhite: '#F5F7FA',
        cyan: '#6AE2FF',
        'signal-green': '#19C37D',
        slate: '#95A2B3',
      },
      fontFamily: {
        heading: [
          'var(--font-heading)',
          'GT America',
          'Neue Haas Grotesk',
          'Inter',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        sans: [
          'var(--font-body)',
          'Inter',
          'Söhne',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['IBM Plex Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 24px rgba(106, 226, 255, 0.4)',
        'inner-line': 'inset 0 0 0 1px rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'diagnostic-radial':
          'radial-gradient(circle at center, rgba(106, 226, 255, 0.18), transparent 60%)',
        'grid-lines':
          'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '24px 24px',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
