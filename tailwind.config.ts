import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      colors: {
      
      },
      keyframes: {
        pullUpDisappear: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
     
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        pullUpDisappearText: {
          '0%': { transform: 'translateY(10%)', opacity: '0' },
      
        
          '100%': { transform: 'translateY(-10%)', opacity: '1' },
        },
        pullUpDisappearImage: {
          '0%': { transform: 'translateY(0%)', opacity: '0' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(0%)', opacity: '0' },
        },
        
      },
      animation: {
        pullUpDisappear: 'pullUpDisappear 9s ease-in-out 1',
        pullUpDisappearText: 'pullUpDisappearText 5s ease-in-out 1',
        pullUpDisappearImage: 'pullUpDisappearImage 4s ease-in-out infinite',
      },
    },
  },
  plugins: [ require('preline/plugin')],
} satisfies Config;
