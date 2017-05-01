for(i=0;i<=100;i++){
	var var1=i;
	if(var1%3===0 && var1%5===0){var1="FizzBuzz"}
	else if(var1%3===0){var1="Fizz"}
	else if (var1%5===0){var1="Buzz"}
	console.log(var1)
}