import inquirer from "inquirer"
import { listenerCount } from "node:process";
import { dot } from "node:test/reporters";

let myBalance =0;

let isContinue : true ;

const pinCode =1234;

const message = "welcome to ATM";

console.log(message);

let pin_ans = await inquirer.prompt({
     type: "number",
     name: "ans",
     message: "please enter pin code:"
})

if(pin_ans.ans === 1234){
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "select my option",
            choices: ["Deposite","Withdrawl","Fast Cash","Balance Check"],
        })
    
    //-------------------------------------------Deposite----------------------------------------------
    
    if(ans.list === "Deposite"){
        let ans = await inquirer.prompt({
            type: "number",
            name: "Deposite_Amount",
            message: "Please enter your amount:"
    })
    if(ans.Deposite_Amount > 0){
        myBalance = myBalance + ans.Deposite_Amount
        console.log(myBalance);
       }
    }
    
    //---------------------------------------------Withdrawl-----------------------------------------------
    
    else if(ans.list === "Withdrawl"){
        let ans = await inquirer.prompt({
            type: "number",
            name: "Withdrawl_Amount",
            message: "Please enter your amount:"
    
        })
    
    if(ans.Withdrawl_Amount <= myBalance){
        myBalance = myBalance - ans.Withdrawl_Amount
        console.log(myBalance);
    }else{
        console.log("Not enough money");
       }
    }
    
    //---------------------------------------------Fast Cash-------------------------------------------------
    
    else if(ans.list === "Fast Cash"){
        let ans = await inquirer.prompt({
            type: "list",
            name: "Fast Cash",
            message: "Please select one",
            choices: ["500" , "1000" , "2000"],
        })
    
        if (ans.Fast_Cash <= myBalance){
       if(ans.Fast_Cash === "500"){
        myBalance -= ans.Fast_Cash
        console.log(myBalance);
    
    
    }else if(ans.Fast_Cash === "1000"){
        myBalance -= ans.Fast_Cash
        console.log(myBalance);
    
       }else if(ans.Fast_Cash === "2000"){
        myBalance -= ans.Fast_Cash
        console.log(myBalance);
        }
      }
    }
    
    // -----------------------------------------Balance Check--------------------------------------
    else if(ans.list === "Balance Check"){
        console.log(`your balance is ${myBalance}`);
        
    }
    
    //------------------------------------------While condition------------------------------------
    
    let while_ans = await inquirer.prompt({
        type: "confirm",
        name: "condition",
        message: "Do you want to continue:"
    })
    
    if(while_ans.condition === false){
        isContinue = false
    
    }
    
    } while (isContinue);
}
else{
    console.log("invelid pin code");
}
