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
//++Exercise 25: Converting from Arrays to Trees
//Tree意思是JSON的架構
	// [{	"name": "New Releases",
	// 	"videos": [
	// 		{"id": 65432445,"title": "The Chamber"},
	// 		{"id": 675465,"title": "Fracture"}]
	//  },
	//  {	"name": "Thrillers",
	// 	"videos": [
	// 		{"id": 70111470,"title": "Die Hard"},
	// 		{"id": 654356453,"title": "Bad Boys"}]
	//  }]

var lists25 = [
		{
			"id": 5434364,
			"name": "New Releases"
		},
		{
			"id": 65456475,
			"name": "Thrillers"
		}
	];
var	videos25 = [
		{
			"listId": 5434364,
			"id": 65432445,
			"title": "The Chamber"
		},
		{
			"listId": 5434364,
			"id": 675465,
			"title": "Fracture"
		},
		{
			"listId": 65456475,
			"id": 70111470,
			"title": "Die Hard"
		},
		{
			"listId": 65456475,
			"id": 654356453,
			"title": "Bad Boys"
		}
	];
E25=lists25.map(function(list_i) {
	return {
		name: list_i.name,
		videos:
			videos25.
				filter(function(video_i) {
					return video_i.listId === list_i.id;
				}).
				map(function(video_i) {
					return {id: video_i.id, title: video_i.title};
				})
	};
});
//console.info(JSON.stringify(E25));

//=============================================================
//++Exercise 26: Converting from Arrays to Deeper Trees
//Let's try creating a deeper tree structure. This time we have 4 separate arrays each containing lists, videos, boxarts, and bookmarks respectively. Each object has a parent id, indicating its parent. We want to build an array of list objects, each with a name and a videos array. The videos array will contain the video's id, title, bookmark time, and "smallest" boxart url. In other words we want to build the following structure:
// tree:
	// [
	// {"name": "New Releases",
	//  "videos": [{
	// 				"id": 65432445,
	// 				"title": "The Chamber",
	// 				"time": 32432,
	// 				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
	// 			 },
	// 			 {
	// 				"id": 675465,
	// 				"title": "Fracture",
	// 				"time": 3534543,
	// 				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
	// 			 }
	// 			]
	// },
	// {"name": "Thrillers",
	//  "videos": [{
	// 				"id": 70111470,
	// 				"title": "Die Hard",
	// 				"time": 645243,
	// 				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
	// 			 },
	// 			 {
	// 				"id": 654356453,
	// 				"title": "Bad Boys",
	// 				"time": 984934,
	// 				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
	// 			 }
	// 			]
	// }
	// ]
var lists26 = [
	{"id": 5434364,"name": "New Releases"},
	{"id": 65456475,name: "Thrillers"}
]
var videos26 = [
	{"listId": 5434364,"id": 65432445,"title": "The Chamber"},
	{"listId": 5434364,"id": 675465,"title": "Fracture"},
	{"listId": 65456475,"id": 70111470,"title": "Die Hard"},
	{"listId": 65456475,"id": 654356453,"title": "Bad Boys"}
]
var boxarts26 = [
	{ videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
	{ videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
	{ videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
	{ videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
	{ videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
	{ videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
	{ videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
	{ videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
	{ videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
]
var bookmarks26 = [
	{ videoId: 65432445, time: 32432 },
	{ videoId: 675465, time: 3534543 },
	{ videoId: 70111470, time: 645243 },
	{ videoId: 654356453, time: 984934 }
];

E26=lists26.map(function(lists26_i){
	return {
		name:lists26_i.name,
		videos:videos26
			.filter(function(videos26_i){
				return videos26_i.listId===lists26_i.id;
			})
			.map(function(videos26_i){
				return Array.zip(
					bookmarks26.filter(function(bookmarks26_i){
						return bookmarks26_i.videoId===videos26_i.id;
					}),
					boxarts26.filter(function(boxarts26_i){
						return boxarts26_i.videoId===videos26_i.id;
					})
						.reduce(function(acc,crr){
							return acc.width*acc.height<crr.width*crr.height?acc:crr;
						}),
					function (bookmarks26_i,boxarts26_i){
						return {
							id:videos26_i.id,
							title:videos26_i.title,
							time:bookmarks26_i.time,
							boxart:boxarts26_i.url
						};
					}
				)

			})
	}
});
console.log(JSON.stringify(E26))