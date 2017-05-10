var express = require('express');
var bodyParser = require('body-parser');
var util = require('util');
var app = express();
var port = 8000;

var TelegramBot = require('node-telegram-bot-api');
var token = '317522411:AAHv4fZu08TviHsLt86iftEyAfPQ7sO-Ihg';
//括號裡面的內容需要改為在第5步獲得的Token
var bot = new TelegramBot(token, {polling: true});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/payload', (req, res) => {
  var obj = req.body.push.changes[0].new;
  msgPayload = `${obj.target.author.raw} push 到 ${obj.name} 分支，查看該次commit: ${obj.links.html.href}`
  bot.sendMessage(324090896, msgPayload); 
})

//Bot
bot.onText(/hihi/, function (msg) {
    var chatId = msg.chat.id; //用戶的ID
    var resp = '你好'; //括號裡面的為回應內容，可以隨意更改
    console.log(chatId);
    bot.sendMessage(chatId, resp); //發送訊息的function
});


app.listen(port,() => console.log(`listening on ${port}`));


