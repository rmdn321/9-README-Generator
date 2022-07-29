// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description about your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the instructions to be followed to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the steps to be followed to use your project?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How can someone contribute to your project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How can someone run tests associated with your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project have?',
    choices: ['MIT', 'APACHE 2.0', 'IBM Public License Version 1.0', 'Mozilla Public License 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your GitHub email address?',
  },
 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((userAnswers) => {
    console.log('Generating the README file...');
    writeToFile('README.md', generateMarkdown({ ...userAnswers }));
    })
    .catch( err => {
      console.log(err);
    });
}

// Function call to initialize app
init();
