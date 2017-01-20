//5.231E13  ==>5.23x10^13

//+Infinity ==>正無限大
//-Infinity ==>負無限大
//Number.POSITIVE_INFINITY  ==>正無限大
//Number.NEGATIVE_INFINITY  ==>負無限大

//Number.NaN ==>表示非數值,例如你嘗試作 1 / 'two' 時，就會出現 NaN 的結果。
//注意，NaN 不等於任何值，NaN 也不等於 NaN，
> NaN === NaN;
false
> isNaN(NaN);
true
> isNaN(1 / 'two');
true
>


// ==typeof
> typeof 123;
'number'
> typeof 'A';
'string'


//一般習慣在 JavaScript 程式中採用單引號，而將雙引號保留給 HTML 使用，避免跳脫文字的麻煩
var html = '<input type="text" value="defalut">';

> typeof new Object();
'object'
> typeof {};
'object'
> typeof [];
'object'
>


//undefined 是 JavaScript 中特殊的值
//注意，別與直譯錯誤時出現的「未定義」訊息搞錯了，例如，以下的示範中，並沒有事先宣告 x，因此 x 未定義，會發生 ReferenceError 的錯誤：
> var y = x;
ReferenceError: x is not defined

//如果是以下的程式，是可以正確執行的程式碼，x 與 y 的結果都是 undefined：
> var x;
undefined
> var y = x;
undefined
> x
undefined
> y
undefined

//undefined 本身等於 undefined：
> undefined === undefined;
true










