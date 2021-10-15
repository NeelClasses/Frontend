const webpack = require("webpack");
module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    })
  );

  return config;
};
