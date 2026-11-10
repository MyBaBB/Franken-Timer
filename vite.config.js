import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
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
    minify: 'esbuild', // Or remove this line entirely
    chunkSizeWarningLimit: 1200,
}
});
   
