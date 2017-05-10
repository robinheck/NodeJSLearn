var udp = require("dgram");
var socket = udp.createSocket('udp4',function(msg){
   console.log(msg.toString())
});
socket.bind(8080);