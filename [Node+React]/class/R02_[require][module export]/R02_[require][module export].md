
# Require
在HTML中, 我們用<script src=...>來引用檔案
在Node裡, 要用require("filePath")來引用檔案
其中被引用的檔案裡必須有寫export, 才可以被引用

## 輸出方法
	1. export.hi
	2. export.name
	3. module.explort
	
如果寫出了 module.exports 會忽略掉上面寫的 exports.hi 跟 exports.name

## 輸入方法
	var Me = require('./test1.js');
	Me.hi();
	Me.name();
	console.log(Me);

