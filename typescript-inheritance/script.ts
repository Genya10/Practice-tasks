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