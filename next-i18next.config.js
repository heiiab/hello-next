const path = require('path');

module.exports = {
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'zh-CN',
  },

  localePath: path.resolve(__dirname, './locales'),
};
