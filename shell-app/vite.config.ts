import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    federation({
      name: 'shellApp',
      remotes:{
        authMF : 'https://auth-mf.vercel.app/assets/authRemoteEntry.js'
      },
      shared: [ 'react', 'react-dom']
    })
  ],
})
