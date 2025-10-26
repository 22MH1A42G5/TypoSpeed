/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...existing code...
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      screens: {
        'biglaptop': '1440px',
        'smalllaptop': '1024px',
        'tablet': '768px',
        'bigmobile': '425px',
        'smallmobile': '375px',
      }
    }
  },
  // ...existing code...
}