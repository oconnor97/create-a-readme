// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (data.license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
  } else if (data.license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-lightgreen.svg)]'
  } else if (data.license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-lightblue.svg)]'
  } else { return '' }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  } else if (data.license === 'Apache 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } else if (data.license === 'GPL 3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (data.license === 'BSD 3') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  } else { return '' }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === 'None') {
    return ''
  } else {
    return `
  ## License 
  * ${data.license}, to view License information click the badge below!
  * ${renderLicenseBadge(data)}${renderLicenseLink(data)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ## Table of Contents
    - [Description](#Description)
    - [Technologies](#Technologies)
    - [License](#License)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Contributions](#Contributions)
    - [Support](#Support)
  
  
  ## Description 
    * ${data.description}
  
  
  ${renderLicenseSection(data)}

  
  ## Technologies 
  
    * JavaScript
    * NodeJs
    * Markdown
    * Inquirer
    * FS
  
 


  ## Installation 
  
    * To install the dependencies run ${data.commandInstall} in the command line.
    * To run tests enter ${data.runTest} to the command line
  
  ## Usage
    ${data.information}
  
  
  ## Contributions 
    ${data.userContribution}
  
  
  ## Support
  
  If you have any questions contact ${data.name}, at ${data.email} or on github at https://github.com/${data.gitHub}
  
  
  

`;
}

module.exports = generateMarkdown;
