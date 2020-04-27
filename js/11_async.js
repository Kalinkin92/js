/* const first = () => console.log('First');
const second = () => console.log('Second');
const third = () => console.log('thrid');

first()
setTimeout(second, 0)
third() */
/* 
var arr = [1,2]
var brr = arr
brr = [42, 43] */
// console.log(arr[0])

// console.log([2,2,2,2].map(parseInt)  )
function bind(fn, ctx) {
    // ctx.__proto__.fn = fn
    return function() {
        return fn.apply(ctx, arguments)
    }
}


function fn(a, b) {
    console.log(a, b, this)
}

const obj = {
    cock: 'sucker',
    fn
}

var magicFn = bind(fn, { cock: 'sucker'})

console.log('My Bind');
magicFn(2, 3)

console.log('Object FN')
obj.fn(2,3)