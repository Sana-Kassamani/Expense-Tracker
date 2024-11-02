let submitBtn = document.getElementById("submit");
let table = document.getElementById("transactions");
let transactionType = document.getElementById("type");
let transactionAmount = document.getElementById("amount");
let transactionDate = document.getElementById("date");
let transactionNotes = document.getElementById("notes");

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
  table.appendChild(row);
};
