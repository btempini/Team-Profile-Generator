//Include packages needed for app
const generateHTML = require("./dist/generateHTML");
const inquirer = require("inquirer");
const fs = require("fs");

//Array of questions for user
const questions = [
  "Please enter your name.",
  "Please enter your employee ID.",
  "Please enter your email address.",
  "Please enter your office number.",
];

//function to write README file
const writeHTMLFile = (html) =>
  fs.writeFile("index.html", html, (err) =>
    err
      ? console.log(err)
      : console.log("Success! Your index.html has been created.")
  );

function init() {
  inquirer.prompt([
    {
      type: "input",
      message: questions[0],
      name: "name",
    },
    {
      type: "input",
      message: questions[1],
      name: "employeeID",
    },
    {
      type: "input",
      message: questions[2],
      name: "emailAddress",
    },
    {
      type: "input",
      message: questions[3],
      name: "officeNumber",
    },
  ]);
}

init();
