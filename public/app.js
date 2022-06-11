const me = {
    name: "Sherifdeen",
    age: 17,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log("Hello", person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("John", "Laptop", 2000);
const invTwo = new Invoice("Mark", "Website development", 500);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
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
