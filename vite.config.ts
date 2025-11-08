import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: [
      // main @ alias
      { find: "@", replacement: path.resolve(__dirname, "./src") },

      // 👇 this one will match "@/components/ui" AND "@/components/ui/card" etc.
      { find: "@/components/ui", replacement: path.resolve(__dirname, "./src/components/UI") },
    ],
  },
}));
