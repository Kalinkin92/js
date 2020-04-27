const cards: string[] = ['ford', 'audi']
const cars2: Array<string> = ['ford', 'audi']

 const promise: Promise<string> = new Promise(resolve => {
     setTimeout(() => {
         resolve('VOW!')
     }, 2000)
 })

 promise.then(data => console.log(data))

 function mergeObjects<T, R>(a: T, b: R): T & R {
     return Object.assign(a, b)
 }

 interface IPerson {
     name: string
 }
 interface IAdditionalData {
     age: number
 }
 const d1: IPerson = {name: 'Vlad'}
 const d2: IAdditionalData = {age: 12}

 interface IMerged extends  IPerson, IAdditionalData {
 }

 declare const merged1: IPerson & IAdditionalData
 const a = mergeObjects(d1, d2)
 
 
//  merged.
//  const merged: IMerged = mergeObjects(d1, d2)
//  const merged: type2 = mergeObjects(d1, d2)
//  const merged = mergeObjects(person, addit)
//  console.log(merged.)

//  const merged3 = mergeObjects('cock', 'suc  ker')
//  console.log(merged3)

interface IEnumerable {
    length: number
}

type counting<T> = {
    value: T,
    countMessage: string
}

function withCnt<T extends IEnumerable>(value: T): counting<T> {
    return {
        value,
        countMessage: `В этом объекте ${value.length} симполов`
    }
}

console.log(withCnt('cnt'))
console.log(withCnt([1,2,3,4]))

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R): any {
    return obj[key]
}

const person = {name: '23', cock: 'butt'}
console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'cock'))

class Collection<T> implements IEnumerable {
    // private _items: T[] = []

    constructor(private _items: T[] = []) {
        
    }
    length: number = this._items.length

    // length!: number

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['dd', 'dfd', 'asd'])
strings.add('!')
strings.remove('dd')
console.log(`strings.length`, strings.length)

type Car = {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    // const car: Partial<Car> = {}
    const car: Partial<Car> = {}

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    // return car as Car
    return car as Car
}

/* const car1: Car = {
    model: 'cock',
    year: 1999
} */

const car = createAndValidateCar('car1', 1999)
console.log(typeof car)

const cars: Readonly<Array<string>> = ['ford', 'audi']
// cars.shift()