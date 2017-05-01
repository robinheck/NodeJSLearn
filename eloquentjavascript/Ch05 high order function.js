
//舉一個簡單的例子, 
	var arrayA = [1, 2, 3];
	for (var i = 0; i < arrayA.length; i++) {
	  var current = arrayA[i];
	  //console.log(current); //return 1 2 3
	}

//將它簡化,
	function logEach(array) {
	  for (var i = 0; i < array.length; i++)
	    console.log(array[i]);
	}
	//logEach(arrayA) //return 1 2 3

//再簡化
	function forEach(array, action){
		for (var i=0; i<array.length; i++){
			action(array[i])
		}
	}
	forEach(arrayA, console.log);

//forEach可以做很多事
	var numbers = [1, 2, 3, 4, 5], sum = 0;
	function sumA(number){sum+=number;}
	forEach(numbers, sumA);
	// forEach(numbers, function(number) {
	//   sum += number;
	// });
	console.log(sum); // → 15

//forEach在Array裡是預設方法(method),
//可以寫成Array.forEach(function(){...})

//function不一定只能return value
//也可以return function
	function greaterThan(n) {
	  return function(m) { return m > n; };
	}
	var greaterThan10 = greaterThan(10);//gratherThan10是一個新函數
	var greaterThan20 = greaterThan(20);
	var greaterThan30 = greaterThan(30);
	//我們可以輕易地建很多函數
	console.log(greaterThan10(11));	// → true

//以下這個repeat看起來蠻好用的,,
	function unless(test, then) {
	  if (!test) then();
	}
	function repeat(times, body) {
	  for (var i = 0; i < times; i++) body(i);
	}
	repeat(3, function(n) {
	  unless(n % 2, function() {
	    console.log(n, "is even");
	  });
	});
	// → 0 is even
	// → 2 is even

//可以改變現有函數的輸出
	Boolean(0);//--> 原本只會return false
	function noisy(f) {
	  return function(arg) {
	    console.log("calling with", arg);
	    var val = f(arg);
	    console.log("called with", arg, "- got", val);
	    return val;
	  };
	}
	noisy(Boolean)(0);//現在return一大堆..
	// → calling with 0
	// → called with 0 - got false

//以上的noisy例子,我們假設f只會有1個參數
//如果f有兩個參數,就要去修改內容,function(arg1,arg2) val=f(arg1,arg2)
//但如果f有三個參數,那又要修改一次
//能不能讓f可以使用任意的參數?
	function transparentWrapping(f) {
	  return function() {
	    return f.apply(null, arguments);
	  };
	}
	//apply的用法下一章再教



