function hello() {
    console.log('Hello', this)
}

const dick = {
    lenght: '100'
}

const person = {
    name: 'VIgor',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    sayHelloDick: hello.bind(dick),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
} 

const igor = {
    name: 'Elena',
    age: 23
}

// person.logInfo.bind(igor, 'programmer', '891231f231')()
// person.logInfo.call(igor, 'programmer', '891231f231')
person.logInfo.apply(igor, ['programmer', '891231f231'])

const array = [1,2,3,4,5]
/* function multBy(arr, n) {
    return arr.map(el => el * n)
}
 */
Array.prototype.multBy = function(n) {
    return this.map(el => el * n)
}

console.log(array.multBy(2))