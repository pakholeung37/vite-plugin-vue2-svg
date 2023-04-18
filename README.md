# unplugin-svg-vue-component

load SVG files as Vue components, Both `vue2` and `vue3` are supported.

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

## License

[MIT](LICENSE)
