//使用不同父级目录下的样式表 began
require("..\\..\\styles\\testwebpack.css");
//使用不同父级目录下的样式表 end
document.write("It works from entry4.");
var board=document.getElementById("test");
var mydiv=document.createElement("p");
mydiv.innerHTML="append sth";
board.appendChild(mydiv);