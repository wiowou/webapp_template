const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: ''
	},
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		index: 'index.html',
		port: 6565
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[hash].[ext]'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
					// options: {
					// 	presets: ['@babel/env'],
					// 	plugins: [
					// 		'@babel/plugin-proposal-object-rest-spread',
					// 		'@babel/plugin-proposal-unicode-property-regex',
					// 		'@babel/plugin-transform-dotall-regex',
					// 		[
					// 			'@babel/plugin-proposal-class-properties',
					// 			{ loose: false }
					// 		],
					// 		'@babel/plugin-proposal-json-strings',
					// 		'@babel/plugin-syntax-dynamic-import',
					// 		'@babel/plugin-syntax-import-meta'
					// 	]
					// }
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {}
					// other vue-loader options go here
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [
				'**/*',
				path.join(process.cwd(), 'dist/**/*')
			]
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			chunks: ['index'],
			title: 'Hello world',
			template: 'src/page-template.html',
			description: 'Hello World'
		}),
		new VueLoaderPlugin()
	],
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	}
};
