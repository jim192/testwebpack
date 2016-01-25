var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry:{
		"js/entryfirst": ".\\scripts\\entryOne\\entry1",
		"js/entrysecond": ".\\scripts\\entryTwo\\entry2",
		// "js/entryfirst": ".\\scripts\\entryOne\\entry1",
		// "js/entrysecond": ".\\scripts\\entryTwo\\entry2",
		// 输出到 tmp/js/ 目录下
		entrythree: ".\\scripts\\entryThree\\entry3",
		entryfour:".\\scripts\\entryFour\\entry4",
		entryfive:".\\scripts\\entryFive\\entry5",
		entrysix:".\\scripts\\entrySix\\entry6"
	},
	output:{
		path: __dirname + "/tmp/",
		filename:"[name].js",
		//filename:"[name]/[name].js",
		//根据 [name] 输出到命名为 [name] 的文件夹下
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
		//using file-loader to output files in different directory began
		// loaders:[
		// //Extract css file
		// 	{
		// 		test:/\.css$/,loader:[ExtractTextPlugin.extract("style-loader","css-loader")]},
		// //Extract less file
		// 	{test:/\.less$/,loader:ExtractTextPlugin.extract("style-loader","css-loader!less-loader")},
		// //Use other loaders the same way.	
		// 	{
		// 		test:/\.js$/,
		// 		loader: 'file-loader?name=js/[name].js'
		// 		//entry1-6 will be copied, and output in tmp/js directory
		// 		//the output file ([name].js) will in tmp instead of tmp/js
		// 	}
		// ]
		//using file-loader to output files in different directory end

	},
	//Use the plugin to specify the resulting filename and add needed behavior to the compiler
	plugins:[
		//the stylesheets' output file named "[name].css"
		new ExtractTextPlugin("[name].css")
	]

};