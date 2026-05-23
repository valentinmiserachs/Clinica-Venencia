/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // PALETA OFICIAL - CLÍNICA VENENCIA
        brand: {
          dark: '#2B2622',   // Autoridad / Profundidad (Textos principales)
          terra: '#8B7B6B',  // Equilibrio / Madurez (Detalles y acentos)
          sand: '#D6C6B8',   // Naturalidad (Líneas y separadores)
          soft: '#EAE3DB',   // Suavidad (Fondos secundarios)
          light: '#F7F4F1',  // Limpieza / Calma (Fondo principal de la web)
        }
      },
      fontFamily: {
        // TIPOGRAFÍAS OFICIALES
        serif: ['Optima', 'Optima Nova', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        logo: ['Cherston', 'serif'],
      },
    },
  },
  plugins: [],
}