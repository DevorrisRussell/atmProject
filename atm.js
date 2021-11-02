"use strict";
//TODO: Import necessary values from account.js
const {money} = require("./account")
const {pin} = require("./account")

function getBalance() { 
  let yourBalance = prompt("Do you want to see balance? 'yes' or 'no'",
  yesNo);  {
    if ( userinput === yes) return console(getBalance);
  } 
  
  
  //TODO: Return the customer's acct. balance
}

function withdraw(withdrawAmount) { 
  let withdraw = prompt("How much do you want to withdraw? ") 
  let takeMoney = money;
  let value = 
 while (value) {}
  
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
}

function deposit(depositAmount) {
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
}

function validatePin(enteredPin) { if (
    input.pin === pin) return true; else {
      return false; 
    }
  }; return alert("You entered the wrong pin?")


  function yesNo(input) {
    if (input.toLowerCase() == "yes" || input.toLowerCase() == "no") {
      return true;
    } else {
      return false;
    }
  }
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
}

function atm() {
  return {
  balance: getBalance,
  getMoney: withdraw,
  giveMoney: deposit,
  pinNumber: validatePin,
  valid: yesNo,}
};

module.exports = atm;