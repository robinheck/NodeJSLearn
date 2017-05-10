
//1.建立一個簡單server

// const Koa = require('koa');

// const app = new Koa();

// app.use(ctx => {
//   ctx.body = 'Hello, this is Koa';
// });

// app.listen(3000);

//2.加入router

//npm install koa-router

// var Koa = require('koa');
// var Router = require('koa-router');

// var app = new Koa();
// var router = new Router();

// router.get('/', function (ctx, next) {ctx.body = 'hihi'});

// router.get('/main', function (ctx, next) {ctx.body = 'I am main!'});


// app.use(router.routes());

// app.listen(3000);


//3.使用static傳送html檔案，之後瀏覽localhost:8000/index.html

//koa-static

// var Koa = require("koa");
// var Router = require("koa-router");
// var serve = require("koa-static")
// const app = new Koa();
 
// app.use(serve(__dirname + "/static/"));

//  app.listen(8000);



//4.使用Router加上static


var Koa = require("koa");
// var Router = require("koa-router");
// var serve = require("koa-static");
// const app = new Koa();
// const router = Router();
 
// app.use(router.routes());
// app.use(serve(__dirname + "/static/"));


// router.get("/test", (ctx, next) => {
//   ctx.body = 'test!!';
// });

// router.get("/main", (ctx, next) => {
//     ctx.body = 'main!!';
// });

// app.listen(3000);

// 5.使用body-parser 解析post的data，
//   執行以下程式後開啟另一個terminal執行node test2
//   之後也可以試著使用curl指令發出post request 
//   curl -d "name=yicheng%20Sagula%26phone=123" http://localhost:3000/info



var Koa = require("koa");
var Router = require("koa-router");
var serve = require("koa-static");
var bodyParser = require("koa-bodyparser");
const app = new Koa();
const router = Router();
 
app.use(bodyParser());//記得要放在app.use(router.routes())前
app.use(router.routes());
app.use(serve(__dirname + "/static/"));

router.post("/info", (ctx, next) => {
    var data = ctx.request.body;
    console.log(data);
    ctx.body = {
        "result": true
    }
});

app.listen(3000);