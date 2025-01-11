/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
			colors: {
				primary: '#800020',
				secundary: '#FF9EAA', 
			},
		},
	},
	plugins: [],
}
