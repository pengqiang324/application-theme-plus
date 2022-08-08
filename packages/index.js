const version = "1.0.0"
const modulesFiles = require.context('../theme/components', true, /\.js$/)
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
import '../theme/element/element.scss'
const install = (Vue, options) => {
  // 判断是否安装
  if (install.installed) return
  // 注册组件
  modulesFiles.keys().map((componentPath) => {
    const component = modulesFiles(componentPath).default
    Vue.component(component.name, component)
  })
  // 判断注册参数是否为正确参数
  if (
      Object.prototype.toString.call(options) === '[object Object]' &&
      Object.keys(options).length
  ) {
      for(var key in options) {
          Vue.config.globalProperties[key] = options[key]
      }
  }
}
 
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
 
export default {
  version,
  install
}