import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use root base so site works from a custom domain (williamtraub.com)
  base: "/",
});
