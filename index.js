const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const { title } = require('process');

inquirer
    .prompt([
        {
            type: 'input',
             message: 'What is the project title?',
             name: 'Title'
        }, 
        {
            type: 'input',
             message: 'Describe your project.',
             name: 'Description'
        },
        {
            type: 'input',
             message: 'How do you install this application?',
             name: 'Installation'
        },
        {
            type: 'input',
             message: 'What is your usage information?',
             name: 'Usage'
        },
        {
            type: 'input',
             message: 'What are your contribution guildlines?',
             name: 'Contributing'
        },
        {
            type: 'input',
             message: 'What are your testing instructions?',
             name: 'Tests'
        },
        {
            type: 'list',
             message: 'Which license are you using?',
             name: 'license',
             choices: ['None', 'Apache License 2.0', 'MIT License', 'The Unlicense', 'Mozilla Public License 2.0', 'Boost Software License 1.0']
        },
        {
            type: 'input',
             message: 'What is your github username?',
             name: 'github'
        },
        {
            type: 'input',
             message: 'What is your email?',
             name: 'email'
        },
    ])
    .then(({
        Title,
        Description,
        Installation,
        Usage,
        Contributing,
        Tests,
        license,
        github,
        email
    }) => {
       const readme = ` # ${Title}
## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#github)
- [Contact Me](#Contact-Me)


       
## Description

${Description}

## Installation

${Installation}

## Usage

${Usage}

## Contributing

${Contributing}

## License

${license}

## Tests

${Tests}

## Questions
${github}

${"https://github.com/" + github}

## Contact-Me 

${email}
        `
        createReadMe(Title, readme)

    });

    function createReadMe(title, data){
        fs.writeFile(`./${title}.md`, data, (err) =>{
            if(err) {
                console.log(err)
            }else{
                console.log("it worked")
            }
        })
    }