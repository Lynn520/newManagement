const  HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    mode: "development",
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.[hash].js",
        publicPath: '/',
    },
    node:{
        fs: 'empty'
    },
    // externals: nodeModules,
    plugins: [
        new HtmlWebpackPlugin({
        template: './index.html',
        // inject: false, // 因为要延迟加载bundle，不能直接inject到body
        favicon:'./favicon.ico',
        minify: {
            removeAttributeQuotes: true,
            removeComments: true,
            collapseWhitespace: true,
            removeEmptyAttributes: true //去除空属性
        }
        }),
    ],

    resolve: {
        alias: {
            $semantics: path.resolve(__dirname, './src/page/semantics'),
            $components: path.resolve(__dirname, './src/page/components'),
            $utils: path.resolve(__dirname, './src/utils'),
            $template: path.resolve(__dirname, './src/template'),
        },
    },
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: true,
        port: '8888',
        //本地服务路径
        // contentBase: path.join(__dirname, './build'),
        //实时刷新
        inline: true,
        //自动更新修改部分
        hot: true,
        //代码压缩，加快开发流程
        compress: true,
        //出错显示
        overlay: {
            errors: true,
        },
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-2'],
                },
            },
            {
                test: /\.(css|scss|less)$/,
                exclude: /node_modules|antd\.css/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader?modules' },
                    { loader: 'sass-loader' },
                    { loader: 'less-loader',
                  
                           options: {
                            //    lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                                 modifyVars: {
                                //    'primary-color': '#1DA57A',
                                //    'link-color': '#1DA57A',
                                //    'border-radius-base': '2px',
                                 },

                               javascriptEnabled: true,
                             },
                    },
                ],
            },
            {
                test: /\.(css|scss|less)$/,
                include: /node_modules|antd\.css/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                    { loader: 'less-loader',
                    options: {
                        // lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                          modifyVars: {
                            // 'primary-color': '#1DA57A',
                            // 'link-color': '#1DA57A',
                            // 'border-radius-base': '2px',
                          },
                          
                        // },
                        javascriptEnabled: true,
                      },
                     },
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
        ],
    },
}
