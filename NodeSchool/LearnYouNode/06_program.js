
// var myPath= process.argv[2];
// var myExt = process.argv[3];
// var module2=require('./06_module.js')
// //var result=new myFilter();

// function ccb(err,data){
//   if (err) return console.error(err);
//   for (var x in data){
//     //console.log(typeof(data));
//     console.log(data[x]);
//   }
// }

// module2(myPath,myExt,ccb);



//===============================
// node 06_program.js . js
//===============================
// learnyounode verify 06_program.js
//===============================

// Official Solution :


    var filterFn = require('./06_module.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })


//


/*

 ## MAKE IT MODULAR (Exercise 6 of 13)

  This problem is the same as the previous but introduces the concept of
  modules. You will need to create two files to solve this.
    這節要了解modules, 你需要建2個檔案

  Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. The first argument is the
  directory name and the second argument is the extension filter. Print the
  list of files (one file per line) to the console. You must use
  asynchronous I/O.
    建一個程式,列出指定路徑的檔案,僅列出指定副檔名的檔案名
    第一個參數是路徑,第二個參數是副檔名
    必須使用async方法

  You must write a module file to do most of the work. The module must
  export a single function that takes three arguments: the directory name,
  the filename extension string and a callback function, in that order. The
  filename extension argument must be the same as what was passed to your
  program. Don't turn it into a RegExp or prefix with "." or do anything
  except pass it to your module where you can do what you need to make your
  filter work.
    你必須寫一個module
    module必須輸出一個function, 它有3個參數, 
    directory name, extension, callback function
    這個module必須適合enduser, enduser不需要做一些加工, 像是加上'.', 即可使用

  The callback function must be called using the idiomatic node(err, data)
  convention. This convention stipulates that unless there's an error, the
  first argument passed to the callback will be null, and the second will be
  your data. In this exercise, the data will be your filtered list of files,
  as an Array. If you receive an error, e.g. from your call to
  fs.readdir(), the callback must be called with the error, and only the
  error, as the first argument.
    CallBack Function必須使用node(err,data)格式
    data會回傳filtered list of files,這是一個array

  You must not print directly to the console from your module file, only
  from your original program.
    console.log不能建在module裡,必須在enduser程式裡

  In the case of an error bubbling up to your original program file, simply
  check for it and print an informative message to the console.

  These four things are the contract that your module must follow.

   » Export a single function that takes exactly the arguments described.

   » Call the callback exactly once with an error or some data as described.

   » Don't change anything else, like global variables or stdout.

   » Handle all the errors that may occur and pass them to the callback.


  The benefit of having a contract is that your module can be used by anyone
  who expects this contract. So your module could be used by anyone else who
  does learnyounode, or the verifier, and just work.
    規定這些module的條件,目的是讓任何人都可以使用,
 ───────────────────────────────────────
──────────────────────────────────────

 ## HINTS

  Create a new module by creating a new file that just contains your
  directory reading and filtering function. To define a single function
  export, you assign your function to the module.exports object, overwriting
  what is already there:
    在module file裡包含readfile,和filter function
    只要把function定義成module.exports, 就可以得到一個module

     module.exports = function (args) { /* ... *}

  Or you can use a named function and assign the name.
    你也可以用一個named function
    Function myModule()...
    module.exports=myModule;

  To use your new module in your original program file, use the require()
  call in the same way that you require('fs') to load the fs module. The
  only difference is that for local modules must be prefixed with './'. So,
  if your file is named mymodule.js then:
    在enduser程式裡呼叫module的方法如下

     var mymodule = require('./mymodule.js')

  The '.js' is optional here and you will often see it omitted.
    '.js'通常可以忽略

  You now have the module.exports object in your module assigned to the
  mymodule variable. Since you are exporting a single function, mymodule is
  a function you can call!

  Also keep in mind that it is idiomatic to check for errors and do
  early-returns within callback functions:
    加入CallBack function, 最後寫法會像下面這樣

     function bar (callback) {
       foo(function (err, data) {
         if (err)
           return callback(err) // early return

         // ... no error, continue doing cool things with `data`

         // all went well, call callback with `null` for the error argument

         callback(null, data)
       })
     }


 */