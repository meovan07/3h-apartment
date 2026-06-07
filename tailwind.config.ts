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
        // 2026 earth-tone palette — warm, calm, contemporary
        ink:       '#1C1917',  // stone-900 — warm near-black
        cream:     '#F9F7F3',  // warm off-white (Cloud Dancer inspired)
        muted:     '#78716C',  // stone-500 — warm gray
        gold:      '#C2410C',  // terracotta/clay — trending 2026 accent
        'gold-lt': '#FFF1EE',  // terracotta tint
        surface:   '#F2EEE8',  // sandy warm surface
        dark:      '#100C09',  // deep warm black
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans:  ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
      gridTemplateColumns: {
        hero: '55% 45%',
      },
    },
  },
  plugins: [],
}

export default config
