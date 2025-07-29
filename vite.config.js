import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/reactApp1/', // 👈 Add this line
  plugins: [react()],
})
