import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "brand-light-gray": "#FAFAFA",
        "brand-accent-gray": "#D2D2D2",
        "brand-blue": "#1D18FF",
        "brand-black": "#1E1E1E",
        "brand-red": "#FD0D0D",
        "brand-green": "#0AB945"
      }
    },
  },
  plugins: [],
}
export default config
