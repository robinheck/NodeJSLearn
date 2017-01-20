//直接指定某個名稱的值，該名稱會自動成為全域範圍，
> some = 10;
10
> some;
10

//這很方便，也很危險，因為是在全域物件上建立特性。全域變數若在瀏覽器中，就是 window 物件，在 Node.js 中，也可以在全域範圍中使用 this 來取得。例如：

> this.some;
10

//可觀察以下在函式中使用 var 與不使用 var 宣告的變數之差別：
function func() {
    x = 10;
    var y = 20;
}
func();
console.log(x);
console.log(y);
//returns :
// 10
// ReferenceError: y is not defined


//==============================
//下例會產生直譯錯誤：
function func() {
    console.log(x);
}
func();

//但下例中並不會直譯錯誤：
function func() {
    console.log(m);
    var m = 10;
    console.log(m);
} 
func();
//return:
//undefined
//10

//所有 var 宣告的變數，在整個函式區塊中都是可見的，因而在上例中 console.log 時是可找到 m 特性，只不過是 undefined 的值，這行為稱為提昇（Hoisting）



//==============================
> typeof 10;
'number'
> typeof 'caterpillar';
'string'
> typeof new Number(10);
'object'
> typeof new String('caterpillar');
'object'
>

//==============================

//你也可以使用 parseInt、parseFloat 將字串轉換為數值，其好處是會自動忽略字串尾端非數字部份。
> parseInt('10 years old...XD');
10
> parseFloat('3.14159......');
3.14159
> parseInt('0x10');
16
> parseInt('010');
10
> parseInt('010', 10);//10進位
10
> parseInt('010', 8);//8進位
8


//==============================
> '6' + '2';
'62'
> '6' - '2';
4
> '6' * '2';
12
> '6' / '2';
3

//==============================
//除了 0、NaN、''、null、undefinied 是假的（false）之外，其他都是真的（true）。


//若物件上不存在某個特性，直接取用該特性會得到 undefined 的值，所以若想知道某物件上是否存在該特性，則可以如下：
> var o = {};
undefined
> o.x ? 'has x' : 'has no x';
'has no x'
> o.x = 10;
10
> o.x ? 'has x' : 'has no x';
'has x'

//在弱型別語言中，型態轉換自動發生的規則多，若是不確定，最好還是實際測試了解結果，避免不必要的型態轉換而發生誤判或錯誤的運算結果。

//以下來看幾個初學者容易 WAT 脫口而出的例子：
> [] + [];
''
> [] + {};
'[object Object]'
> {} + [];
0
> {} + {};
NaN



