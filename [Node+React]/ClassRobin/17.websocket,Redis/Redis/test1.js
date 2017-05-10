var redis = require("redis");
var sub = redis.createClient(), pub = redis.createClient();

sub.on("message", function (channel, message) {
  console.log(message);
});

process.stdin.on("data",function(data){
  pub.publish("channel001", data);
});

sub.subscribe("channel001");