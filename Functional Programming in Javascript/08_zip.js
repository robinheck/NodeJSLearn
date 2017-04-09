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
//=============================================================
var videos = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
		}
	];
var	bookmarks = [
		{id: 470, time: 23432},
		{id: 453, time: 234324},
		{id: 445, time: 987834}
	];
//=============================================================
//++Exercise 21: Combine videos and bookmarks by index

var counter;
var videoIdAndBookmarkIdPairs = [];

for(counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
	// Insert code here to create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.
	videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id});
}
//console.log(videoIdAndBookmarkIdPairs);

//=============================================================
//++Exercise 22: Implement zip

// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'
Array.zip = function(left, right, combinerFunction) {
	var counter;
	var	results = [];
	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
		results.push(combinerFunction(left[counter],right[counter]));
	}
	return results;
};

//=============================================================
//++Exercise 23: Combine videos and bookmarks by index

E23=Array.zip(
	videos,
	bookmarks,
	function(video_item,bookmarks_item){
		return {videoID:video_item.id, bookmarksID:bookmarks_item.id};
	});
//console.log(E23);

//=============================================================
//++Exercise 24: Retrieve each video's id, title, middle interesting moment time, and smallest box art url.

var movieLists24 = [
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
				"interestingMoments": [
					{ type: "End", time:213432 },
					{ type: "Start", time: 64534 },
					{ type: "Middle", time: 323133}
				]
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
				"interestingMoments": [
					{ type: "End", time:54654754 },
					{ type: "Start", time: 43524243 },
					{ type: "Middle", time: 6575665}
				]
			}
		]
	},
	{
		name: "Instant Queue",
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
				"interestingMoments": [
					{ type: "End", time:132423 },
					{ type: "Start", time: 54637425 },
					{ type: "Middle", time: 3452343}
				]
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
				"interestingMoments": [
					{ type: "End", time:45632456 },
					{ type: "Start", time: 234534 },
					{ type: "Middle", time: 3453434}
				]
			}
		]
	}
];

E24= movieLists24.concatMap(function(movieList) {
	return movieList.videos.concatMap(function(video) {
		return Array.zip(
			video.boxarts.reduce(function(acc,curr) {
				if (acc.width * acc.height < curr.width * curr.height) {
			  	  	return acc;
				}
				else {
			  		return curr;
				}
		  	}),
			video.interestingMoments.filter(function(interestingMoment) {
				return interestingMoment.type === "Middle";
			}),
		  	function(boxart, interestingMoment) {
				return {id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url};
		  	});
			//從這個案例看出,reduce很像filter,差別是filter的參數是Araay裡單一的element
			//而reduce的參數是Array裡的2個element,這2個element可以做比較
			//Zip很像map, map是將一個array轉成另一個array
			//而Zip是將2個array轉成另一個array
	});
});
//console.log(E24)

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
console.info(JSON.stringify(E25));