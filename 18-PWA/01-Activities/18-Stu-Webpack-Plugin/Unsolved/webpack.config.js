const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: "public/assets/js/app.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: "/public/dist/",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [new WebpackPwaManifest({
    name: 'Images App',
    short_name: 'Images App',
    description: 'My awesome Progressive Images Web App!',
    background_color: '#ffffff',
    // crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve('src/assets/icon.png'),
        sizes: [72, 96, 128, 144, 152, 192, 384, 512] // multiple sizes
      },
      {
        src: path.resolve('src/assets/large-icon.png'),
        size: '1024x1024' // you can also use the specifications pattern
      },
      {
        src: path.resolve('src/assets/maskable-icon.png'),
        size: '1024x1024',
        purpose: 'maskable'
      }
    ]
  })]
};

module.exports = config;
