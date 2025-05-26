import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled'
    ]
  },
  // Make sure no CJS sneaks through un-transformed
  // commonjsOptions: {
  //   transformMixedEsModules: true,
  //   include: [/node_modules/]
  // },

  // (Optional) prevent duplicate React / emotion instances
  resolve: {
    dedupe: ['react', 'react-dom', '@emotion/react']
  }
})
