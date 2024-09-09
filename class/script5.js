////////////////
class WashingMachine {
    constructor(model, turn){
        this._model = model
        this._turn = turn
        this._isWashing = false //состояние для режима стирки
    }
    get status(){
        return `Washing machine is currently ${this._turn ? 'On' : 'Off'}`
    }
    set status(turnMoment){
        if(typeof turnMoment === 'boolean'){
          this._turn = turnMoment
        } else {
         console.error('Status must be a boolean value')
        }
    }

    get isWashing(){
        return `Watching machine now is ${this._isWashing ? 'Active' : 'Not active'}`
    }
    set isWashing(setTurn){
      if(this._turn){
        this._isWashing = setTurn
      } else {
         console.error('Watching machine should turn on')}}
    
    describe(){
        return `Model: ${this._model}, status:${this.status}, washing mode:${this.isWashing}`
    }
}

const washingMachine = new WashingMachine('Indesit', true)
const washingMachine1 = new WashingMachine('Gorelo', false)
console.log(washingMachine)
washingMachine._isWashing = true
console.log(washingMachine.describe())
console.log(washingMachine1.describe())

///////////////////////////////
class Book {
    static count = 0
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
        Book.count++
    }
    getInfo(){
        return `Title:${this.title}, Author:${this.author}, Year:${this.year}`
    }
}

class EBook extends Book {
    constructor(title, author, year, fileSize, format){
        super(title, author, year)
        this.fileSize = fileSize
        this.format = format
    }
    getInfo(){
        return `${super.getInfo()},fileSize:${this.fileSize}, format:${this.format}`
                
    }
}

const book1 = new Book('Inferno','Dan Brown', 2014)
const book2 = new EBook('Time','Owrvel',1968, 345, 'PDF')
console.log(book1.getInfo())
console.log(book2.getInfo())
console.log(Book.count)

///////////////////////////////////////
class Car {
    constructor(make, model, year){
        this._make = make
        this._model = model
        this._year = year
    }
    get description(){
        return `Make:${this._make}, Model:${this._model}, Year:${this._year}`
    }
    get year(){
        return this._year
    }
    set year(dataYear){
       if(typeof dataYear === 'number' && dataYear >= 1886){
        this._year = dataYear
       }else{
        console.error('Error: Year must be a number and at least 1886');
       }

    }
} 

const car1 = new Car('Honda', 'Accord', 1967)
const car2 = new Car('Subaru', 'Prisma', 1821)
const car3 = new Car('Schoda', 'Octavia', 'Golum')

console.log(car1)
console.log(car2)
console.log(car3)
console.log(car1.description)
console.log(car2.description)
console.log(car3.description)
console.log(car1.year)
console.log(car2.year)
console.log(car3.year)