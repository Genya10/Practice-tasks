////////////
class Person {
    constructor(name,age){
        this._name = name
        this._age = age
    }

    get name(){
        return this._name
    }

    set name(newName){
        this._name = newName
    }

    get age(){
        return this._age
    }

    set age(newAge){
        if(newAge > 0){
            this._age= newAge
        } else {
            console.log('Age should be positive number')
        }
    }
}

const person1 = new Person('Valik', 33)
const person2 = new Person('Petya', 0)

console.log(person1.name)//доступ к имени через геттер
person1.name ='Kirill' //изменение имени с помощью с помощью сеттера
console.log(person1.name)//доступ к новому имени через геттер

console.log(person1.age)//доступ к возрасту через геттер
person1.age = 24 //изменение возраста с помощью с помощью сеттера
console.log(person1.age)//доступ к новому возросту через геттер

/////////////////////////////////////
class Rectangle {
    constructor(Width, height){
        this._width = Width
        this._height = height
    }
    get width(){
        return this._width
    }
    set width(newWidth){
        this._width = newWidth
    }

    get height(){
        return this._height
    }
    set height(newHeight){
        this._height = newHeight
    }

    area(Width, height){
        return this.width * this.height
    }
}

const rect = new Rectangle(3,8)
const rect1 = new Rectangle(10,5)

console.log(rect.width);
console.log(rect.height);
console.log(rect.area());

rect.width = 20
console.log(rect.area())
