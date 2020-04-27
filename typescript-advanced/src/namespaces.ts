/// <reference path="form-namespace.ts"/>

namespace IForm {
    
    class MyForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'

        constructor(public email: string) {

        }

        getInfo() {
            return {
                type: this.type,
                state: this.state
            }
        }
    }


    const myForm = new MyForm('v@fdfd.ry')
    console.log(myForm)
}
