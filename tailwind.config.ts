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
        ink:       '#0c1f35',
        cream:     '#f5faff',
        muted:     '#6b8cae',
        gold:      '#0891b2',
        'gold-lt': '#bae6fd',
        surface:   '#f0f9ff',
        dark:      '#071a2b',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      gridTemplateColumns: {
        hero: '55% 45%',
      },
    },
  },
  plugins: [],
}

export default config
