
//1.
//fs 本身即擁有stream屬性
// var fs = require('fs');
// fs
// .createReadStream('./test.txt')
// .pipe(process.stdout);//process.stdout為輸出到terminal

//2.將數據寫入緩存後輸出到terminal
// var Readable = require('stream').Readable;

// var rs = new Readable();
// rs.push('hi ');
// rs.push('hello\n');
// //rs.push(null);//記得，一定要在最後push入null，否則會產生錯誤
// //必須讓其知道必須讓其知道數據寫入結束

// rs.pipe(process.stdout);

//3.stream具有上上節中所講到的event特性
// var fs = require('fs');
// var readableStream = fs.createReadStream('test.txt');
// var data = '';

// readableStream.setEncoding('utf8'); //如果沒有setEncoding讀出之數據為buffer型態

// readableStream.on('data', function(chunk) {
//   data += chunk;
// });

// readableStream.on('end', function() {
//   console.log(data);
// });


//4.讓stream暫停
// var fs = require('fs');
// var readableStream = fs.createReadStream('test.txt');
// var data = '';

// readableStream.setEncoding('utf8'); //如果沒有setEncoding讀出之數據為buffer型態

// readableStream.on('data', function(chunk) {
//   data += chunk;
// });
// readableStream.pause();

// readableStream.on('end', function() {
//   console.log(data);
// });

// console.log(readableStream.isPaused());//用來確認stream是否暫停


 //之後可使用readableStream.resume();繼續


//5.把讀入的buffer寫出到檔案

// var Readable = require('stream').Readable;
// var fs = require('fs');

// var rs = new Readable;

// rs.push('Hi ');
// rs.push(null);

// rs.on('data', function(chunk) {
//      console.log(chunk);
//      fs.writeFile('./class1.js', chunk, function(){})
// });


//6.使用效能更好的寫法 createWriteStream

// var Readable = require('stream').Readable;
// var fs = require('fs');

// var rs = new Readable;

// rs.push('Hi Hi ');
// rs.push(null);

// rs.on('data', function(chunk) {
//   console.log(chunk);
//   fs.createWriteStream('./class1.js').write(chunk);
// });


//7.壓縮檔案
var zlib = require('zlib')
var gzip = zlib.createGzip();
var fs = require('fs');
var inp = fs.createReadStream('test.txt');
var out = fs.createWriteStream('test.txt.gz');

inp.pipe(gzip).pipe(out);