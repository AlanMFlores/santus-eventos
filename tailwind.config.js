/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mainColor: "#EABE3F",
        secondaryColor: "#B28933",
        grayColor: "#A1A1AA",
        darkColor: "#0C0C0C",
        overlayColor: "rgba(41,37,36, 0.8)"
      },
      backgroundColor: {
        backgroundRadial: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"
      }
    },
  },
  plugins: [],
}
