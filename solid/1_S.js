//Single Responsibility 

class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }
    
    update(text) {
        this.text = text
        this.modified = true
    }


}

class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    
    html() {
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }

    
    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }
}

const news = new News('ПУтин', 'Новая конституция')

// console.log(news)
// console.log(news)
// console.log(news.toJSON())

const printer = new NewsPrinter(news)

console.log(printer.json())
console.log(printer.html())

