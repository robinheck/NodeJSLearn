var EventEmitter = require('events');

//查看模組內可供使用的部分
//console.log(EventEmitter);

//常用的為EventEmitter區塊
var emitter = new EventEmitter();


//1.註冊一個事件
	// emitter.on('sleep', function () {
	//   console.log('going to sleep');
	// });
	// function night() {
	//   emitter.emit('sleep');
	// }
	// night();


//使用繼承的方式讓其他對象也擁有EventEmitter
//讓非events的對象註冊事件

//2.prototype.__proto__ 在javascript中意思為每個物件的原生繼承屬性
//可參考：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Obsolete_Pages/Obsolete_Pages/Obsolete_Pages/%E5%86%8D%E8%AB%87%E5%B1%AC%E6%80%A7%E7%9A%84%E7%B9%BC%E6%89%BF/%E5%AF%A6%E9%AB%94%E9%97%9C%E4%BF%82%E7%9A%84%E7%A2%BA%E5%AE%9A

//(這個範例重點在講prototype, 不是在講emitter)
	// function Human() {};
	// Human.prototype.__proto__ = EventEmitter.prototype;
	// var man = new Human;
	// man.on('AA', function () {
	//   console.log(' man sleeping');
	// });
	// man.emit('AA');

// 3.可把on換成addListener效果相同

// 4.把on換成once會只監聽一次事件
	// function Human() {};
	// Human.prototype.__proto__ = EventEmitter.prototype;
	// var man = new Human;
	// man.once('sleeping', function () {
	//   console.log('sleeping');
	// });
	// man.emit('sleeping');
	// man.emit('sleeping');


//5.使用removeListener移除事件，可用來做記憶體回收

	// emitter.on('message', console.log);

	// setInterval(function(){
	//   emitter.emit('message', 'HIHI');//第二個參數為傳進去on第二個參數函式的參數
	// }, 50);

	// setTimeout(function(){  //時間點後移除
	//   emitter.removeListener('message', console.log);
	// }, 200);

//6.setMaxListeners()
	//因EventEmiter預設最多可監聽10個on的事件，所以我們需手動調整
	//可設為Infinity 或 0 代表無限的listener
	//emitter.setMaxListeners(20);

//7.可使用removeAllListeners移除所有監聽事件
	//emitter.removeAllListeners("slepping");

//(Robin註解)
//8.listeners取得指定名稱的監聽事件中所有的function
	// var emitter = new EventEmitter;
	
	function function1() {};
	function function2() {};
	function getAll () 
	{
	  console.log(emitter.listeners("sleeping"));
	}
	emitter.on("sleeping", function1);
	emitter.on("sleeping", function2);

	getAll ();	

//(原版)
//8.listeners取得指定名稱的監聽事件中所有的callback

	// // var emitter = new EventEmitter;
	// function getAll () {
	//   console.log(emitter.listeners("sleeping"));
	// }
	// emitter.on("sleeping", callback)
	// emitter.on("sleeping", callback1)

	// function callback() {};
	// function callback1() {};
	// getAll ();

