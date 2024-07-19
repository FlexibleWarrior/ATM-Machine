import inquirer from "inquirer";
let myBalance = 0;
let isContinue;
const pinCode = 1234;
const message = "welcome to ATM";
do {
    let ans = await inquirer.prompt({
        type: "list",
        name: "list",
        message: "select my option",
        choices: ["Deposite", "Withdrawl", "Fast Cash", "Balance Check"],
    });
    //-------------------------------------------Deposite----------------------------------------------
    if (ans.list === "Deposite") {
        let ans = await inquirer.prompt({
            type: "number",
            name: "Deposite_Amount",
            message: "Please enter your amount:"
        });
        if (ans.Deposite_Amount > 0) {
            myBalance = myBalance + ans.Deposite_Amount;
            console.log(myBalance);
        }
    }
    //---------------------------------------------Withdrawl-----------------------------------------------
    else if (ans.list === "Withdrawl") {
        let ans = await inquirer.prompt({
            type: "number",
            name: "Withdrawl_Amount",
            message: "Please enter your amount:"
        });
        if (ans.Withdrawl_Amount <= myBalance) {
            myBalance = myBalance - ans.Withdrawl_Amount;
            console.log(myBalance);
        }
        else {
            console.log("Not enough money");
        }
    }
    //---------------------------------------------Fast Cash-------------------------------------------------
    else if (ans.list === "Fast Cash") {
        let ans = await inquirer.prompt({
            type: "list",
            name: "Fast Cash",
            message: "Please select one",
            choices: ["500", "1000", "2000"],
        });
        if (ans.Fast_Cash <= myBalance) {
            if (ans.Fast_Cash === "500") {
                myBalance -= ans.Fast_Cash;
                console.log(myBalance);
            }
            else if (ans.Fast_Cash === "1000") {
                myBalance -= ans.Fast_Cash;
                console.log(myBalance);
            }
            else if (ans.Fast_Cash === "2000") {
                myBalance -= ans.Fast_Cash;
                console.log(myBalance);
            }
        }
    }
} while (true);
