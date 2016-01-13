// require("!style!css!./test1.css");
// require("!style!css!./test2.css");
//打包css文件，需要单独引用 began
require("./test1.css");
require("./test2.css");
//打包css文件，需要单独引用 end
//使用不同父级目录下的样式表 began
require("..\\..\\styles\\testwebpack.css");
//使用不同父级目录下的样式表 end
document.write("It works from entry5.");
var board=document.getElementById("test");
var mydiv=document.createElement("p");
mydiv.innerHTML="append sth";
mydiv.className="second";
board.appendChild(mydiv);