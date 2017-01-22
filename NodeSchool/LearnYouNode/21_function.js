//In JavaScript, one creates a named function like this:
	function twoPlusTwo(){
	    alert(2 + 2);
	}
	twoPlusTwo();

//You can also create an anonymous function and assign it to a variable:
	var twoPlusTwo = function(){
	    alert(2 + 2);
	};
	twoPlusTwo();

//You can encapsulate a block of code by creating an anonymous function, then wrapping it in brackets and executing it immediately:
	(function(){
	    alert(2 + 2);
	}());

//But I don't understand why this does not work equally as well:
	function(){
	    alert(2 + 2);
	}();

//=====================================================================

// It doesn't work because it is being parsed as a FunctionDeclaration, and the name identifier of function declarations is mandatory.
// When you surround it with parentheses it is evaluated as a FunctionExpression, and function expressions can be named or not.
	// Function有分FunctionDeclaration & FunctionExpression
	// 當你用小刮號把function刮起來時,程式自動判別為FunctionExpression

// The grammar of a FunctionDeclaration looks like this:
	//FunctionDeclaration的語法如下
	function Identifier ( FormalParameterListopt ) { FunctionBody }

// And FunctionExpressions:
	//FunctionExpressions的語法如下
	function Identifieropt ( FormalParameterListopt ) { FunctionBody }

// As you can see the Identifier (Identifieropt) token in FunctionExpression is optional, therefore we can have a function expression without a name defined:
	//在FunctionExpressions中, 名字,Identifieropt,是可有可無的
	//看以下的例子,這兩個寫法都是可行的

	(function () {
	    alert(2 + 2);
	}());

//Or named function expression:

	(function foo() {
	    alert(2 + 2);
	}());

//The Parentheses (formally called the Grouping Operator) can surround only expressions, and a function expression is evaluated.
	//在最外面的小刮號,正式名稱為Grouping Operator,只能用在functionExpression

//The two grammar productions can be ambiguous, and they can look exactly the same, for example:
	// 另外,看以下兩個例子
	function foo () {} // FunctionDeclaration
	0,function foo () {} // FunctionExpression

//The parser knows if it's a FunctionDeclaration or a FunctionExpression, depending on the context where it appears.
//In the above example, the second one is an expression because the Comma operator can also handle only expressions.
	//程式判斷它是Declaration or Expression的依據是它的前後文,
	//以上的例子,逗號只能出現在Expression,所以第二行被判斷成Expression

//On the other hand, FunctionDeclarations could actually appear only in what's called "Program" code, meaning code outside in the global scope, and inside the FunctionBody of other functions.
	//Declaration只能出現在"Program"型態的程式裡
	//例如,在Global,在其他的FunctionBody裡,

//Functions inside blocks should be avoided, because they can lead an unpredictable behavior, e.g.:
	//在大刮號裡建立function會導致不可預期的錯誤,應避免使用,如下面例子
	if (true) {
	    function foo () { alert('true'); }
	} else {
	    function foo () { alert('false!'); }
	}
	foo(); // true? false? why?

//The above code should actually produce a SyntaxError, since a Block can only contain statements (and the ECMAScript Specification doesn't define any function statement), but most implementations are tolerant, and will simply take the second function, the one which alerts 'false!'.
	//以上的程式應該出現SyntaxError,
	//但在JavaScript的寬容性下, 它會出現第二行, false!

//The Mozilla implementations -Rhino, SpiderMonkey,- have a different behavior. Their grammar contains a non-standard Function Statement, meaning that the function will be evaluated at run-time, not at parse time, as it happens with FunctionDeclarations. In those implementations we will get the first function defined.
	//不過以上的程式如果通過Mozilla系列的程式,像是Rhino,SpiderMonkey,它會執行第一行

//Functions can be declared in different ways, compare the following:

// 1- A function defined with the Function constructor assigned to the variable multiply:
	var multiply = new Function("x", "y", "return x * y;");

//2- A function declaration of a function named multiply:
	function multiply(x, y) {
	    return x * y;
	}

//3- A function expression assigned to the variable multiply:
	var multiply = function (x, y) {
	    return x * y;
	};

//4- A named function expression func_name, assigned to the variable multiply:
	var multiply = function func_name(x, y) {
	    return x * y;
	};