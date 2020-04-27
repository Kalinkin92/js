// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42)
// calc()
/* 
function createIncrementor(n) {
    return function (num) {
        return n + num
    }
}

const addOne = createIncrementor(1)

console.log(addOne(1))

const addTen = createIncrementor(10)

console.log(addTen(10))


 */
/* 
 function urlGenerator(domain) {
     return function(url) {
         return `http://${url}.${domain}`
     }
 }

comUrl = urlGenerator('com')
ruUrl = urlGenerator('ru')
console.log(comUrl('google'))
console.log(comUrl('google'))
console.log(ruUrl('vk'))

 */

 /*
 Написать свою функцию bind
 Пример работы:
*/
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: 'Mike',
    age: 22,
    job: 'Frontend'
}
const person2 = {
    name: 'Ogr',
    age: 42,
    job: 'smm'
}

function bind(ctx, fun) {
    ctx.fun = fun
    return ctx.fun()
}


bind(person1, logPerson)
bind(person2, logPerson)


 