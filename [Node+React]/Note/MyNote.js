	
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
	 
	