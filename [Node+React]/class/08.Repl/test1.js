const repl = require('repl');

//1.輸入對應的文字，產生自訂的文字
// var test = repl.start('請輸入: ').context;
// test.hello = '哈囉，你好！';
// test.今天天氣 = '多雲時晴，偶陣雨！';

//之後依然是按兩次ctrl + c 離開

//2.監聽exit事件
// replServer = repl.start();
// replServer.on('exit', () => {
//   console.log('離開terminal!');
//   process.exit();//離開執行緒
// });

//3.監聽reset事件，先在repl輸入hi = 'hello!' 之後輸入 .clear
// function initializeContext(context) {
//   context.hi = 'hi變更為hihi!';
// }

// const r = repl.start({prompt: '> '});

// r.on('reset', initializeContext);


//4.加上顏色

//https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script
//上面連結為macOS的terminal
//試著輸入
// console.log('\x1b[36m你好\x1b[0m');
// console.log('\x1b[35m你好\x1b[0m');
// console.log('\x1b[34m你好\x1b[0m');
// console.log('\x1b[33m你好\x1b[0m');
// console.log('\x1b[32m你好\x1b[0m');

//上面這些是什麼意思？
//https://en.wikipedia.org/wiki/ANSI_escape_code
//關鍵字 ANSI escape code


//但為了適應不同平台的terminal控制顏色的方式，我們使用他人寫好的第三方模組
//這裡使用ansi-styles的第三方模組
 const style = require('ansi-styles');

console.log(style.bgColor.ansi.hsl(120, 80, 72) + 'Hello world!' + style.bgColor.close);
console.log(style.color.ansi256.rgb(199, 20, 250) + 'Hello world!' + style.color.close);
console.log(style.color.ansi16m.hex('#ABCDEF') + 'Hello world!' + style.color.close);