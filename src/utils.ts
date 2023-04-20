import { basename } from 'node:path'
import { compileTemplate as vue3CompileTemplate } from '@vue/compiler-sfc'
import { compileTemplate as vue2CompileTemplate } from '@vue/component-compiler-utils'
import { getPackageInfoSync } from 'local-pkg'
import type { VueTemplateCompiler } from '@vue/component-compiler-utils/dist/types'
import { consola } from 'consola'
import { lightBlue } from 'kolorist'
import { type Options, PLUGIN_NAME } from '.'

export async function compileSvg(svg: string, path: string, options: Options): Promise<string | null> {
  const version = options.vueVersion || detectVueVersion()

  if (version === 2) {
    const vueVer = await getPackageInfoSync('vue')?.version
    const templateVer = await getPackageInfoSync('vue-template-compiler')?.version

    if (vueVer !== templateVer) {
      consola.error(`[${PLUGIN_NAME}]: The current environment detects using Vue2,PLEASE manually install ${lightBlue('vue-template-compiler')}\n${lightBlue('>')} npm i -D vue-template-compiler@${vueVer}`)
      return null
    }

    const compiler = await import('vue-template-compiler')
    const result = vue2CompileTemplate({
      compiler: compiler as VueTemplateCompiler,
      source: svg.replace('<svg', '<svg v-on="$listeners"'),
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
