//prompt the user to enter the service amount
var amount= document.getElementById("amount");


// function to verify a valid service quality was entered.
//If an invalid value is entered, display a message and end the code.

function serviceQuality() {
  let quality = document.querySelector('input[name="quality"]:checked');
  if (!quality) {
    alert("Please select a service quality.");
    return false;
  }
  return true;
}
//Create a function to verify a service amount between $5.00 and $500.00 was entered.
//If an invalid value is entered, display a message and end the code.

function billAmount() {
  let amount = document.getElementById("amount").value;
  if (amount < 5 || amount > 500) {
    alert("Invalid Please enter service amount between $");
    return false;
  }
  return true;
}


//create a function to calculate the tip amount and return the value.
//If valid values are entered, call the function to calculate the tip. The tip amount is displayed to the user in a descriptive message that includes the service amount, the recommended tip, and the service quality the tip is based and the sum of the tip and service quality //

function calculateTip(amount, quality) {
  let tipPercentage;
  if (quality === "great") {
    tipPercentage = 0.2;
  } else if (quality === "ok") {
    tipPercentage = 0.15;
  } else if (quality === "poor") {
    tipPercentage = 0.1;
  }
  let tipAmount = amount * tipPercentage;
  return tipAmount;
}

function displayTip() {
  if (!billAmount() || !serviceQuality()) {
    return;
  }
  let amount = document.getElementById("amount").value;
  let quality = document.querySelector('input[name="quality"]:checked').value;
  
  let tipAmount = calculateTip(amount, quality);
  let totalAmount = parseFloat(amount) + parseFloat(tipAmount);
  
  let result = document.getElementById("result");
  result.innerHTML = "Your Service amount is $" + amount + ", based on the quality of service (" + quality + "), the recommended tip amount is $" + tipAmount.toFixed(2) + ". The  total bill is $" + totalAmount.toFixed(2) + ".";
}
