const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function(webpackEnv) {
    const isEnvDevelopment = webpackEnv === 'development'
    const isEnvProduction = webpackEnv === 'production'
    const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false'

    return {
        mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        bail: isEnvProduction,
        entry: ['./src/index.js'],
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.[hash].js',
            publicPath: '/',
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: function(chunk){
                    // 这里的name 可以参考在使用`webpack-ant-icon-loader`时指定的`chunkName`
                    return chunk.name !== 'antd-icons'; 
                },
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `npm.${packageName.replace('@', '')}`
                        },
                    },
                },
            },
        },
        resolve: {
            alias: {
                $semantics: path.resolve(__dirname, './src/page/semantics'),
                $components: path.resolve(__dirname, './src/page/components'),
                $utils: path.resolve(__dirname, './src/utils'),
                $template: path.resolve(__dirname, './src/template'),
            },
        },
        node: {
            fs: 'empty',
        },
        plugins: [
            new HtmlWebpackPlugin(
                Object.assign(
                    {},
                    {
                        template: './index.html',
                        favicon: './favicon.ico',
                    },
                    isEnvProduction
                        ? {
                              minify: {
                                  removeComments: true,
                                  collapseWhitespace: true,
                                  removeRedundantAttributes: true,
                                  useShortDoctype: true,
                                  removeEmptyAttributes: true,
                                  removeStyleLinkTypeAttributes: true,
                                  keepClosingSlash: true,
                                  minifyJS: true,
                                  minifyCSS: true,
                                  minifyURLs: true,
                              },
                          }
                        : undefined
                )
            ),
            new BrotliGzipPlugin({
                asset: '[path].br[query]',
                algorithm: 'brotli',
                test: /\.(js|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8,
                quality: 11,
            }),
            new BrotliGzipPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.(js|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8,
            }),
            new CopyWebpackPlugin([
                {
                    from: __dirname + '/semantics',
                    to: __dirname + '/build/semantics',
                },
            ]),
        ].filter(Boolean),

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        plugins: ['transform-runtime'],
                        presets: [['es2015', { modules: false, loose: true }], ['react'], ['stage-2']],
                    },
                },
                {
                    test: /\.(css|scss|less)$/,
                    exclude: /node_modules|antd\.css/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader?modules' },
                        { loader: 'sass-loader' },
                        { loader: 'less-loader' },
                    ],
                },
                {
                    test: /\.(css|scss|less)$/,
                    include: /node_modules|antd\.css/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' },
                        { loader: 'less-loader' },
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {},
                        },
                    ],
                },
                {
                    loader:'webpack-ant-icon-loader',
                    enforce: 'pre',
                    options:{
                      chunkName:'antd-icons'
                    },
                    include:[
                      require.resolve('@ant-design/icons/lib/dist')
                    ]
                }
            ],
        },
    }
}
