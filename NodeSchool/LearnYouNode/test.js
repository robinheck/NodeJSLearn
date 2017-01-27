// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
//[1,2,3].concatAll(); // throws an error because this is a one-dimensional array
[ [1,2,3], [4,5,6], [7,8,9] ].concatAll()