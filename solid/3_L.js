//Liskov substitution principle

class Person {
}

class Member extends Person {
    access() {
        console.log('У тебя есть доступ')
    }
}

class Guest extends Person {
    isGuuest = true
}

class Frontend extends Member {
    canCreateFrontend() {
        console.log('Умеет фронтенд')
    }
}

class Backend extends Member {
    canCreateBackend() {
        console.log('Умеет бэкенд')
    }
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('Нет доступа иди к себе')
    }
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany()) //There should be member

//===========================

class Component {
}

class ComponentWithTemplate extends Component {
    render() {
        return `<div>Component</div>`
    }
}

class HOCcomponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {

    }
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {

    }
}

class HOC extends HOCcomponent {

    wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())