# [Node React]01.Node.js安裝與NPM使用


- #### 用NPM安裝任何程式在全局(global)環境下
       npm xxx -g
    一般用require時, 被require的程式必須在同一個資料夾, 但是安裝在global的就不需要

- #### 查看NPM全局路徑
        npm config get prefix   
     在我的電腦是 C:\Users\777\AppData\Roaming\npm
	 進入C:\Users\777\AppData\Roaming\npm\bin\
	 裡面會列出以前用NPM安裝global的程式
	 (實際上沒有bin資料夾,也許是因為沒有安裝東西)
            
- 假如已經安裝了XXX程式,在bin下用termal key入 xxx
	 它會列出XXX所有的參數, 例如 --h --p ... 


- #### 搜尋別人寫的package 
        https://www.npmjs.com/package/react
	
- #### 簡單查詢npm的指令
        npm help       
	[npm -l] 詳細列出npm的指令, 很有用
- ####	[ npm ini ]  [npm install]

    <style color red;>**npm ini**</style> : 這個指令會產生兩個檔案(package.json)(index.js)
	 **package.json**  : 裡面將你已安裝過的程式列出來, 在"dependencies"裡面
	 **index.js** : 執行後會安裝package.json裡面的檔案
	 所以如果拿到別人打包好的程式, 執行 [npm install] 就可以安裝
	 安裝時會產生一個(node_module)資料夾
	 
	 安裝nodejs時, 會在系統環境變數中加入程式路徑,
	 在cmd輸入[echo %path%]可以查詢有沒有加入
	 如果沒有的話,輸入[Path=C:\Program Files\nodejs\;%Path%]
    *(PS:  設定電腦系統變數只要一次..看講義就好)*
---
- 有一些套件是你在開發程式時會使用,但開發出來就不需使用,
	 你可以把這些套件安裝在devDependencies底下
	 指令是[npm install XXXXX --save-dev] //記得save跟dev要用-連再一起
	 而在安裝你的程式時使用[npm install --production], 它就不會去安裝devDependencies底下的套件
----
npm uninstall  //解除安裝套件，例如：npm uninstall express -g
	 npm search   //搜尋套件
	 npm ls -g  //列出所有全局套件
	 npm ls -gl  //列出全域套件詳細資訊
	 npm ls -l  //列出專案裡的套件詳細資訊
	 npm update -g  //更新全域套件
	 npm update  //更新專案裡的套件
---
	>官網 https://docs.npmjs.com/
