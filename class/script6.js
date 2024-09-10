////////////////////////
class Mammal {
    static kingdom = 'Animalia'
    static count = 0
    constructor(name){
        this.name = name
        Mammal.count++
    }
    describe(){
        return `This is a ${this.name} mammal`
    }
    static counter(){
        return Mammal.count
    }
}

class Dog extends Mammal {
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
    describe(){
        return `${super.describe()}, breed:${this.breed}`
    }
}

class Cat extends Mammal{
    constructor(name,color){
        super(name)
        this.color = color
    }
    describe(){
        return `${super.describe()},color:${this.color}`
    }
}

const dog1 = new Dog('Charli','pudel')
const dog2 = new Dog('Micky','boxer')

const cat1 = new Cat('Margo','black')
const cat2 = new Cat('Katty','gray')

console.log(dog1.describe())
console.log(dog2.describe())
console.log(cat1.describe())
console.log(cat2.describe())
console.log(Mammal.kingdom)
console.log(Mammal.counter())

///////////////////////////////
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    get fullName(){
        return `firstName: ${this.firstName},lastName: ${this.lastName}`
    }
    set fullName(full){
       const [firstName, lastName] = full.split(' ')
       this.firstName = firstName
       this.lastName = lastName
    }
}

const person = new Person('Jonny', 'Dep')
console.log(person.fullName)
person.fullName = 'Cloudi Shiffer'
console.log(person.fullName)