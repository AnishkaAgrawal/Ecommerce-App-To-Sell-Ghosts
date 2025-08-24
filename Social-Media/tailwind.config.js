// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'custom-md': '752px',
        'custom-lg': '1092px',
      },
    },
  },
  
  plugins: [],
};
