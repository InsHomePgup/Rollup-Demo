import json from '@rollup/plugin-json'
import typescript from "@rollup/plugin-typescript";

export default {
    input: 'src/main.ts',
    output: {
        dir: 'dist',
        format: 'esm'
    },
    manualChunks:{

    },
    plugins: [
        json({}),
        typescript({
            tsconfig: './tsconfig.json',
        })]
};
