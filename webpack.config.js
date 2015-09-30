var path = require("path");

module.exports = {
  context: path.join(__dirname, "/src"),
  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },
  output: {
    filename: "app.js",
    path: path.join(__dirname, "/dist")
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }, {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }, {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }, {
        test: /\.(png|jpg|gif|woff)$/, loader: "url-loader?limit=100000"
      }
    ]
  }
};
