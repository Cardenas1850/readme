// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'github',
        message: "Please enter your Github username."
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: "Please enter the title of your project."
    },
    {
        type: 'input',
        name: 'description',
        message: "Please enter the description of your project."
    },
    {
        type: 'list',
        name: 'liscense',
        message: 'Select the license for your project:',
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2", "BSD3", "None"],
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide any instructions for installation or commands to install any dependences'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide the input to run any tests'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe any information a user might need to know to use this repo'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list all contributors'

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();