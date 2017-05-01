//Properity
	//Math.Max為例, Math是object, Max是它的properity
	//Math {Max, Min, Add, Sum.....}
	//要取得一個object的properity, 如此例用"."就可以
	//但如果一個object是, MyMath{"Sum All","AB test","2"...}
	//"."的語法不支援空格和數字,此時要用
	//Math["Sum All"], Math[2]
	//注意, Math[2]有沒有很眼熟; 沒錯, 它就是Array, 
	//Array本質就是一個object, 例如arr=["Robin","johnson","Steven"]
	//實際上它是 arr={"1":Robin, "2":johnson, "3":Steven}

//Method
	//當一個函數的properity是function時,稱作properity
	//Math{Sum(a,b,c,d..),substract(a,b),...}

	//一些array的Method例子:
		// var mack = [];
		// mack.push("Mack");
		// mack.push("the", "Knife");
		// console.log(mack);
		// // → ["Mack", "the", "Knife"]
		// console.log(mack.join(" "));
		// // → Mack the Knife
		// console.log(mack.pop());
		// // → Knife
		// console.log(mack);
		// // → ["Mack", "the"]

//Object
	// var day1 = {
	//   squirrel: false,
	//   events: ["work", "touched tree", "pizza", "running",
	//            "television"]
	// };
	// console.log(day1.squirrel);
	// // → false
	// console.log(day1.wolf);
	// // → undefined
	// day1.wolf = true;//指定
	// console.log(day1.wolf);
	// // → true

//roperties whose names are not valid variable names or valid numbers have to be quoted.
	// var descriptions = {
	//   work: "Went to work",
	//   "touched tree": "Touched a tree"
	// };
	//"touched tree"要加引號,是因為它有空白

//Object 
	// var anObject = {left: 1, right: 2};
	// console.log(anObject.left);	// → 1
	// delete anObject.left; //刪除
	// console.log(anObject.left); // → undefined
	// console.log("left" in anObject);// → false
	// console.log("right" in anObject);// → true

//Object
	//兩個object,即使內容一樣, 這兩個系統都是判斷成不一樣的
	// var object1 = {value: 10};
	// var object2 = object1;
	// var object3 = {value: 10};
	// console.log(object1 == object2);// → true
	// console.log(object1 == object3);// → false
	// object1.value = 15;
	// console.log(object2.value);	// → 15
	// console.log(object3.value);	// → 10

//Example-0
//雅各會不定期莫名的變成松鼠,醒來又變成人,他懷疑做了一些事使他變成松鼠,
//所以他寫日記(JOURNAL),紀錄日常工作(events),和有沒有變成松鼠squirrel(true/false),
	var JOURNAL = [
	  {"events":["carrot","exercise","weekend"],"squirrel":false},
	  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
	  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
	  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
	  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
	  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
	  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
	  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
	  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
	  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
	  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
	  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
	  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
	  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
	  {"events":["brushed teeth","computer","work"],"squirrel":false},
	  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
	  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
	  {"events":["brushed teeth","work"],"squirrel":false},
	  {"events":["cauliflower","reading","weekend"],"squirrel":false},
	  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
	  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
	  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
	  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
	  {"events":["spaghetti","nachos","work"],"squirrel":false},
	  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
	  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
	  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
	  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
	  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
	  {"events":["potatoes","exercise","work"],"squirrel":false},
	  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
	  {"events":["lasagna","ice cream","work"],"squirrel":false},
	  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
	  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
	  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
	  {"events":["carrot","work"],"squirrel":false},
	  {"events":["pizza","beer","work","dentist"],"squirrel":false},
	  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
	  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
	  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
	  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
	  {"events":["lasagna","peanuts","work"],"squirrel":true},
	  {"events":["pizza","work"],"squirrel":false},
	  {"events":["potatoes","exercise","work"],"squirrel":false},
	  {"events":["brushed teeth","exercise","work"],"squirrel":false},
	  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
	  {"events":["pizza","cycling","weekend"],"squirrel":false},
	  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
	  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
	  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
	  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
	  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
	  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
	  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
	  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
	  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
	  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
	  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
	  {"events":["bread","candy","work"],"squirrel":false},
	  {"events":["potatoes","nachos","work"],"squirrel":false},
	  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
	  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
	  {"events":["brussel sprouts","running","work"],"squirrel":false},
	  {"events":["brushed teeth","work"],"squirrel":false},
	  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
	  {"events":["candy","brushed teeth","work"],"squirrel":false},
	  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
	  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
	  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
	  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
	  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
	  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
	  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
	  {"events":["pizza","brushed teeth","work"],"squirrel":false},
	  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
	  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
	  {"events":["brushed teeth","running","work"],"squirrel":false},
	  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
	  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
	  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
	  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
	  {"events":["carrot","reading","weekend"],"squirrel":false},
	  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
	  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
	  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
	  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
	  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
	  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
	  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
	  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
	];
//Example-1
//寫一個可以修改JOURNAL的公式
	var journal = [];
	function addEntry(events, didITurnIntoASquirrel) {
	  journal.push({
	    events: events,
	    squirrel: didITurnIntoASquirrel
	  });
	}
	addEntry(["work", "touched tree", "pizza", "running",
	          "television"], false);
	addEntry(["work", "ice cream", "cauliflower", "lasagna",
	          "touched tree", "brushed teeth"], false);
	addEntry(["weekend", "cycling", "break", "peanuts",
	          "beer"], true);

//Example-2
//寫一個計算相關系數的函式,來計算平常他做了什麼事,會變成松鼠
	//不用太在意相關系數的數學原理,只要知道怎麼用就好
	//假設有事件A,事件B, AX代表A沒發生,AY代表A發生,BX代表B沒發生,BY代表B發生,
	//AXBX表示AB都沒發生的次數,AYBX表示A發生同時B沒發生的次數
	//寫出陣列[AXBX,AYBX,AXBY,AYBY], 以下的公式就能算出AB間的相關系數
	function phi(table) {
	  return (table[3] * table[0] - table[2] * table[1]) /
	    Math.sqrt((table[2] + table[3]) *
	              (table[0] + table[1]) *
	              (table[1] + table[3]) *
	              (table[0] + table[2]));
	}
	//console.log(phi([76, 9, 4, 1]));	// → 0.068599434

//Example-3
//寫一個函數tableFor,當輸入"pizza","松鼠",就把這兩者轉換成我們想要的陣列格式[AXBX,AYBX,AXBY,AYBY]
	
	function hasEvent(event, entry) {
	  return entry.events.indexOf(event) != -1;
	}
	function tableFor(event, journal) {
	  var table = [0, 0, 0, 0];
	  for (var i = 0; i < journal.length; i++) {
	    var entry = journal[i];
	    var index = 0; //兩者都沒發生,table[0]+=1
	    if (hasEvent(event, entry)) index += 1; //Event有找到,沒有變成松鼠,table[1]+=1
	    if (entry.squirrel) index += 2;//Event沒找到,但變成松鼠,table[2]+=1
	    //Event有找到,變成松鼠,則index加1加2等於3, table[3]+=1
	    table[index] += 1;
	  }
	  return table;
	}
	console.log(tableFor("pizza", JOURNAL));// → [ 76, 9, 4, 1 ]
	console.log(tableFor("bread", JOURNAL));// → [ 77, 8, 5, 0 ]

//Example-4
//寫一個函數,可以紀錄事件和相關係數
	var map = {};
	function storePhi(event, phi) {
	  map[event] = phi;
	}
	// storePhi("pizza", 0.069);
	// storePhi("touched tree", -0.081);
	// console.log(map);//->{ pizza: 0.069, 'touched tree': -0.081 }

//Example-5
//同時運用tableFor&phi函數,寫出最後的函數,

	function gatherCorrelations(journal) {
	  var phis = {};
	  for (var entry = 0; entry < journal.length; entry++) {
	    var events = journal[entry].events;
	    for (var i = 0; i < events.length; i++) {
	      var event = events[i];
	      if (!(event in phis))
	        phis[event] = phi(tableFor(event, journal));
	    }
	  }
	  return phis;
	}

//Example-6
//把所有事件的相關系數都紀錄在correlations這個變數裡
	var correlations = gatherCorrelations(JOURNAL);
		//console.log(correlations)
	// for (var event in correlations)
	//   console.log(event + ": " + correlations[event]);
	// // → carrot:   0.0140970969
	// // → exercise: 0.0685994341
	// // → weekend:  0.1371988681
	// // → bread:   -0.0757554019
	// // → pudding: -0.0648203724
	// // and so on...

//Example-7
//我們開始可以做數據分析了
//找出相關系數大於1,小於-1的事件
	// for (var event in correlations) {
	//   var correlation = correlations[event];
	//   if (correlation > 0.1 || correlation < -0.1)
	//     console.log(event + ": " + correlation);
	// }

//Example End
//==================================================
//Array常用的function
//push, shift, unshift
	//以下是一個toDoList的範例
	var todoList = [];
	function rememberTo(task) {
	  todoList.push(task); //加在最後面
	}
	function whatIsNext() {
	  return todoList.shift(); //移掉最前面
	}
	function urgentlyRememberTo(task) {
	  todoList.unshift(task); //加在最前面
	}
	// rememberTo("A1");
	// rememberTo("A2");
	// rememberTo("A3");
	// console.log(todoList);//[ 'A1', 'A2', 'A3' ]
	// whatIsNext();
	// console.log(todoList);//[ 'A2', 'A3' ]
	// urgentlyRememberTo("A4")
	// console.log(todoList);//[ 'A4', 'A2', 'A3' ]

//indexOf, lastIndexOf, slice
	console.log([1, 2, 3, 2, 1].indexOf(2));
	// → 1
	console.log([1, 2, 3, 2, 1].lastIndexOf(2));
	// → 3
	console.log([0, 1, 2, 3, 4].slice(2, 4));
	// → [2, 3]
	console.log([0, 1, 2, 3, 4].slice(2));
	// → [2, 3, 4]

//Example:移除陣列中特定的值
	function remove(array, index) {
	  return array.slice(0, index)
	    .concat(array.slice(index + 1));
	}
	console.log(remove(["a", "b", "c", "d", "e"], 2));
	// → ["a", "b", "d", "e"]

//=================================
//String常用方法

//String沒有properity
	// var myString = "Fido";
	// myString.myProperty = "value";
	// console.log(myString.myProperty);
	// // → undefined

//indexOf,lastIndexof,slice.. 大部分string方法和array一樣
	console.log("coconuts".slice(4, 7));
	// → nut
	console.log("coconut".indexOf("u"));
	// → 5
	console.log("coconut".lastIndexOf("o"));
	// ->3
	console.log("one two three".indexOf("ee"));
	// → 11

//trim(),移除spaces, newlines, tabs, and similar characters
	console.log("  okay \n ");
	console.log("  okay \n ".trim());
	// → okay
	console.log("      one two three".trim());
	//->one two three

//basic.
	var string = "abc";
	console.log(string.length);
	// → 3
	console.log(string.charAt(0));
	// → a
	console.log(string[1]);
	// → b

//The arguments object
	//argument是參數,只要有call function就會自動建一個arguments object

	// 定義function裡有參數,在執行函數時少給參數在語法上是OK的
	// 少給的參數會自動被設定成undefined,只要函數沒用到它就不會出error
	// function threeArguments(a, b, c) {}
	// threeArguments(); // And so is this

	// 定義function裡沒有參數,在執行函數時多給參數在語法上是OK的
	// function noArguments() {}
	// noArguments(1, 2, 3); // This is okay

	//因此一個函數可以給他無限多個參數也沒問題,,
	// function argumentCounter() {
	//   console.log("You gave me", arguments.length, "arguments.");
	// }
	// argumentCounter("Straw man", "Tautology", "Ad hominem");
	// // → You gave me 3 arguments.

//The Math object
	//Math.max()
	//Math.min()
	//Math.sqrt()
	//Math.sin(),Math.cos(),Math.tan()
	//Math.PI //數學常數用大寫
	//console.log(Math.floor(Math.random() * 10)); // → 0~9.
	//console.log(Math.ceil(Math.random() * 10)); // → 1~10.

//The global object
	//Global變數, 可以用window當作它的母物件
	var myVar = 10;
	console.log("myVar" in window);
	// → true
	console.log(window.myVar);
	// → 10