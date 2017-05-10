var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser());

app.use('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.get('/allArticle', function (req, res) {
  res.json({
    result: 'ok',
    data: 'thisisall'
  })
})

app.get('/getArticle/:id', function (req, res) {
  console.log(req.params);
  res.json({
    result: 'ok',
    data: ['data1','data2']
  })
})

app.get('/getUser', function (req, res) {
  console.log(req.query);
  res.json({
    result: 'ok',
    data: ['data1','data2']
  })
})

app.post('/register',function (req,res) {
  console.log(req.body);
  res.json({
    result: 'ok',
    data: ['data1','data2']
  })
})

app.put('/user', function (req, res) {
  console.log(req.body);  
  console.log('user info updated!')
  res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
  console.log(req.body);  
  console.log('user deleted!')
  res.send('Got a DELETE request at /user');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})