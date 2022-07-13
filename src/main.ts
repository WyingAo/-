import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css' // 重置样式库
import '@/assets/styles/common.less' // 导入公共样式
import router from '@/router'
import { createPinia } from 'pinia'
import WyaUI from '@/components'
const app = createApp(App)
app.use(router)
app.use(WyaUI)
app.use(createPinia())
app.mount('#app')

