const webpack = require("webpack");
const path = require("path");
module.exports = {
  chainWebpack: config => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        _: "lodash",
        axios: "axios"
      }
    ]);
  }
};
