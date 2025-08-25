// Log Out Button
document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// add money
document
  .getElementById("add-money-main-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const validPin = 1971;
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("pin-number").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }
    if (validPin !== pinNumber) {
      alert("Please provide valid pin");
      return;
    }

    const newAvailableBalance = addAmount + availableBalance;

    document.getElementById("available-balance").innerText =
      newAvailableBalance;
  });

// cashout

document
  .getElementById("cashout-main-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("Cashout is working")
    const agentNumber = document.getElementById("agent-number").value;
    const amountWithdraw = parseInt(
      document.getElementById("amount-withdraw").value
    );
    const agentPin = parseInt(document.getElementById("agent-pin").value);
    // console.log(agentNumber, amountWithdraw ,agentPin);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    const newAvailableBalance = availableBalance - amountWithdraw;
    document.getElementById("available-balance").innerText =
      newAvailableBalance;
  });

// Transfer Money
document
  .getElementById("send-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const transferAmount = parseInt(
      document.getElementById("transfer-amount").value
    );
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const newAvailableBalance = availableBalance - transferAmount;
    document.getElementById("available-balance").innerText = newAvailableBalance;
  });

// toggling feature
document.getElementById("add-money-btn").addEventListener("click", function () {
  // console.log("add money is working")
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("get-bonus-parent").style.display = "none";
  document.getElementById("paybill-parent").style.display = "none";
  document.getElementById("transactions-parent").style.display = "none";

  document.getElementById("add-money-parent").style.display = "block";
});
document.getElementById("cashout-btn").addEventListener("click", function () {
  // console.log("add money is working")
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("get-bonus-parent").style.display = "none";
  document.getElementById("paybill-parent").style.display = "none";
  document.getElementById("transactions-parent").style.display = "none";

  document.getElementById("cashout-parent").style.display = "block";
});

document.getElementById("transfer-btn").addEventListener("click", function () {
  // console.log("add money is working")
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cashout-parent").style.display = "none";
  // document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("get-bonus-parent").style.display = "none";
  document.getElementById("paybill-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "block";
  document.getElementById("transactions-parent").style.display = "none";
});

document.getElementById("bonus-btn").addEventListener("click", function () {
  // console.log("add money is working")
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("transactions-parent").style.display = "none";

  document.getElementById("paybill-parent").style.display = "none";
  document.getElementById("get-bonus-parent").style.display = "block";
});
document.getElementById("paybill-btn").addEventListener("click", function () {
  // console.log("add money is working")
  document.getElementById("cashout-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("transfer-money-parent").style.display = "none";
  document.getElementById("get-bonus-parent").style.display = "none";
  document.getElementById("transactions-parent").style.display = "none";
  document.getElementById("paybill-parent").style.display = "block";
});
document
  .getElementById("transactions-btn")
  .addEventListener("click", function () {
    // console.log("add money is working")
    document.getElementById("cashout-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("paybill-parent").style.display = "none";

    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("transactions-parent").style.display = "block";
  });
