import { url } from 'inspector'
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
        parallax: 'url(./images/stars.png)',
        parallax2: 'url(./images/mountains_front.png)',
        parallax3: 'url(./images/mountains_behind.png)',
        parallax4: 'url(./images/moon.png)',
      },
      colors: {
        custombg: '#1A1B41', // Custom background color
        snowWhite: '#FFFFFF',
        twilightPink: '#EF8354',
        bgColour: '#1C0522',
      },
      fontFamily: {
        custom: ['Inter', 'san-serif'],
      },
    },
  },
  plugins: [],
}
export default config
