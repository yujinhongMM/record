import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/record/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
       less: {
         modifyVars: {
           hack: `true; @import (reference) "${path.resolve(__dirname, 'src/assets/styles/base.less')}";`,  // src/css/common.less 是你需要全局变量 （你定义的定义的方法 和 变量等）
         },
         javascriptEnabled: true
       }
    }
  }
})
