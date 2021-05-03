const WebpackPwaManifest = require("webpack-pwa-manifest");

const config = {
  // Add webpack configuration code here
  entry: {
    favorites: "./assets/js/favorites.js",
    index: "./assets/js/index.js",
    topic: "./assets/js/topic.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [new WebpackPwaManifest({
    name: 'News App',
    short_name: 'News App',
    description: 'My awesome Progressive News Web App!',
    background_color: '#ffffff',
    // crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    // icons: [
    //   {
    //     src: path.resolve('src/assets/icon.png'),
    //     sizes: [72, 96, 128, 144, 152, 192, 384, 512] // multiple sizes
    //   },
    //   {
    //     src: path.resolve('src/assets/large-icon.png'),
    //     size: '1024x1024' // you can also use the specifications pattern
    //   },
    //   {
    //     src: path.resolve('src/assets/maskable-icon.png'),
    //     size: '1024x1024',
    //     purpose: 'maskable'
    //   }
    // ]
  })]
};

module.exports = config;
