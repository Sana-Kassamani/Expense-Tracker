let editBtns = document.querySelectorAll("#edit");
let saveBTn = document.getElementById("save-changes");

const editTransacion = (id) => {
  const transaction = JSON.parse(localStorage.getItem(id));
  console.log(transaction);
  // ask if user is sure to delete
  showTransactionFields(transaction);
};

editBtns.forEach((element) => {
  element.addEventListener("click", () => {
    const id = element.getAttribute("transaction-id");
    editTransacion(id);
  });
});

function showTransactionFields(transaction) {
  transactionType.value = transaction.type;
  transactionAmount.value = transaction.amount;
  transactionDate.value = transaction.date;
  transactionNotes.value = transaction.notes;
  saveBTn.addEventListener("click", () => {
    saveTransaction(transaction.id);
  });
  saveBTn.style.display = "block";
  submitBtn.disabled = "true";
}

function saveTransaction(id) {
  const transaction = {
    id: id,
    type: transactionType.value,
    amount: transactionAmount.value,
    date: transactionDate.value,
    notes: transactionNotes.value,
  };
  localStorage.setItem(`${id}`, JSON.stringify(transaction));
  saveBTn.style.display = "none";
  submitBtn.disabled = "false";
  window.location.reload();
}
