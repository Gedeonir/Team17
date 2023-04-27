/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
      colors:{
        primary:"#49675F",
        secondary:"#e5e7eb",
        background_secondary:"#9DABAF",
        text_secondary:"#f9fafb",
        btn_primary:"#619E8C",
        footer:"#48776A",
        text_primary:"#047857"
      }
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }