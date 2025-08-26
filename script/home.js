// Log Out Button
document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});

//-----------------------------------------------------------Reusable Function-----------------------------------------------------------------//

// function to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputFieldValue = document.getElementById(id).value;
  return inputFieldValue;
}

// function to get innerText

function getAvailableBalance(id) {
  const getAvailableBalanceInnerText = parseInt(
    document.getElementById(id).innerText
  );
  return getAvailableBalanceInnerText;
}

// set InnerText

function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
  return availableBalanceElement;
}

// togging Handle function
function handleTogging(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

// style action rod with togging handle
function handleButtonTogging(id) {
  const formsBtn = document.getElementsByClassName("form-btn");

  for (const form of formsBtn) {
    form.classList.remove(
      "border-[#0874f2]",
      "bg-[#0874f20d]",
      "text-[#0874f2]",
      "font-bold"
    );
    form.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add(
      "border-[#0874f2]",
      "bg-[#0874f20d]",
      "text-[#0874f2]",
      "font-bold"
    );
}

//-----------------------------------------------------------------------------Functionality------------------------------------------------------------------------------//

const validPin = 1971;
const transactionsDate = [];

// add money
document
  .getElementById("add-money-main-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const addAmount = getInputValueNumber("add-amount");

    if(addAmount >= 0){
      alert("Invalid Amount")
      return;
    }
    const pinNumber = getInputValueNumber("pin-number");

    const availableBalance = getAvailableBalance("available-balance");
    if (accountNumber.length < 11) {
      alert("Please provide valid account number");
      return;
    }
    if (validPin !== pinNumber) {
      alert("Please provide valid pin");
      return;
    }

    const newAvailableBalance = addAmount + availableBalance;

    setInnerText(newAvailableBalance);

    const data = {
      name: "add Money",
      date: new Date().toLocaleDateString(),
    };
    transactionsDate.push(data);
    // console.log(transactionsDate)
  });

// cashout

document
  .getElementById("cashout-main-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const validPin = 1971;
    // console.log("Cashout is working")
    const agentNumber = getInputValue("agent-number");
    const amount = getInputValueNumber("amount-withdraw");
    const agentPin = getInputValueNumber("agent-pin");
    const availableBalance = getAvailableBalance("available-balance");
    if (agentNumber.length !== 11) {
      alert("please enter the valid number");
      return;
    }

    if (validPin !== agentPin) {
      alert("Please provide valid pin");
      return;
    }

    const newAvailableBalance = availableBalance - amount;
    setInnerText(newAvailableBalance);

    const data = {
      name: "Cashout",
      date: new Date().toLocaleDateString(),
    };
    transactionsDate.push(data);
    // return transactionsDate;
    // console.log(transactionsDate);
  });

// Transfer Money
document
  .getElementById("send-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const validPin = 1971;
    const userAccountNumber = getInputValue("user-account-number");
    const amount = getInputValueNumber("transfer-amount");
    const availableBalance = getAvailableBalance("available-balance");
    const tranferPin = getInputValueNumber("transfer-pin");

    if (userAccountNumber.length !== 11) {
      alert("please enter the valid number");
      return;
    }

    if (validPin !== tranferPin) {
      alert("Please provide valid pin");
      return;
    }
    const newAvailableBalance = availableBalance - amount;
    setInnerText(newAvailableBalance);

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleDateString(),
    };
    transactionsDate.push(data);
    // console.log(transactionsDate)
  });

// get bonus
document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const secretCouponCode = "EISTIAK@!!";
    const button = document.getElementById("get-bonus-btn");
    const couponCode = getInputValue("coupon-code");
    const availableBalance = getAvailableBalance("available-balance");
    if (secretCouponCode === couponCode) {
      const newAvailableBalance = availableBalance + 10000;
      setInnerText(newAvailableBalance);
      button.innerText = "Congratulations you got the Bonus 🎉";
      button.style.backgroundColor = "green";
    } else {
      alert("Coupon Code Invalid");
    }
    document.getElementById("coupon-code").value = "";

    const data = {
      name: "Get Bonus",
      date: new Date().toLocaleDateString(),
    };
    transactionsDate.push(data);
    // console.log(transactionsDate)
  });

// Pay Bill
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pinValid = 1971;
    const payBill = getInputValue("pay-bill");
    const payAccount = getInputValue("pay-account");
    const amount = getInputValueNumber("amount-to-pay");
    const paybillPin = getInputValueNumber("paybill-pin");
    const availableBalance = getAvailableBalance("available-balance");

    if (payAccount.length !== 11) {
      alert("please enter the valid number");
      return;
    }

    if (paybillPin !== pinValid) {
      alert("Please provide valid pin");
      return;
    }
    const newAvailableBalance = availableBalance - amount;
    setInnerText(newAvailableBalance);


    const data = {
      name: "Paybill",
      date: new Date().toLocaleDateString(),
    };
    transactionsDate.push(data);
    

    // remove input info
    document.getElementById("pay-bill").value = "";
    document.getElementById("pay-account").value = "";
    document.getElementById("amount-to-pay").value = "";
    document.getElementById("paybill-pin").value = "";


    
  });

// Transactions
document
  .getElementById("transactions-btn")
  .addEventListener("click", function () { 
    const transactionsContainer = document.getElementById("transaction-container")
    transactionsContainer.innerText = "";
    for(const date of transactionsDate){
      const div = document.createElement("div")
      div.innerHTML = `
      <div  class="bg-white rounded-2xl p-3 mx-5 flex justify-between items-center mt-3">
          <div class="flex items-center gap-3">
            <div class=" p-3 rounded-full bg-[#f4f5f7]">
              <img src="./assets/wallet1.png" alt="">
            </div>
            <div class="">
              <h1 class="font-semibold">${date.name}</h1>
              <p class="text-[12px] font-medium text-[#000000a8]">${date.date}</p>
            </div>
            
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      `

      transactionsContainer.appendChild (div);
    }
  });

//------------------------------------------------------toggling feature---------------------------------------------------------------//

document.getElementById("add-money-btn").addEventListener("click", function () {
  handleTogging("add-money-parent");
  handleButtonTogging("add-money-btn");
});
document.getElementById("cashout-btn").addEventListener("click", function () {
  handleTogging("cashout-parent");
  handleButtonTogging("cashout-btn");
});

document.getElementById("transfer-btn").addEventListener("click", function () {
  handleTogging("transfer-money-parent");
  handleButtonTogging("transfer-btn");
});

document.getElementById("bonus-btn").addEventListener("click", function () {
  handleTogging("get-bonus-parent");
  handleButtonTogging("bonus-btn");
});
document.getElementById("paybill-btn").addEventListener("click", function () {
  handleTogging("paybill-parent");
  handleButtonTogging("paybill-btn");
});
document
  .getElementById("transactions-btn")
  .addEventListener("click", function () {
    handleTogging("transactions-parent");
    handleButtonTogging("transactions-btn");
  });
