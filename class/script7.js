/////////////////////
class Employee {
    constructor(name, position, salary){
        this.name = name
        this.position = position
        this.salary = salary
    }
    static averSalary(employees){
      const totalSalary = employees.reduce((sum,empl) => sum + empl.salary,0)
      return totalSalary / employees.length
    }
}

class Developer extends Employee {
    constructor(name, position, salary,level){
        super(name, position, salary)
        this.level = level
    }
}

class Manager extends Employee {
    constructor(name, position, salary,subordinates = []){
      super(name, position, salary)
      this.subordinates = subordinates
    }
  addSubordinate(...developers){
    this.subordinates.push(...developers)
  }
}

const developer1 = new Developer('Mike','tester',800,'junior')
const developer2 = new Developer('Kelly','backender',1400,'senior')
const developer3 = new Developer('Ostin','frontender',1200,'middle')
const manager = new Manager('Kelvin','teamlead', 1880,[])

manager.addSubordinate(developer1,developer2,developer3)
console.log('Subordinates of', manager.name, ':', manager.subordinates)

const allEmployees = [developer1, developer2, developer3, manager]
const averageSalary = Employee.averSalary(allEmployees)
console.log('Average salary of all employees:', averageSalary);

//////////////////////////
class City {
  constructor(name, population){
    this._name = name
    this._population = population
  }
  get population(){
    return this._population
  }
  set population(newPopulation){
    this._population = newPopulation
  }
  describe(){
    return `City ${this._name} has population ${this._population}`
  }
}

class CapitalCity extends City {
  constructor(name, population, country){
    super(name, population)
    this.country = country
  }
  describe(){
    return `Capital ${this._name} in ${this.country} has population ${this.population}`
  }
}

const city = new City('Harkov',1350000)
const capital = new CapitalCity('Kiyv',3200000,'Ukraine')

console.log(city.describe())
console.log(capital.describe())
city.population = 1720000
console.log(city.describe())
capital.population = 4000000
console.log(capital.describe())