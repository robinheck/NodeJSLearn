var movieLists = [
		{
			name: "New Releases",
			videos: [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		},
		{
			name: "Dramas",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		}
	]

//++Exercise 9: Flatten the movieLists array into an array of video ids
	allVideoIdsInMovieLists = [];
	movieLists.forEach(function(item_LV1){
		item_LV1.videos.forEach(function(item_LV2){
			allVideoIdsInMovieLists.push(item_LV2.id);
		});
	});
	console.log(allVideoIdsInMovieLists);

//++Exercise 10: Implement concatAll()
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

//++Exercise 11: Use map() and concatAll() to project and flatten the movieLists into an array of video ids
	E11=movieLists.map(function(movieList_item){
		return movieList_item.videos.map(function(video_item){
			return video_item.id;
		});
	}).concatAll();
	console.log(E11)

