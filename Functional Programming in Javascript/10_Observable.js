Array.prototype.concatMap = function(projection_Function_That_Returns_Array){
	return this.map(function(item){
		return projection_Function_That_Returns_Array(item);
	}).concatAll();
};
Array.prototype.reduce = function(combiner, initialValue) {
	var counter,
		accumulatedValue;
	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array and are left with only one value.
		while(counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter])
			counter++;
		}

		return [accumulatedValue];
	}
};
Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);
			//apply(a-array,b) 將B加到a-array裡面
			//AA=JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll())
			//return [1,2,3,4,5,6,7,8,9]
		//results.push(subArray);
			//AA=JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll())
			//return [[1,2,3],[4,5,6],[7,8,9]]						
	});
	return results;
};
Array.zip = function(left, right, combinerFunction) {
	var counter;
	var	results = [];
	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
		results.push(combinerFunction(left[counter],right[counter]));
	}
	return results;
};

//=============================================================

//Let's say we have a collection of all of the prices for NASDAQ stocks over time. 
//Every time the price of a stock changes on the NASDAQ ticker an entry is added to this collection. 
//Let's say that ten days ago you bought shares in Microsoft, and now you want to print all of the MSFT share prices since then. 
//Filter the collection for MSFT trades starting from ten days ago and print each price record (including the time stamp) using the print() function. 
//Note: this is not a trick question. It's as easy as it seems.

// The pricesNASDAQ collection looks something like this...
var pricesNASDAQ = [
	// ... from the NASDAQ's opening day
	{name: "ANGI", price: 31.22, timeStamp: new Date(2011,11,15) },
	{name: "MSFT", price: 32.32, timeStamp: new Date(2011,11,15) },
	{name: "GOOG", price: 150.43, timeStamp: new Date(2011,11,15)},
	{name: "ANGI", price: 28.44, timeStamp: new Date(2011,11,16)},
	{name: "GOOG", price: 199.33, timeStamp: new Date(2011,11,16)},
	// ...and up to the present.
];

//function(pricesNASDAQ, printRecord) {

var microsoftPrices,
	now = new Date(),
	tenDaysAgo = new Date( now.getFullYear(), now.getMonth(), now.getDate() - 10);

// use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
microsoftPrices =
	pricesNASDAQ.
		filter(function(priceRecord) {
		  return priceRecord.name === 'MSFT' && priceRecord.timeStamp > tenDaysAgo;
		});

// Print the trades to the output console
microsoftPrices.
	forEach(function(priceRecord) {
		printRecord(priceRecord);
	});

//}
//以上的程式碼在網頁上執行起來會即時地回傳MSFT的股價
//這個方法叫做Observable,是一種Reactive Extensions

//Microsoft's open-source "Reactive Extensions" library introduces a new collection type to Javascript: Observable. 
//An Observable is a lot like an Event. 
//Like an Event, an Observable is a sequence of values that a data producer pushes to the consumer. 
//However unlike an Event, an Observable can signal to a listener that it has completed, and will send no more data.
//Observables can send data to consumers asynchronously. 
//Unlike Array, there's no Javascript literal syntax for creating Observable sequences. 
//However we can build a helper method that visually describes the contents of sequences as well as the times between each item's arrival. 
//The seq function creates an Observable from an array of items, and adds a delay for every empty item encountered. Every ,,, adds up to a second.

// An array of numbers 1,2,3
var numbers123Array =      [1,2,3];
// A sequence that returns 1, and then after 4 seconds returns 2,
// and then after another second returns 3, and then completes.
var numbers123Observable = seq([1,,,,,,,,,,,,2,,,3]);
// Like Arrays, Observables can contain any object - even Arrays.
var observableOfArrays = seq([ [1,2,3],,,,,,[4,5,6],,,,,,,,,,,[1,2] ]);

// Observables are a sequence of values, delivered one after the other. 
//Therefore it's possible that an Observable can go on sending data to a listener forever just like a mouse move event. 
//To create a sequence that doesn't complete, you can add a trailing ,,, to the end of the items passed to seq().

// The trailing ,,, ensures that the sequence will 'not' complete.
var mouseMovesObservable =
	seq([ {x: 23, y: 55},,,,,,,{x: 44, y: 99},,,{x:55,y:99},,,{x: 54, y:543},,, ]);
// No trailing ,,, indicates that sequence will complete.
var numbers123Observable = seq([1,,,2,,,3]);

// Querying Arrays only gives us a snapshot. 
//By contrast, querying Observables allows us to create data sets that react and update as the system changes over time. 
//This enables a very powerful type of programming known as reactive programming.

//===================================================
//++Exercise 28: Subscribing to an event
function(button) {
	// the button click handler
	var handler = function(ev) {
		// Unsubscribe from the button event.
		button.removeEventListener("click", handler);
		alert("Button was clicked. Unsubscribing from event.");
	};
	// add the button click handler
	button.addEventListener("click", handler);
}
		
//Ask yourself this question: How is subscribing to an event different than traversing an array? (it means go through every element of array, for(i;i<arr.length;i++))
//Both operations involve sending a listener a sequence of items by repeatedly invoking a function. So why can't we traverse Arrays and Events the same way?

//===================================================
//++Exercise 29: Traversing an Event
//Subscribing to an Event and traversing an Array are fundamentally the same operation. 
//The only difference is that Array traversal is synchronous and completes, and Event traversal is asynchronous and never completes.
//If we convert a button click Event to an Observable object, we can use forEach() to traverse the Event.

function(button) {
	var buttonClicks = Observable.fromEvent(button, "click");
	// In the case of an Observable, forEach returns a subscription object.
	var subscription =
		buttonClicks.
			forEach(function(clickEvent) {
				alert("Button was clicked. Stopping Traversal.");
				// Stop traversing the button clicks
				subscription.dispose();
			});
}
		
//Notice that Observable's fromEvent() function returns a Subscription object. 
//Disposing of a Subscription object unsubscribes from the event and prevents memory leaks.
//Disposing of a subscription is the asynchronous equivalent of stopping half-way through a counting for loop.
//Disposing of a Subscription object is basically the same as calling removeEventListener(). On the surface, these two approaches to Event handling don't seem to be very different.
//Under the circumstances, why should we bother converting Events to Observables? 
//The reason is that if we convert Events to Observable Objects, we can use powerful functions to transform them.
// In the next exercise we'll learn how we can use one such function to avoid dealing with Subscriptions in many cases...

//===================================================
//++Exercise 30: Completing Sequences with take()
//Have you ever wished that you could listen for the next occurrence of an event and then immediately unsubscribe? 
//For example, developers will often attach an event handler to window.onload, expecting that their event handler will only be called once.

window.addEventListener(
	"load",
	function()
		// do some work here, but expect this function will only be called once.
	})

//In instances such as this, it's good practice to unsubscribe from the event after it's fired.
//Failing to unsubscribe is a memory leak. 
//Depending on the circumstances, memory leaks can seriously destablize your application and can be very difficult to track down. 
//Unfortunately unsubscribing from an event after one occurrence can be cumbersome(笨重):

var handler = function() {
	// do some work here, then unsubscribe from the event
	window.removeEventListener("load", handler)
};
window.addEventListener("load", handler);

//Wouldn't it be nice if there was an easier way to code this? That's why Observable has a take() function. The take() function works like this...
seq([1,,,2,,,3,,,4,,,5,,,6,,,]).take(3) === seq([1,,,2,,,3]);

//An Observable based on an Event will never complete on its own. The take() function creates a new sequence that completes after a discrete number of items arrive.
//This is important, because unlike an Event, when an Observable sequence completes it unsubscribes all of its listeners.
//That means that if we use take() to complete our Event sequence, we don't need to unsubscribe!

function(button) {
	var buttonClicks = Observable.fromEvent(button, "click");
	// Use take() to listen for only one button click
	// and unsubscribe.
	buttonClicks.
		take(1).
		forEach(function() {
			alert("Button was clicked once. Stopping Traversal.");
		});
}

//The take() function is great way of listening for a discrete number of events and then unsubscribing, but Observable has an even more flexible function that we can use to complete sequences...

//===================================================
//++Exercise 31: Completing sequences with takeUntil()

//Have you ever wanted to unsubscribe from one Event when another Event fires? 
//Observable's takeUntil() function is a convenient way of completing a sequence when another Event occurs. Here's how takeUntil() works:

var numbersUntilStopButtonPressed =
	seq([ 1,,,2,,,3,,,4,,,5,,,6,,,7,,,8,,,9,,, ]).
		takeUntil(seq([  ,,, {eventType: "click"},,, ]) )=== seq([ 1,,,2 ])

//Earlier we (unknowningly) built a dynamic Microsoft price stock ticker using Observable. 
//The problem with that stock ticker was that 'it kept going on forever'. 
//If left unchecked, all the entries in the log could use up all of the memory on the page.
//In the exercise below, filter the Observable sequence of NASDAQ prices for MSFT stock prices, use the fromEvent() function to create an Observable.
//MSTF是NASDAQ裡面其中之一的股票
//之前做的MSTF一直報價不會停
//下面的程式碼多了一個停止鍵
function(pricesNASDAQ, printRecord, stopButton) {
	var stopButtonClicks = Observable.fromEvent(stopButton,"click");
	var	microsoftPrices =
			pricesNASDAQ.
				filter(function(priceRecord) {
					return priceRecord.name === "MSFT";
				}).
				takeUntil(stopButtonClicks);
	microsoftPrices.
		forEach(function(priceRecord) {
			printRecord(priceRecord);
		});
}

//We've learned that Observable sequences are much more powerful than raw events, because they can complete. 
//The take() and takeUntil() functions are powerful enough to ensure that we never have to unsubscribe from another event again! 
//This reduces the risk of memory leaks and makes our code more readable.

//Here's what we learned in this section:

	//We can travel through Observables using forEach().
	//We can use fromEvent() to convert Events into Observables that never complete.
	//We can apply take() and takeUntil() to an Observable to create a new sequence which does complete.

//In the next section we'll learn how to combine events to create more complex events. You'll be suprised how easily you can solve complex, asynchronous problems!
