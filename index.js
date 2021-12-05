"use strict";
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions
let {getBalance, withdraw, deposit, validate} = require("./atm")
const prompt = require("prompt-sync")();


function accessATM() {
  let validated = false
  while(validated === false) {
    let userInput = prompt("What is your Pin Code?")
    validated = validate(userInput)
  }

} 
accessATM

//TODO: Call accessATM function

function mainMenu() {


  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
  let complete = false;
  while(complete === false){
    let userInput = prompt("Which option? 1 - balance 2 - deposit 3 - withdrawal 4 - restart 5 - quit")
    switch(userInput){
      case "1":
        console.log(getBalance())
        break;
        case "2":
          let depositAmount = prompt("How much would you like to deposit?");
          deposit(depositAmount);
          break;
          case "3":
            let withdrawAmount = prompt("How much would you like to withdraw?");
            
    }
  }
}

//TODO: Call mainMenu function to start our app!
