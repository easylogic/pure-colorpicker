import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    // watch: {
    //   usePolling: true,
    // },
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
  test: {
    environment: "happy-dom",
    global: true,
  },
});
