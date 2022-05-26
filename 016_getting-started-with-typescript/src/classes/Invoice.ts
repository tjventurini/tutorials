import { HasFormatter } from '../interfaces/HasFormatter'

export class Invoice implements HasFormatter {
    // public client: string
    // private details: string
    // readonly amount: number = 0

    // constructor(c: string, d: string, a: number) {
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }

    constructor(readonly client: string, private details: string, public amount: number) { }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}