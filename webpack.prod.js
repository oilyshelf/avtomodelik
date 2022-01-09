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
		publicPath: "https://intercmnpny.dev.t4c.vodafone.de/", // for MF needs to be the deployed path !!!!
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
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
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
		new ModuleFederationPlugin({
			name: "ICR",
			filename: "remoteEntry.js",
			remotes: {},
			exposes: {
				"./Serve": "./serve/Serve",
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react,
					// eager: true,
				},
				"react-dom": {
					singleton: true,
					requiredVersion: deps["react-dom"],
					// eager: true,
				},
			},
		}),
	],
};
