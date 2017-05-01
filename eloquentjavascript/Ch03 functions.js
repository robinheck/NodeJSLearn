//Special numbers
	// Infinity and -Infinity
	//Infinity - 1 is still Infinity
	//NaN stands for “not a number”, even though it is a value of the number type. 
	//Infinity - Infinity / return NaN

//String
	console.log("This is the first line\nAnd this is the second")
	console.log("A newline character is written like \" \\n \".")
	// \"->", \\->\

//TypeOf
	console.log(typeof 4.5)
//bollean & types
	// console.log(true ? 1 : 2);
	// console.log(false || true)
	// console.log(8 * null)
	// // → 0
	// console.log("5" - 1)
	// // → 4
	// console.log("5" + 1)
	// // → 51
	// console.log("five" * 2)
	// // → NaN
	// console.log(false == 0)
	// // → true
	// console.log(null == undefined);
	// // → true
	// console.log(null == 0);
	// // → false
		//這句很常用來判斷一個東西是否有值
		//console.log(var1 != null);
		//if(var1 != null){...}
	//if (!isNaN(theNumber)){...}

//The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise.
	// console.log("Karl" || "user")
	// // → Karl
	// console.log(null || "user")
	// // → user
	// //常用的方法是,,var1=(var2||default)

//Executing a function is called invoking, calling, or applying it.
//Values given to functions are called arguments.

//Break
	// for (var current = 20; ; current++) {
	//   if (current % 7 == 0)
	//     break;
	// }
	// console.log(current);
	// // → 21

//Switch
	// switch (prompt("What is the weather like?")) {
	//   case "rainy":
	//     console.log("Remember to bring an umbrella.");
	//     break;
	//   case "sunny":
	//     console.log("Dress lightly.");
	//   case "cloudy":
	//     console.log("Go outside.");
	//     break;
	//   default:
	//     console.log("Unknown weather type!");
	//     break;
	// }

//function
	//Some functions produce a value, such as power and square, and some don’t, such as makeNoise, which produces only a side effect. A return statement determines the value the function returns. When control comes across such a statement, it immediately jumps out of the current function and gives the returned value to the code that called the function. The return keyword without an expression after it will cause the function to return undefined.
	//好習慣:不要在function裡使用console.log, 雖然這不是錯誤語法

//Global & local
	// var x = "outside";

	// var f1 = function() {
	//   var x = "inside f1";
	// };
	// f1();
	// console.log(x);
	// // → outside

	// var f2 = function() {
	//   x = "inside f2";	//<--notice here is no "var"
	// };
	// f2();
	// console.log(x);
	// // → inside f2

//Function
	//Variable define :
		//var launchMissiles = function(value) {...action_A...}
		//launchMissiles="redefined variable" //這句前面沒有var,變數被重新定義
		//  //Return : redefined variable
	//Declaration :
		// function square(x) {...}
		// **不要在if裡用function Declaration,壞習慣
		// such as : if (xxx) { function a(){...} }

//Call Stack
	// function greet(who) {
	//   console.log("Hello " + who);
	// }
	// greet("Harry");
	// console.log("Bye");
	// 以上的程式碼,第一步執行時是greet("Harry");第四行
	// 第二步是console.log("Hello " + Harry);第二行
	// 第三步會回去第四行,確認程式執行完畢;
	// 第四步執行第五行

	// 其中,第二步執行完時,電腦怎麼知道要去第四行?
	// 所以在第四行開始執行時,會回傳"第四行"這個值到記憶體裡
	// 這個記憶位置的地方,稱作Call Stack

//Stack Error
	// function chicken() {
	//   return egg();
	// }
	// function egg() {
	//   return chicken();
	// }
	// console.log(chicken() + " came first.");
	// // RangeError: Maximum call stack size exceeded
	//當你的程式有很多呼叫時,記憶體不足,會發生 “out of stack space” or “too much recursion” error

//Optional Arguments
	// Alert("arguments1"); Alert()定義1個參數,如果輸入3個參數會怎樣?
	// alert("Hello", "Good Evening", "How do you do?");
	// return> Hello ; 它會執行第一個,自動忽略後面的,不產生錯誤訊息
	//===========
	// function(arg1,arg2); 當你定義一個function,令它有2個參數
	// function(1)=function(1,undefined); 僅輸入一個時,第2個自動被指定為undefined
	// 用法如下:
	// function power(base, exponent) {
	//   if (exponent == undefined)
	//     exponent = 2;
	//   var result = 1;
	//   for (var count = 0; count < exponent; count++)
	//     result *= base;
	//   return result;
	// }
	// console.log(power(4));
	// // → 16
	// console.log(power(4, 3));
	// // → 64	
	//==============
	//這種自動undefined的做法讓很多人頭痛,發生錯誤很難找出來
	//但另一個好處是它可以寫一個function,不限制它有多少參數
	//例如:console.log("R", 2, "D", 2);
	//console.log(), 它輸入多少個參數都不會出錯

//Closure : function re-created
	// 所謂的Closure是指一種程式寫法
	// 首先用function Declaration定義一個function:
	// 	function wrapValue(n) {
	// 	  var localVariable = n;
	// 	  return function() { return localVariable; };
	// 	  	//上面這一行表示,wrapValue回傳的是一個function
	// 	  	//如果寫return localVariable;
	// 	  	//則wrapValue回傳的是一個值
	// 	}
	// 之後再用var定義參數如下:
	// 	var wrap1 = wrapValue(1);
	// 	var wrap2 = wrapValue(2);
	// 	console.log(wrap1());// → 1
	// 	console.log(wrap2());// → 2
	// 注意以上這兩行,等於重新定義了兩個function,wrap1(),wrap2()
	// 這種寫法可以完全不影響原來的wrapValue(),
	// A good mental model is to think of the function keyword as “freezing” the code in its body and wrapping it into a package (the function value). So when you read return function(...) {...}, think of it as returning a handle to a piece of computation, frozen for later use.
	//===Example================
	// function multiplier(factor) {
	//   return function(number) {
	//     return number * factor;
	//   };
	// }
	// var twice = multiplier(2);
	// console.log(twice(5));	// → 10
	// 上面的程式總共定義了兩個函數, multiplier(),twice()

//Recursion
	//當一個function在定義時,有呼叫自己的行為,叫Recursion
	// function power(base, exponent) {
	//   if (exponent == 0)
	//     return 1;
	//   else
	//     return base * power(base, exponent - 1);
	// }
	// console.log(power(2, 3));
	// // → 8
	//注意這種Recursion的寫法,比單純的for loop,執行起來慢上許多
	//但常常for-loop會很長串,在複雜的程式會更複雜
	//The basic rule, which has been repeated by many programmers and with which I wholeheartedly agree, is to not worry about efficiency until you know for sure that the program is too slow. If it is, find out which parts are taking up the most time, and start exchanging elegance for efficiency in those parts.
	//The reason I’m stressing this is that surprisingly many beginning programmers focus fanatically on efficiency, even in the smallest details. The result is bigger, more complicated, and often less correct programs, that take longer to write than their more straightforward equivalents and that usually run only marginally faster.
	//在寫程式時,一開始不要太考慮效率問題,先寫出來,看哪邊慢再去修正

	//But recursion is not always just a less-efficient alternative to looping. Some problems are much easier to solve with recursion than with loops. Most often these are problems that require exploring or processing several “branches”, each of which might branch out again into more branches.
	//有時候recursion很好用, 以下是一個例子

	//Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite amount of new numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produce that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.
	//有一個數學,從1開始,把它加五或乘三,就可以產生無限個不重覆的數字
	//如果現在給你一個數字,請你告訴我它是如何用3和5組合出來

	//============================
	// function findSolution(target) {
	//   function find(start, history) {
	//     if (start == target)
	//       return history;
	//     else if (start > target)
	//       return null;
	//     else
	//       return find(start + 5, "(" + history + " + 5)") ||
	//              find(start * 3, "(" + history + " * 3)");
					//這裡的"or符號",表示它兩個都會執行,也就是find(..5),find(..3)
					//總共執行兩次
	//   }
	//   return find(1, "1");
	// }
	
	// console.log(findSolution(13));
	// // → (((1 * 3) + 5) * 3)

	//以上程式執行起來, 邏輯如下,,
	// find(1, "1")
	//   find(6, "(1 + 5)")
	//     find(11, "((1 + 5) + 5)")
	//       find(16, "(((1 + 5) + 5) + 5)")
	//         too big(null)
	//       find(33, "(((1 + 5) + 5) * 3)")
	//         too big(null)
	//     find(18, "((1 + 5) * 3)")
	//       too big(null)
	//   find(3, "(1 * 3)")
	//     find(8, "((1 * 3) + 5)")
	//       find(13, "(((1 * 3) + 5) + 5)")
	//         found!
	// 這種程式要用for來寫幾乎不可能

//Growing functions
	//如何寫出一個function:
	//通常是你先寫一個程式,發現裡面有很多重覆碼,然後想簡化它,
	//簡化一個程式是好習慣,愈長的程式裡面出錯愈難發現
	
	//函數名稱如何取是一個困難的學問,
	//一個基本的原則是不要花太多心思在想函數名稱
	//大多時候你的函數用幾次就不會再用了

	//例子,我們想列出農場裡,牛和雞的數量,最後表達格式是:
	// 007 Cows
	// 011 Chickens

	//很直接的可以寫出來
		function printFarmInventory(cows, chickens) {
		  var cowString = String(cows);
		  while (cowString.length < 3)
		    cowString = "0" + cowString;
		  console.log(cowString + " Cows");
		  var chickenString = String(chickens);
		  while (chickenString.length < 3)
		    chickenString = "0" + chickenString;
		  console.log(chickenString + " Chickens");
		}
		printFarmInventory(7, 11);	

	//第二步優化
		function printZeroPaddedWithLabel(number, label) {
		  var numberString = String(number);
		  while (numberString.length < 3)
		    numberString = "0" + numberString;
		  console.log(numberString + " " + label);
		}
		function printFarmInventory(cows, chickens, pigs) {
		  printZeroPaddedWithLabel(cows, "Cows");
		  printZeroPaddedWithLabel(chickens, "Chickens");
		  printZeroPaddedWithLabel(pigs, "Pigs");
		}
		printFarmInventory(7, 11, 3);
		//優化後,不論幾種動物都可以寫進來
	//第三步優化
		function zeroPad(number, width) {
		  var string = String(number);
		  while (string.length < width)
		    string = "0" + string;
		  return string;
		}
		function printFarmInventory(cows, chickens, pigs) {
		  console.log(zeroPad(cows, 3) + " Cows");
		  console.log(zeroPad(chickens, 3) + " Chickens");
		  console.log(zeroPad(pigs, 3) + " Pigs");
		}
		printFarmInventory(7, 16, 3);
		//這次優化看起來和第二步差不多,,
		//實際上這是side effect的差別

//Side Effect
	//函數執行完時,會回傳兩種型態,其一是side effect,其二是return value
	//在以上第二步的例子,printZeroPaddedWithLabel直接print出字串,這就稱作side effect
	//而在第三步,zeroPad,回傳一個return value
	//return value比較容易被使用,

//Pure Function
	//A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global variables that are occasionally changed by other code.
	//純函數就是沒有side effect的函數,
	//同時也不能有讀取到其他函數的side effect,這比較難判斷
	//比較簡單的判斷方法是,把這個函數單獨複製到新檔案裡
	//沒有其他前後文的情況下,還能正確執行,則這個就是純函數
	//**注意:並非所有函數都一定要寫成純函數,用side effect可以做出很多純函數做不出來的



