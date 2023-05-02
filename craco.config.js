// craco.config.js
const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@enums": path.resolve(__dirname, "./src/enums"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@localStorage": path.resolve(__dirname, "./src/localStorage"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@router": path.resolve(__dirname, "./src/router"),
    },
  },
};
