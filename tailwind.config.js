/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        fundo: "rgb(32, 30, 67)", // Cor de fundo
        font: "rgb(80,140,155)", // Cor da fonte
        buttonfont: "rgb(32, 30, 67)",
        buttonFundo: "rgb(80,140,155)",
      },
      fontFamily: {
        title: "var(--font-title)", // Peralta
        subtitle: "var(--font-subtitle)", // Atma
        fontText: "var(--font-body)", // Montserrat
        button: "var(--font-button)", // Peralta também
      },
      backgroundImage: {
        "bg-fundo": "url('/assets/bg-fundo.jpg')", // ou .png, .webp, etc.
      },
    },
  },
  plugins: [],
};
