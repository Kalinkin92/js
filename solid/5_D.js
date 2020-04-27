//Dependency inversion principle

class Fetch {
    request(url) {
        // return fetch(url)
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet(url) {
        return this.fetch.request(url)
    }
}

class LocalStorageClien {
    constructor(client) {
        this.client = client
    }

    clientGet(key) {
        return this.localStorage.get(key)
    }

}

class Database {
    constructor(client) {
        // this.fetch = new Fetch()
        this.client = client
    }

    getData() {
        // return this.fetch.request('vk.com')
        return this.client.clientGet('key')
    }
}

const db = new Database(new FetchClient())

console.log(db.getData('rand'))

// console.log(db.getData())