/** @type {import('tailwindcss').Config} */
module.exports = {
	 content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				mid:'#5A3508',
				darkMid:'#593407',
				Darker:'#301700',
				navyClear:'#3017003F',
				lightMid: '#DBCCAF',
				Lighter: '#D6CDB9'
			},
			backgroundImage:theme => ({
				'resumeBackground': "url('/src/components/media/resumeBackground.jpg')",
				'navyBackground': "url('/src/components/media/NavyBackground.jpg')",
				
			})
		},
			fontFamily: {
				'Merriweather': ['"Merriweather Sans"','sans-serif'],
				'ShadowsIntoLight': ['"Shadows Into Light"', 'cursive']
		}          
	},
	plugins: [],
}
