"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function log(constructor) {
    console.log(constructor);
}
function log2(target, propName) {
    // console.log(target)
    // console.log(propName)
}
function log3(target, propName, desctiptor) {
    console.log(target);
    console.log(propName);
    console.log(desctiptor);
}
function Component(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
function Bind(_, _2, desctiptor) {
    const original = desctiptor.value;
    return {
        // configurable: true,
        // enumerable: false,
        get() {
            return original.bind(this);
        }
    };
}
let CardComponent = class CardComponent {
    // @log2
    constructor(name) {
        this.name = name;
    }
    // @log3
    get componentName() {
        return this.name;
    }
    logName() {
        console.log(`Compnent Name: ${this.name}`);
    }
};
__decorate([
    Bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CardComponent.prototype, "logName", null);
CardComponent = __decorate([
    Component({
        selector: "#card",
        template: `
        <div class="card">
            <div class="card-content">
                <span class="card-title">Card component</span>
            </div>
        </div>`
    }),
    log,
    __metadata("design:paramtypes", [String])
], CardComponent);
const card = new CardComponent('My card component');
const btn = document.querySelector('#btn');
btn.addEventListener('click', card.logName);
const validators = {};
function Required(target, propName) {
    validators[target.constructor.name] = Object.assign(Object.assign({}, validators[target.constructor.name]), { [propName]: 'required' });
}
function validate(obj) {
    const objConfig = validators[obj.constructor.name];
    if (!objConfig)
        return true;
    let isValid = true;
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
class Form {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    Required,
    __metadata("design:type", Object)
], Form.prototype, "email", void 0);
const form = new Form('sfsfsd');
if (validate(form)) {
    console.log(`valid`, form);
}
else {
    console.log(`Validation error`);
}
//# sourceMappingURL=decorators.js.map