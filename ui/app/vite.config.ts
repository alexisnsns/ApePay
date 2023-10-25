import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2020",
  },
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname),
      lib: path.resolve(__dirname, '../lib/'),
      sdk: path.resolve(__dirname, '../../sdk/')
    },
  }
});
