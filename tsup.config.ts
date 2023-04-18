import type { Options } from 'tsup'

export default <Options>{
  entryPoints: ['src/index.ts', 'src/vite.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  target: 'node16.14',
  dts: true,
  splitting: true,
  onSuccess: 'npm run build:fix',
}
