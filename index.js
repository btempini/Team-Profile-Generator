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
  "What would you like to do?",
];

//function to write README file
const writeHTMLFile = (html) =>
  fs.writeFile("index.html", html, (err) =>
    err
      ? console.log(err)
      : console.log("Success! Your index.html has been created.")
  );

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "managerName",
      },
      {
        type: "input",
        message: questions[1],
        name: "managerID",
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
      {
        type: "list",
        message: questions[4],
        choices: [
          "Add an engineer.",
          "Add an intern.",
          "I am finished building my team.(Create HTML)",
        ],
        name: "toDo",
      },
    ])
    .then((data) => {
      if (data.toDo === "Add an engineer.") {
        inquirer.prompt([
          {
            type: "input",
            message: "Please enter engineers name.",
            name: "employeeName",
          },
          {
            type: "input",
            message: "Please enter the employees ID number.",
            name: "employeeID",
          },
          {
            type: "input",
            message: "Please enter the employees email address.",
            name: "employeeEmail",
          },
          {
            type: "input",
            message: "Please enter the engineers github profile URL.",
            name: "engineerGithub",
          },
        ]);
      } else if (data.toDo === "Add an intern.") {
        inquirer.prompt([
          {
            type: "input",
            message: "Please enter interns name.",
            name: "employeeName",
          },
          {
            type: "input",
            message: "Please enter the interns ID number.",
            name: "employeeID",
          },
          {
            type: "input",
            message: "Please enter the interns email address.",
            name: "employeeEmail",
          },
          {
            type: "input",
            message: "Please enter the interns school name.",
            name: "internSchool",
          },
        ]);
      }
    });
}

// .then((data) => {
//   const generatedResult = generateHTML(data);
//   // writeHTMLFile(generatedResult);
// });

init();
