/* const person = {
    surname: 'Cock',
    knows: function (what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
}

const john = { surname: 'Сноу'}

person.knows('всё', '<hfy')
person.knows.bind(john, 'Всё ')('ничего не', 'Джон')
 */
/* function Person(name, age) {
    this.name = name
    this.age = age

    console.log(this)
}

const elena = new Person('Elena', 20)

//явный байндинг
function logThis() {
    console.log(this)
}

const obj = { num: 42 }
logThis.apply(obj)

//неявный
const animal = {
    legs: 4,
    logThis: function() {
        console.log(this)
    }
}

animal.logThis() */

function Cat(color) {
    this.color = color
    console.log('This', this);
    ( () => console.log(`Arrow this`, this))();
    (function() {
        console.log(`Arrow this`, this)
    })()
}

new Cat('black')