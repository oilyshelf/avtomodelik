const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
	context: path.join(__dirname, "src"),
	target: "web",
	entry: "./index.tsx",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "http://localhost:8080/", // for MF needs to be the deployed path !!!!
		clean: true,
	},
	resolve: {
		extensions: [".js", ".ts", ".tsx"],
		fallback: {
			fs: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader", "ts-loader"],
			},
			{
				test: /\.(png|jpg|gif|svg|ico)$/,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|ttf)$/,
				type: "asset/inline",
			},
		],
	},
	devtool: "source-map",
	devServer: {
		historyApiFallback: true, // for routes but seems it doesnt work ...
		contentBase: "./dist", // Content base
		inline: true, // Enable watch and live reload
		host: "localhost",
		port: 8080,
		stats: "errors-only",
		proxy: {
			"/api": {
				target: "http://localhost/",
				pathRewrite: { "^/api": "" },
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html", //Name of file in ./dist/
			template: "index.html", //Name of template in ./src
			favicon: "./assets/img/favicon.ico",
			hash: true,
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
		
	],
};
