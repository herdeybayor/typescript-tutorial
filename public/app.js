"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("John", "Laptop", 2000);
console.log(invOne.format());
const form = document.querySelector(".new-item-form");
// inputs
const type = form.querySelector("#type");
const toFrom = form.querySelector("#toFrom");
const details = form.querySelector("#details");
const amount = form.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
