const product = {
    descr:'  ',
    price: 1000,
    deliveryPrice: 300,
    getPrice(){
        return this.price
    },

    set title(value){
     if(value !== ''){
        this.hiddenTitle = value
     } else {
        this.hiddenTitle = 'default'
     }
    },

    get title(){
        return this.hiddenTitle
    }
}

product.title = 'samsung'
console.log(product.title)
console.log(product.getPrice())
console.log(product.descr)
console.log(product.deliveryPrice)

///////////////////////////////////
class Book {
    constructor(title, author){
        this._title = title
        this._author = author
    }

    get title(){
        return this._title
    }
    get author(){
        return this._author
    }

    set title(value){
        if(value === ''){
            console.log('Title should has name')
        } else {
            this._title = value
        }
    }
    set author(value){
      const words = value.trim().split(' ')
      if(words.length < 2){
        console.log('You should write minimum two word')
      } else {
        this._author = value
      }
    }
}

const book = new Book('Inferno', 'Brown')
const book1 = new Book('Voin','Cristy')
book1.title = ''
console.log(book1)
book.author = 'Dan'