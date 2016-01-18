// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
module.exports = {
	entry:{
		forserver:["./build/entryDemo1.js"]
	},
	ouput:{
		path:path.resolve(__dirname,"build"),
		filename:"[name].js",
		publicPath: "/tmp/"
		
	}
	// module:{
	// 	loaders:[
	// 	//Extract css file
	// 		{test:/\.css$/,loader:ExtractTextPlugin.extract("style-loader","css-loader")},
	// 	//Extract less file
	// 		{test:/\.less$/,loader:ExtractTextPlugin.extract("style-loader","css-loader!less-loader")}
	// 	//Use other loaders the same way.
	// 	]
	// },
	// //Use the plugin to specify the resulting filename and add needed behavior to the compiler
	// plugins:[
	// 	//the stylesheets' output file named "[name].css"
	// 	new ExtractTextPlugin("[name].css")
	// ]
};