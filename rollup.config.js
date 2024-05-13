import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/bundle-iife.js',
            format: 'iife',
            name: 'bundle',
        },
        {
            file: 'dist/bundle-esm.js',
            format: 'esm',
        },
        {
            file: 'dist/bundle-cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/bundle-umd.js',
            format: 'umd',
            name: 'bundle',
        },
    ],
    plugins: [nodeResolve(), commonjs(), babel({ babelHelpers: 'runtime', exclude: 'node_modules/**' })],
};
