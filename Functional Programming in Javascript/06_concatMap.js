	var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			}
		];


//++Exercise 12: Retrieve id, title, and a 150x200 box art url for every video
Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);					
	});
	return results;
};

var E12=movieLists.map(function(movieLists_items){
	return movieLists_items.videos.map(function(video_items){
		return video_items.boxarts.filter(function(boxarts_items){
			return boxarts_items.width===150
		}).map(function(boxarts_items){
			return {id:video_items.id, title:video_items.title, url:boxarts_items.url};
		});
	}).concatAll();
}).concatAll();
//console.log(E12)

//++Exercise 13: Implement concatMap()//
Array.prototype.concatMap = function(projection_Function_That_Returns_Array){
	return this.map(function(item){
		return projection_Function_That_Returns_Array(item);
	}).concatAll();
};

//++ Exercise 14: Use concatMap() to retrieve id, title, and 150x200 box art url for every video

E14=movieLists.concatMap(function(movieLists_items){
	return movieLists_items.videos.concatMap(function(video_items){
		return video_items.boxarts.filter(function(boxarts_items){
			return boxarts_items.width===150;
		}).map(function(boxarts_items){
			return {id:video_items.id, title:video_items.title, url:boxarts_items.url};
		});
	});
});
console.log(E14)