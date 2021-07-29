module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('js')
        .exclude
          .add(new RegExp('src/lib'))
  }
}