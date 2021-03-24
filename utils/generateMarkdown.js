// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  return `![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)`
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  } else if(data.license === 'Apache 3.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } else if(data.license === 'GPL 3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if(data.license === 'BSD 3') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  } else {return ''}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ## Table of Contents
   * Description
   * Technologies
   * Licenses
   * Installation
   * Usage
   * Constibutions
   * Support
  
  
  ## Description 
   * ${data.description}
  
  
  ## Technologies 
  
  * JavaScript
  * NodeJs
  * Markdown
  * Inquirer
  * FS
  
  ## Licenses 
  
   * ${data.license}
   * ${renderLicenseBadge(data)}
  
  ## Instalation 
  
  * To install the dependencies run ${data.commandInstall} in the command line.
  * To run tests enter ${data.runTest} to the command line
  
  ## Usage
  ${data.userIfo}
  
  
  ## Contributions 
  ${data.userContribution}
  
  
  ## Support
  
  If you have any questions contact ${data.name}, at ${data.email} or on github at https://github.com/${data.gitHub}
  
  
  

`;
}

module.exports = generateMarkdown;
