class T01 {
    private n_1: number = 33
    private n_2: number = 77

    public get n1() : number {
        return this.n_1
    }
    public get n2() : number {
        return this.n_2 + this.n_1
    }
    public set n1(a:number){
        this.n_1 = a
    }
}

const  obj1 = new T01()
console.log(obj1.n1)
obj1.n1 = 444
console.log(obj1.n2)

class T02 extends T01 {
 public get n1():number{
    return super.n1
 }
 public set n1(a:number){
    super.n1 = a
 }
}

const obj2 = new T02()
console.log(obj2.n1)
obj2.n1 = 1000
console.log(obj2.n1)
//console.log(obj2.n2)


class Person {
    public age: number = 30

    constructor(age:number){
        this.age = age
    }

    public getAge(): number {
        console.log('There is age')
        return this.age
    }

    public setAge(newAge:number): void {
        if(newAge < 0){
            console.log('It is wrong')
        } else {
            this.age = newAge
        }
    }
}

const person = new Person(32)
console.log(person.getAge())
person.age = -7
console.log(person.age)
person.age = 33
console.log(person.age)