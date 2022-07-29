// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'IBM Public License Version 1.0') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } else if (license === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return `[![License: No License](https://https://img.shields.io/badge/License-No%20License-lightgrey.svg)]`
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `#### License

This project uses the ${license} license.`;
  }
  return '';
}

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

${answers.contribution}

#### Tests

${answers.test}

#### Contact

 Email: ${answers.email }
 GitHub: [https://github.com/${answers.username}](https://github.com/${answers.username}/)
`;
}

module.exports = generateMarkdown;
