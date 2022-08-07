import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import mBaseUI from '../packages/index'
// import '@/styles/element/index.scss'
import 'element-plus/dist/index.css'
import '../theme/element/element.scss'
 
const app = createApp(App)
app.use(mBaseUI)
app.use(router)
app.use(store)
app.use(ElementPlus, { locale: zhCn }) // 中文
app.mount('#app')
