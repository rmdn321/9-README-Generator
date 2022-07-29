// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `${renderLicenseBadge(answers.license)}
# ${answers.name}
### Table of Contents 

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(answers.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Contact](#contact)

#### Description

${answers.description}

#### Installation

${answers.installation}

#### Usage

${answers.usage}

${renderLicenseSection(answers.license)}
  
#### Contributing

${answers.contributing}

#### Tests

${answers.test}

#### Contact

 Email: ${answers.email }
 GitHub: [https://github.com/${answers.username}](https://github.com/${answers.username}/)
`;
}

module.exports = generateMarkdown;
