const assetPrefix = process.env.BUILDING_FOR_NOW ? "/personal-site" : "";
// const assetPrefix = process.env.BUILDING_FOR_NOW ? "jeremyarde.github.io" : "";
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/personal-site/' : "",
  env: {
    // ASSET_PREFIX: assetPrefix,
  },
  future: {
    webpack5: true,
  },
};
