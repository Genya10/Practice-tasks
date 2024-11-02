class Book {
    constructor(title, author, year, isRead = false){
        this.title = title
        this.author = author
        this.year = year
        this.isRead = isRead
    }

    getInfo(){
        return `Name:${this.title}, Author:${this.author}, year:${this.year}`
    }
    markAsRead(){
       this.isRead = true
    }
}

class Ebook extends Book {
    constructor(title, author, year, isRead = false, fileSize, format){
        super(title, author, year, isRead)
        this.fileSize = fileSize
        this.format = format
    }
    getInfo(){
        return `${super.getInfo()}, size:${this.fileSize}MB, format:${this.format}`
    }
}

const book = new Ebook('Inkognito','Jack Pall', 1997, false, 25, 'PDF')
console.log(book.getInfo())
book.markAsRead()
console.log(`Is read: ${book.isRead}`)