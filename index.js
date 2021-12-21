// include classes
// these are used in an eval(), which is why they are greyed out. still used in execution though.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// include needed packages
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs');
const path = require('path');

// question to add new teammate or finish team
const teammateQuestion = [
    {
        type: 'list',
        name: 'teammate',
        message: `Choose a teammate to add or finish your team:`,
        choices: ['Engineer', 'Intern', 'Finish']
    }
]

// generates common question set inserting current role into questions
const basicQuestionsGenerator = (teammate) => {
    const basicQuestions = [
        {
            // name
            type: 'input',
            name: 'name',
            message: `Please enter your ${teammate}'s name`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                }
            }
        },
        {
            // employee id
            type: 'input',
            name: 'id',
            message: `Please enter your ${teammate}'s employee id number`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID!');
                }
            }
        },
        {
            // email
            type: 'input',
            name: 'email',
            message: `Please enter your ${teammate}'s email address`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                }
            }
        }
    ]
    return basicQuestions;
}

// questions specific to Managers
const managerQuestions = [
    {
        // office number
        type: 'input',
        name: 'officeNumber',
        message: `Please enter your Manager's office number`,
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter an office number!');
            }
        }
    }
]

// questions specific to Engineers
const engineerQuestions = [
    {
        // github username
        type: 'input',
        name: 'githubUsername',
        message: `Please enter your engineer's GitHub username`,
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter an GitHub username!');
            }
        }
    }
]

// questions specific to Interns
const internQuestions = [
    {
        // school
        type: 'input',
        name: 'school',
        message: `Please enter your intern's school`,
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter a school!');
            }
        }
    }
]

// basic writeFileSync for index.html in dist folder
const writeFile = fileContent => {
    fs.writeFileSync(path.join(__dirname, '/dist/index.html'), fileContent);
};

// basic copyFileSync for css in dist folder
const copyFile = () => {
    fs.copyFileSync(path.join(__dirname, '/src/style.css'), path.join(__dirname, '/dist/style.css'));
}

// inquirer prompt stored in variable
// defaults to Manager for start, as this should always be first
const promptUser = (teammate = 'Manager', teamData = []) => {
    let questions = basicQuestionsGenerator(teammate);
    const currentTeammate = teammate;

    // logic to dynamically build question set based on current teammate role
    switch(teammate) {
        case 'Manager':
            questions = questions.concat(managerQuestions);
            break;
        case 'Engineer':
            questions = questions.concat(engineerQuestions);
            break;
        case 'Intern':
            questions = questions.concat(internQuestions);
            break;
    }
    // question set always needs to end with what teammate to add next, or finish
    questions = questions.concat(teammateQuestion);

    return inquirer.prompt(questions)
        .then(teammateData => {
            const nextTeammate = teammateData.teammate;
            teammateData.teammate = currentTeammate;
            // class solution trying to use Function as opposed to eval
            // const employee = Function(`return new ${currentTeammate}(teammateData)`);
            // teamData.push(employee());
            // solution using classes below. *note: eval should never be used lol. tried using Function above, but only works if you define variables at Node global scope, which isn't feasible
            teamData.push(eval(`new ${currentTeammate}(teammateData)`));
            // original solution below
            // teamData.push(teammateData);
            if (nextTeammate === 'Finish') {
                return teamData;
            } else {
                console.log(`
                ==================
                Add a New Teammate
                ==================
                `);
                // recursively call prompt, passing in next teammate type and teamData thus far to persist and add to
                return promptUser(nextTeammate, teamData);
            }
        })
}

// launch inquirer to get user input
promptUser()
    // pass user input obtained, teamData, to generate static HTML
    .then(teamData => generatePage(teamData))
    // pass static HTML text to fs functions
    .then(htmlPage => {
        // write/create index.html in dist folder
        writeFile(htmlPage);
        // copy style.css from src to dist folder
        copyFile();
        // log completion message
        console.log('Complete! See dist folder.');
    });