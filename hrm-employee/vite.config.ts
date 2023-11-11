import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  // We found several issue when importing static assets from remote modules.
  // To prevent this always change the base to URL your remote hosted
  base: 'http://localhost:3001/',
  preview: {
    port: 3001,
    strictPort: true,
  },
  plugins: [
    react(),
    federation({
      name: "EmployeeModule",
      filename: "employeeModule.js",
      exposes: {
        './App': './src/App.tsx',
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
