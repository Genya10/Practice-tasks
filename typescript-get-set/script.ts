class T01 {
    private n_1: number = 33
    private n_2: number = 77

    public get n1() : number {
        return this.n_1
    }
    public get n2() : number {
        return this.n_2 + this.n_1
    }
    public set n1(a:number){
        this.n_1 = a
    }
}

const  obj1 = new T01()
console.log(obj1.n1)
obj1.n1 = 444
console.log(obj1.n1)

class T02 extends T01 {}
const obj2 = new T02()
console.log(obj2.n2)