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
        bar_yellow:"#F1B561",
        bar_blue:"#396CF0",
        danger:"#ef4444",
        footer:"#48776A"
      }
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }