/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg' : '1170px',
      'md' : {'max':'1169px'},
      'tablet':{'max':'1169px', 'min':'401px'},
      'mobile': '400px',
      'sm': {'max' : '399px'}
    }
  },
  plugins: [],
}