module.exports = {
  publicPath: './',
  devServer: {
    open: true, // 编译完成自动打开网页
    overlay: false, // 编译错误全屏遮罩
    clientLogLevel: 'error', // 浏览器错误日志
    disableHostCheck: true, // 通过 host 访问本地的服务
    proxy: {
      // 请求代理
      '/api': {
        target: 'http:127.0.0.1:3000', // 代理地址
        ws: true, // 开启websocket，如果是 http 代理可以不用设置
        changeOrigin: true, // 本地虚拟一个服务器接收你的请求并代你发送该请求
        pathRewrite: {}, // 重写地址
        secure: false, // 接受使用无效证书在 HTTPS 上运行的后端服务器
      },
    },
  },
}
