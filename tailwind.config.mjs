/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'oxford-blue': '#011638',
				'space-cadet': '#0B2857',
				'violet' : '#42034F',
				'royal-blue': '#042862',
				'periwinkle': '#D1D2F9',
				'ligth-blue': '#A3BCF9',
				'anti-flash-white' : '#F3F4F7',
				'gamboge' : '#F3A32B'
			},
			fontFamily: {
      
				'roboto': ['Roboto Mono Variable', 'monospace'],
				'rubik':['Rubik Variable', 'sans-serif'],
				'robo-con':['Roboto Condensed Variable', 'sans-serif'],
			}

		},

	},
	plugins: [],
}
