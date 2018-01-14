const webpack = require("webpack");
const path = require("path");

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const config = {
  entry: {
    "turbine-bulma": __dirname + "/src/index.ts",
    "turbine-bulma.min": __dirname + "/src/index.ts"
  },
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    library: "turbine-bulma",
    libraryTarget: "var",
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: "ts-loader",
      exclude: /node_modules/,
      options: {
        configFile: "tsconfig-build.json"
      }
    }]
  },
  resolve: {
    modules: [path.resolve("./src"), "node_modules"],
    extensions: [".ts", ".js"]
  }
  // },
  // plugins: [
  //   new UglifyJsPlugin({include: /\.min\.js$/, minimize: true})
  // ]
};

module.exports = config;