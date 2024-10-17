class User {
    name: string

    constructor(name:string){
        this.name = name
    }
}

class User1 extends User {
    email:string

    constructor(name:string,email:string){
        super(name)
        this.email = email
    }
}

class User2 extends User1 {
    showData():void{
        console.log(this.name, this.email)
    }
    showInfo():string {
        return this.name + this.email
    }
}

const user2 = new User2('Jony','asdfgh')
user2.showData()
console.log(user2.showInfo())

class User3 extends User2 {
  age:number

  constructor(name:string, email:string, age:number){
    super(name, email)
    this.age = age
  }
  showInfo(): string {
    const sup = super.showInfo()
    return sup + this.age
  }
}

const user3 = new User3('Vasya','zxcvbn', 28)
console.log(user3.showInfo())

//////////////////////////
class ElementHTML {
    text: string;
    tag: string 

    constructor(text: string, tag:string){
        this.text = text
        this.tag = tag
    }
    render():HTMLElement {
        const div = document.createElement(this.tag)
        div.textContent = this.text
        return div
    }
    }


const div_1 = new ElementHTML('hello','h1')
document.body.append(div_1.render())

const manyDiv = [
    new ElementHTML('bye','h2'),
    new ElementHTML('cross','div'),
    new ElementHTML('full','h3'),
    new ElementHTML('broke','b')
]

manyDiv.forEach(item => {
    document.body.append(item.render())
})

////////////////////////////////
class ElementHTMLCSS extends ElementHTML {
    cssClass: string[];

    constructor(text:string, tag:string, cssClass: string[]){
        super(text,tag)
        this.cssClass = cssClass
    }
    render(): HTMLElement {
        const div = super.render()
        this.cssClass.forEach(item => div.classList.add(item))
        return div       
    }
}

const div_2 = new ElementHTMLCSS('div with css','div',['red','bold'])
document.body.append(div_2.render())

const divArray = [
    new ElementHTMLCSS('title','h2',['uppercase','green']),
    new ElementHTMLCSS('span','span',['blue']),
    new ElementHTMLCSS('this is bold','h3',['yellow']),
    new ElementHTMLCSS('just div','div',['uppercase']),
]

divArray.forEach(item => {
    document.body.append(item.render())
})

////// ElementImage
class ElementImage extends ElementHTMLCSS {
    src: string

    constructor(src:string, cssClass: string[], text:string){
        super(text,'img', cssClass)
        this.src = src;
    }

    render(): HTMLElement {
        const img = document.createElement(this.tag)
        img.setAttribute('src', this.src)
        img.setAttribute('alt', this.text)
        this.cssClass.forEach(item => img.classList.add(item))
        return img
    }
}

const img = new ElementImage('./img/IMG_20190127_125003_774.jpg',['img-margin'],'Hello Marina')
document.body.append(img.render())