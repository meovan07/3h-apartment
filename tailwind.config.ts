import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:       '#1E293B',  // slate-800 — clean neutral dark
        cream:     '#FFFFFF',  // pure white
        muted:     '#64748B',  // slate-500
        gold:      '#0284C7',  // sky-600 — ocean blue, richer than bright cyan
        'gold-lt': '#E0F2FE',  // sky-100
        surface:   '#F1F5F9',  // slate-100 — clean light gray
        dark:      '#0F172A',  // slate-900
      },
      fontFamily: {
        serif: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      gridTemplateColumns: {
        hero: '55% 45%',
      },
    },
  },
  plugins: [],
}

export default config
