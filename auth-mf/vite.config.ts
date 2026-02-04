import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    federation({
      name: 'authMF',
      filename: 'authRemoteEntry.js',
      exposes: {
        './LoginForm' : './src/components/Login.tsx',
        './RegisterForm' : './src/components/Register.tsx',
      },
      shared:['react','react-dom']
    })
  ],
})
