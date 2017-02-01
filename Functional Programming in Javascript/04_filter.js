	var newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		]

//++Exercise 6: Use forEach() to collect only those videos with a rating of 5.0
	newReleases.forEach(function(newReleases_item){
		var FilteredVideo=[];
		if (newReleases_item.rating==5.0){
			FilteredVideo.push(newReleases_item)
		};
		console.log(FilteredVideo);
	});

//++Exercise 7: Implement filter()
	// Array.prototype.filter(rule_function){
	// 	var result=[];
	// 	this.forEach(this_item){
	// 		if(rule_function(this_item)){
	// 		result.push(this_item);				
	// 		};
	// 	};
	// 	return result;
	// };

//++Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0
	E8=newReleases.
	filter(function(newReleases_item){
		return newReleases_item.rating==5;
	}).
	map(function(newReleases_item){
		return newReleases_item.id;
	});
	console.log(E8);