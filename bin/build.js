import * as esbuild from 'esbuild'

esbuild.build({
    entryPoints: ['./resources/css/plugin.css'],
    outfile: './dist/filament-masterdetail.css',
    bundle: true,
    mainFields: ['module', 'main'],
    platform: 'browser',
    treeShaking: true,
    target: ['es2020'],
    minify: true
})
