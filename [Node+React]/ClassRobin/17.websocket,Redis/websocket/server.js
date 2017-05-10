var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat', function(msg){
    console.log('message: ' + msg);
    socket.broadcast.to('mainPage').emit('message',msg);//傳給所有人除了自己
    socket.emit('message',msg);
  });

    socket.on('mainPage',() => {
      socket.join('mainPage',() => {
        console.log('join main okok');
      });
  })

    socket.on('chatPage',() => {
      socket.join('chatPage',() => {
        console.log('join chat okok');
      });
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});