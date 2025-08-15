import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configuração para GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/disciplinas-eletivas/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Otimizações para produção
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-slot']
        }
      }
    }
  },
  // Configurações do servidor de desenvolvimento
  server: {
    port: 5173,
    host: true
  },
  // Configurações de preview
  preview: {
    port: 4173,
    host: true
  }
})
