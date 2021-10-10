import { Person } from './person'
// dont't need file extension, it looks up for .ts file


export class Player implements Person {
    name: string
    age?: number // also can specify nullable here
    highScore: number

    formatName(){
        return this.name.toLocaleUpperCase()
    }
}