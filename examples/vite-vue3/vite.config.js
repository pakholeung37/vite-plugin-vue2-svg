import svgPlugin from 'unplugin-svg-vue-component/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    svgPlugin(),
  ],
})
