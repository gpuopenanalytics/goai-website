const webpack = require("webpack");
const path = require("path");

const paths = {
	DIST: path.resolve(__dirname, "docs"),
	SRC: path.resolve(__dirname, "src")
};

module.exports = {
	entry: path.join(paths.SRC, "/index.js"),
	output: {
		path: paths.SRC,
		filename: "bundle.js"
	},
	devServer: {
		contentBase: paths.SRC,
		compress: true,
		port: 9000
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
				use: [
					{
						loader: "resolve-url-loader" // needed for sourceMaps
					},
					{
						loader: "style-loader?modules&sourceMap" // creates style nodes from JS strings
					},
					{
						loader: "css-loader?modules&importLoaders=1&localIdentName=[path][name]__[local]___[hash:base64:5]" // with CSS modules
					},
					{
						loader: "sass-loader?modules&sourceMap",
						options: {
							includePaths: [
								path.resolve(__dirname, "node_modules")
							] // allows @import from node_modules
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: { name: "[path][name].[ext]" }
					}
				]
			}
		]
	},
	plugins: []
};
