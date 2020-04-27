//undefined, boolean, number, string, object, null, symbol
/* 
console.log(typeof 0)
console.log(typeof true)
console.log(typeof 'true') //`` "" ''
console.log(typeof undefined)
console.log(typeof Math)
console.log(typeof Symbol('js'))
console.log(typeof null)
console.log(typeof function() {})
console.log(typeof NaN)
 */
//false
//'', 0, null, undefined, NaN, false
// console.log(Boolean({}))

//строки и числа
// let a = '2' - 1 + 2
// console.log(typeof(a), a)

// let b = '2' * '2'
// console.log(typeof(b), b)

// == vs ===
// console.log(2 == '2');
// console.log(2 === '2');

//
console.log( false == '') //true
console.log( false == []) //true
console.log( false == {}) // false
console.log( '' == 0) //true
console.log( '' == []) //true
console.log( '' == {}) // false
console.log( 0 == []) //true
console.log( 0 == {}) // false
console.log( 0 == null) // false
console.log( {a :'1'} == { a: '1'}) // false

