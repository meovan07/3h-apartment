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
        ink:       '#053f43',  // deep teal-dark — primary text & dark sections
        cream:     '#FFFFFF',  // pure white
        muted:     '#4a7c74',  // mid teal-gray for secondary text
        gold:      '#02ab82',  // bright teal-green — CTA, icons, accents
        'gold-lt': '#d4f0e8',  // light teal tint
        surface:   '#f4faf8',  // very light teal-tinted background
        dark:      '#021f22',  // deepest teal-black
        highlight: '#eee296',  // warm yellow — optional contrast accent
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
