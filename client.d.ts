declare module '*.svg?component' {
  import type { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
