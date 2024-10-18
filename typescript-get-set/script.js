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
console.log(obj1.n1);
class T02 extends T01 {
}
const obj2 = new T02();
console.log(obj2.n2);
