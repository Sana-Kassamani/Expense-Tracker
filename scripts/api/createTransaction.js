const typeOfTransaction = {
  0: "Expense",
  1: "Income",
};
if(!localStorage.getItem("ID") )
{
    localStorage.setItem("ID".0)
}
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
  window.location.reload();
};
submitBtn.addEventListener("click", createTransaction);

const getAllTransactions = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const transaction = JSON.parse(localStorage.getItem(key));
    displayTransaction(transaction);
  }
};
getAllTransactions();
