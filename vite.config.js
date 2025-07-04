import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/shared-components": path.resolve(
        __dirname,
        "./src/shared-components/*"
      ),
      "@/pages": path.resolve(__dirname, "./src/pages/*"),
      "@/layout": path.resolve(__dirname, "./src/layout/*"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/assets": path.resolve(__dirname, "./src/assets/*"),
      "@/router": path.resolve(__dirname, "./src/router/*"),
    },
  },
});
