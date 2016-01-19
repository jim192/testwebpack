var gulp = require('gulp');
var del = require('del');
var webpackstream = require('webpack-stream');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require("./webpack.multientry.config.js");

gulp.task('clean:tmp', function(){
	console.log('cleanning the folder tmp...');
	return del([
		//using a globbing pattern to match everything inside the 'tmp' folder
		'tmp/**/*',
		//do not want to clean this file though  so negate the pattern
		//'!tmp/entrysix.js'		
	]);
});

gulp.task('usewebpackstream',function(){
	return gulp.src('./scripts/content.js')
	//compile content.js into assets with webpack into destination folder with the output
	//filename of [hash].js
	.pipe(webpackstream())
	.pipe(gulp.dest('./tmp/gulps/'))
	//it will compile the files which were written in the webpack.config.js instead of content.js! 
	//And they will named as you wish in XXX.config.js
	.pipe(webpackstream( require('./webpack.multientry.config.js')))
	.pipe(gulp.dest('./tmp/gulpplus/'));
});

gulp.task('usewebpack',function(callback){
	//get my webpack config file
	var myConfig = Object.create(webpackConfig);
	//modify some webpack config options here

	//run webpack
	// webpack({
	// 	//configuration		
	// },function(err,stats){
	// 	console.log("running usewebpack...");
	// 	if(err) throw new gutil.PluginError('webpack', err);
	// 	gutil.log("[webpack]",stats.toString({
	// 		//output options
	// 	}));
	// 	callback();
	// });

	//run webpack with 'myConfig' file
	webpack(myConfig,function(err,stats){
		console.log("running usewebpack...");
		if(err) throw new gutil.PluginError('webpack', err);
		gutil.log("[webpack]",stats.toString({
			//output options
		}));
		callback();
	});
});

gulp.task('usewebpackcommon', ['clean:tmp'],function(callback){
	var myConfig = Object.create(require("./webpack.commonplug.config.js"));
	webpack(myConfig,function(err,stats){
		console.log("running usewebpackcommon...");
		if(err) throw new gutil.PluginError('webpack',err);
		gutil.log("[webpack]",stats.toString({
			//output options
		}));
		callback();
	});
});

gulp.task('uglifyJSplug',['clean:tmp'],function(cb){
	var myConfig = Object.create(require("./webpack.config.min.js"));
	webpack(myConfig,function(err,stats){
		console.log("running uglifyJS-plug...");
		if(err) throw new gutil.PluginError('webpack',err);
		gutil.log("[webpack]",stats.toString({
			//output options
		}));
		cb();
	});
});

gulp.task('webpack-dev-server',function(callback){	
	// var compiler = webpack({
	// 	//configuration
	// });

	//get the webpack config file 
	var myConfig = Object.create(webpackConfig);
	//modify some webpack config options here
	myConfig.devtool = 'eval';
	myConfig.debug =true;
	//create a single instance of the compiler
	var compiler = webpack(myConfig);

	//start a webpack-dev-server
	new WebpackDevServer(compiler,{
		//server and middleware options
		publicPath:"/"+ myConfig.output.publicPath,
		stats:{
			colors:true
		}
	}).listen(8080,"localhost",function(err){
		if(err) throw new gutil.PluginError("webpack-dev-server",err);
		//server listening code
		gutil.log("[webpack-dev-server]","http://localhost:8080/");

		//keep the serve alive or continue
		//callback();
	})
})

gulp.task('default', ['clean:tmp'],function(){
	//place code for default task here
	 console.log('cleaned the folder tmp...');
});

