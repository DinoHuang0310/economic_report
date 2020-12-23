// vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '《今周刊》2021全球經濟關鍵報告'
                return args
            })
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector',
    ],
    publicPath: process.env.NODE_ENV === 'production' ?
        '/lazyweb/project/economic_report/' : './' // 正式
        // '/edm/dinoTest/economic_report/' : './' // 測試
        // './' : './' // localhost
}