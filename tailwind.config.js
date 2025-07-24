 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./client/**/*.{js,jsx,html}"],
   theme: {
     extend: {
      fontFamily: {
        kaushan: ['"Kaushan Script"', 'cursive'],
        poppins: ['"Poppins"', 'sans-serif']
      },
     },
   },
   plugins: [],
 }