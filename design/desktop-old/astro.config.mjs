import { defineConfig } from 'astro/config'

import solid from '@astrojs/solid-js'

import unimport from 'unimport/unplugin'
import autoprefixer from 'autoprefixer'

import workspaceConfig from '../../../vite.workspace'
import AutoImport from '../../../unimport.workspace'
import ViteHTMLAttributesPlugin from './plugin.mjs'

// https://astro.build/config
export default defineConfig({
    integrations: [solid({})],
    output: 'static',
    vite: {
        plugins: [
            unimport.vite({
                dirs: ['../../../packages/enums', './src/stores', 'src/common'],
                imports: [...AutoImport.nanostores, ...AutoImport.resolut, ...AutoImport.solid],
                dts: true
            }),
            ViteHTMLAttributesPlugin()
        ],
        server: {
            watch: {
                ignored: ['**/target/**']
            },
            port: 4321,
            strictPort: true
        },
        resolve: workspaceConfig.resolve,
        clearScreen: false,
        envPrefix: ['VITE_', 'TAURI_'],
        build: {
            target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
            minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
            sourcemap: !!process.env.TAURI_DEBUG
        },
        css: {
            postcss: {
                plugins: [autoprefixer]
            }
        }
    }
})
