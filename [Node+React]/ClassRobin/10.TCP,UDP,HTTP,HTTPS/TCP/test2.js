var net = require('net');

var HOST = 'localhost';
var PORT = 8000;

var client = new net.Socket(); //建立一個新的socket實例
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('hello,this is from client!');//發送給server數據


    const repl = require('repl');
    var test = repl.start('請輸入: ').context;
    test.hello = function() {
      client.write('client說了hello!');
    }
    //之後啟動client後輸入hello()
});

client.on('data', function(data) {
    console.log('DATA: ' + data);
});

client.on('close', function() {
    console.log('Connection closed');
});