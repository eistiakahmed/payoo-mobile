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
    const validPin = 1971;
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
    if (agentNumber.length !== 11) {
      alert("please enter the valid number");
      return;
    }

    if (validPin !== agentPin) {
      alert("Please provide valid pin");
      return;
    }

    const newAvailableBalance = availableBalance - amountWithdraw;
    document.getElementById("available-balance").innerText =
      newAvailableBalance;
  });

// Transfer Money
document
  .getElementById("send-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const validPin = 1971;
    const userAccountNumber = document.getElementById(
      "user-account-number"
    ).value;
    const transferAmount = parseInt(
      document.getElementById("transfer-amount").value
    );
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const tranferPin = parseInt(document.getElementById("transfer-pin").value);
    if (userAccountNumber.length !== 11) {
      alert("please enter the valid number");
      return;
    }

    if (validPin !== tranferPin) {
      alert("Please provide valid pin");
      return;
    }
    const newAvailableBalance = availableBalance - transferAmount;
    document.getElementById("available-balance").innerText =
      newAvailableBalance;
  });

// get bonus
document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const secretCouponCode = "EISTIAK@!!";
    const button = document.getElementById("get-bonus-btn");
    const couponCode = document.getElementById("coupon-code").value;
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    if (secretCouponCode === couponCode) {
      const newAvailableBalance = availableBalance + 10000;
      document.getElementById("available-balance").innerHTML =
        newAvailableBalance;
      button.innerText = "Congratulations you got the Bonus 🎉";
      button.style.backgroundColor = "green";
    } else {
      alert("Coupon Code Invalid");
    }
    couponCode.value = "";
  });

// Pay Bill
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pinValid = 1971;
    const payBill = document.getElementById("pay-bill").value;
    const payAccount = document.getElementById("pay-account").value;
    const amountToPay = parseInt(
      document.getElementById("amount-to-pay").value
    );
    const paybillPin = parseInt(document.getElementById("paybill-pin").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (payAccount.length !== 11) {
      alert("please enter the valid number");
      return;
    }

    if (paybillPin !== pinValid) {
      alert("Please provide valid pin");
      return;
    }
    const newAvailableBalance = availableBalance - amountToPay;
    document.getElementById("available-balance").innerText =
      newAvailableBalance;
      
      // remove input info
    document.getElementById("pay-bill").value = "";
    document.getElementById("pay-account").value = "";
    document.getElementById("amount-to-pay").value = "";
    document.getElementById("paybill-pin").value = "";
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
