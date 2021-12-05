"use strict";
//TODO: Import necessary values from account.js
const {pin} = require("./account")
let {balance} = require("./account")

function getBalance() { 
  return balance
  } 
  
  
  //TODO: Return the customer's acct. balance

function withdraw(withdrawAmount) { 
  balance -= parseInt(withdrawAmount)
  console.log(`The new balance is $(balance)`);
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
}

function deposit(depositAmount) {
  balance += parseInt(depositAmount)
  console.log(`The new balance is $(balance)`);
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
}

function validatePin(enteredPin) { 
  if (parseInt(enteredPin) === pin) {
    return true;
  } else return false;
  }

module.export = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validate: validatePin,
};


  
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.


function atm() {
  return {
  balance: getBalance,
  getMoney: withdraw,
  giveMoney: deposit,
  pinNumber: validatePin,
  valid: yesNo,}
};

module.exports = atm;

console.log(balance);