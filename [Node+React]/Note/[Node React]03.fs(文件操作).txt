	
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
	 

	fs.access(path[, mode], callback)
		檢查使用者是否能存取某個檔案/目錄, 常用來檢查檔案是否存在
	fs.appendFile(file, data[, options], callback)
		打開檔案, 修改檔案, 保留原始資料, 在後面加字
	fs.chmod(path, mode, callback)
		修改檔案的存取權限,
	fs.fchmod(fd, mode, callback)
		修改檔案的權限, 和chmod差別是這個輸入不是檔案路徑
		是已開啟檔案的handle, 例如 hfile1=fileOpen(..path)		
	fs.chown(path, uid, gid, callback)
		改變檔案擁有者
	fs.fchown(fd, uid, gid, callback)	
		改變已開啟檔案的擁有者				
	fs.close(fd, callback)
		關閉檔案
	fs.fstat(fd, callback)
		返回檔案資料,例如檔案大小,格式,建立時間...等等
		常用來檢查檔案是否存在

	fs.createReadStream(path[, options])
		Returns a new ReadStream object.
		fs.createReadStream('sample.txt', {start: 90, end: 99}); ??
	fs.createWriteStream(path[, options])
		Returns a new WriteStream object. (See Writable Stream).

	fs.exists(path, callback)
		新版已移除,不建議使用

	fs.fsync(fd, callback)
	fs.fdatasync(fd, callback)
		fsync負責寫入所有與特定檔案描述符相關的緩衝區資料
		fsync的功能是確保文件fd所有已修改的內容已經正確同步到硬碟上
		fdatasync功能與fsync相似，但只負責寫入檔案中被變更的資料，而不會修改檔案的後設資料（如檔案屬性)
		https://read01.com/Poo42z.html



	fs.ftruncate(fd, len, callback)
		ftruncate() 把文件截斷到指定長度


	fs.futimes(fd, atime, mtime, callback)
	fs.lchmod(path, mode, callback)
	fs.lchown(path, uid, gid, callback)
	fs.link(existingPath, newPath, callback)
	fs.lstat(path, callback)
	fs.mkdir(path[, mode], callback)
	fs.mkdtemp(prefix[, options], callback)
	fs.open(path, flags[, mode], callback)
	fs.read(fd, buffer, offset, length, position, callback)
	fs.readdir(path[, options], callback)
	fs.readFile(file[, options], callback)
	fs.readlink(path[, options], callback)
	fs.realpath(path[, options], callback)
	fs.rename(oldPath, newPath, callback)
	fs.rmdir(path, callback)
	fs.stat(path, callback)
	fs.symlink(target, path[, type], callback)
	fs.truncate(path, len, callback)
	fs.unlink(path, callback)
	fs.unwatchFile(filename[, listener])
	fs.utimes(path, atime, mtime, callback)
	fs.watch(filename[, options][, listener])
	Caveats
	Availability
	Inodes
	Filename Argument
	fs.watchFile(filename[, options], listener)
	fs.write(fd, buffer[, offset[, length[, position]]], callback)
	fs.write(fd, string[, position[, encoding]], callback)
	fs.writeFile(file, data[, options], callback)
	FS Constants
	File Access Constants
	File Open Constants
	File Type Constants
	File Mode Constants
