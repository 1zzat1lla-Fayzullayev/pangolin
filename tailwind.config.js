/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ['Poppins', 'sans-serif'],
			},
		},
		colors: {
			lightBlue: 'rgb(151, 215, 220)',
			yellow: 'rgb(255, 216, 0)',
			orange: 'rgb(244, 125, 32)',
			green: 'rgb(169, 207, 56)',
			'light-blue': 'rgb(151, 215, 220)',
			pink: 'rgb(242, 128, 163)',
			purple: 'rgb(163, 116, 164)',
			black: 'rgb(0, 0, 0)',
		},
	},
	plugins: [],
}
