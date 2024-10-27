import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  experimental: {
    renderBuiltUrl: (
      filename: string,
      { hostType }: { hostType: "js" | "css" | "html" },
    ) => {
      return { relative: true };
    },
  },
  base: "./",
});
