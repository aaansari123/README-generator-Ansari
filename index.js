// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['Enter the project title', 
'Enter a description of your project',
'Enter installation instructions for your project',
'Enter usage information for your project',
'Enter contribution guidelines for your project',
'Enter test instructions for your project',
'Choose one of the following licenses',
'Enter your Github username',
'Enter your email'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'install',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'contribution',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'test',
      message: questions[5],
    },
    {
        type: 'list',
        name: 'license',
        message: questions[6],
        choices: ['MIT', 'GNU GPLv3', 'none']
      },
      {
        type: 'input',
        name: 'github',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[8],
      },
  ])
  .then((answers) => {
    const pageContent = generateMarkdown(answers);
    console.log(answers);
    fs.writeFile('README.md', pageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
}

// Function call to initialize app
init();
