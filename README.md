# vite-plugin-vue2-svg

load SVG files as Vue components, for Vue2.x only.

[![NPM](https://nodei.co/npm/vite-plugin-vue2-svg.png)](https://npmjs.org/package/vite-plugin-vue2-svg/)

## Install

```bash
yarn add vite-plugin-vue2-svg
# or
npm install vite-plugin-vue2-svg
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
<!-- App.vue -->
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

If you want disabled this plugin for specific file, just add `?raw` when you import.

```typescript
import Icon from "./icon.svg?raw"; // svg file import without transform
```

## Options

```js
createSvgPlugin({
  svgoConfig: SVGO.Options, // check https://github.com/svg/svgo
});
```

## License

[MIT](LICENSE)
