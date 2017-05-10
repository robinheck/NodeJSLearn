	
[Node React]03.fs(���ާ@)
	
	>�ݩx������M��
	 https://nodejs.org/api/fs.html#fs_file_system
	
	>��k�O��open, mkdir, readFile...������
	 �̤�k���P, callback�^�ǭȤ]���P, �ѼƤ]���P
	 fs.open(path, flags[, mode], callback)
	 fs.mkdir(path[, mode], callback)
	
	>���B�{��������,�@�w�|return�@��callback, ��W�Ocompletion callback
	 callback�^�ǵ�'��k��'�̫�@�ӰѼ�
	
	>callback�^�ǭȤ��@�w�u���@��, �`�`���^��2�ӰѼ�,
	 �ӲĤ@�Ӧ^�ǰѼƤ@�w�Oexception(err), �p�G�{�����\����, 
	 �Ĥ@�Ӧ^�ǰѼƴN�|�Onull or undefined
	 

	fs.access(path[, mode], callback)
		�ˬd�ϥΪ̬O�_��s���Y���ɮ�/�ؿ�, �`�Ψ��ˬd�ɮ׬O�_�s�b
	fs.appendFile(file, data[, options], callback)
		���}�ɮ�, �ק��ɮ�, �O�d��l���, �b�᭱�[�r
	fs.chmod(path, mode, callback)
		�ק��ɮת��s���v��,
	fs.fchmod(fd, mode, callback)
		�ק��ɮת��v��, �Mchmod�t�O�O�o�ӿ�J���O�ɮ׸��|
		�O�w�}���ɮת�handle, �Ҧp hfile1=fileOpen(..path)		
	fs.chown(path, uid, gid, callback)
		�����ɮ׾֦���
	fs.fchown(fd, uid, gid, callback)	
		���ܤw�}���ɮת��֦���				
	fs.close(fd, callback)
		�����ɮ�
	fs.fstat(fd, callback)
		��^�ɮ׸��,�Ҧp�ɮפj�p,�榡,�إ߮ɶ�...����
		�`�Ψ��ˬd�ɮ׬O�_�s�b

	fs.createReadStream(path[, options])
		Returns a new ReadStream object.
		fs.createReadStream('sample.txt', {start: 90, end: 99}); ??
	fs.createWriteStream(path[, options])
		Returns a new WriteStream object. (See Writable Stream).

	fs.exists(path, callback)
		�s���w����,����ĳ�ϥ�

	fs.fsync(fd, callback)
	fs.fdatasync(fd, callback)
		fsync�t�d�g�J�Ҧ��P�S�w�ɮ״y�z�Ŭ������w�İϸ��
		fsync���\��O�T�O���fd�Ҧ��w�ק諸���e�w�g���T�P�B��w�ФW
		fdatasync�\��Pfsync�ۦ��A���u�t�d�g�J�ɮפ��Q�ܧ󪺸�ơA�Ӥ��|�ק��ɮת���]��ơ]�p�ɮ��ݩ�)
		https://read01.com/Poo42z.html



	fs.ftruncate(fd, len, callback)
		ftruncate() ����I�_����w����


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
