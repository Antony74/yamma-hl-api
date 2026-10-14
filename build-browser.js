const path = require('path');
const { build } = require('esbuild');

const browserBuiltins = new Set([
    'events',
    'fs',
    'path',
    'readline',
    'stream',
    'url',
    'worker_threads',
]);

build({
    entryPoints: ['src/browser.ts'],
    bundle: true,
    outfile: 'dist/index.browser.mjs',
    format: 'esm',
    platform: 'browser',
    plugins: [
        {
            name: 'browser-node-builtins',
            setup(build) {
                build.onResolve({ filter: /.*/ }, (args) => {
                    const specifier = args.path.replace(/^node:/, '');
                    if (!browserBuiltins.has(specifier)) {
                        return;
                    }
                    return {
                        path: path.resolve(__dirname, 'browser-shims.js'),
                    };
                });
            },
        },
    ],
}).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
