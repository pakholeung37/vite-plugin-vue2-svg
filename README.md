# unplugin-svg-vue-component

![GitHub package.json version](https://img.shields.io/github/package-json/v/jaw52/unplugin-svg-vue-component?style=flat-square)

Use SVG as vue components with support for both `vue2.7` and `vue3.x`.

```bash
npm i -D unplugin-svg-vue-component
```

## Usage

### Vite

```js
import svgPlugin from 'unplugin-svg-vue-component/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    svgPlugin(),
  ],
})
```

```vue
<script setup lang="ts">
import MsgIcon from './msg.svg'

// OR
// import MsgIcon from './msg.svg?component'
</script>

<template>
  <MsgIcon />
</template>
```

## Options

- `optimize`: Disabled by default. Based on [svgo](https://github.com/svg/svgo)

```js
// https://github.com/svg/svgo
export default defineConfig({
  plugins: [
    vue2(),
    svgPlugin({ optimize: true }),
  ],
})
```

## Acknowledgement

Inspired by the following projects

- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader)

- [vite-plugin-vue2-svg](https://github.com/pakholeung37/vite-plugin-vue2-svg)


## License

[MIT](LICENSE)
