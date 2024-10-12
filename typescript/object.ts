type TypeUser = {
    name:string
    age: number
}

type TypeAddress ={
    city:string
    country: string
}


const user:TypeUser = {
 name:'Jenya',
 age:39
 }

const address: TypeAddress = {
    city:'Sumy',
    country: 'Ukraine'
}

const common: TypeUser & TypeAddress = {
    ...user, ...address
}