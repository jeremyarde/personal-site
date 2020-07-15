const assetPrefix = process.env.BUILDING_FOR_NOW ? "/personal-site" : "";

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
};
