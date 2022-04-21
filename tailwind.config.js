module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: '#1669F0',
        purple: '#021F4F',
        gray: '#F5F9FF',
        yellow: '#f8cf40',
        'gray-500': '#6B7280',
      },
    },
  },
  plugins: [],
};
