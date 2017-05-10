const assert = require('assert');


//assert() 參數必須為1或true否則會拋出錯誤

 //assert(true);
//assert(1);
 //assert(false);
// assert(0);
 //assert(false, '錯誤');



//2.deepEqual 用來測試深層物件是否相同
// const obj1 = {
//   a : {
//     b : 1
//   }
// };
// const obj2 = {
//   a : {
//     b : 2
//   }
// };

// //assert.deepEqual(obj1, obj1);
//   assert.deepEqual(obj1, obj2);

//3.嚴格比對DeepStrictEqual

 //assert.deepEqual({a:1}, {a:'1'});
 //assert.deepStrictEqual({a:1}, {a:'1'});


//  4.確保沒有錯誤拋出
//  第一個函式不可拋出錯誤
// assert.doesNotThrow(
//   () => {
//     throw new TypeError();
//   },
//   TypeError,
//   '產生了Type錯誤'
// );

//5.確保相同 equal 

//  assert.equal(1, 1);
//assert.equal(1, '1');
//  assert.equal(1, 2);

//6.提供一個比較方法來判斷assert.fail 

//assert.fail(1, 2, 'whoops', '>');//因1不大於2

//7.判斷是否不相等
// assert.notEqual(1, 2);
// assert.notEqual(1, 1);

//8.嚴格判斷是否不相等
assert.notStrictEqual(1, 1);
//assert.notStrictEqual(1, '1');

