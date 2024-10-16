class Button {
    text: string;
    className: string[]

    constructor(text:string, className:string[]){
        this.text = text;
        this.className = className
    }
}

console.log(Button)

const button1 = new Button('hello world',['qwerrt','zxcvbb'])
console.log(button1)

button1.text = 'Bonjur'
button1.className = ['css','js']
console.log(button1)

////////////////////////
class Header {
    text: string;
    fontSize: string

    constructor(text:string, fontSize: string){
        this.text = text
        this.fontSize = fontSize
    }
}

const newHeader = new Header('button','28px')

//////////////////
class Btn {
    text: string;
    className: string[]

    constructor(text:string, className: string[]){
        this.text = text
        this.className = className
    }
    create(): HTMLButtonElement {
        const button = document.createElement('button')
        button.textContent = this.text
        this.className.forEach(item => button.classList.add(item))
        return button
    }
}

const btn = new Btn('Button',['btn','btn-success'])
console.log(btn)
document.body.append(btn.create())

btn.text = 'Button 2'
btn.className = ['btn', 'btn-warning']
console.log(btn)
document.body.append(btn.create())

///////////////////////
class ButtonElement {
    text:string;
    className: string[];

    constructor(text:string, className:string[]){
        this.text = text;
        this.className = className
    }
    create(): HTMLButtonElement{
        const button = document.createElement('button')
        button.textContent = this.text
        this.className.forEach(item => button.classList.add(item))
        return button
    }
}

const btn3 = new ButtonElement('Button 3', ['btn','btn-primary'])
document.body.append(btn3.create())