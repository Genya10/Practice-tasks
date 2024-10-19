"use strict";
class T01 {
    constructor() {
        this.n_1 = 33;
        this.n_2 = 77;
    }
    get n1() {
        return this.n_1;
    }
    get n2() {
        return this.n_2 + this.n_1;
    }
    set n1(a) {
        this.n_1 = a;
    }
}
const obj1 = new T01();
console.log(obj1.n1);
obj1.n1 = 444;
console.log(obj1.n2);
class T02 extends T01 {
    get n1() {
        return super.n1;
    }
    set n1(a) {
        super.n1 = a;
    }
}
const obj2 = new T02();
console.log(obj2.n1);
obj2.n1 = 1000;
console.log(obj2.n1);
//console.log(obj2.n2)
class Person {
    constructor(age) {
        this.age = 30;
        this.age = age;
    }
    getAge() {
        console.log('There is age');
        return this.age;
    }
    setAge(newAge) {
        if (newAge < 0) {
            console.log('It is wrong');
        }
        else {
            this.age = newAge;
        }
    }
}
const person = new Person(30);
console.log(person.getAge());
person.age = -7;
console.log(person.age);
person.age = 33;
console.log(person.age);
