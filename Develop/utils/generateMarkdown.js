// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ``
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "None") {
        return (`*[${license}License](#license)`)
    }
    return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        return (
            `<h2 id='license'>License</h2>
      Copyright © ${license}. All rights reserved.
      
      Lincensed under the ${license} license.`
        )
    }
    return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return (
        `<h1 id='title'> ${data.projectTitle} </h1>

      ${renderLicenseBadge(data.license)}

      <h2 id='contents'>Table of Contents</h2>

      *[Description](#description)\n
      ${renderLicenseLink(data.license)}\n
      * [Installation](#installation)\n
      * [Usage](#usage)\n
      * [Tests](#test)\n
      * [Contributors](#contributors)\n
      * [Questions](#questions)
      
      <h2 id='description'> Description </h2>
      ${data.description}

      <p style='text-align: right;'><a href='#title'>Back to top<a/></p>

      ${renderLicenseSection(data.license)}
      <p style='text-align: right;'><a href='title'>Back to top</a></p>

      <h2 id='install'> Installation </h2>

      Run these commands to install dependencies and packages:
      \`\`\`
      ${data.dependencies}
      \`\`\`

      <p style ='text-align:right;'><a href='#title'>Back to top</a></p>

      <h2 id='usage>Usage</h2>
      ${data.usage}
      <p style='text-align:right;'><a href='#title'>Back to top</a></p>
      <h2 id='test'> Tests </h2>

      Run tests with the following commands:

      \`\`\`
      ${data.test}
      \`\`\`

      <p style='text-align: right;'><a href='#title'>Back to top</a></p>
      <h2 id='contributors'> Contributors </h2>

      ${data.contributors}

      <p style='text-align: right;'><a href='#title'>Back to top</a></p>
      <h2 id='questions'>Questions</h2>
      If you have any questions please contact: 
      ${data.email}
      ${data.github}
      <p style='text-align: right;'><a href='#title'>Back to top</a></p>
      `);
}
module.exports = generateMarkdown;