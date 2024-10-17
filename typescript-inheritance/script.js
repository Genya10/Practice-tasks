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
//////////////////////////
class ElementHTML {
    constructor(a, tag) {
        this.text = a;
        this.tag = tag;
    }
    render() {
        const div = document.createElement(this.tag);
        div.textContent = this.text;
        return div;
    }
}
const div_1 = new ElementHTML('hello', 'h1');
document.body.append(div_1.render());
const manyDiv = [
    new ElementHTML('bye', 'h2'),
    new ElementHTML('cross', 'div'),
    new ElementHTML('full', 'h3'),
    new ElementHTML('broke', 'b')
];
manyDiv.forEach(item => {
    document.body.append(item.render());
});
////////////////////////////////
class ElementHTMLCSS extends ElementHTML {
    constructor(a, tag, b) {
        super(a, tag);
        this.cssClass = b;
    }
    render() {
        const div = super.render();
        this.cssClass.forEach(item => div.classList.add(item));
        return div;
    }
}
const div_2 = new ElementHTMLCSS('div with css', 'div', ['red', 'bold']);
document.body.append(div_2.render());
const divArray = [
    new ElementHTMLCSS('title', 'h2', ['uppercase', 'green']),
    new ElementHTMLCSS('span', 'span', ['blue']),
    new ElementHTMLCSS('this is bold', 'h3', ['yellow']),
    new ElementHTMLCSS('just div', 'div', ['uppercase']),
];
divArray.forEach(item => {
    document.body.append(item.render());
});
