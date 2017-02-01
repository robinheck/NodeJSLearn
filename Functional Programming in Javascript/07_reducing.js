// let's say we need to find the largest integer in an array. We can't use a filter() operation, because it only examines one item at a time. To find the largest integer we need to compare items in the array to each other.
//One approach could be to select an item in the array as the assumed largest number (perhaps the first item), and then compare that value to every other item in the array. Each time we come across a number that was larger than our assumed largest number, we'd replace it with the larger value, and continue the process until the entire array was traversed.
//This process is known as reducing because we reduce many values to a single value.

var boxarts = [
		{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
		{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
		{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
		{ width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
	]


//++ Exercise 15: Use forEach to find the largest box art
var	currentSize=-1;
var maxSize = -1;
var	largestBoxart;
boxarts.forEach(function(boxarts_item){
	currentSize=boxarts_item.width * boxarts_item.height;
	if (currentSize>maxSize){
		largestBoxart=boxarts_item;
		maxSize=currentSize;		
		};	
});	

console.log(largestBoxart);
//console.log(maxSize);

//++Exercise 16: Implement reduce()
//Take note this is different from the reduce in ES5, which returns a value instead of an Array!
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];

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


//++Exercise 17: Retrieve the largest rating.
var ratings = [2,3,1,5,4];

E17= ratings.
  reduce(function(acc, curr) {
  	//原型是 reduce(function(){},initial),由沒有設定initial
  	//acc 會保持是 this[0]=2
  	//curr 會依序回傳2->3->1->5->4
	if(acc > curr) {
	  return acc;
	}
	else {
	  return curr;
	//accumulatedValue = combiner(accumulatedValue, this[counter])
	//後面的combiner等於整個function return回來的值
	//當curr=3時, acc就由2被取代成3
	}
  });
 console.log(E17)

//++Exercise 18: Retrieve url of the largest boxart
//Let's try combining reduce() with map() to reduce multiple boxart objects to a single value: the url of the largest box art.
var boxarts18 = [
	{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
	{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
	{ width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];

E18=boxarts18.
  reduce(function(acc,curr) {
	if (acc.width * acc.height > curr.width * curr.height) {
	  return acc;
	}
	else {
	  return curr;
	}
  }).
  map(function(boxarts_item) {
	return boxarts_item.url;
  });
 console.log(E18)

//++Exercise 19: Reducing with an initial value

var videos19 = [
	{"id": 65432445,"title": "The Chamber"},
	{"id": 675465,"title": "Fracture"},
	{"id": 70111470,"title": "Die Hard"},
	{"id": 654356453,"title": "Bad Boys"}
];
	// Expecting this output...
	// [
	//	 {
	//		 "65432445": "The Chamber",
	//		 "675465": "Fracture",
	//		 "70111470": "Die Hard",
	//		 "654356453": "Bad Boys"
	//	 }
	// ]
E19=videos19.reduce(function(accumulatedMap, video) {
	//videos19.reduce(function(){},{})
		var obj = {};
		// ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
		// ----- NEW MAP USING THE VIDEO ID AS THE KEY	 ----
		obj[video.id] = video.title;
		// Object.assign() takes all of the enumerable properties from
		// the object listed in its second argument (obj) and assigns them
		// to the object listed in its first argument (accumulatedMap).
		return Object.assign(accumulatedMap, obj);
			//這包意思是accumulatedMap=accumulatedMap+obj
		},
		// Use an empty map as the initial value instead of the first item in
		// the list.
		{});
console.log(E19);

//++Exercise 20: Retrieve the id, title, and smallest box art url for every video.
	// Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];
var movieLists20 = [
	{
		name: "New Releases",
		videos: [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxarts": [
					{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxarts": [
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
					{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			}
		]
	},
	{
		name: "Thrillers",
		videos: [
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxarts": [
					{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxarts": [
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
					{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
					{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			}
		]
	}
];

	E20=movieLists20.concatMap(function(movieList) {
	  return movieList.videos.concatMap(function(video) {
	    return video.boxarts.
		  reduce(function(acc,curr) {
			if (acc.width * acc.height < curr.width * curr.height) {
			  return acc;
			}
			else {
			  return curr;
			}
		  }).
		  map(function(boxart) {
			return {id: video.id, title: video.title, boxart: boxart.url};
		  });
	  });
	});
	console.log(E20);