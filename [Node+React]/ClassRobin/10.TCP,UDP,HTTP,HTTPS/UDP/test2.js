var udp = require("dgram");
var client = udp.createSocket("udp4",function(){});
client.on("listening",function(){
    client.setBroadcast(true);
})
process.stdin.on("data",function(data){
    client.send(data,0,data.length,8080,"255.255.255.255");
});