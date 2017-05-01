//object的概念是:把複雜的事都在object裡處理完,留下簡單的IO讓user去處理

//this,指向母階的object內容
	function speak(line) {
	  console.log("The " + this.type + " rabbit says '" +
	              line + "'");
	}
	var whiteRabbit = {type: "white", speak: speak};
	var fatRabbit = {type: "fat", speak: speak};
	whiteRabbit.speak("Oh my ears and whiskers, " +
	                  "how late it's getting!");
	// → The white rabbit says 'Oh my ears and whiskers, how
	//   late it's getting!'
	fatRabbit.speak("I could sure use a carrot right now.");
	// → The fat rabbit says 'I could sure use a carrot
	//   right now.'


//apply
	//還記得forEach,它是屬於Array的方法,可以寫成
	//forEach(Array, action) or Array.forEach(action)
	//在objects,我們用apply將一個new function變成object的方法
	speak.apply(fatRabbit,["FaT"])//The fat rabbit says 'FaT'

//Call
	//call和apply的意思差不多,但語法有點不一樣,
		//fn.apply( context, [ arg1, arg2,... ]);	
		//fn.call( context, arg1, arg2,... );
	//用call方法,在第一個參數可以指定properity

	speak.call({type: "old"}, "Oh my.");
	// → The old rabbit says 'Oh my.'
	speak.call(fatRabbit, "one","two","three");
	// → The fat rabbit says 'one'
