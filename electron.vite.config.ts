import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin, bytecodePlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vuetify from 'vite-plugin-vuetify'
import svgLoader from 'vite-svg-loader'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  main: {
    plugins: [bytecodePlugin()]
  },
  preload: {
    plugins: [bytecodePlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@': fileURLToPath(new URL('./src/renderer/src', import.meta.url)),
        '@core': fileURLToPath(new URL('./src/renderer/src/@core', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/renderer/src/@layouts', import.meta.url)),
        '@images': fileURLToPath(new URL('./src/renderer/src/assets/images/', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/renderer/src/assets/styles/', import.meta.url)),
        '@configured-variables': fileURLToPath(
          new URL('./src/renderer/src/assets/styles/variables/_template.scss', import.meta.url)
        )
      }
    },
    define: { 'process.env': {} },
    build: {
      chunkSizeWarningLimit: 5000,
    },
    plugins: [
      vue(),
      vueJsx(),
      vuetify({
        autoImport: true,
        styles: {
          configFile: 'src/assets/styles/variables/_vuetify.scss'
        }
      }),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/math', 'pinia'],
        vueTemplate: true,
        // ℹ️ Disabled to avoid confusion & accidental usage
        ignore: ['useCookies', 'useStorage'],
      }),
      svgLoader(),
      Components({
        dirs: ['src/@core/components', 'src/components'],
        dts: true,
        resolvers: [
          (componentName: string): any => {
            // Auto import `VueApexCharts`
            if (componentName === 'VueApexCharts')
              return { name: 'default', from: 'vue3-apexcharts', as: 'VueApexCharts' }
          },
        ],
      }),
    ]
  }
})
