module.exports = {
	entry:'./scripts/codeSplitting.js',
	output:{
		path: __dirname + "/tmp",
		filename:"bundle.js",
		publicPath:__dirname+"/tmp/"
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:"style!css"}
		]
	}
};