//Include packages needed for app
const generateHTML = require("./dist/generateHTML");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const teamMembers = [];

var managerQuestions = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter your name.",
        name: "managerName",
      },
      {
        type: "input",
        message: "Please enter your employee ID number.",
        name: "managerID",
      },
      {
        type: "input",
        message: "Please enter your email address.",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "Please enter your office number.",
        name: "officeNumber",
      },
    ])
    .then((data) => {
      //use data to create manager object using Manager class
      const newManager = new Manager(
        data.managerName,
        data.managerID,
        data.managerEmail,
        data.officeNumber
      );
      teamMembers.push(newManager);
      managerChoice();
    });
};

var managerChoice = function () {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Add an engineer.",
          "Add an intern.",
          "Im done adding team members. (Generate HTML)",
        ],
        name: "managerChoice",
      },
    ])
    .then((data) => {
      if (data.managerChoice === "Add an engineer.") {
        engineerQuestions();
      } else if (data.managerChoice === "Add an intern.") {
        internQuestions();
      } else {
        generateHTML(teamMembers);
      }
    });
};

var engineerQuestions = function () {
  inquirer
    .prompt([
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
    ])
    .then((data) => {
      //use data to create engineer object using Engineer class
      const newEngineer = new Engineer(
        data.employeeName,
        data.employeeID,
        data.employeeEmail,
        data.engineerGithub
      );
      teamMembers.push(newEngineer);
      managerChoice();
    });
};

var internQuestions = function () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter interns name.",
        name: "internName",
      },
      {
        type: "input",
        message: "Please enter the intern ID number.",
        name: "internID",
      },
      {
        type: "input",
        message: "Please enter the interns email address.",
        name: "internEmail",
      },
      {
        type: "input",
        message: "Please enter the interns school.",
        name: "internSchool",
      },
    ])
    .then((data) => {
      const newIntern = new Intern(
        data.internName,
        data.internID,
        data.internEmail,
        data.internSchool
      );
      teamMembers.push(newIntern);
      managerChoice();
    });
};
//function to write README file
const writeHTMLFile = (html) =>
  fs.writeFile("index.html", html, (err) =>
    err
      ? console.log(err)
      : console.log("Success! Your index.html has been created.")
  );

managerQuestions();
