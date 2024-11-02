const typeOfTransaction = {
  0: "Expense",
  1: "Income",
};
let id = 1;

const createTransaction = () => {
  //check if input filled
  const transaction = {
    id: id,
    type: transactionType.value,
    amount: transactionAmount.value,
    date: transactionDate.value,
    notes: transactionNotes.value,
  };
  id += 1;

  localStorage.setItem(`${id}`, JSON.stringify(transaction));
};
submitBtn.addEventListener("click", createTransaction);
