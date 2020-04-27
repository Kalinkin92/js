"use strict";
/// <reference path="form-namespace.ts"/>
var IForm;
(function (IForm) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    const myForm = new MyForm('v@fdfd.ry');
    console.log(myForm);
})(IForm || (IForm = {}));
//# sourceMappingURL=namespaces.js.map