var webpack = require('webpack');
var path = require('path');
var commonsPlugin1 = new webpack.optimize.CommonsChunkPlugin('simplecommon.js');
//get simplecommon.js simpleA.js simpleB.js
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
	name:"common",
	//the commons chunk name
	//对应 entry 中的 "common"
	filename:"common.js",
	//the filename of the commons chunk
	//give the chunk a different name

	minChunks:Infinity,
	//
	chunks:["simpleA","simpleB","simpleC",".simpleD"],
	//chunk 中对应的是 entry 中的 chunk name
	//only use these entries
});

module.exports = {
	entry:{
		//commonPlugin1 began
		// simpleA:"./scripts/testCommonPlugin/simpleOne.js",
		// simpleB:"./scripts/testCommonPlugin/simpleTwo.js",
		//commonsPlugin1 end
		
		//commonsPlugin began
		simpleA:"./scripts/testCommonPlugin/simpleOne.js",
		simpleB:"./scripts/testCommonPlugin/simpleTwo.js",
		simpleC:"./scripts/testCommonPlugin/simplefirst.js",
		simpleD:"./scripts/testCommonPlugin/simplesecond.js",
		common:["./scripts/testCommonPlugin/simplecommon.js"],
		lasttest:"./scripts/entryDemo1.js"
		//commonPlugin end
	},
	output:{
		path: __dirname + "/tmp",
		filename:"[name].js",
		publicPath:__dirname+"/tmp/"
	},
	plugins:[commonsPlugin]
};