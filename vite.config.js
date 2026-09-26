import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { apiApp } from './server.js'

const contactApi = {
  name: 'contact-api',
  configureServer(server) {
    server.middlewares.use(apiApp)
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [contactApi, react(), tailwindcss()],
})
