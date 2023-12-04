const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      boxShadow: {
        'brut': 'inset -3px -3px 0px rgb(0 0 0 / 90%)',
      },
      fontFamily: {
        primary: ['Poppins', ...defaultTheme.fontFamily.sans],
        secondary: ['Lato', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'violet-200': '#A8A6FF',
        'violet-300': '#918efa',
        'violet-400': '#807dfa',
        'pink-200': '#FFA6F6',
        'pink-300': '#fa8cef',
        'pink-400': '#fa7fee',
        'red-200': '#FF9F9F',
        'red-300': '#fa7a7a',
        'red-400': '#f76363',
        'orange-200': '#FFC29F',
        'orange-300': '#FF965B',
        'orange-400': '#fa8543',
        'yellow-200': '#FFF066',
        'yellow-300': '#FFE500',
        'yellow-400': '#FFE500',
        'lime-200': '#B8FF9F',
        'lime-300': '#9dfc7c',
        'lime-400': '#7df752',
        'cyan-200': '#A6FAFF',
        'cyan-300': '#79F7FF',
        'cyan-400': '#53f2fc',
      },
    },
  },
  plugins: [],
};
