import { readFileSync } from "fs";
import { basename } from "path";
import { optimize, OptimizeOptions } from "svgo";
import type { Plugin } from "vite";
import { compileTemplate, parse } from "@vue/component-compiler-utils";
import * as compiler from "vue-template-compiler";

interface CompileResult {
  code: string;
  map?: any;
}

function compileSvg(svg: any, id: string): CompileResult | null {
  const { template, script } = parse({
    source: `
      <template>
        ${svg}
      </template>
      <script>
      export default {
        name: 'VueSvg',
      }
      </script>
    `,
    compiler: compiler as any,
    filename: `${basename(id)}.vue`,
  });

  if (!template) return null;

  const result = compileTemplate({
    compiler: compiler as any,
    source: template.content,
    filename: `${basename(id)}.vue`,
  });

  return {
    code: `
      ${result.code}
      export default {
        render: render,
      }
    `,
    map: script?.map,
  };
}

function optimizeSvg(content: string, svgoConfig: OptimizeOptions) {
  const result = optimize(content, svgoConfig);

  if ("data" in result) {
    return result.data;
  }

  throw new Error(
    `[vite-plugin-vue2-svg] cannot optimize SVG ${svgoConfig.path}`,
  );
}

export function createSvgPlugin(
  options: {
    svgoConfig?: OptimizeOptions;
  } = {},
): Plugin {
  const { svgoConfig } = options;
  const svgRegex = /\.svg$/;

  return {
    name: "vite-plugin-vue2-svg",
    transform(_source: string, id: string) {
      if (/\?raw/.test(id)) {
        return null;
      }

      const fname = id.replace(/\?.*$/, "");
      const isMatch = svgRegex.test(fname);
      if (isMatch) {
        const code: string = readFileSync(fname, { encoding: "utf-8" });
        let svg = optimizeSvg(code, { path: fname, ...svgoConfig });
        if (!svg) {
          throw new Error(`[vite-plugin-vue2-svg] fail to compile ${id}`);
        }

        svg = svg.replace("<svg", '<svg v-on="$listeners"');
        const result = compileSvg(svg, fname);

        return result;
      }
      return null;
    },
  };
}
