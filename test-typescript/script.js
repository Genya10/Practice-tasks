"use strict";
class Button {
    constructor(text, className) {
        this.text = text;
        this.className = className;
    }
}
console.log(Button);
const button1 = new Button('hello world', ['qwerrt', 'zxcvbb']);
console.log(button1);
button1.text = 'Bonjur';
button1.className = ['css', 'js'];
console.log(button1);
//////////////////
class Btn {
    constructor(text, className) {
        this.text = text;
        this.className = className;
    }
    create() {
        const button = document.createElement('button');
        button.textContent = this.text;
        this.className.forEach(item => button.classList.add(item));
        return button;
    }
}
const btn = new Btn('Button', ['btn', 'btn-success']);
console.log(btn);
document.body.append(btn.create());
btn.text = 'Button 2';
btn.className = ['btn', 'btn-warning'];
console.log(btn);
document.body.append(btn.create());
///////////////////////
class ButtonElement {
    constructor(text, className) {
        this.type = 'button';
        this.text = text;
        this.className = className;
        this.role = 'button';
    }
    create() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.setAttribute('role', this.role);
        button.setAttribute('type', this.type);
        this.className.forEach(item => button.classList.add(item));
        return button;
    }
}
const btn3 = new ButtonElement('Button 3', ['btn', 'btn-primary']);
document.body.append(btn3.create());
console.log(btn3);
const buttons = [
    new ButtonElement('Button 4', ['btn', 'btn-warning']),
    new ButtonElement('Button 5', ['btn', 'btn-success']),
    new ButtonElement('Button 6', ['btn', 'btn-primary']),
    new ButtonElement('Button 7', ['btn', 'btn-warning'])
];
buttons.forEach(item => {
    document.body.append(item.create());
});
