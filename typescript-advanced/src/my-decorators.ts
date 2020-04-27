
interface IComponent {
    name: string
    template: string
}

function MyComponentDecorator(config: IComponent) {
    return function(Constructor: Function) {
        return class {

        }
    }
}



@MyComponentDecorator({
    name: 'biba',
    template: `<p>Hello world</p>`
})
class MyComponent {
    constructor(public name: string) {}
}

new MyComponent('ShamDemo')