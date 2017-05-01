
/*
In Node Application, 
any async function accepts a callback as the last parameter and 
a callback function accepts an error as the first parameter.

*/

/*
==Callbacks==

This is the most important topic to understand if you want to understand how to use node. 
*Nearly everything in node uses callbacks.* 
They weren't invented by node, they are just part of the JavaScript language.

*Callbacks are functions that are executed asynchronously, or at a later time.* 
Instead of the code reading top to bottom procedurally, 
*async programs may execute different functions at different times based on the order and speed that earlier functions like http requests or file system reads happen.
	>>Callback是不同步的,同步意思是以往由上而下一步一步讀取程式碼,
	>>而不同則是當你提出request的時候,它再回去執行上面的程式碼

The difference can be confusing since determining if a function is asynchronous or not depends a lot on context. Here is a simple synchronous example, meaning you can read the code top to bottom just like a book:
	>>要搞清楚什麼是同步什麼是非同步其實有時讓人很混亂
	>>以下是簡單的同步程式碼 */

	var myNumber = 1
	function addOne() { myNumber++ } // define the function
	addOne() // run the function
	console.log(myNumber) // logs out 2


/*The code here defines a function and then on the next line calls that function, without waiting for anything. When the function is called it immediately adds 1 to the number, so we can expect that after we call the function the number should be 2. This is the expectation of synchronous code - it sequentially runs top to bottom.
	>>這裡先定了一個function叫做addOne, 
	>>第二行執行AddOne,幾乎不用等待任何事情,myNumber就會加1
	>>我們可以知道myNumber會變成2

Node, however, uses mostly asynchronous code. Let's use node to read our number from a file called number.txt:
	>>接下來是非同步的例子
	>>我們用readfile去讀取number.txt
*/

	var fs = require('fs') // require is a special function provided by node
	var myNumber = undefined // we don't know what the number is yet since it is stored in a file
	function addOne() {
	  fs.readFile('number.txt', function doneReading(err, fileContents) {
	    myNumber = parseInt(fileContents)
	    myNumber++
	  })
	}
	addOne()
	console.log(myNumber) // logs out undefined -- this line gets run before readFile is done

	/*
	fs.readFile的定義是
	fs.readFile(filename, [options], callback) // callback必須是一個function
	這裡的callback function就是function doneReading
	而callback function的形態永遠是 callback(err,tmpVariable)
	這裡是doneReading(err, fileContents) 
	這裡的fileContents是nember.txt裡面的值,由readFile繼承下來,
	fileContents很特別,是一個看不見的值, 或者可以形容成是一個內部變數, 以下的寫法都會錯誤
	  console.log(fileContents) // return : fileContents undefined
	  console.log(fs.readFile('number.txt',doneReading(err, fileContents) {})) // return undefined
	fileContents必須指定給外部的一個變數MyNumber, 
	才能被console.log叫出來
	*/

/* Why do we get undefined when we log out the number this time? 
	>>為什麼這次要定義 myNumber = undefined ?

In this code we use the fs.readFile method, which happens to be an asynchronous method. 
	>>這裡的 fs.readFile 是一個非同步的方法

Usually things that have to talk to hard drives or networks will be asynchronous. 
	>>通常要向硬碟溝通的程式會是非同步的

If they just have to access things in memory or do some work on the CPU they will be synchronous. 
	>>而只要向memory or CPU溝通的程式碼會是同步的

The reason for this is that I/O is reallyyy reallyyy sloowwww. 
A ballpark figure would be that talking to a hard drive is about 100,000 times slower than talking to memory (e.g. RAM).
	>>向硬碟溝通的速度會比向memory溝通的速度慢100000倍

When we run this program all of the functions are immediately defined, but they don't all execute immediately. 
	>>當我們跑這段程式,所有的function在一開始就會立刻宣告,但不執行

This is a fundamental thing to understand about async programming. 
	>>這是我們去理解非同步的基礎

When addOne is called it kicks off a readFile and then moves on to the next thing that is ready to execute. 
	>>當addOne被召喚,它就會去"開始"執行readFile這個指令,之後它會去看你有沒有下一步指令

If there is nothing to execute node will either wait for pending fs/network operations to finish or it will stop running and exit to the command line.
	>>如果沒有下一步指令,它就會結束程式, 或是等readFile執行完畢

When readFile is done reading the file (this may take anywhere from milliseconds to seconds to minutes depending on how fast the hard drive is) it will run the doneReading function and give it an error (if there was an error) and the file contents.
	>>readFile要執行完成,可能要花幾個微秒,幾個秒,甚至幾分鐘,依你的檔案內容而定
	>>執行完成後,它會回傳error,或是檔案內容

The reason we got undefined above is that nowhere in our code exists logic that tells the console.log statement to wait until the readFile statement finishes before it prints out the number.
	>>注意,addone被召喚之後,程式的下一步是召喚console.log,這時候readfile還沒有完成
	>>所以我們在一開始要定義myNumber=undefine, 不然console.log會出現錯誤

If you have some code that you want to be able to execute over and over again, or at a later time, the first step is to put that code inside a function. Then you can call the function whenever you want to run your code. It helps to give your functions descriptive names.
	>>如果我們有一段程式碼需要重覆使用,最好是把它定義成function
	>>function有明確容易了解的名稱會很有用

Callbacks are just functions that get executed at some later time. 
	>>Callbacks是一種function,可以在任何時間調用
	>>(這裡的Callbacks是在描述一種方法,你可以定義成任何名稱)

The key to understanding callbacks is to realize that they are used when you don't know when some async operation will complete, but you do know where the operation will complete — the last line of the async function! 
	>>Callback的使用時機是, 當你不知道一個async程式什麼時候會執行完成時使用

The top-to-bottom order that you declare callbacks does not necessarily matter, only the logical/hierarchical nesting of them. 
	>>在Callbacks程式碼裡面,程式的上下關係並不重要
	>>但母子/網狀關係需要注意

First you split your code up into functions, and then use callbacks to declare if one function depends on another function finishing.
	>>當有一個function需要等另一個function完成時,就是使用callback的時機

The fs.readFile method is provided by node, is asynchronous, and happens to take a long time to finish. 
	>>fs.readFile是node的內建function, 是非同步的, 有可能要花很多時間才能執行完成

Consider what it does: it has to go to the operating system, which in turn has to go to the file system, which lives on a hard drive that may or may not be spinning at thousands of revolutions per minute. Then it has to use a magnetic head to read data and send it back up through the layers back into your javascript program. 
	>>想想看這個指令做了什麼事 : 它首先要call CPU, 然後call HDD, HDD的磁頭要去找位置, 最後才把資料傳回javascript

You give readFile a function (known as a callback) that it will call after it has retrieved the data from the file system. 
	>>當你給readFile一個callback function, 這個callback function會在readFile完成後才被執行
	>>(這裡callback 就是程式碼的doneReading)

It puts the data it retrieved into a javascript variable and calls your function (callback) with that variable. In this case the variable is called fileContents because it contains the contents of the file that was read.
	>>當readFile被執行時,readFile讀取到的內容會被指定成一個變數(variable)
	>>在這個案例裡,變數是fileContents, 
	>>fs.readFile(filename, [options], callback) // callback必須是function

Think of the restaurant example at the beginning of this tutorial. At many restaurants you get a number to put on your table while you wait for your food. These are a lot like callbacks. They tell the server what to do after your cheeseburger is done.
	>>想想看餐廳的例子,在很多餐廳你會拿到號碼牌,號碼牌就像是callback程式
	>>當餐點完成會叫你的號碼, 就像程式處理完會叫callbacks

Let's put our console.log statement into a function and pass it in as a callback:
	>>接下來我們也把console.log變成一個有callback的function */


	var fs = require('fs')
	var myNumber = undefined
	function addOne(callback) {
	  fs.readFile('number.txt', function doneReading(err, fileContents) {
	    myNumber = parseInt(fileContents)
	    myNumber++
	    callback()
	  })
	}
	function logMyNumber() {
	  console.log(myNumber)
	}
	addOne(logMyNumber)

/*Now the logMyNumber function can get passed in as an argument that will become the callback variable inside the addOne function. After readFile is done the callback variable will be invoked (callback()). Only functions can be invoked, so if you pass in anything other than a function it will cause an error.
	>>注意這裡AddOne加了一個參數,變成addOne(callback)
	>>這個參數callback必須是一個function的型態,其他型態放進去會出錯, addOne(myNumber) //err
	>>logMyNumber()會在doneReading()裡面,由上而下執行,
	>>也就是說,檔案讀取完後才會執行

When a function gets invoked in javascript the code inside that function will immediately get executed. In this case our log statement will execute since callback is actually logMyNumber. Remember, just because you define a function it doesn't mean it will execute. You have to invoke a function for that to happen.


To break down this example even more, here is a timeline of events that happen when we run this program:
	>>以下述敍這個程式執行的細節
1: The code is parsed, which means if there are any syntax errors they would make the program break. During this initial phase, fs and myNumber are declared as variables while addOne and logMyNumber are declared as functions. Note that these are just declarations. Neither function has been called nor invoked yet.
	>>程式被解析,判斷有沒有語法錯誤,同時fs & myNumber被宣告成variablie
	>>addOne & LogMyNumber被宣告成function
	>>此時只有宣告,沒有件何指令被執行

2: When the last line of our program gets executed addOne is invoked with the logMyNumber function passed as its callback argument. Invoking addOne will first run the asynchronous fs.readFile function. This part of the program takes a while to finish.
	>>在最後一行,addOne function被執行,addOne調用LogMyNumber function, 
	>>addOne執行fs.readFile function, 這個要等比較久才會執行完畢

3: With nothing to do, node idles for a bit as it waits for readFile to finish. If there was anything else to do during this time, node would be available for work.
	>>此時沒有其他需要執行的,node就發呆等readFile執行完畢

4: As soon as readFile finishes it executes its callback, doneReading, which parses fileContents for an integer called myNumber, increments myNumber and then immediately invokes the function that addOne passed in (its callback), logMyNumber.
Perhaps the most confusing part of programming with callbacks is how functions are just objects that can be stored in variables and passed around with different names. Giving simple and descriptive names to your variables is important in making your code readable by others. Generally speaking in node programs when you see a variable like callback or cb you can assume it is a function.
	>>當readFile執行完畢後, 接著執行doneReading function, 
	>>doneReading會發動callback function=LogMyNumber function
	>>這裡最容易讓人困惑的地方是, 一個function居然可以被存成variable, 並且用不同的名字被調用
	>>所以在定義function時,名稱很重要,要可以讓人辨識
	>>一般來說,如果你看到一個變數名叫callback,或是cb,你可以猜它是一個函數

You may have heard the terms 'evented programming' or 'event loop'. They refer to the way that readFile is implemented. 
Node first dispatches the readFile operation and then waits for readFile to send it an event that it has completed. 
While it is waiting node can go check on other things. 
Inside node there is a list of things that are dispatched but haven't reported back yet, 
so node loops over the list again and again checking to see if they are finished. 
After they finished they get 'processed', e.g. any callbacks that depended on them finishing will get invoked.
	>>你或許有聽過名詞'evented programming' or 'event loop'
	>>當readFile在等待時,Node就去確認有沒有其它事要做
	>>當Node確認完了,它又會回去確認readFile結束沒有,一直迴圈地不停做確認
	>>這就是event loop的意思


Here is a pseudocode version of the above example:
	>>接下來講一個案例,假如一個Async func會花費一分鐘
*/
	function addOne(thenRunThisFunction) {
	  waitAMinuteAsync(function waitedAMinute() {
	    thenRunThisFunction()
	  })
	}
	addOne(function thisGetsRunAfterAddOneFinishes() {})
/*
Imagine you had 3 async functions a, b and c. Each one takes 1 minute to run and after it finishes it calls a callback (that gets passed in the first argument). If you wanted to tell node 'start running a, then run b after a finishes, and then run c after b finishes' it would look like this:
	>>想像你有3個async function叫做a,b,c要執行, 每個function都要1分鐘
	>>如果你要你要讓a的callback回報完才執行b, b的callback回報完才執行c,那寫法如下

	a(function() {
	  b(function() {
	    c()
	  })
	})

When this code gets executed, a will immediately start running, then a minute later it will finish and call b, then a minute later it will finish and call c and finally 3 minutes later node will stop running since there would be nothing more to do. There are definitely more elegant ways to write the above example, but the point is that if you have code that has to wait for some other async code to finish then you express that dependency by putting your code in functions that get passed around as callbacks.
The design of node requires you to think non-linearly. 
	>>以上的寫法需要3分鐘才執行完畢
	>>Node有更聰明的寫法,但如果你的b function必須等到a function出來才能執行
	>>那不可避免地要花3分鐘才能完成

Consider this list of operations:
read a file
process that file
	>>我們再看一個案例, 當你想要
	>>讀取一個檔案, 然後執行那個檔案

If you were to turn this into pseudocode you would end up with this:
	>>很直覺的寫法就是這樣:
	var file = readFile()
	processFile(file)

This kind of linear (step-by-step, in order) code isn't the way that node works. 
If this code were to get executed then readFile and processFile would both get executed at the same exact time. 
This doesn't make sense since readFile will take a while to complete. 
Instead you need to express that processFile depends on readFile finishing. 
This is exactly what callbacks are for! 
And because of the way that JavaScript works you can write this dependency many different ways:
	>>但這種寫法是錯的,Node的邏輯不是這樣
	>>這樣寫會在readFile還沒完成時去執行File,因而產生錯誤
	>>callback實際上是為了這種情況而存在的
	>>用JavaScript的語法來寫,變化可以很多,以下幾種都可以

	var fs = require('fs')
	fs.readFile('movie.mp4', finishedReading)
	function finishedReading(error, movieData) {
	  if (error) return console.error(error)
	  // do something with the movieData
	}
	>>readFile寫在前面

But you could also structure your code like this and it would still work:

	var fs = require('fs')
	function finishedReading(error, movieData) {
	  if (error) return console.error(error)
	  // do something with the movieData
	}
	fs.readFile('movie.mp4', finishedReading)
	>>readFile寫在後面

Or even like this:

	var fs = require('fs')
	fs.readFile('movie.mp4', function finishedReading(error, movieData) {
	  if (error) return console.error(error)
	  // do something with the movieData
	})
	>>兩個function寫在一起
完*/