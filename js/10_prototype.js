// __proto__
// Object.getPrototypeOf()

function Cat(name, color) {
    this.name = name
    this.color = color
}

Cat.prototype.voice = function() {
    console.log(`Cat ${this.name} says meow`)
}

const cat = new Cat('Kot', 'white')
cat.voice()

//Object.create()
var proto = { year : 2019 }
const myYear = Object.create(proto)

console.log(myYear.year);
console.log(myYear.hasOwnProperty('year'));

proto= { year: 2020}
console.log(myYear.year);
