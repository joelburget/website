module.exports = {
    entry: "./index",
    output: {
        path: __dirname, // + "/dist",
        publicPath: '/dist',
        filename: "bundle.js"
    },
    module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader?stage=0'
          }
      ]
    }
};
