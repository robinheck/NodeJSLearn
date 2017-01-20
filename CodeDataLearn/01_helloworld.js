console.log('hello world')
//==============================================================
process.argv.forEach(function(arg, index) {
    console.log(arg + ', ' + index);
});
// D:\CodeDataLearn>node 01_helloworld.js arg1 arg2
// hello world
// D:\Program Files\nodejs\node.exe, 0
// D:\CodeDataLearn\helloworld.js, 1
// arg1, 2
// arg2, 3

process.argv.forEach(function(aa, bb) {
    console.log(bb + ', ' + aa);
});
// >>argv is an array, array[value,index], the first always is value
// D:\CodeDataLearn>node 01_helloworld.js arg1 arg2
// hello world
// 0, D:\Program Files\nodejs\node.exe
// 1, D:\CodeDataLearn\01_helloworld.js
// 2, arg1
// 3, arg2


var args = process.argv.slice(2);
args.forEach(function(){
	console.log('Hello, ' + args);
})

//returns : 
//Hello, arg1 arg2
//Hello, arg1 arg2

var args = process.argv.slice(2);
args.forEach(function(index){
	console.log('Hello, ' + args[index]);
})
//returns : 
//Hello, undefined
//Hello, undefined

var args = process.argv.slice(2);
args.forEach(function(index){
	console.log('Hello, ' + args[index]);
})
//returns : 
//Hello, arg1
//Hello, arg2




