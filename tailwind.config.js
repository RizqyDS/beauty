/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '15px'
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1400px'
  	},
  	fontFamily: {
  		primary: 'var(--font-bebas)',
  		secodary: 'var(--font-inter)'
  	},
  	extend: {
  		colors: {
  			primary: '#10151f',
  			secodary: '#475467',
  			accent: {
  				DEFAULT: '#009B97',
  				hover: '#40E0D0'
  			}
  		},
  		boxShadow: {
  			custom: '0px 14px 54px rgba(0,0,0,0.1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
