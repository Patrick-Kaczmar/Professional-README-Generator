// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const sf = require("sf")
const generateMarkdown = require("./generateMarkdown")
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title",
    },
    {
        type: "input",
        message: "please add a project description:",
        name: "description",
    },
    {
        type: "input",
        message: "please add installation instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "please add any usage information:",
        name: "usage information",
    },
    {
        type: "input",
        message: "please add any contribution guidelines:",
        name: "contribution guidelines"
    },
    {
        type: "input",
        message: "please add the test instructions:",
        name: "test instructions",
    },
    {
        type: "list",
        message: "please pick a license for your application:",
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 universal", "Eclipse Public License 2.0", "GNU Affero general Public License v3.0", "GNU General Publice License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The unlicense"],
        name: "License"
    },
    {
        type: "input",
        message: "what is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "what is your email address?",
        name: "email",
    }
]).then()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();