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
