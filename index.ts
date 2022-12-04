#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';
import { type } from "os";

//greet the user
//ask user name
//ask for first number
//ask for operation
//ask for second number
//show result
//ask if user wants to do another calculation

console.log(chalk.bold.blue(`\n\n-----My Calculator-----\n\n`));

function greetUser(msg: string) {
  console.log(msg);
}


async function getUserInput(): Promise<void> {
  const answers = await inquirer.prompt([
    {
      type: `input`,
      name: `name`,
      message: `\nPlease enter your name:`,
      validate: function (input) {
        if (input === "") {
          return chalk.red(`Please enter a name:`);
        } else {
          return true;
        }
      },
    },
    {
      type: `input`,
      name: `firsNum`,
      message: `Please provide first number:`,
      validate: function (input) {
        if (isNaN(input) || input === "") {
          return chalk.red(`Please enter a valid number.`);
        } else {
          return true;
        }
      },
    },
    {
      type: `list`,
      name: `operator`,
      message: `Please select your desired operator:`,
      choices: ["+", "-", "x", "/", "x^y", "%"],
    },
    {
      type: `input`,
      name: `secondNum`,
      message: `Please provide second number:`,
      validate: function (input) {
        if (isNaN(input) || input === "") {
          return chalk.red(`Please enter a valid number.`);
        } else {
          return true;
        }
      },
    },
  ]);

  console.log(`\n`);
  
  const num1 = Number(answers.firsNum);
  const num2 = Number(answers.secondNum);
  const operation = answers.operator;

  switch (operation) {
    case "+":
      console.log(`Answer = ${num1 + num2}`);
      break;
    case "-":
      console.log(`Answer = ${num1 - num2}`);
      break;
    case "x":
      console.log(`Answer = ${num1 * num2}`);
      break;
    case "/":
      console.log(`Answer = ${num1 / num2}`);
      break;
    case "x^y":
      console.log(`Answer = ${num1 ** num2}`);
      break;
    case "%":
      console.log(`Answer = ${num1 % num2}`);
      break;
  }

  console.log(`\n`);
  
  const confirm = await inquirer.prompt([
    {
      name: `confirm`,
      message: `Do you want to do another calculation?`,
      type: "confirm",
    },
  ]);
  again = confirm.confirm;
}

let again = false;

greetUser(`Welcome to my calculator.`);
console.log(`\n`);

do {
  await getUserInput();
} while (again)
