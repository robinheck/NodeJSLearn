//++Exercise 32: Creating a mouse drag event

//Remember the exercise we solved earlier? 
//The one in which we retrieved all the movies with a rating of 5.0 from an array of movie lists?
//If we were to describe the solution in pseudocode it might read something like this...

//"For every movie list, retrieve only those videos with a rating of 5.0"
	var moviesWithHighRatings =
		movieLists.
			concatMap(function(movieList) {
				return movieList.videos.
					filter(function(video) {
						return video.rating === 5.0;
					});
			});

//Now we're going to create a mouseDrag event for a DOM object. If we were to describe this problem as pseudocode it might read something like this...
//"For every [mouse down event] on the sprite, retrieve only those [mouse move events] that [occur before the next mouse up event]."
//以下的程式產生一個可以用滑鼠拖曳的方塊
function(sprite, spriteContainer) {
	var spriteMouseDowns = Observable.fromEvent(sprite, 'mousedown');
	var	spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, 'mousemove');
	var	spriteContainerMouseUps = Observable.fromEvent(spriteContainer, 'mouseup');
	var	spriteMouseDrags =
			// For every mouse down event on the sprite...
			spriteMouseDowns.
				concatMap(function(contactPoint) {
					// ...retrieve all the mouse move events on the sprite container...
					return spriteContainerMouseMoves.
						// ...until a mouse up event occurs.
						takeUntil(spriteContainerMouseUps);
				});
	// For each mouse drag event, move the sprite to the absolute page position.
	spriteMouseDrags.forEach(function(dragPoint) {
		sprite.style.left = dragPoint.pageX + 'px';
		sprite.style.top = dragPoint.pageY + 'px';
	});
}


//++Exercise 33: Improving our mouse drag event
//Our mouse drag event is a little too simple. 
//Notice that when we drag around the sprite, it always positions itself at the top-left corner of the mouse. 
//Ideally we'd like our drag event to offset its coordinates, based on where the mouse was when the mouse down event occurred. 
//This will make our mouse drag more closely resemble moving a real object with our finger.

//Let's see if you can adjust the coordinates in the mouse drag event, based on the mousedown location on the sprite. The mouse events are sequences, and they look something like this:
//spriteContainerMouseMoves =
//	seq([ {x: 200, y: 400, layerX: 10, layerY: 15},,,{x: 210, y: 410, layerX: 20, layerY: 26},,, ])

//Each item in the mouse event sequences contains an x, y value that represents that absolute location of the mouse event on the page. 
//The moveSprite() function uses these coordinates to position the sprite. 
//Each item in the sequence also contains a pair of layerX and layerY properties that indicate the position of the mouse event relative to the event target.

function(sprite, spriteContainer) {
	// All of the mouse event sequences look like this:
	// seq([ {pageX: 22, pageY: 3423, layerX: 14, layerY: 22} ,,, ])
	var spriteMouseDowns = Observable.fromEvent(sprite, "mousedown");
	var	spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, "mousemove");
	var	spriteContainerMouseUps = Observable.fromEvent(spriteContainer, "mouseup");
		// Create a sequence that looks like this:
		// seq([ {pageX: 22, pageY:4080 },,,{pageX: 24, pageY: 4082},,, ])
	var	spriteMouseDrags =
			// For every mouse down event on the sprite...
			spriteMouseDowns.
				concatMap(function(contactPoint) {
					// ...retrieve all the mouse move events on the sprite container...
					return spriteContainerMouseMoves.
						// ...until a mouse up event occurs.
						takeUntil(spriteContainerMouseUps).
						map(function(movePoint) {
							return {
								pageX: movePoint.pageX - contactPoint.layerX,
								pageY: movePoint.pageY - contactPoint.layerY
							};
						});
				});
	// For each mouse drag event, move the sprite to the absolute page position.
	spriteMouseDrags.forEach(function(dragPoint) {
		sprite.style.left = dragPoint.pageX + "px";
		sprite.style.top = dragPoint.pageY + "px";
	});
}
//以上的程式跑起來有點問題...     
//sprite.style.top的值異常的大



