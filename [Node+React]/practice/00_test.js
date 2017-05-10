fs=require('fs');



try{
process.nextTick(function () {
	fs.readFile('non_existent.js',function(err,str){
		if(err) {
			console.log("non_existent.js");
			return;}
		//if(err) throw err;
		else console.log(str);
	});
});

process.nextTick(function () {
	fs.readFile('non_existent2.js',function(err,str){
		if(err) {
			console.log("non_existent2.js");
			return;}
		//if(err) throw err;
		else console.log(str);
	});
});
}

catch(e){
	console.error('err',e);
}

