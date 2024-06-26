/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        light: 'var(--light)',
        dark: 'var(--dark)',
      },
      screens: {
        1330: '1330px',
      },
    },
  },
  plugins: [],
};
