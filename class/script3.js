/////////////
class Vehicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }
    describe(){
        return `This is a ${this.make} ${this.model}`
    }
    static isVehicle(obj){
      if(obj instanceof Vehicle){
        return true
      } else{
        return false
      }
    }
}

class Car extends Vehicle{
 constructor(make,model, fueType){
    super(make, model)
    this.fueType = fueType
 }  
 describe(){
    return `This car is a ${this.model} running on ${this.fueType}`
 }
}

class ElectricCar extends Car {
    constructor(make, model, fueType, batteryCapacity){
        super(make,model, fueType)
        this.batteryCapacity = batteryCapacity
    }
    describe(){
        return `This electric car is a ${this.model} with a ${this.batteryCapacity}kWh battery`
    }
}

const electricCar1 = new ElectricCar('Honda','Accord','diesel', 125)
const electricCar2 = new ElectricCar('Scoda','Octavia','petrol', 90)
const just = 'I am worker'

console.log(electricCar1)
console.log(electricCar2)
console.log(electricCar1.describe())
console.log(electricCar2.describe())
console.log(Vehicle.isVehicle(electricCar1))
console.log(Vehicle.isVehicle(just))

//////////////
class Book {
    static count =  0

    constructor(title, author, pages){    
        this.title = title
        this.author = author
        this.pages = pages
        Book.count++
    }
    get isThick(){return this.pages > 500 ? true : false}
  
    
    describe(){
        return `The book ${this.title} by ${this.author} has ${this.pages} pages.`
    }
    static getInstanceCount() {
        return Book.count;
    }
    
}

const book1 = new Book('1984','George Orwell', 328)
const book2 = new Book('Big buisness','Fox Clouni',501)
const book3 = new Book('Inferno', 'Dan Brown', 624)

console.log(book1.describe())
console.log(book2.describe())
console.log(book3.describe())
console.log(book1.isThick)
console.log(book2.isThick)
console.log(book3.isThick)
console.log(Book.count)
console.log(Book.getInstanceCount())