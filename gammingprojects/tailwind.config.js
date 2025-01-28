/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Certifique-se de que o caminho está correto para o seu projeto
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',        // Preto: Para fundos principais do tema.
        deepRed: '#8B0000',      // Vermelho Profundo: Para títulos importantes, botões chamativos ou alertas.
        fireRed: '#FF4500',      // Vermelho Fogo: Destaques e estados de hover.
        burntOrange: '#CC5500',  // Laranja Queimada: Elementos secundários ou detalhes visuais.
        darkBrown: '#654321',    // Marrom Escuro: Bordas ou fundos de seções específicas.
        chocolate: '#D2691E',    // Marrom Chocolate: Gradientes, cartões ou elementos menos prioritários.
      },
    },
  },
  plugins: [],
}
