var size=8;
var	var1="";
for (j=0;j<=size;j++){
	if (j%2===0){}
	for (i=1;i<=size;i++){
		if ((i+j)%2===0) {var2=" "}
		else {var2="#"}
		var1+=var2;
	}
	var1=var1+"\n";
}
console.log(var1);


// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 