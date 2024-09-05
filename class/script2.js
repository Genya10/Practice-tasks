////////
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName

     }
        get fullname(){
           return `name:${this.firstName}, lastName:${this.lastName}`
        
    }
}

class EmployeeDetails extends Person{
  constructor (firstName, lastName, id){
    super(firstName,lastName)
    this.id = id
  }
    fullIdName(){
        return `name:${this.firstName}, lastName:${this.lastName},id:${this.id}`
    }
}

const employee = new EmployeeDetails('Vasya', 'Kovalenko',12)
console.log(employee)
console.log(employee.fullIdName())
console.log(employee.fullname)

//setter
class Person1 {
    _age; // Приватное поле
  
    constructor(name, age) {
      this.name = name;
      this._age = age;
    }
  
    get age() {
      return this._age;
    }
  
    set age(value) {
      if (value < 0) {
        console.log('Age cannot be negative.');
      } else {
        this._age = value;
      }
    }
  }
  
  const person = new Person1('Alice', 30);
  console.log(person.age); 
  person.age = 25; 
  console.log(person.age); 

  
  
