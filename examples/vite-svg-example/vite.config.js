const { createSvgPlugin } = require("vite-plugin-vue2-svg");
const { createVuePlugin } = require("vite-plugin-vue2");
module.exports = {
  build: {
    sourcemap: true,
  },
  plugins: [createVuePlugin(), createSvgPlugin({})],
};
