/* const person = {
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('HI!')
    }
}

 */

const person = new Object({
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('HI!')
    }
})

Object.prototype.sayHello = () => { console.log('HELLO') }

const lena = Object.create(person)

// const str = 'I am string'

const str = new String('I am string')