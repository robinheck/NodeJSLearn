// var fs=require('fs');
// var path=require('path');
// function myFilter(inputDir,inputExt,callback){
// 	var aExt='.'+inputExt;
// 	fs.readdir(inputDir,function(err,data){
// 		if (err) {return callback(err)
// 		}else{
// 			var arr=[];
// 			data.forEach(function(element,index,array){			
// 			    if (path.extname(element)===aExt){	    
// 			    arr.push(element)			    
// 			    } 
// 			})
// 			callback(err,arr);
// 		}
// 	})
// }
// module.exports=myFilter;


// Official Solution


    // var fs = require('fs')
    // var path = require('path')

    // module.exports = function (dir, filterStr, callback) {
    //   fs.readdir(dir, function (err, list) {
    //     if (err) {
    //       return callback(err)
    //     }

    //     list2 = list.filter(function (file) {
    //       return path.extname(file) === '.' + filterStr
    //     })

    //     callback(null,list2)
    //   })
    // }


//

