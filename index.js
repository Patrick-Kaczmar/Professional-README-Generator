// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./generateMarkdown")
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of the apllication?",
        name: "title",
    },
    {
        type: "input",
        message: "please add a project description:",
        name: "description",
    },
    {
        type: "input",
        message: "What are the steps required to install your aplication?",
        name: "installation",
    },
    {
        type: "input",
        message: "Please provide any instructions required to use this application:",
        name: "usageInformation",
    },
    {
        type: "input",
        message: "please add any contribution guidelines:",
        name: "contributionGuidelines",
    },
    {
        type: "input",
        message: "please add test examples for your application for others to view:",
        name: "testInstructions",
    },
    {
        type: "list",
        message: "please pick a license for your application:",
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 universal", "Eclipse Public License 2.0", "GNU Affero general Public License v3.0", "GNU General Publice License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The unlicense"],
        name: "license",
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
]).then((response) => {
    console.log(response)
    // TODO: Create a function to write README file
    fs.writeFile("README.md", `${generateMarkdown(response)}`, err => {
        if (err) console.error(err);
        console.log("successfuly written readme file!")
    });
});


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();