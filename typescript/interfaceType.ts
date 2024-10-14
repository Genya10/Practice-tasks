interface IUserAge {
    age: number
}

interface IUser extends IUserAge {
    name: string
    email: string
}

type TypePerson = {
    age: number
}

type TypeUser = {
    name:string
    email: string
} & TypePerson

const user:IUser ={
    name:'Kolya',
    age:28,
    email:'qwerty'
}

const users: IUser[]=[
    user,
    {
        name:'Vasya',
        age:43,
        email:'aafadagg'
    }
]