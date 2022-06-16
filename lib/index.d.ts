import { OptimizeOptions } from "svgo";
import type { Plugin } from "vite";
export declare function createSvgPlugin(options?: {
    svgoConfig?: OptimizeOptions;
}): Plugin;
