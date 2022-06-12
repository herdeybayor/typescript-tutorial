import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = form.querySelector("#type") as HTMLSelectElement;
const toFrom = form.querySelector("#toFrom") as HTMLInputElement;
const details = form.querySelector("#details") as HTMLInputElement;
const amount = form.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  let values: [string, string, number] = [
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "start");
});
