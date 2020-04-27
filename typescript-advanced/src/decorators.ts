function log(constructor: Function) {
    console.log(constructor)
}
function log2(target: any, propName: string | Symbol) {
    // console.log(target)
    // console.log(propName)
}
function log3(target: any, propName: string | Symbol, desctiptor: PropertyDescriptor) {
    console.log(target)
    console.log(propName)
    console.log(desctiptor)
}

interface ComponentDecorator {
    selector: string
    template: string
}

type Constructor<T> = new(...args: any[]) => T;

function Component(config: ComponentDecorator) {
    return function <T extends { new (...args: any[]): object }>
        (Constructor: T) {
        return class extends Constructor {
            constructor(...args:any[]) {
                super(...args)
                const el = document.querySelector(config.selector)!
                el.innerHTML = config.template 
            }
        }
    }
} 

function Bind(_:any, _2:any, desctiptor: PropertyDescriptor): PropertyDescriptor {
    const original = desctiptor.value
    return {
        // configurable: true,
        // enumerable: false,
        get() {
            return original.bind(this)
        }
    }
}

@Component({
    selector: "#card",
    template: `
        <div class="card">
            <div class="card-content">
                <span class="card-title">Card component</span>
            </div>
        </div>`
})
@log
class CardComponent {
    // @log2
    constructor(public name: string) {}

    // @log3
    get componentName() {
        return this.name
    }

    @Bind
    logName(): void {
        console.log(`Compnent Name: ${this.name}`)
    }
}

const card = new CardComponent('My card component')

const btn = document.querySelector('#btn')!

btn.addEventListener('click', card.logName)

type ValidatorType = 'required' | 'email'

interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType
    }
}
const validators: ValidatorConfig = {}

function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required' 
    }
}

function validate(obj: any): boolean {
    const objConfig = validators[obj.constructor.name]
    if (!objConfig) return true
    let isValid = true
    Object.keys(objConfig).forEach( key => {
        if(objConfig[key] === 'required') {
            isValid = isValid && !!obj[key]
        }
    })
    return isValid
}

class Form {
    @Required
    public email: string | void
    constructor(email?: string) {
        this.email = email
    }
}

const form = new Form('sfsfsd')
if (validate(form)) {
    console.log(`valid`, form)
    
} else {
    console.log(`Validation error`)
}