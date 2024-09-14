/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			height: {
				'full/5rem': 'calc(100% - 5rem)'
			},
			fontFamily: {
				ProtestGuerrilla: 'Protest Guerrilla',
				NerkoOne: 'Nerko One'
			}
		}
	},
	plugins: []
}
