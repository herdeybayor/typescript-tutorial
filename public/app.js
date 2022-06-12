import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = form.querySelector("#type");
const toFrom = form.querySelector("#toFrom");
const details = form.querySelector("#details");
const amount = form.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values = [
        toFrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "start");
});
