import { OptimizeOptions } from "svgo";
import { Plugin } from "vite";
export declare function createSvgPlugin(options?: {
    svgoConfig?: OptimizeOptions;
}): Plugin;
