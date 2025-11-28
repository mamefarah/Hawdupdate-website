import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { URL, fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
