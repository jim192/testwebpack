var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry:{
		entryfirst: ".\\scripts\\entryOne\\entry1",
		entrysecond: ".\\scripts\\entryTwo\\entry2",
		entrythree: ".\\scripts\\entryThree\\entry3",
		entryfour:".\\scripts\\entryFour\\entry4",
		entryfive:".\\scripts\\entryFive\\entry5",
		entrysix:".\\scripts\\entrySix\\entry6"
	},
	output:{
		path: __dirname + "/tmp/",
		filename:"[name].js",
		chunkFilename: "[id].js",
		publicPath:"/styles/"
	},
	module:{
		loaders:[
		//Extract css file
			{test:/\.css$/,loader:ExtractTextPlugin.extract("style-loader","css-loader")},
		//Extract less file
			{test:/\.less$/,loader:ExtractTextPlugin.extract("style-loader","css-loader!less-loader")}
		//Use other loaders the same way.
		]
	},
	//Use the plugin to specify the resulting filename and add needed behavior to the compiler
	plugins:[
		//the stylesheets' output file named "[name].css"
		new ExtractTextPlugin("[name].css")
	]

};