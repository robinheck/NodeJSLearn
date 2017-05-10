像是JS裡EventListener, buttonClick的事件
先由on定義要發出的事件, Emit是執行發出的動作,

	var EventEmitter = require('events');
	var emitter = new EventEmitter();
	emitter.on('sleep', function () {
	  console.log('going to sleep');
	});
	emitter.emit('sleep'); // -->console.log 
  emitter.emit('wake up'); //-->nothing happen 


Javascript 搜尋屬性時，會先從物件內部所擁有的屬性開始，如果找不到屬性的名稱，就會從特殊的物件屬性 __proto__ 內部搜尋。不斷反覆執行；這個過程就稱為〝在原型鏈中搜尋〞。

	function Human() {};
	Human.prototype.__proto__ = EventEmitter.prototype;
  var emitter = new EventEmitter();
	var man = new Human;
  //以上兩個都建立了EventEmitter, 要表達的是Human()=EventEmitter()
	man.on('sleeping', function () {
	  console.log('sleeping');
	});
	man.emit('sleeping');
	(這個範例重點在講prototype, 不是在講emitter)

3.可把on換成addListener效果相同
4.把on換成once會只監聽一次事件	
5.使用removeListener移除事件，可用來做記憶體回收
