# testwebpack
##运行  

Demo1： `$ webpack .scripts/entryDemo1.js bundle.js`  
		使用 index.html 查看  
Demo2： `$ webpack .scripts/entryDemo2.js bundle.js`  
		使用 index.html 查看  
Demo3:  `$ npm install css-loader style-loader`
	    `$ webpack ./scripts/entryDemo3.js bundle.js`  
	    使用 index.html 查看  
Demo4:  `$ webpack ./scripts/entryDemo4.js bundle.js --module-bind "css=style\!css"`
		** `css=style\!css` 这里官方文档有错误,没有 \ ，应该加 \ **  
		使用 index.html 查看  
Demo5: 	add file "webpack.config.js"  
		`$webpack`  

codeSplitting:  `$webpack`  
		生成 bundle.js, 1.bundle.js, 2.bundle.js。在 console 中，可以输出 b 的值，但是无 a 的值（未执行）  

$gulp usewebpackstream  
	gulp 使用 webpack-stream, 调用 webpack 的功能  

$gulp usewebpack  
	gulp 运行 webpack，且调用 webpack.multientry.config.js 的配置  
	
$gulp usewebpackcommon  
	执行($webpack --config webpack.commonplug.config.js)  
	1. 使用 commonPlug1 时，会生成simplecommon.js（仅包含公共引用部分） simpleA.js（仅包含 simpleOne.js 中的内容） simpleB.js（仅包含 simpleTwo.js 中的内容）。  
	2. 使用 commonPlug 时，会生成 simpleA.js/simpleB.js/simpleC.js（包含对应 js 的独有内容和独自引用的内容），simpleD.js（包含对应内容和全部引用的内容） common.js（包含公共的 simplecommon.js 的内容） 。似乎提取公共部分的代码，最后一个待提取的 chunk 会包含对应内容和全部引用的内容 


###Note  
	使用默认的 webpack.config.js ，运行 Demo5 或 codeSplitting，需要修改 entry  

###**Note**  
  	运行 `$webpack --config webpack.multientry.config.js`，可以使用另外的配置文件  

###Note：  

1. js 和 css 放在同级目录下。运行后，在 tmp 目录下生成 entryfirst.js, entrysecond.js, entrythree.js等文件。  
2. js 和 css 放在不同级目录下，运行后，在 tmp 目录下生成 entryfirst.js, entrysecond.js, entrythree.js  
3. entry6.js 使用之前，需要`$npm install less-loader --save-dev`.

###Warn:	 
extract-text-webpack-plugin 插件缺少 webpack-sources 依赖，因为 github 上未添加。需要手动在`/node_modules/extract-text-webpack-plugin/package.json` 中添加 `"webpack-sources": "^0.1.0"`。暂时每次 clone 此项目之后，先运行 $npm install webpack-sources

###Note：	
`require("..\\..\\styles\\testwebpack.css");`本地文件访问注意使用反斜杠\\，好像斜杠和反斜杠在 webpack 中并不会通用。如果使用了斜杠，会报错，找不多目标样式表。

###Note:  
参考 entry4.js 的使用，直接使用 `require("..\\..\\styles\\testwebpack.css");`去掉`!style!css!`后，输出目录会多一个对应 entryfour.js 的 entryfour.css.需要使用这个样式表时，在html 中通过`link` 添加。如果加上`!style!css!`则会打包到entryfour.js 中去，在引用该 js 时，会直接应用样式表,即直接在 head 标签中添加 style 标签
	
###Note：	
extract-text-webpack-plugin 可以将 css 样式独立出来，形成单独的文件，供引用。参考 entry5.js 的使用。将test1.css test2.css 及 不同目录下的testwebpack.css 打包成一个 entryfive.css。然后在testentryfive.html 页面引用。		
