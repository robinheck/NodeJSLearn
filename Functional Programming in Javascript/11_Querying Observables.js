//What's the difference between these two tasks?
// >Creating a flat list of movies with a rating of 5.0 from a bunch of movie lists.
// >Creating a sequence of all the mouse drag events from the mouseDown, mouseMove, and mouseUp events.

//You might think of them as different, and might code them very differently, but these tasks are fundamentally the same. 
//Both of these tasks are queries, and can be solved using the functions you've learned in these exercises.

//The difference between traversing an Array and traversing an Observable is the direction in which the data moves. 
//When traversing an Array, the client pulls data from the data source, blocking until it gets a result. 
//When traversing Observables, the data source pushes data at the client whenever it arrives.

//It turns out that the direction in which data moves is orthogonal to querying that data. 
//In other words, when we're querying data it doesn't matter whether we pull data, or data is pushed at us. 
//In either case the query methods make the same transformations. 
//The only thing that changes is the input and output type respectively. 
//If we filter an Array, we get a new Array. If we filter an Observable, we get a new Observable, and so on.

//Take a look at how the query methods transform Observables and Arrays:


// map()
	[1,2,3].map(function(x) { return x + 1 })                   === [2,3,4]
	seq([1,,,2,,,3]).map(function(x) { return x + 1})           === seq([2,,,3,,,4])
	seq([1,,,2,,,3,,,]).map(function(x) { return x + 1 })       === seq([2,,,3,,,4,,,])

// filter()
	[1,2,3].filter(function(x) { return x > 1; })               === [2,3]
	seq([1,,,2,,,3]).filter(function(x) { return x > 1; })      === seq([2,,,3])
	seq([1,,,2,,,3,,,]).filter(function(x) { return x > 1; })   === seq([2,,,3,,,])

// concatAll()
	[ [1, 2, 3], [4, 5, 6] ].concatAll()                        === [1,2,3,4,5,6]
	seq([ seq([1,,,2,,,3]),,,seq([4,,,5,,,6]) ]).concatAll()    === seq([1,,,2,,,3,,,4,,,5,,,6])

// If a new sequence arrives before all the items from the previous sequence have arrived, no attempt to retrieve the new sequence's elements is made until the previous sequence has completed.
// As a result the order of elements in the sequence is preserved.
	seq([
		seq([1,,,, ,2, ,3])
		,,,seq([,,4, ,5, ,,6]) ]).
		concatAll()                                             === seq([1,,,,,2,,3,,4,,5,,,6])

// Notice that as long as at least one sequence being concatenated is incomplete, the concatenated sequence is also incomplete.
	seq([
		seq([1,, ,,, ,,,2,,,3])
		,,,seq([4,,,5,,, ,,, ,,6,,,]) ]).concatAll() === seq([1,,,,,,,,2,,,3,4,,,5,,,,,,,,6,,,])

// reduce()
	[ 1, 2, 3 ].reduce(sumFunction)                             === [ 6 ]
	seq([ 1,,,2,,,3 ]).reduce(sumFunction)                      === seq([,,,,,,6])

// Reduced sequences do not complete until the sequence does.
	seq([ 1,,,2,,,3,,, ]).reduce(sumFunction)                   === seq([ ,,,,,,,,,])

// zip()

// In both Arrays and Observables, the zipped sequence completes as soon as either the left or right-hand side sequence completes.
	Array.zip([1,2],[3,4,5], sumFunction)                       === [4,6]
	Observable.zip(seq([1,,,2]),seq([3,,,4,,,5]), sumFunction)  === seq([4,,,6])

// take()
	[1,2,3].take(2)                                             === [1, 2]
	seq([ 1,,,2,,,3 ]).take(2)                                  === seq([ 1,,,2 ])
	seq([ 1,,,2,,,3,,, ]).take(2)                               === seq([ 1,,,2 ])

// takeUntil()
	// takeUntil works for Arrays, but it's not very useful because the result will always be an empty array.
	[1,2,3].takeUntil([1])                                      === []
	seq([1,,,2,,,3,,, ]).takeUntil(seq([ ,,, ,,4 , ]))          === seq([ 1,,,2 ])

//Remember when I prohibited the use of array indexers? 
//The reason for that restriction should now become clearer to you. 
//Whereas the 5 functions can be used on any collection, indexers can only be used on collections that support random-access (like Array). 
//**If you avoid indexers and stick to the functions you've learned in this tutorial, you'll have a unified programming model for transforming any collection. 
//Having a unified programming model makes it trivial to convert synchronous code to asynchronous code, a process which would otherwise be very difficult. 
//As we've demonstrated, you don't need indexers to perform complex collection transformations.

//Now that we've seen that we can query asychronous and synchronous data sources using the same programming model, let's use Observable and our query functions to create complex new events.

