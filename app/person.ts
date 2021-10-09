interface Person {
    name: string
    age?: number // means this property is nullable(can be undefined), but if got one, have to be number
    formatName: () => string
}