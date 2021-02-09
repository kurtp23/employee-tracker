const inquirer = require("inquirer");
const mysql = require("mysql");

const questions = [
  {
    type: "list",
    name: "saveInfo",
    message: "Would you like to save this information?",
    choices: [
      "Add Department",
      "View Departments",
      "Add Role",
      "View Roles",
      "Add Employee",
      "View Employees",
    ],
  },
];
function handleAnswers(answers) {
  if (answers.saveInfo === "play") {
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "feed") {
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "go outside") {
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "go inside") {
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "sleep") {
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "Ruin Furniture") {
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "Buy Furniture") {
    inquirer.prompt(questions).then(handleAnswers);
  }
}
inquirer.prompt(questions).then(handleAnswers);
