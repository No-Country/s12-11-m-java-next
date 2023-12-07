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
        'lightViolet': '#6a1b9a',
        'darkViolet': '#4a148c',
        'textColor': '#f4f1f4',
        'rosa': '#dcc6e0',
        'negro': '#151515'
      },
      boxShadow: {
        shadowInset: 'inset 0px -20px 20px -15px #111',
      },
      backgroundImage: {
        'home_bg': "url('/home_bg.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: []
}
export default config
