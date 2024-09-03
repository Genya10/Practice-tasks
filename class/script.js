///////////////////
class Animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    makeSound(){
        (console.log('This animal makes a sound'))
    }
}

class Dog extends Animal {
    constructor(name, age, breed){
        super(name, age)
        this.breed = breed
    }
    makeSound(){
        console.log('The dog barks')
    }
}

const dog = new Dog('Sharik',12,'Pudel')
dog.makeSound()
console.log(dog)

//////////
class Calculator {
    static add(a,b){
       return a + b
    }
    static substract(a,b){
       return a - b
    }
}
console.log(Calculator.add(7,5))
console.log(Calculator.substract( 18, 11))

////////
class Vehicle {
    static getVehicle(){
        return 'Vehicle'
    }

    constructor(marka, model){
        this.marka = marka
        this.model = model
    }

    getInfo(){
        return `marka:${this.marka}, model:${this.model}`
    }
}

class Car extends Vehicle {
    constructor(marka, model, numDoors){
        super(marka, model)
        this.numDoors = numDoors
    }
    getInfo(){
        return `marka:${this.marka}, model:${this.model},doors:${this.numDoors}`
    }

    static getVehicleType(){
        return 'Car'
    }
}

const car = new Car('Volsvagen','Passat', 4)
console.log(car)
console.log(Car.getVehicle())

//////////////////////////////////
class Person {
    static totalPeople = 0

    constructor(name,age){
        this.name = name
        this.age = age
        Person.totalPeople += 1
    }

    greet(){
        return `name ${this.name} is ${this.age} years old`
    }
}

class Employee extends Person {
  constructor(name, age, position){
    super(name, age)
    this.position = position
  }

  getDetails(){
    return `${this.name} is ${this.age} years old, he is ${this.position}`
  }

  showTotalPeople(){
    return `Total employees: ${Person.totalPeople}`
  }
}
  
const employeeOne = new Employee('Michel', 42,'Teamlead')
const employeeTwo = new Employee('Gorik', 35,'Frontend developer')

console.log(employeeOne)
console.log(employeeTwo)
console.log(employeeOne.getDetails())
console.log(employeeTwo.getDetails())
console.log(employeeOne.greet())
console.log(employeeTwo.greet())
console.log(Person.totalPeople)
console.log(employeeOne.showTotalPeople())
