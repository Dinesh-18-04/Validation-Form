/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./path/to/your/files/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-b': '#75e2e9',
        "custom-1": "#3786be",
      },
    },
  },
  plugins: [],
};
