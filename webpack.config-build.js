const webpack = require("webpack");
const path = require("path");

const paths = {
	DIST: path.resolve(__dirname, "docs"),
	SRC: path.resolve(__dirname, "src")
};

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
	filename: "main.css",
	disable: process.env.NODE_ENV === "development"
});

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const optimizeCssAssets = new OptimizeCssAssetsPlugin()

const production = new webpack.DefinePlugin({
	"process.env.NODE_ENV": JSON.stringify("production")
});

const uglyfy = new webpack.optimize.UglifyJsPlugin();

const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpack = new HtmlWebpackPlugin({
	template: path.join(paths.SRC, "/index.html"),
	inject: false
});

module.exports = {
	entry: path.join(paths.SRC, "/index.js"),
	output: {
		path: paths.DIST,
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".jsx", ".scss", ".sass", ".css"]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(scss|sass)$/,
				use: extractSass.extract({
					use: [
						{
							loader:
								"css-loader?modules&importLoaders=1&localIdentName=cls[hash:base64:5]" // with CSS modules
						},
						{
							loader: "sass-loader?modules",
							options: {
								includePaths: [
									path.resolve(__dirname, "node_modules")
								] // allows @import from node_modules
							}
						}
					]
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "img/"
						}
					}
				]
			}
		]
	},
	plugins: [extractSass, optimizeCssAssets, production, uglyfy, htmlWebpack]
};
