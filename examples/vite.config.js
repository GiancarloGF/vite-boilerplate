const reactRefresh = require("@vitejs/plugin-react-refresh");
const path = require("path");

// https://vitejs.dev/config/
module.exports = {
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./src/components"),
      "%": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
};
