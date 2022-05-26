// // lesson 11 - 20
// // const anchor = document.querySelector('a')!

// // console.log(anchor.href)

const form = document.querySelector('form.new-item-form') as HTMLFormElement
// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

console.log('log form')
console.log(form)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')

    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
})

// interfaces

interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

const me: IsPerson = {
    name: 'Max',
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent', amount)
        return amount
    },
    // skills: ['Javascript', 'Typescript'] // will not work because it is not part of IsPerson interface
}

// classes
import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

const invoiceOne = new Invoice('mario', 'work on the mario website', 250)
const invoiceTwo = new Invoice('luigi', 'work on the luigi website', 300)

console.log(invoiceOne)
console.log(invoiceTwo.format())

let invoices: Invoice[] = []
// invoices.push('string') // will not work 
invoices.push(invoiceOne)
invoices.push(invoiceTwo)
console.log(invoices)

// let docOne: HasFormatter
let docTwo: HasFormatter

// docOne = new Invoice('yoshi', 'work on the yoshi website', 300)
docTwo = new Payment('yoshi', 'work on the yoshi website', 300)

// generics

// const addUID = (obj: object) => {
const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docOne = addUID({ name: 'yoshi', age: 30 })
// let docTwo = addUID('something') // will not work

console.log(docOne.age)

// generics with interfaces
interface Resource<T> {
    uid: number
    resourceName: string
    data: T
}

let docThree: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data: 'yoshi'
}

let docFour: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: {
        name: 'yoshi',
    }
}

let docFive: Resource<string[]> = {
    uid: 1,
    resourceName: 'person',
    data: ['yoshi', 'mario']
}

// enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR }

interface ResourceTwo<T> {
    uid: number
    resourceType: ResourceType
    data: T
}

const docSix: ResourceTwo<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
}

const docSeven: ResourceTwo<object> = {
    uid: 2,
    resourceType: ResourceType.AUTHOR,
    data: { title: 'name of the wind' }
}

console.log(docSix, docSeven)


// tuples

let tup: [string, number, boolean] = ['yoshi', 1, true]
// tup[0] = false // will not work