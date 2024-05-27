/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				fontWeight: {
					'light': 300,
					'regular': 400,
					'medium': 500,
					'semibold': 600,
					'bold': 700,
					'extrabold': 800,
					'black': 900
				}
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'black': '#000000',
			'18426-mainDark': '#0548BD',
			'18426-mainText': '#002664',
			'18426-mainLight': '#B2FF41',
		},
		screens: {
			'xs': { 'min': '320px', 'max': '575px' },
			// => @media (min-width: 320px and max-width: 575px) { ... }

			'sm': { 'min': '576px', 'max': '767px' },
			// => @media (min-width: 576px and max-width: 767px) { ... }

			'md': { 'min': '768px', 'max': '991px' },
			// => @media (min-width: 768px and max-width: 991px) { ... }

			'lg': { 'min': '992px', 'max': '1199px' },
			// => @media (min-width: 992px and max-width: 1199px) { ... }

			'xl': { 'min': '1200px', 'max': '1499px' },
			// => @media (min-width: 1200px and max-width: 1499px) { ... }

			'2xl': { 'min': '1500px', 'max': '1919px' },
			// => @media (min-width: 1500px and max-width: 1919px) { ... }
		}
	},
	plugins: [],
}
