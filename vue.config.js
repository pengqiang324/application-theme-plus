const { defineConfig } = require('@vue/cli-service');
const StylelintPlugin = require('stylelint-webpack-plugin');
// const ElementPlus = require('unplugin-element-plus/webpack')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // css: {
    //   loaderOptions: {
    //     scss: {
    //       additionalData: `@use "@/styles/index.scss" as *;`, // 按需引入样式
    //     },
    //   },
    // },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        // 设置别名 alias
        config.resolve.alias
            .set('@', resolve('examples'))
            .set('~', resolve('packages'));

        // 排除文件夹 eslint
        config.module
            .rule('eslint')
            .exclude.add(resolve('lib'))
            .end()
            .exclude.add(resolve('docs'))
            .end();
        config.module
            .rule('js')
            .include.add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader');
    },
    configureWebpack: {
        // externals: {
        //   "vue": "vue"
        // },
        plugins: [
            // AutoImport({
            //   resolvers: [ElementPlusResolver()]
            // }),
            // Components({
            //   resolvers: [ElementPlusResolver()]
            // }),
            // ElementPlus({
            //   useSource: true
            // })
            new StylelintPlugin({
                files: ['**/*.{html,vue,css,sass,scss}'], // 按需配置
                fix: false,
                cache: true,
                emitError: true,
                failOnError: false
            })
        ]
    },
    lintOnSave: false
});
