////////////////
class WashingMachine {
    constructor(model, turn){
        this._model = model
        this._turn = turn
        this._isWashing = false //состояние для режима стирки
    }
    get status(){
        return `Washing machine is currently ${this._turn ? 'On' : 'Off'}`
    }
    set status(turnMoment){
        if(typeof turnMoment === 'boolean'){
          this._turn = turnMoment
        } else {
         console.error('Status must be a boolean value')
        }
    }

    get isWashing(){
        return `Watching machine now is ${this._isWashing ? 'Active' : 'Not active'}`
    }
    set isWashing(setTurn){
      if(this._turn){
        this._isWashing = setTurn
      } else {
         console.error('Watching machine should turn on')}}
    
    describe(){
        return `Model: ${this._model}, status:${this.status}, washing mode:${this.isWashing}`
    }
}

const washingMachine = new WashingMachine('Indesit', true)
const washingMachine1 = new WashingMachine('Gorelo', false)
console.log(washingMachine)
washingMachine._isWashing = true
console.log(washingMachine.describe())
console.log(washingMachine1.describe())