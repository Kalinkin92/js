function createProgrammer(name) {
    const programmer = { name }
    return {
        ...programmer,
        ...canCode(programmer)
    }
}

function canCode({ name }) {
    return {
        code: () => {
            console.log(`${name} is coding...`)
        }
    }
}

function canAngular({ name }) {
    return {
        angular: () => {
            console.log(`${name} is creating Angular app...`)
        }
    }
}

function createFrontend(name) {
    const programmer = createProgrammer(name)

    return {
        ...programmer,
        ...canAngular(programmer)
    }
}

function canNodejs({ name }) {
    return {
        nodejs: () => {
            console.log(`${name} is creating Nodejs app...`)
        }
    }
}

function createBackend(name) {
    const programmer = createProgrammer(name)

    return {
        ...programmer,
        ...canNodejs(programmer)
    }
}

const programmer = createProgrammer('Oleg')
programmer.code()

const frontend = createFrontend('Igor')
frontend.code()
frontend.angular()

const backend = createBackend('Backend')
backend.code()
backend.nodejs()