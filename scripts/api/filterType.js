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
function belowMaxAmount(amount) {
  try {
    return parseInt(amount) <= parseInt(maxAmount.value);
  } catch {
    console.log("Error parsing max amount");
  }
}
function aboveMinAmount(amount) {
  try {
    return parseInt(amount) >= parseInt(minAmount.value);
  } catch {
    console.log("Error parsing min amount");
  }
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
  console.log("filter Checked");
  if (expense.checked || income.checked) {
    filterByType();
  }

  console.log(maxAmount);
  console.log(typeof maxAmount.value);
  maxAmount.value && filterTable(indexToAttribute["amount"], belowMaxAmount);
  minAmount.value && filterTable(indexToAttribute["amount"], aboveMinAmount);
});
