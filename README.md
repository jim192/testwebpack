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

##Note  
	使用默认的 webpack.config.js ，运行 Demo5 或 codeSplitting，需要修改 entry  

##**Note**  
  	运行 `$webpack --config webpack.multientry.config.js`，可以使用另外的配置文件

