const indexToAttribute = {
  type: 0,
  amount: 1,
  date: 2,
  notes: 3,
};

function filterByType() {
  console.log("filtered by type");
  if (income.checked) {
    filterTable(indexToAttribute["type"], typeIncome);
  } else if (expense.checked) {
    filterTable(indexToAttribute["type"], typeExpense);
  }
}

function filterTable(index, filter) {
  let tr = table.getElementsByTagName("tr");
  for (let i = 1; i < tr.length; i++) {
    let rowData = tr[i].getElementsByTagName("td");
    console.log("Row data at index", i, "is ", rowData);
    console.log("Inner html ", rowData[index]);
    console.log("Inner text  ", rowData[index].innerText);
    if (
      !filter(rowData[index].innerHTML) ||
      !filter(rowData[index].innerText)
    ) {
      tr[i].style.display = "none";
    }
  }
}

function typeIncome(type) {
  return type === "Income";
}

function typeExpense(type) {
  return type === "Expense";
}
function checkBelowMaxAmount(amount) {
  try {
    return parseInt(amount) <= parseInt(maxAmount.value);
  } catch {
    console.log("Error parsing max amount");
  }
}
function checkAboveMinAmount(amount) {
  try {
    return parseInt(amount) >= parseInt(minAmount.value);
  } catch {
    console.log("Error parsing min amount");
  }
}

function checkBeforeDate(date) {
  const transactionDate = new Date(date);
  const selectedDate = new Date(beforeDate.value);

  return transactionDate < selectedDate;
}
function checkAfterDate(date) {
  const transactionDate = new Date(date);
  const selectedDate = new Date(afterDate.value);

  return transactionDate > selectedDate;
}

function checkSearchWord(notes) {
  return notes.toLowerCase().includes(searchWord.value.toLowerCase());
}
function showAllTable() {
  let tr = table.getElementsByTagName("tr");
  for (let i = 1; i < tr.length; i++) {
    tr[i].style.display = "table-row";
  }
}

let filterBtn = document.getElementById("filter");

filterBtn.addEventListener("click", () => {
  showAllTable();

  expense.checked || (income.checked && filterByType());
  maxAmount.value &&
    filterTable(indexToAttribute["amount"], checkBelowMaxAmount);
  minAmount.value &&
    filterTable(indexToAttribute["amount"], checkAboveMinAmount);
  beforeDate.value && filterTable(indexToAttribute["date"], checkBeforeDate);
  afterDate.value && filterTable(indexToAttribute["date"], checkAfterDate);
  searchWord.value && filterTable(indexToAttribute["notes"], checkSearchWord);
});
