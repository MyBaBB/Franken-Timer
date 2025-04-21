import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  assetsInclude: ['**/*.glb'],
plugins: [
  
  react(),
  viteCompression({
    algorithm: 'gzip',
    ext: '.gz',
    deleteOriginFile: false,
    threshold: 10240,
    
  })
],
build: {
  minify: 'terser',
  chunkSizeWarningLimit: 1200,
}
});
   
