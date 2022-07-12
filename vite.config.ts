import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueSetupExtend()],
  // 配置路径别名
  resolve:{
    alias:{
      '@':path.resolve(__dirname, './src')
    }
  },
  // 配置css样式自动导入
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `
      }
    }
  }
})
