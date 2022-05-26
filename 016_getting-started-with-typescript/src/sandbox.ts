// lesson 2
// const somebody = 'John'
// console.log(somebody)

// // lesson 3
// let character = 'Mario'
// let age = 30
// let isBackBelt = false

// // we can mix types in typescript
// // character = age // will not work
// // tsc (--watch|-w) sandbox.ts will throw an error

// // we should always restrict method inputs
// const circle = (diameter: number) => {
//     return diameter * Math.PI
// }

// console.log(circle(123))


// lesson 4

// // arrays
// let names = ['luigi', 'mario', 'yoshi']

// // names = 'some other value' // will not work because it expects an array

// names.push('toad')

// // names.push(123) // will not work, because it expects strings

// let numbers = [1, 2, 3]

// numbers.push(25)

// // numbers.push('hello') // will not work, because it expects numbers

// let mixed = [1, 'hello', true]

// mixed.push('Ryan')
// mixed.push(123)

// // objects

// let ninja = {
//     name: 'yoshi',
//     belt: 'black',
//     age: 30
// }

// ninja.name = 'mario'
// // ninja.age = 'some string' // not working, because it expects a number
// // ninja.skills = ['fighting', 'sneaking'] // will not work because attribute skills was not there yet

// ninja = {
//     name: 'luigi',
//     belt: 'green',
//     age: 35,
//     // skills: ['fighting', 'sneaking'] // will not work because attribute skills was not there in the initial ninja object
// }

// // lesson 5

// // explicit types
// let character: string
// let age: number
// let isLoggedIn: boolean

// // age = 'luigi'; // will not work
// age = 30

// // isLoggedIn = 'luigi'; // will not work

// // arrays

// // we need to initialize the array before we can use methods like .push on it
// let ninjas: string[] = []

// // ninjas = [123, 234] // will not work
// ninjas = ['luigi', 'yoshi']

// // union types 

// let mixed: (string | number)[] = []
// mixed.push('hello')
// mixed.push(123)
// // mixed.push(false) // will not work

// let uid: string | number
// uid = '123'
// uid = 123

// // objects

// let ninjaOne: object
// ninjaOne = { name: 'yoshi', age: 30 }

// // ninjaOne = 'mario' // will not work

// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string,
// }

// ninjaTwo = { name: 'mario', age: 20, beltColour: 'black' }
// // ninjaTwo = { name: 'mario', age: 20, beltColour: 'black', skills: ['fighting', 'sneaking'] } // will not work

// // les#son 6

// let age: any = 25

// age = true
// age = 'hello'
// age = { foo: 'bar' }
// let mixed: any[] = []

// // lesson 7
// console.log('automatically compiled') // see tsconfig.json

// lesson 8

// let greet: Function

// greet = () => {
//     console.log('hello')
// }

// const add = (a: number, b: number = 2, c?: number | string): void => {
//     console.log(a + b)
//     if (c) {
//         console.log(c)
//     }
// }

// add(5, 10)

// add(5, 10, 'hello')

// const minus = (a: number, b: number): number => {
//     return a - b
// }

// let result = minus(10, 5)
// // result = 'something else' // will not work

// // lesson 9

// type StringOrNumber = string | number
// type User = { name: string, uid: StringOrNumber }

// const logDetails = (uid: StringOrNumber, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }

// const greet = (user: User) => {
//     console.log(`Hello ${user.name}`)
//     logDetails(user.uid, user.name)
// }


// // lesson 10

// // let greet: Function;

// // example 1 
// let greet: (name: string, age: number) => void
// greet = (name: string, age: number) => {
//     console.log(`Hello ${name} you are ${age}`)
// }

// // example 2
// let calc: (a: number, b: number, c: string) => number
// calc = (a: number, b: number, c: string) => {
//     if (c === 'add') {
//         return a + b
//     } else {
//         return a - b
//     }
// }

// // example 3
// let logDetails: (obj: { name: string, age: number }) => void

// type person = { name: string, age: number }

// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age}`)
// }


// lesson 11
