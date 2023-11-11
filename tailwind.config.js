/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
      },
      colors: {
        'primary': '#32375C',
        'secondary': '#222222',
        'gray': '#D3D3D3',
      },
    },
  },
  plugins: [],
}

