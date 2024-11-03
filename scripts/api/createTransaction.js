const typeOfTransaction = {
  0: "Expense",
  1: "Income",
};

if (!localStorage.getItem("ID")) {
  localStorage.setItem("ID", 0);
}

const createTransaction = () => {
  let id = Number.parseInt(localStorage.getItem("ID"));
  if (Number.isInteger(id)) {
    //check if input filled
    const transaction = {
      id: id,
      type: transactionType.value,
      amount: transactionAmount.value,
      date: transactionDate.value,
      notes: transactionNotes.value,
    };

    localStorage.setItem(`${id}`, JSON.stringify(transaction));
    id += 1;
    localStorage.setItem("ID", id);
    window.location.reload();
  }
};
submitBtn.addEventListener("click", createTransaction);

const getAllTransactions = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key != "ID") {
      const transaction = JSON.parse(localStorage.getItem(key));
      displayTransaction(transaction);
    }
  }
};
getAllTransactions();
