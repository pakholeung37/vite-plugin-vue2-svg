import { basename } from 'node:path'
import { compileTemplate as vue3CompileTemplate } from '@vue/compiler-sfc'
import { compileTemplate as vue2CompileTemplate } from '@vue/component-compiler-utils'
import { getPackageInfoSync } from 'local-pkg'
import * as compiler from 'vue-template-compiler'
import type { VueTemplateCompiler } from '@vue/component-compiler-utils/dist/types'
import type { Options } from '.'

export function compileSvg(svg: string, path: string, options: Options): string {
  const version = options.vueVersion || detectVueVersion()

  if (version === 2) {
    const result = vue2CompileTemplate({
      compiler: compiler as VueTemplateCompiler,
      source: svg,
      filename: `${basename(path)}.vue`,
    })

    return `${result.code} export default { render };`
  }
  else {
    const { code } = vue3CompileTemplate({
      id: path,
      source: svg,
      filename: `${basename(path)}.vue`,
      transformAssetUrls: false,
    })

    return `${code} export default { render };`
  }
}

export function detectVueVersion(root: string = process.cwd()): 2 | 3 {
  const vuePkg = getPackageInfoSync('vue', { paths: [root] })

  if (vuePkg && vuePkg.version)
    return Number.parseInt(vuePkg.version) as 2 | 3

  else
    return 3
}
