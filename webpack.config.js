var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './src/scripts/main.js',
        './src/styles/main.styl'
    ],
    output: {
        path: './static',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './static'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        root: '',
        alias: {
            CSSPlugin: __dirname + '/node_modules/gsap/src/uncompressed/plugins/CSSPlugin.js',
            TweenLite: __dirname + '/node_modules/gsap/src/uncompressed/TweenMax.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: / v/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['add-module-exports']
                }
            },
            {
                test: /\.styl$/,
                loader: 'style!css!postcss!stylus'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
            }
        ]
    },
    postcss: function() {
        return [
            precss,
            autoprefixer({
                add: true,
                remove: false
            })
        ];
    }
};
