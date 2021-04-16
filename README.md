# vite-plugin-vue2-svg

load SVG files as Vue components, for Vue2.x only.

[![NPM](https://nodei.co/npm/vite-plugin-vue2-svg.png)](https://npmjs.org/package/vite-plugin-vue2-svg/)

## Install

```bash
yarn install vite-plugin-vue2-svg
```

## Usage

```js
// vite.config.ts
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2"; // vue2 plugin
import { createSvgPlugin } from "vite-plugin-vue2-svg";

export default defineConfig({
  plugins: [createVuePlugin(), createSvgPlugin()],
});
```

```vue
// App.vue
<template>
  <Icon />
</template>
<script>
import Icon from "./icon.svg";

export default {
  components: {
    Icon,
  },
};
</script>
```

## Options

```js
createSvgPlugin({
  svgoConfig: SVGO.Options, // check https://github.com/svg/svgo
});
```

## License

[MIT](LICENSE)
