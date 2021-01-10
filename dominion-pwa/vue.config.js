module.exports = {
  pwa: {
    name: 'Dominion PWA',
    themeColor: '#323232',
    msTileColor: '#5f9ea0',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: 'index.html',
    },
    manifestOptions: {
      name: 'Dominion PWA',
      short_name: 'Dominion',
      start_url: '.',
      display: 'fullscreen',
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}