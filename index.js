const inquirer = require("inquirer");
const mysql = require("mysql");
const dbFunc = require("./assets/database.js");

const questions = [
  {
    type: "list",
    name: "saveInfo",
    message: "options",
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
async function handleAnswers(answers) {
  if (answers.saveInfo === "Add Department") {
    await dbFunc.insertDepartment();
    displayMenu();
  }
  if (answers.saveInfo === "View Departments") {
    dbFunc.departments().then((res) => {
      console.table(res);
      displayMenu();
    });
  }
  if (answers.saveInfo === "Add Role") {
    dbFunc.roles();
  }
  if (answers.saveInfo === "View Roles") {
    dbFunc.roles().then((res) => {
      console.table(res);
      displayMenu();
    });
  }
  if (answers.saveInfo === "Add Employee") {
    dbFunc.insertEmployees();
  }
  if (answers.saveInfo === "View Employees") {
    dbFunc.employees().then((res) => {
      console.table(res);
      displayMenu();
    });
  }
}
function displayMenu() {
  inquirer.prompt(questions).then(handleAnswers);
}

displayMenu();
