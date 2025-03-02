import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


import dotenv from "dotenv";
dotenv.config();


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  root: '.',  // Ensure root is set to the project folder
  build: {
    outDir: 'dist',  // Output folder (default is "dist")
  },
})
