var path = require('path');


//1.basename
//返回路徑的最後一個斜線後的字串
//console.log(path.basename('C:/user/test/myfile.html'));


//2.返回當前的資料夾路徑，__dirname為當前的檔案執行路徑
//console.log(path.dirname(__dirname));

//3.返回檔案的後綴，檔案類型
// console.log(path.extname('index.html'));
// console.log(path.extname('test.png'));

//4.解析路徑字串
//console.log(path.parse('/home/user/dir/file.txt'));

//其相反為path.format

// var test = path.format({
//   root: '/ignored',
//   dir: '/home/user/dir',
//   base: 'file.txt'
// });
// console.log(test);

//5.判斷是否為絕對路徑
//關於路徑可參考此 http://mirlab.org/jang/books/html/link.asp?title=2-3%20%B3s%B5%B2%20(Links)
//console.log(path.isAbsolute('./myfile.html'))

// 以下適用於mac與Linux
// path.isAbsolute('/foo/bar') // true
// path.isAbsolute('/baz/..')  // true
// path.isAbsolute('qux/')     // false
// path.isAbsolute('.')        // false

//以下適用於windows
// path.isAbsolute('//server')    // true
// path.isAbsolute('\\\\server')  // true
// path.isAbsolute('C:/foo/..')   // true
// path.isAbsolute('C:\\foo\\..') // true
// path.isAbsolute('bar\\baz')    // false
// path.isAbsolute('bar/baz')     // false
// path.isAbsolute('.')           // false


//6.連接字串為路徑
//console.log(path.join('/src', 'index.html'));

//7.取得兩個路徑中的相對路徑
//console.log(path.relative('./test1.js', './src/test1.js'));

//8.將相對路徑轉為絕對路徑
//console.log(path.resolve('src', 'img', './image.gif'));


//9.將路徑以 / 分割成陣列型態
//console.log('src/data/test.js'.split(path.sep));



//接著講解url parsing部分
var url = require('url');


/*取自https://nodejs.org/api/url.html
┌─────────────────────────────────────────────────────────────────────────────┐
│                                    href                                     │
├──────────┬┬───────────┬─────────────────┬───────────────────────────┬───────┤
│ protocol ││   auth    │      host       │           path            │ hash  │
│          ││           ├──────────┬──────┼──────────┬────────────────┤       │
│          ││           │ hostname │ port │ pathname │     search     │       │
│          ││           │          │      │          ├─┬──────────────┤       │
│          ││           │          │      │          │ │    query     │       │
"  http:   // user:pass @ host.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          ││           │          │      │          │ │              │       │
└──────────┴┴───────────┴──────────┴──────┴──────────┴─┴──────────────┴───────┘

*/


//1.將url解析為物件
//var test = new url.URL('http://user:pass@host.com:8080/p/a/t/h?query=string#hash')
//console.log(test);//接著即可去存取其物件

 //console.log(url.format(test))//使用format把URL object還原

//2.比上例更完整的解析URL為物件
// var test2 = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
// console.log(test2);

//3.將最後面取代為第二個參數 
// console.log(url.resolve('ok/123', '一二三'));
// console.log(url.resolve('http://example.com/', '/one'));   
// console.log(url.resolve('http://example.com/one', '/two'));



//最後講到querystring 核心模組，他是用來解析URL後段query部分

var querystring = require('querystring');


//1.將query部分轉換成物件
var str = 'foo=bar&abc=xyz&abc=123';
var parsed = querystring.parse(str);
console.log(parsed);
console.log(parsed.foo);

console.log('---還原~~--')
//將parsed成的物件還原回querystring
var stringifyd = querystring.stringify(parsed);
console.log(stringifyd);


