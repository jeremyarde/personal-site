const assetPrefix = process.env.BUILDING_FOR_NOW ? "/personal-site" : "";
// const assetPrefix = process.env.BUILDING_FOR_NOW ? "jeremyarde.github.io" : "";

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
};
