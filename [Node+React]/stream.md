# Stream #

Stream是用來控制 "讀 & 寫" 的功能
HTTP server 的request 和 process.stdout均為其發展的實例
擁有以下幾種type
    
    Readable - 可讀
    ritable - 可寫
    Duplex - 可同時讀寫
    Transform - 可轉換讀或寫的格式後再輸出
    
一般讀寫有兩種方式
一種是全部先讀取到buffer緩衝區，也就是電腦的記憶體，之後再一次輸出
另一種是另一種是每讀入一小塊隨即將他輸出

---
例如以下的程式碼, 將test.txt用fs的功能讀入, 用process的功能輸出在terminal

    var fs=require('fs');
    fs.createReadStream('/.test.txt').pipe(process.stdout)



---
常常我們會將將多次的輸入, 寫入一個緩存, 之後再一次輸出
這要用到Node.JS/stream.js裡 的Readable function

    var Readable=require('stream').Readable;
    var rs=new Readable()
    rs.push('hi');
    rs.push('Robin');
    rs.push(null)//這是這種寫法必須要用的結尾型式
    
    rs.pipe(process.stdout);
    //輸出 hiRobin
    
----

var fs=require('fs');
var readableStream=fs.createReadStream('test.html');
var NewVar='';
readableStream.setEncoding('utf8');
//如果沒有這一行, 輸出會是buffer型態
readableStream.on('data',function(xx){
	NewVar += xx;
	console.log(NewVar);
});
//xx是讀取到test.html裡內容
//上面這一段是把test.html裡內容寫入"NewVar"這個空變數
//而上面的on('data'), 是Stream的method, 意思是讀取
readableStream.on('end', function(){
	console.log(NewVar);
});
