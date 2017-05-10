// var express = require('express');
// var app = express();
// var port = 8000;

// app.locals = {
//  test: 'Extended Express Example'
// };

// app.set('view engine', 'ejs');
// var router = require('./routes')(app);
// app.use(express.static(__dirname + '/public'));/* 將預設路徑設在public*/


// app.listen(port,() => console.log(`listening on ${port}`));


//middleware

//接收http請求，並對其進行加工，記得調用next，表示繼續往下加工

// var express = require('express');
// var app = express();
// var port = 8000;

// app.set('view engine', 'ejs');
// app.use(function (req, res, next) {
//   console.log('現在時間:', new Date());
//   next();
// });
// app.use(express.static(__dirname + '/public'));/* 將預設路徑設在public*/
// app.locals = {
//  test: 'Extended Express Example'
// };

// var router = require('./routes')(app);

// app.listen(port,() => console.log(`listening on ${port}`));



//限定指定路徑使用

// app.use('/user/:id', function (req, res, next) {
//   console.log('Request Type:', req.method);
//   console.log(req.params.id);
//   next();
// });


//整理路徑router

//路徑前綴

// var express = require('express');
// var fruit = express.Router();
// var app = express();
// var port = 8000;
// app.use('/fruit', fruit);

// fruit.get('/banana', function(req, res) {
//   res.send('I am banana');
// });

// fruit.get('/apple', function(req, res) {
//   res.send('I am apple');
// });

// app.listen(port,() => console.log(`listening on ${port}`));

// http://localhost:8000/fruit/banana

// ##第二個方法


// var express = require('express');
// var fruit = express.Router();
// var app = express();
// var port = 8000;

// app.route('/fruit')
//   .get(function(req, res) {
//   res.send('Get a random fruit');
// })
//   .post(function(req, res) {
//   res.send('Add a fruit');
// })
//   .put(function(req, res) {
//   res.send('Update the fruit');
// });

// app.listen(port,() => console.log(`listening on ${port}`));




// #外部middleware

// 較常見為

// bodyParser

// 範例:https://www.youtube.com/watch?v=C3G3N4LMJeE

// npm install body-parser --save


// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var port = 8000;
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.post('/login', function (req, res) {
//   console.log(req.body);
//   res.end();
// })


// app.post('/payload', (req, res) => {
//   console.log(req.body);
// })


// app.listen(port,() => console.log(`listening on ${port}`));



//之後再瀏覽器console貼上如下
// var headers= {
//   'Accept': 'application/json',
//   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
// }

// var request = {
//     method: 'POST',
//     headers: headers,
//     body: 'test=123'
// };

// fetch('/login', request);

//之後看console.log即可看到








// 使用cookieParser

//npm install cookie-parser --save


// var express = require('express')
// var app = express();
// cookieParser = require('cookie-parser');
// var port = 8000;
// app.use(cookieParser());

// app.get("/getCookie",function(req,res){
//   console.log(req.cookies);//記得加S，用來讀取
//   res.end('cookie test');
// });
// app.get("/setCookie",function(req,res){
//   res.cookie('cookieName',12, { maxAge: 900000, httpOnly: true });
//   res.end('cookie test');
// });
// app.get("/deleteCookie",function(req,res){
//   res.cookie('cookieName',true, { expires: new Date() });
//   res.end('cookie test');
// });

// app.listen(port,() => console.log(`listening on ${port}`));
//之後分別到三個url然後用terminal查看



//如果想讓別人上傳檔案到server呢
// 使用multer middleware 
//但如果post的編碼類型是multipart/form-data呢?(ex:上傳檔案)

// https://github.com/expressjs/multer

// npm install multer --save
// 新增uploads資料夾


// var express = require('express')
// var multer = require('multer');
// var app = express();
// var port = 8000;

// app.set('view engine','ejs');

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   }
// });

// app.get('/',(req, res) => {
//   res.render('test1');
// })
// //記得single('file') 這個file必須跟 <input type="file" name="file" /> 的name相同
// app.post('/upload', multer({storage: storage}).single('file'), function(req, res){
//   console.log(req.body) // form fields
//   console.log(req.files) // form files
//   res.status(204).end()
// });

//  app.listen(port,() => console.log(`listening on ${port}`));

// 然後把views/test1.ejs改為

// <!DOCTYPE html>
// <html>
// <head>

// </head>
// <body>
//   <form enctype="multipart/form-data" action="/upload" method="post">
//     <input type="file" name="file" />
//     <input type="submit" value="點擊確認上傳" name="submit" />
//   </form>

// </body>


// </html>

//之後上傳即可查看upload資料夾








// # express 的set 方法
// app.set("views", __dirname + "/views");

 //app.set("view engine", "ejs");
// ```
// 最常看見上面這兩種寫法，但他其實只是為你的前面的參數的值指定為第二個參數
// ```
 //app.set('Fruit', 'I am banana');
 //console.log(app.settings.Fruit);///需使用app.settings去讀取
// console.log(app.get('Fruit'));或app.get




// ###1.使用session


 //session有兩種，一種是browser的session storage，關閉及消失．一種是會把cookie拿來server驗證的session

// 以下介紹第二種


// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// app.use(session({
//   saveUninitialized: false, // don't create session until something stored
//   resave: false, //don't save session if unmodified
//   secret: 'yicheng',
//   key: 'auth_token',//cookie name
//   cookie: {maxAge: 1000 * 60 * 60 * 24 * 1},//1 days
//   store: new MongoStore({
//     url:'mongodb://forclass1:test123@ds013898.mlab.com:13898/forclass'
//   })
// }));

// ####注意：如果此選項設為true則重新整理網頁在你還沒設session會自動附加上去，所以建議為false
// ```
// saveUninitialized:false
// ```

// 上面為基本設置

// 新增，會附加cookie到browser上
// ```
// req.session.user = req.body.account;//將會在cookie中存入token之後token回到server取值
// ```

// 移除

// ```
// req.session.user = null; //移除server端資料
// req.session.cookie.expires = new Date(Date.now()); ///移除browser端cookie

// ```





// #1.使用JWT Token

// https://github.com/auth0/node-jsonwebtoken

// 我們要先安裝

// ```
// npm install jsonwebtoken
// ```

// 之後

// 
// let token = jwt.sign({
// exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
// data: {
//   user: jwtpayload
// }
// }, jwtSecret);
// res.cookie('t', token, { maxAge: 1000 * 60 * 60 * 24 * 1, httpOnly: true });

// 上面是將token存在cookie的做法，也可使用別的方式傳回client

// 認證:


// app.post('/',function(req,res) {
// jwt.verify(req.cookies.t, jwtSecret, (err, decoded) => {
// if(decoded){
// // TODO 認證成功後要做的事
// } else {
// console.log('no token');
// }
// }
// }


// >也可寫為function然後用middleware方式

// const authToken = (req,res,next) => {
// const token = req.cookies.t;
//   if (token) {
//     jwt.verify(req.cookies.t, jwtSecret, (err, decoded) => {
//   if(decoded){
//     next();
// } else {
//   res.end('token not correct');
// }
// });
// } else {
//   res.end('no Token');
// }
// }


// app.get('/userArticles/:user',authToken,(req,res) => {
//   Post.find({posterAccount: req.params.user})
//     .then(data => {
//     res.end(JSON.stringify(data))
//   })
// })

// ```
