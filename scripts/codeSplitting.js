require.ensure(["./firstScript.js"],function(require){
	//require.ensure(dependencies,callback)
	//Every dependency can be synchronously "required" when calling the callback.
	//Require.ensure only loads the modules, it doesn't evaluate them
	//In firstScript.js, there is a obj named a. But you cannot get the value of a in console
	var c="c";
	console.log(c);	//Return "c"
	//Require dependency began
	c = require(["./firstScript.js"]);
	console.log(c);//Reture "false", but you can get the value of a now
	//Require dependency end
});
require(["./secondScript.js"],function(require){
	//Require(dependencies,callback)
	//All dependencies are loaded.
	//In webpack modules are evaluate left to right
	//In secondScript.js, there is a obj named b. You can get the value of b in console
	window.d="d";
	console.log(d);
});