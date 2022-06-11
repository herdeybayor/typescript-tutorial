// classes
class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format(): string {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("John", "Laptop", 2000);

console.log(invOne.format());

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
