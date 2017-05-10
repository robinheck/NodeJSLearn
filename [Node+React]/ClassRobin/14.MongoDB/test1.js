var mongoose = require('mongoose');
mongoose.connect('mongodb://forclass1:test123@ds013898.mlab.com:13898/forclass');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connect");
});

Cat.find({},function(err,doc){

    console.log(doc);
});
