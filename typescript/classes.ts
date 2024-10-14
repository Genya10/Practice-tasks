class Car {
    brand: string
    price: number

    constructor(brand: string, price: number){
        this.brand = brand
        this.price = price
    }
    protected getInfo(): string {
        return `${this.brand} - ${this.price}`
    }
}

class Bus extends Car {
    age:number

    constructor(name:string,price:number,age:number){
        super(name, price)
        this.age = age
    }

    test(){
        return this.getInfo()
    }
}

//new Car('BMW',30000).getInfo()