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
