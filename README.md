# 🚀 Iniciando o Projeto com Tailwind CSS

## ✅ Pré-requisitos

Tenha a pasta styles dentro crie styles.css.
Certifique-se de que você já tem o **Node.js** instalado. Para verificar, digite no terminal:

node -v

📦 Inicializando o projeto
npm init -y

Instalando o Tailwind CSS

npm install -D tailwindcss@3
npx tailwindcss init

Isso criará um arquivo chamado tailwind.config.js. Substitua o conteúdo por: <br> <br>
/** @type {import('tailwindcss').Config} */ <br>
module.exports = { <br>
  content: ["./**/*.{html,js}"], <br>
  theme: { <br>
    extend: {}, <br>
  }, <br>
  plugins: [],  <br>
} <br>

No styles.css coloque:

@tailwind base; <br>
@tailwind components; <br>
@tailwind utilities;


Abra o arquivo package.json e localize a seção: <br><br>
"scripts": {<br>
  "test": "echo \"Error: no test specified\" && exit 1"<br>
}<br>

Substitua por:<br>
"scripts": {<br>
  "dev": "npx tailwindcss -i ./styles/styles.css -o ./styles/output.css --watch"<br>
}<br>
<br>
No terminal do projeto, execute:<br>
"npm run dev"
