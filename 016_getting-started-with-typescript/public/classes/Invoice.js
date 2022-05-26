export class Invoice {
    // public client: string
    // private details: string
    // readonly amount: number = 0
    // constructor(c: string, d: string, a: number) {
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
