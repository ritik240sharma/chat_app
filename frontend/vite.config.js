
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
    "/api":{
       target:"https://natte.onrender.com"
      // target:"http://localhost:4000",
    }
  }
  },
css: {
  postcss: './postcss.config.js',
},

})



