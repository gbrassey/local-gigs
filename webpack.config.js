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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      }, {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }, {
        test: /\.(scss|css)$/,
        loaders: ["style", "css", "sass"]
      }, {
        test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=100000"
      },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};
