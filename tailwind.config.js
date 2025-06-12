/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                MontserratAlternates: 'Montserrat Alternates',
                ProtestGuerrilla: 'Protest Guerrilla',
                JakartaSans: 'Jakarta Sans',
                Montserrat: 'Montserrat',
                NerkoOne: 'Nerko One'
            }
        }
    },
    plugins: []
}