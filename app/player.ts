/// <reference path="person.ts" />


class Player implements Person {
    name: string
    age?: number // also can specify nullable here
    highScore: number

    formatName(){
        return this.name.toLocaleUpperCase()
    }
}