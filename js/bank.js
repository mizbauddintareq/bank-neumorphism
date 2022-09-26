document.getElementById("deposit-btn").addEventListener("click", function () {
  const getNewDeposit = document.getElementById("new-deposit");
  const newDeposit = parseFloat(getNewDeposit.value);

  getNewDeposit.value = "";

  if (newDeposit > 0) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Deposit Successful",
      showConfirmButton: false,
      timer: 1000,
    });
  } else if (newDeposit <= 0) {
    Swal.fire({
      icon: "error",
      title: "enter some amount",
    });
  } else if (isNaN(newDeposit)) {
    Swal.fire({
      icon: "error",
      title: "enter valid amount",
    });
    return;
  }
  const getPreviousDeposit = document.getElementById("deposit");
  const perviousDeposit = parseFloat(getPreviousDeposit.innerText);

  const totalDeposit = newDeposit + perviousDeposit;
  getPreviousDeposit.innerText = totalDeposit;

  const getPreviousBalance = document.getElementById("balance");
  const perviousBalance = parseFloat(getPreviousBalance.innerText);
  const totalBalance = newDeposit + perviousBalance;

  getPreviousBalance.innerText = totalBalance;
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const getNewWithdraw = document.getElementById("new-withdraw");
  const newWithdraw = parseFloat(getNewWithdraw.value);

  getNewWithdraw.value = "";

  if (isNaN(newWithdraw)) {
    Swal.fire({
      icon: "error",
      title: "enter valid amount",
    });
    return;
  } else if (newWithdraw <= 0) {
    Swal.fire({
      icon: "error",
      title: "enter some amount",
    });
    return;
  } else if (newWithdraw > 0) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "withdraw Successful",
      showConfirmButton: false,
      timer: 1000,
    });
  }
  const getPreviousWithdraw = document.getElementById("withdraw");
  const previousWithdraw = parseFloat(getPreviousWithdraw.innerText);

  const getPerviousBalance = document.getElementById("balance");
  const perviousBalance = parseFloat(getPerviousBalance.innerText);

  if (newWithdraw > perviousBalance) {
    Swal.fire({
      icon: "error",
      title: "Insufficient Balance",
    });
    return;
  }
  const totalWithdraw = newWithdraw + previousWithdraw;
  getPreviousWithdraw.innerText = totalWithdraw;

  const totalBalance = perviousBalance - newWithdraw;
  getPerviousBalance.innerText = totalBalance;
});
