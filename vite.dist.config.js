import { defineConfig } from "vite";

import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "PureColorPicker",
      manifest: true,
      fileName: (format) => `pure-colorpicker.${format}.js`,
    },
  },
});
