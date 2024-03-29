import '../theme/element/index.scss';
import {
    Spin,
    BaseSetting,
    Content,
    DefaultEmpty,
    Divider,
    FormItem,
    Pagination,
    PopConfirm,
    Search,
    SearchController,
    Selection,
    TableTool
} from '../theme/utils';

const version = '1.2.6';
// const modulesFiles = import.meta.globEager('../theme/components/**/*.js')
const modulesFiles = require.context('../theme/components', true, /\.js$/);

const install = (Vue, options) => {
    // 判断是否安装
    if (install.installed) return;
    // 注册组件
    // for (const key in modulesFiles) {
    //   if (Object.prototype.hasOwnProperty.call(modulesFiles, key)) {
    //     const component = modulesFiles[key].default
    //     Vue.component(component.name, component)
    //   }
    // }

    modulesFiles.keys().map(componentPath => {
        const component = modulesFiles(componentPath).default;
        Vue.component(component.name, component);
    });
    // 判断注册参数是否为正确参数
    if (
        Object.prototype.toString.call(options) === '[object Object]' &&
        Object.keys(options).length
    ) {
        for (const key in options) {
            if (Object.prototype.hasOwnProperty.call(options, key)) {
                Vue.config.globalProperties[key] = options[key];
            }
        }
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    Spin,
    BaseSetting,
    Content,
    DefaultEmpty,
    Divider,
    FormItem,
    Pagination,
    PopConfirm,
    Search,
    SearchController,
    Selection,
    TableTool
};

export default {
    version,
    install
};
