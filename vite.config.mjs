import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Use environment variable PORT or default to 3000
  },
});
