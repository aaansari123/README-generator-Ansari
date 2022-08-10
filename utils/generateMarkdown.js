// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == 'MIT'){
        return `[![MIT Badge](https://https://img.shields.io/badge/license-MIT-green)](https://choosealicense.com/licenses/mit/)`
    }else if (license == 'GNU GPLv3'){
        return `[![MIT Badge](https://https://img.shields.io/badge/license-GNU_GPLv3-green)](https://choosealicense.com/licenses/gpl-3.0/)`
    }else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    
    if (license == 'MIT'){
        return `[MIT](https://choosealicense.com/licenses/mit/)`
    } else if (license == 'GNU GPLv3'){
        return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`
    }else{
        return 'no license'
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, install, usage, contribution, test, license, github, email}) {
  return `# ${title}

  ${renderLicenseBadge(license)}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${install}
  
  ## Usage
  
  ${usage}
  
  ## License
  
  ${renderLicenseLink(license)}
  
  ## How to Contribute
  
  ${contribution}
  
  ## Tests
  
  ${test}
  
  ## Questions
  My github can be found at [www.github.com/${github}](www.github.com/${github})<br/>
  You can reach me via email at [${email}](${email})
  `;
}

module.exports = generateMarkdown;