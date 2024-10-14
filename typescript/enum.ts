enum EnumRoles {
    ADMIN=1, 
    GUEST=2,
    USER=3
}

const enum EnumColors {
    black, pink, green
}

interface IUser1 {
    role: EnumRoles
    color: EnumColors
}

const user1: IUser1 = {
    role:EnumRoles.ADMIN,
    color: EnumColors.green
}

console.log(EnumRoles[EnumRoles.ADMIN])


//Assertions(утверждения)
const inputElement = document.querySelector('input')
const value1 = (inputElement as HTMLInputElement).value
const value2 = (<HTMLInputElement>inputElement).value

const getLength = (text: string | null):number => {
    return text!.length
}

getLength('qw4ret')
getLength(null)