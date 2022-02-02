module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    },
    chainWebpack: (config) => {
      config
        .plugin('html')
        .tap((args) => {
          args[0].title = 'Custom Title';
          return args;
        });
    },
  }
}
