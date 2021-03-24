// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'descripton',
            message: 'Provide a short description of your project.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license is needed for this project?',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'commandInstall',
            message: 'What command should be run to install dependencies?'
        },
        {
            type: 'input',
            name: 'runTest',
            message: 'What command should be run tests?'
        },
        {
            type: 'input',
            name: 'userInfo',
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: 'input',
            name: 'userContribution',
            message: 'What does the user need to know about contributing to the repo?'
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
