// // lesson 11 - 20
// // const anchor = document.querySelector('a')!
// // console.log(anchor.href)
const form = document.querySelector('form.new-item-form');
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
console.log('log form');
console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
const me = {
    name: 'Max',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
    // skills: ['Javascript', 'Typescript'] // will not work because it is not part of IsPerson interface
};
// classes
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const invoiceOne = new Invoice('mario', 'work on the mario website', 250);
const invoiceTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invoiceOne);
console.log(invoiceTwo.format());
let invoices = [];
// invoices.push('string') // will not work 
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
// let docOne: HasFormatter
let docTwo;
// docOne = new Invoice('yoshi', 'work on the yoshi website', 300)
docTwo = new Payment('yoshi', 'work on the yoshi website', 300);
// generics
// const addUID = (obj: object) => {
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 30 });
// let docTwo = addUID('something') // will not work
console.log(docOne.age);
let docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'yoshi'
};
let docFour = {
    uid: 1,
    resourceName: 'person',
    data: {
        name: 'yoshi',
    }
};
let docFive = {
    uid: 1,
    resourceName: 'person',
    data: ['yoshi', 'mario']
};
// enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
const docSix = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docSeven = {
    uid: 2,
    resourceType: ResourceType.AUTHOR,
    data: { title: 'name of the wind' }
};
console.log(docSix, docSeven);
// tuples
let tup = ['yoshi', 1, true];
// tup[0] = false // will not work
