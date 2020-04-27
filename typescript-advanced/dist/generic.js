"use strict";
const cards = ['ford', 'audi'];
const cars2 = ['ford', 'audi'];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('VOW!');
    }, 2000);
});
promise.then(data => console.log(data));
function mergeObjects(a, b) {
    return Object.assign(a, b);
}
const d1 = { name: 'Vlad' };
const d2 = { age: 12 };
const a = mergeObjects(d1, d2);
function withCnt(value) {
    return {
        value,
        countMessage: `В этом объекте ${value.length} симполов`
    };
}
console.log(withCnt('cnt'));
console.log(withCnt([1, 2, 3, 4]));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = { name: '23', cock: 'butt' };
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'cock'));
class Collection {
    // private _items: T[] = []
    constructor(_items = []) {
        this._items = _items;
        this.length = this._items.length;
    }
    // length!: number
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['dd', 'dfd', 'asd']);
strings.add('!');
strings.remove('dd');
console.log(`strings.length`, strings.length);
function createAndValidateCar(model, year) {
    // const car: Partial<Car> = {}
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    // return car as Car
    return car;
}
/* const car1: Car = {
    model: 'cock',
    year: 1999
} */
const car = createAndValidateCar('car1', 1999);
console.log(typeof car);
const cars = ['ford', 'audi'];
// cars.shift()
//# sourceMappingURL=generic.js.map