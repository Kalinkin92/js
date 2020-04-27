function Cat(color, name) {
    this.color = color
    this.name = name
}

// const cat = new Cat('Black', 'Cat')
/* 
function myNew(constructor, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}

const cat = myNew(Cat, 'black', 'Kot')
 */

// const cat = Cat()

console.log(cat)
