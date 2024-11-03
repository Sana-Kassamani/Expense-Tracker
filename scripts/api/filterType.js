let filterBtn = document.getElementById("filter");
filterBtn.addEventListener("click", () => {
  showAllTable();
  console.log("filter Checked");
  if (expense.checked || income.checked) {
    filterByType();
  }
});

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
  if (type === "Income") return true;
}

function typeExpense(type) {
  if (type === "Expense") return true;
}

function showAllTable() {
  let tr = table.getElementsByTagName("tr");
  for (let i = 1; i < tr.length; i++) {
    tr[i].style.display = "table-row";
  }
}
