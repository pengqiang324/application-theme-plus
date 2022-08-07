import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import mBaseUI from '../packages/index'

import 'element-plus/dist/index.css'
import '../theme/index.css'
 
const app = createApp(App)
app.use(router)
app.use(ElementPlus, { locale: zhCn }) // 中文
app.use(mBaseUI)
app.mount('#app')
