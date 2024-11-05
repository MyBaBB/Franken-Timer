import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
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
  chunkSizeWarningLimit: 1200,
}
});
   
