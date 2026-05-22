import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuração do Vite para o projeto JornadaGamesCAR.
// base: './' garante que os assets usem caminhos relativos no servidor PHP estático.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './',
})
