"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class User1 extends User {
    constructor(name, email) {
        super(name);
        this.email = email;
    }
}
class User2 extends User1 {
    showData() {
        console.log(this.name, this.email);
    }
    showInfo() {
        return this.name + this.email;
    }
}
const user2 = new User2('Jony', 'asdfgh');
user2.showData();
console.log(user2.showInfo());
class User3 extends User2 {
    constructor(name, email, age) {
        super(name, email);
        this.age = age;
    }
    showInfo() {
        const sup = super.showInfo();
        return sup + this.age;
    }
}
const user3 = new User3('Vasya', 'zxcvbn', 28);
console.log(user3.showInfo());
