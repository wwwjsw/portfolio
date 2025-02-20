/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ajuste conforme sua estrutura de arquivos
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",  // Azul Principal
        secondary: "#FACC15", // Amarelo
        accent: "#F43F5E",   // Vermelho para destaque
        background: "#F9FAFB", // Cinza claro de fundo
        "text-primary": "#8F2937",      // Cinza escuro para textos
      },
    },
  },
  plugins: [],
};