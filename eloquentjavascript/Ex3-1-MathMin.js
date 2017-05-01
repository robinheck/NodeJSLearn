//The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.

function min(var_a,var_b){
	// if (var_a < var_b){
	// 	return var_a;
	// }else{
	// 	return var_b;
	// }
	return (var_a < var_b)?var_a:var_b
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10