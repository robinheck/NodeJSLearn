//Utility 主要是用來支援node api 彌補核心JavaScript 的功能過於精簡不足
//在使用時需加上require, 定義成constant即可

   const util = require('util');

//1.設定NODE_DEBUG名稱
//只有debuglog和設定的名稱相同時才會有log

   // const debuglog = util.debuglog('test');
   // debuglog('this is test');
   //[cmd]執行  node test1.js NODE_DEBUG=test ==>show 'this is test'
   //[cmd]執行  node test1.js NODE_DEBUG=test2 ==>nothing happen

//2.告知使用者使function已經deprecate，不推薦再使用

   // var test = util.deprecate(function() {
   // } ,'test function: 這是一個deprecate的function');
   // test();

//3.util.format(類似於c語言的printf)
// %s - String.
// %d - Number 
// %j - JSON

   // var test = util.format(1, 2, 3); // '1 2 3'
   // var test1 = util.format('%s and %s and %s', 'foo', 'bar', 'baz'); // 'foo:bar baz'
   // var test2 = util.format('%s ++ %s', 'foo', 'bar', 'baz'); // 'foo:bar baz'
   // console.log(test);
   // console.log(test1);
   // console.log(test2);

//4.util.inherits 
//可用來達成繼承的功能
//(雖然很常用, 但不被官方鼓勵使用，官方推薦使用ES6的class與extends
//這部分將在後續ES6章節提到)

   // var test = function() {};
   // var emitter = require('events').EventEmitter;
   // util.inherits(test, emitter);
   // test.on('add', function() {
   //   console.log('addddddd');
   // })
   // test.emit('add');
   //執行後發現錯誤，原因是繼承後並需new出一個實例才可使用繼承後的東西


//5.
//更改為如下即可

   // var test = function() {};
   // var emitter = require('events').EventEmitter;
   // util.inherits(test, emitter);
   
   // var test1 = new test;
   
   // test1.on('add', function() {
   //   console.log('adddddddd');
   // })
   // test1.emit('add');

//6.
//util.inspect 很常用 
//用來查看深層的json或物件很實用

   var myObject = {
      "a":"a",
      "b":{
         "c":"c",
         "d":{
            "e":"e",
            "f":{
               "g":"g",
               "h":{
                  "i":"i"
               }
            }
         }
      }
   };    
   console.log(myObject);
   //{ a: 'a', b: { c: 'c', d: { e: 'e', f: [Object] } } }

//發現 f: [Object] ，無法顯示
//使用如下即可
   
   console.log(util.inspect(myObject, {depth: null}));
   //{ a: 'a', b: { c: 'c', d: { e: 'e', f: { g: 'g', h: { i: 'i' } } } } }

//depth: null 代表console出無限深層的結構，或可改為數字

