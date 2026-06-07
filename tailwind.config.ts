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
        ink:       '#0c1f35',  // navy dark — trust, premium
        cream:     '#F8FAFC',  // cool near-white
        muted:     '#64748B',  // slate-500 — readable secondary text
        gold:      '#0891b2',  // cyan primary — modern, clean
        'gold-lt': '#E0F2FE',  // sky-100 — light cyan tint
        surface:   '#EFF6FF',  // blue-50 — subtle tinted surface
        dark:      '#060F1A',  // deep navy
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
