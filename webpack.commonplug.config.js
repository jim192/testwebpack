module.exports = {
	entry:{
		common:["./scripts/testCommonPlugin/simpleOne.js","./scripts/testCommonPlugin/simpleTwo.js"],
		test:'./scripts/codeSplitting.js'
	},
	output:{
		path: __dirname + "/tmp",
		filename:"[name].js",
		publicPath:__dirname+"/tmp/"
	},
	plugins:[
		new webpack.CommonsChunkPlugin({
			name:"common",
			//the commons chunk name
			filename:"commonone.js",
			//the filename of the commons chunk
			//give the chunk a different name

			minChunks:Infinity,
			//
			//chunks:["pageA","pageB"],
			//only use these entries

		})
	]
};