// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

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
