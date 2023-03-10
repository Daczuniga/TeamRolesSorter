const inquirer = require("inquirer");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const options = ['Engineer', 'Intern', 'Manager'];
const questions = {
  'Engineer': {
    type: 'input',
    name: 'GithubUsername',
    message: 'Please input your Github Username.',
  },
  'Intern': {
    type: 'input',
    name: 'School',
    message: 'Please enter the school you are enrolled in.',
  },
  'Manager': {
    type: 'input',
    name: 'OfficeNumber',
    message: 'Please enter your Office Phone Number.',
  },
};



inquirer
  .prompt([
    {
        name: 'Name',
        message: 'What is your given government name?'
      },
      {
        name: 'ID',
        message: 'What is your ID number?'
      },
      {
        name: 'Email',
        message: 'Please input your email.'
      },
      {
        type: 'list',
        name: 'Role',
        message: 'Select your assigned role.',
        choices: options, 
      },

       ])
       .then(answers => {
        const Role = answers.Role;
        const question = questions[Role];
        return inquirer.prompt([question]);
    })
        .then(answers => {
    console.log('Answers:', answers);


    // WE want to create an HTML page based on the information from the USER 


    // WRITE the file to the /dist directory
  })
  .catch((error) => {
    console.error(error);
  });

  let sarah = new Employee("sarah", 2201, "sarah@company.net");
  let michelle = new Manager ("michelle", 0223 , "michelle@company.net", 300-778-9803)
  let seemon = new Engineer ("seemon", 2200, "seemon@company.net", "seemonCodes2200")
  let leonardotein = new Intern ("leonardotein", 2203, "leonardotein@company.net", "Georgia Tech")