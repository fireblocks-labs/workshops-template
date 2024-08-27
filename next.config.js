require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
  },
});

const { generalConfig } = require('./src/config');

module.exports = {
  basePath: generalConfig.basePath,
  assetPrefix: generalConfig.basePath,
  output: 'export',
};
