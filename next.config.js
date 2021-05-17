const fs = require('fs');
const path = require('path');
const lessToJS = require('less-vars-to-js');
const withLess = require('./next-less');
const { i18n } = require('./next-i18next.config');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './styles/theme/vars.less'), 'utf8')
);

module.exports = withLess({
  i18n,

  cssModules: true,

  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },

  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables,
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];

      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) {
            return callback();
          }

          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }

    return config;
  },
});
