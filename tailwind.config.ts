import type { Config } from 'tailwindcss';
const withMT = require('@material-tailwind/react/utils/withMT');
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
<<<<<<< HEAD
=======
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
>>>>>>> 68b52b0a00f3eb95850f55062d045af6410bcc49
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default withMT(config);
