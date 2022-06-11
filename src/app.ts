// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Sherifdeen",
  age: 17,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}`);
    return amount;
  },
};

const greetPerson = (person: IsPerson): void => {
  console.log("Hello", person.name);
};

greetPerson(me);

console.log(me);

import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("John", "Laptop", 2000);
const invTwo = new Invoice("Mark", "Website development", 500);

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = form.querySelector("#type") as HTMLSelectElement;
const toFrom = form.querySelector("#toFrom") as HTMLInputElement;
const details = form.querySelector("#details") as HTMLInputElement;
const amount = form.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
