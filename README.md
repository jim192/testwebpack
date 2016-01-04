# testwebpack
#运行
Demo1： $ webpack .scripts/entryDemo1.js bundle.js
Demo2： $ webpack .scripts/entryDemo2.js bundle.js
Demo3:  $ npm install css-loader style-loader
	    $ webpack ./scripts/entryDemo3.js bundle.js
Demo4:  $ webpack ./scripts/entryDemo4.js bundle.js --module-bind "css=style\!css"
		//css=style\!css 这里官方文档有错误，应该加 \
Demo5: 	add webpack.config.js
		$webpack
