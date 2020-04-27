/* let a = 42
let b = a
b++
console.log('a', a)
console.log('b', b) */

let c = [1,2,3]
let b = c
b.push(4)

let a = [1,2,3,4]
console.log('c', c)
console.log('b', b)

console.log(c === b)
console.log(a === c)