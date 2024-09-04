///////
class Vehicle {
  
    constructor(speed){
        this.speed = speed
    }
    move(){
        return `Car moving with ${this.speed} km/h`
    }
   
}

class Car extends Vehicle {
    constructor(speed,brand){
        super(speed)
        this.brand = brand
    }
    move(){
       return `${this.brand} moving with ${this.speed} km/h`
    }
    static maxSpeed = 180
    static compareSpeed(vehicle1, vehicle2){
     return vehicle1.speed > vehicle2.speed ? vehicle1 : vehicle2
    }
}

const car1 = new Car(175,'Toyota')
const car2 = new Car(150,'Volvo')
const car3 = new Car(165,'Hondaa')

console.log(car1)
console.log(car2)
console.log(car3)
console.log(Car.maxSpeed)
console.log(car1.move())
console.log(Car.compareSpeed(car3,car2))
//console.log(Vehicle.countCar)
//console.log(Car.countCar)

//getter
class BankAccount {
    constructor(owner, balance){
        this.owner = owner
        this.balance = balance
    }

    get accountInfo(){
        return `Account owner: ${this.owner}, Balance: ${this.balance}`
    }
}

const account = new BankAccount('Petya',3000)
console.log(account.accountInfo)

////////////
class Rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }

    get area(){
        return this.width * this.height
    }
}

const rect = new Rectangle(8,5)
console.log(rect.area)