# [Node React]01.Node.js�w�˻PNPM�ϥ�


- #### ��NPM�w�˥���{���b����(global)���ҤU
       npm xxx -g
    �@���require��, �Qrequire���{�������b�P�@�Ӹ�Ƨ�, ���O�w�˦bglobal���N���ݭn

- #### �d��NPM�������|
        npm config get prefix   
     �b�ڪ��q���O C:\Users\777\AppData\Roaming\npm
	 �i�JC:\Users\777\AppData\Roaming\npm\bin\
	 �̭��|�C�X�H�e��NPM�w��global���{��
	 (��ڤW�S��bin��Ƨ�,�]�\�O�]���S���w�˪F��)
            
- ���p�w�g�w�ˤFXXX�{��,�bbin�U��termal key�J xxx
	 ���|�C�XXXX�Ҧ����Ѽ�, �Ҧp --h --p ... 


- #### �j�M�O�H�g��package 
        https://www.npmjs.com/package/react
	
- #### ²��d��npm�����O
        npm help       
	[npm -l] �ԲӦC�Xnpm�����O, �ܦ���
- ####	[ npm ini ]  [npm install]

    <style color red;>**npm ini**</style> : �o�ӫ��O�|���ͨ���ɮ�(package.json)(index.js)
	 **package.json**  : �̭��N�A�w�w�˹L���{���C�X��, �b"dependencies"�̭�
	 **index.js** : �����|�w��package.json�̭����ɮ�
	 �ҥH�p�G����O�H���]�n���{��, ���� [npm install] �N�i�H�w��
	 �w�ˮɷ|���ͤ@��(node_module)��Ƨ�
	 
	 �w��nodejs��, �|�b�t�������ܼƤ��[�J�{�����|,
	 �bcmd��J[echo %path%]�i�H�d�ߦ��S���[�J
	 �p�G�S������,��J[Path=C:\Program Files\nodejs\;%Path%]
    *(PS:  �]�w�q���t���ܼƥu�n�@��..�����q�N�n)*
---
- ���@�ǮM��O�A�b�}�o�{���ɷ|�ϥ�,���}�o�X�ӴN���ݨϥ�,
	 �A�i�H��o�ǮM��w�˦bdevDependencies���U
	 ���O�O[npm install XXXXX --save-dev] //�O�osave��dev�n��-�s�A�@�_
	 �Ӧb�w�˧A���{���ɨϥ�[npm install --production], ���N���|�h�w��devDependencies���U���M��
----
npm uninstall  //�Ѱ��w�ˮM��A�Ҧp�Gnpm uninstall express -g
	 npm search   //�j�M�M��
	 npm ls -g  //�C�X�Ҧ������M��
	 npm ls -gl  //�C�X����M��ԲӸ�T
	 npm ls -l  //�C�X�M�׸̪��M��ԲӸ�T
	 npm update -g  //��s����M��
	 npm update  //��s�M�׸̪��M��
---
	>�x�� https://docs.npmjs.com/
