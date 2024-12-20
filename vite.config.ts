import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
