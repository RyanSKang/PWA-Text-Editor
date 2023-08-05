const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // To inject our js bundles into generated html file
      new HtmlWebpackPlugin({
        template: './index.html',
        title: "JATE"
      }),
      // Injects custom service workers
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js'
      }),
      // Creating manifest.json
      new WebpackPwaManifest({
        fingerprints: false, 
        inject: true, 
        short_name: "JATE",
        name: "JATE",
        description: "Just another text editor",
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 102, 256, 384, 512],
            destination: path.join('assets', 'icons')
          },
        ],
        publicPath: '/',
        start_url: '/',
        background_color: "#e27eb4",
        theme_color: "#e27eb4"
      }),
    ],

    module: {
      rules: [
        // CSS Loaders
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        // Babel Loaders
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use:{
            loader: 'babel-loader',
            options: {
              presets: ['@babel/present-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread',
                        '@babel/transform-runtime']
            }
          }
        }
      ],
    },
  };
};
