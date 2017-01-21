	var fs = require('fs')
	var myNumber = undefined
	//bvar callback= undefined

	function addOne(callback) {
	  fs.readFile('test.txt', function doneReading(err, fileContents) {
	    // myNumber = parseInt(fileContents)
	    // myNumber++
	    // callback()
	  })
	}
	function logMyNumber() {
	  console.log(myNumber)
	}
	addOne(logMyNumber)
	console.log ('c:'+fileContents)