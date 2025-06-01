module.exports = {
    chainWebpack: config => {
      config.module
        .rule('avif')
        .test(/\.(avif)$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: 'assets/img/[name].[hash:8].[ext]'
        });
    }
  };