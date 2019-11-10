module.exports = {
  pwa: {
    themeColor: '#FFFFFF',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public\\service-worker.js'
    }
  },
  configureWebpack: {
    plugins: []
  },
  transpileDependencies: ['vuetify']
}
