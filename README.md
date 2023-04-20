# unplugin-svg-vue-component

Use svg as vue components with support for both `vue2.7` and `vue3.x`.

```bash
npm i unplugin-svg-vue-component
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
