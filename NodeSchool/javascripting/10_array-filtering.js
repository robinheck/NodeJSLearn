var numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered=numbers.filter(function(aa){
	return aa % 2 === 0
})
console.log(filtered)

// function filter(aa){
// 	if (aa % 2===0){return aa}
// }