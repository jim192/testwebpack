# testwebpack
#运行
# $webpack
#		//在 tmp 目录下生成 entryfirst.js, entrysecond.js, entrythree.js。
#
#Note:	 extract-text-webpack-plugin 插件缺少 webpack-sources 依赖，因为 github 上未添加。
		需要手动在/node_modules/extract-text-webpack-plugin/package.json 中添加 "webpack-sources": "^0.1.0"。
		暂时每次 clone 此项目之后，先运行 $npm install webpack-sources
		
