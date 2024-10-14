interface ICar {
    id: number
    name: string
    price: number
    yearBuilt: number
}

interface ICarCreate extends Omit<ICar,'id'>{}
interface ICarPart extends Pick<ICar,'id'>{}
interface IOptionalCar extends Partial<ICar>{}
interface IReadonlyCar extends Readonly<ICar>{}
type TypeCarRecord = Record<'name' | 'price', string | number>
interface IRequiredCar extends Required<ICar>{}

type TypeGetName = () => string
type Return = ReturnType<TypeGetName>
type Any = Extract<'max' | 'andrey', 'andrey' | 'misha'>
type Any2 = Exclude<'max' | 'andrey', 'andrey' | 'misha'>
type NotNull = NonNullable<string | number | null | undefined>

const car:IOptionalCar = {}
