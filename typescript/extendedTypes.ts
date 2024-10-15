type TypeIsNumber<T> = T extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

type TypeBrand = 'bmw' | 'volvo' | 'mercedes'
type TypePrice = 50000 | 35000 | 60000

type TypeCar = `${TypeBrand} ${TypePrice}`

const car1: TypeCar = 'bmw 60000'
const car2: TypeCar = 'volvo 35000'