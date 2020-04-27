/* //Interface segregation principle

class Animal {
    constructor(name) {
        this.name = name
    }

    walk() {
        console.log(`${this.name} умеет ходить`)
    }

    swim() {
        console.log(`${this.name} умеет плавать`)
    }

    fly() {
        console.log(`${this.name} умеет летать`)
    }
}

class Dog extends Animal {
    fly() {
        return null
    }
}

class Eagle extends Animal {
    swim() {
        return null
    }
}

class Whale extends Animal {
    fly() {
        return null
    }
    walk() {
        return null
    }

}

const dog = new Dog('Rax')

dog.walk()
dog.swim()
dog.fly()

const eagle = new Eagle('Орёл')

eagle.fly()
eagle.swim()
eagle.walk()

const whale = new Whale('Большой синий кит')
whale.swim()
whale.walk()
whale.fly() */

class Animal {
    constructor(name) {
        this.name = name
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} умеет плавать`)
    }
}

const walker = {
    walk() {
        console.log(`${this.name} умеет ходить`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} умеет летать`)
    }
}

class Dog extends Animal {}
class Whale extends Animal {}
class Eagle extends Animal {}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, flier, swimmer)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Rax')

dog.walk()
dog.swim()

const eagle = new Eagle('Орёл')

eagle.fly()
eagle.walk()

const whale = new Whale('Большой синий кит')
whale.swim()