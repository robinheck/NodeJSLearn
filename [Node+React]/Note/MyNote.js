	
[Node React]03.fs(文件操作)
	
	>看官網比較清楚
	 https://nodejs.org/api/fs.html#fs_file_system
	
	>方法是指open, mkdir, readFile...之類的
	 依方法不同, callback回傳值也不同, 參數也不同
	 fs.open(path, flags[, mode], callback)
	 fs.mkdir(path[, mode], callback)
	
	>異步程式結束後,一定會return一個callback, 原名是completion callback
	 callback回傳給'方法的'最後一個參數
	
	>callback回傳值不一定只有一個, 常常有回傳2個參數,
	 而第一個回傳參數一定是exception(err), 如果程式成功執行, 
	 第一個回傳參數就會是null or undefined
	 
	