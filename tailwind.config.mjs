/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			boxShadow: {
				'shadow9': '0 0 8px rgba(227, 228, 230, 0.5)', // Sombra color2 (gris claro)
				'shadow2': '0 0 8px rgba(51, 51, 51, 0.7)',    // Sombra color3 (oscuro)
				'shadow3': '0 0 8px rgba(249, 249, 249, 0.5)', // Sombra color1 (claro)
				'shadow4': '0 0 8px rgba(102, 102, 102, 0.6)', // Sombra color4 (gris medio)
				'shadow5': '0 0 8px rgba(211, 84, 0, 0.6)',    // Sombra color5 (naranja)
				'shadow6': '0 0 8px rgba(165, 42, 42, 0.6)',   // Sombra color6 (marrón)
				'shadow7': '0 0 8px rgba(22, 160, 133, 0.6)',  // Sombra color7 (verde)
				'shadow8': '0 0 8px rgba(100, 41, 156, 0.8)',  // Sombra color8 (morado)
				'shadow1': '0 0 5px rgba(0, 0, 0, 0.7)',       // Sombra color9 (negro)
				'shadow10': '0 0 8px rgba(248, 180, 0, 0.8)',     // Sombra base (amarillo)
				'shadow11': '0 0 8px rgba(245, 245, 220, 0.6)', // Sombra carrucel (beige)
				'shadow12': '0 0 10px rgba(0, 0, 0, 0.7)',       // Sombra color12 fuerte (negro)
			  },
		},
		fontFamily: {
			title: ['Playfair Display', 'sans-serif'],
			parrafo: ['Merriweather', 'serif'],
			boton: ['Montserrat', 'serif'],
		  },
		  colors: {
			'color1': '#F9F9F9',
			'color2': '#E5E4E2',
			'color3': '#333333',
			'color4': '#666666',
			'color5': '#d35400',
			'color6': 'brown',
			'color7': '#16a085',
			'color8': '#64299c',
			'color9': 'black',
			'primary': '#F8B400',
			'secundary': 'beige',
			'color10': '#F8B400',
			//colores modo Dark
			'dark1': '#7C0902',
			'dark2': '#7F1734',
			'dark3': '#4A412A',
			'dark4': '#D473D4',
			'dark5': '#2A3439',
			'dark6': '#3EB489',
			'dark7': '#BEBFC5',
			'fondoDark': '#414A4C'
		  },

	},
	plugins: [],
}
