import { readFileSync } from 'node:fs'
import { createUnplugin } from 'unplugin'
import { type FilterPattern, createFilter } from '@rollup/pluginutils'
import type { Config as svgoConfig } from 'svgo'
import { optimize } from 'svgo'
import { compileSvg } from './utils'

export interface Options {
  optimize?: boolean | svgoConfig
  vueVersion?: 2 | 3
  include?: FilterPattern
  exclude?: FilterPattern
}

export const PLUGIN_NAME = 'unplugin-svg-vue-component'

export default createUnplugin<Options | undefined>((options = {}) => {
  const filter = createFilter(
    options.include || [/\.svg(\?component)?$/],
    options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  )

  return ({
    name: PLUGIN_NAME,
    enforce: 'pre',
    transformInclude(id) {
      return filter(id)
    },
    async transform(_code, id) {
      const [path] = id.split('?', 2)
      let svg = readFileSync(path, { encoding: 'utf-8' })

      if (options.optimize)
        svg = optimize(svg, typeof options.optimize === 'object' ? { ...options.optimize, path } : { path }).data

      return compileSvg(svg, path, options)
    },
  })
})
