import { basename } from 'node:path'
import { getPackageInfoSync } from 'local-pkg'
import { type Options } from '.'

export async function compileSvg(svg: string, path: string, options: Options): Promise<string> {
  const version = options.vueVersion || detectVueVersion()

  if (version === 2) {
    const { compileTemplate } = await import('compiler-sfc-v2')
    const { code } = compileTemplate({
      source: svg.replace('<svg', '<svg v-on="$listeners"'),
      filename: `${basename(path)}.vue`,
      transformAssetUrls: false,
    })

    return code
  }
  else {
    const { compileTemplate } = await import('compiler-sfc-v3')
    const { code } = compileTemplate({
      id: path,
      source: svg,
      filename: `${basename(path)}.vue`,
      transformAssetUrls: false,
    })

    return code
  }
}

export function detectVueVersion(root: string = process.cwd()): 2 | 3 {
  const vuePkg = getPackageInfoSync('vue', { paths: [root] })

  if (vuePkg && vuePkg.version)
    return Number.parseInt(vuePkg.version) as 2 | 3

  else
    return 3
}
