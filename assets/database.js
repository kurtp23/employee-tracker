const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const util = require("util");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employee_db",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});
connection.query = util.promisify(connection.query);

function employees() {
  return connection.query(`
  SELECT e1.first_name, e1.last_name, r.title AS  "role", r.salary, CONCAT (e2.first_name,' ',e2.last_name) AS Manager
  FROM employees AS e1
  LEFT JOIN roles AS r
  ON e1.role_id = r.id
  LEFT JOIN employees AS e2
  ON e1.manager_id = e2.id;
  `);
}
function departments() {
  return connection.query("SELECT * FROM departments");
}
function roles() {
  return connection.query(`
  SELECT title AS Role, salary AS Salary
  FROM roles `);
}
function insertRoles() {
  const questions = [
    {
      type: "input",
      name: "newTitle",
      message: "Enter new title",
    },
    {
      type: "input",
      name: "newSalary",
      message: "Enter new salary.",
    },
    {
      type: "input",
      name: "newDepartmentId",
      message: "Enter role id.",
    },
  ];

  function handleInput(answers) {
    connection.query(
      `INSERT INTO roles (title, salary, department_id)
      VALUES ("${answers.newTitle}", ${answers.newSalary}, ${answers.newDepartmentId})`,
      function (err, res) {
        if (err) throw err;
      }
    );
  }
  inquirer.prompt(questions).then(handleInput);
}

function insertEmployees() {
  const questions = [
    {
      type: "input",
      name: "newFname",
      message: "Enter first name",
    },
    {
      type: "input",
      name: "newLname",
      message: "Enter last name.",
    },
    {
      type: "input",
      name: "newRole_id",
      message: "Enter role id.",
    },
    {
      type: "input",
      name: "newManager_id",
      message: "Enter manager id.",
    },
  ];

  function handleInput(answers) {
    connection.query(
      `INSERT INTO employees (first_name, last_name, role_id, manager_id)
      VALUES ("${answers.newFname}","${answers.newLname}", ${answers.newRole_id}, ${answers.newManager_id})`,
      function (err, res) {
        if (err) throw err;
      }
    );
  }
  inquirer.prompt(questions).then(handleInput);
}

async function insertDepartment() {
  const questions = [
    {
      type: "input",
      name: "newDepartment",
      message: "Enter name of new Department.",
    },
  ];

  function handleInput(answers) {
    return connection.query(
      `INSERT INTO departments (name)
    VALUES ("${answers.newDepartment}")`
    );
  }
  return inquirer.prompt(questions).then(handleInput);
}

module.exports = {
  employees,
  departments,
  roles,
  insertDepartment,
  insertEmployees,
  insertRoles,
};
