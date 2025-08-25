document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber =15600648831
    const acoountPin = 1971;

    const number = parseInt(document.getElementById("mobile-number").value);
    const pin = parseInt(document.getElementById("pin-number").value)

    if(number === mobileNumber && pin === acoountPin){
        window.location.href = "./payoo-home.html"
        
    }else{
        alert("Invalid credentials")
    }
  });
