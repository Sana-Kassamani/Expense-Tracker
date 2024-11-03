let submitBtn = document.getElementById("submit");
let resetBtn = document.getElementById("reset");
let table = document.getElementById("transactions");
let transactionType = document.getElementById("type");
let transactionAmount = document.getElementById("amount");
let transactionDate = document.getElementById("date");
let transactionNotes = document.getElementById("notes");
let income = document.getElementById("IncomeFilter");
let expense = document.getElementById("ExpenseFilter");
let maxAmount = document.getElementById("max");
let minAmount = document.getElementById("min");
let beforeDate = document.getElementById("beforeDate");
let afterDate = document.getElementById("afterDate");
let searchWord = document.getElementById("search");

function addDeleteBtn(parent, id) {
  let btn = document.createElement("button");
  btn.setAttribute("class", "delete-btn");
  btn.setAttribute("id", "delete");
  btn.setAttribute("transaction-id", `${id}`);
  btn.innerHTML = "X";
  parent.appendChild(btn);
}
function addEditBtn(parent, id) {
  let btn = document.createElement("button");
  btn.setAttribute("class", "edit-btn");
  btn.setAttribute("id", "edit");
  btn.setAttribute("transaction-id", `${id}`);
  btn.innerHTML = "Edit";
  parent.appendChild(btn);
}

const displayTransaction = (transaction) => {
  let row = document.createElement("tr");
  let type = document.createElement("td");
  let amount = document.createElement("td");
  let date = document.createElement("td");
  let notes = document.createElement("td");
  type.innerHTML = transaction.type;
  amount.innerHTML = transaction.amount;
  date.innerHTML = transaction.date;
  notes.innerHTML = transaction.notes;
  row.appendChild(type);
  row.appendChild(amount);
  row.appendChild(date);
  row.appendChild(notes);
  addDeleteBtn(row, transaction.id);
  addEditBtn(row, transaction.id);
  table.appendChild(row);
};

function reset() {
  expense.checked = false;
  income.checked = false;
  maxAmount.value =
    minAmount.value =
    beforeDate.value =
    afterDate.value =
    searchWord.value =
      "";
}
