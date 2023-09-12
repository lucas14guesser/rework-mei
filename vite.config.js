import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aberturaMei: resolve(__dirname, './src/pages/AberturaMei.jsx'),
        cadastroServico: resolve(__dirname, './src/pages/CadastroServico.jsx'),
        criarRequerimento: resolve(__dirname, './src/pages/CriarRequerimento.jsx'),
        formularioCadastro: resolve(__dirname, './src/pages/FormularioCadastro.jsx'),
        receitasBrutas: resolve(__dirname, './src/pages/ReceitasBrutas.jsx'),
        requerimentoCancelamentoDebito: resolve(__dirname, './src/pages/RequerimentoCancelamentoDebito.jsx'),
        requerimentoRessarcimentoValores: resolve(__dirname, './src/pages/RequerimentoRessarcimentoValores.jsx'),
        requerimentoSimplesNacional: resolve(__dirname, './src/pages/RequerimentoSimplesNacional.jsx'),
        solicitacaoMei: resolve(__dirname, './src/pages/SolicitacaoMei.jsx'),
        termoCienciaResponsabilidade: resolve(__dirname,'./src/pages/TermoCienciaResponsabilidade.jsx')
      }
    }
  }
})
