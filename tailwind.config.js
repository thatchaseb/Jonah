/** @type {import('tailwindcss').Config} */
module.exports = {
	 content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				prim:'#8E004F',
				sec:'#E3E2CA',
				navy:'#151F3D',
				navyClear:'#151F3D3F',
				offBlue: '#E5FAFD'
			},
			backgroundImage:theme => ({
				'resumeBackground': "url('/src/components/media/resumeBackground.jpg')",
				'navyBackground': "url('/src/components/media/NavyBackground.jpg')",
				
			})
		},
			fontFamily: {
				'Merriweather': ['"Merriweather Sans"','sans-serif'],
		}          
	},
	plugins: [],
}
