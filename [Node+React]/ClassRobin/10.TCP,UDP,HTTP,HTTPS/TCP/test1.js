var net = require('net');

var HOST = 'localhost'; //意思為本機也可為127.0.0.1
var PORT = 8000;  //監聽中的PORT，任何server再啟動時都會指定port讓client可以連入該port



net.createServer(function(sock) {

    console.log('CONNECTED: ' +
        sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        sock.write('hello,this is from server!');//發訊息給client
    });

    sock.on('close', function(data) {
        console.log('CLOSED: ' +
        sock.remoteAddress + ' ' + sock.remotePort);
    });

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);