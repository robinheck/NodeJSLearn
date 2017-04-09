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
		],

// ++ Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()
	videoAndTitlePairs = [];
	newReleases.forEach(function(newReleases_item){
		videoAndTitlePairs.push({id:newReleases_item.id,title:newReleases_item.title});
	})
	console.log(videoAndTitlePairs);

//++ Exercise 4: Implement map()
	//To make projections easier, let's add a map() function to the Array type. 
	/* pratice myself..
	array.prototype.map=function(rules_function){
		var results=[];
		this.forEach(function(this_item){
			resluts.push(rules_function(this_item));
		});
		return results;
		};
	*/
	// === Website Content ===
	Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		results.push(projectionFunction(itemInArray));
	});
	return results;
	};	

//++ Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs
	E5_result=newReleases.map(function(newReleases_item){
		return {id:newReleases_item.id, title:newReleases_item.title};
	});
	console.log(E5_result);

	// === Website Content ===
	// return newReleases.map(function(video) { return { id: video.id, title: video.title }; });

