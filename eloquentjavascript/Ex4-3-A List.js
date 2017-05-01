// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };


// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

//Building up a list is best done back to front. So arrayToList could iterate over the array backward (see previous exercise) and, for each element, add an object to the list. You can use a local variable to hold the part of the list that was built so far and use a pattern like list = {value: X, rest: list} to add an element.

// To run over a list (in listToArray and nth), a for loop specification like this can be used:

	// for (var node = list; node; node = node.rest) {}

// Can you see how that works? Every iteration of the loop, node points to the current sublist, and the body can read its value property to get the current element. At the end of an iteration, node moves to the next sublist. When that is null, we have reached the end of the list and the loop is finished.

// The recursive version of nth will, similarly, look at an ever smaller part of the “tail” of the list and at the same time count down the index until it reaches zero, at which point it can return the value property of the node it is looking at. To get the zeroeth element of a list, you simply take the value property of its head node. To get element N + 1, you take the Nth element of the list that’s in this list’s rest property.

function arrayToList(iArray){
	var rArray=iArray.reverse();
	var list = {}
	var x;
//	list={value:x,rest:list}
	rArray.forEach(function(rrArray){
		list={value:rrArray,rest:list}
	})
	return list;
}
function listToArray(list){
	var result=[];
	for (var node = list; node; node = node.rest) {
		result.push(node.value);
	}
	return result;
}


console.log(arrayToList([10, 20,30,40]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30,40])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20