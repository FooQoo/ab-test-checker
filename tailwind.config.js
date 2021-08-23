module.exports = {
  purge: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['ui-serif', 'Georgia'],
    },
    container: {
      center: true,
    },
    minHeight: {
      0: '0',
      '1/10': '10%',
      '4/5': '80%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: ['tailwindcss', require('@tailwindcss/forms')],
};
