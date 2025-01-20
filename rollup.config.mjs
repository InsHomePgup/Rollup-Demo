import json from '@rollup/plugin-json'
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
export default {
    input: 'src/main.ts',
    output: {
        dir: './output',
        format: 'umd',
        name:'blue-whale-utils',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        json({}),
        typescript({
            tsconfig: './tsconfig.json',
        }),
        babel({ babelHelpers: "bundled" })
    ],
};
