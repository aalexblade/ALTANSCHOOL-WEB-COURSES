// export default {
//   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Crimson Text"', 'sans-serif'],
      },
      colors: {
        text: '#000',
        background: '#faf9f8',
        focus: '#8E9A82',
      },
      screens: {
        sm: '375px',
        md: '992px',
        lg: '1366px',
        xl: '1920px',
      },
      fontSize: {
        base: '16px',
        logo: '36px',
        text1920: '32px',
      },
    },
  },
  plugins: [],
};
