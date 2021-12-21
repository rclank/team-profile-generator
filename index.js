// include classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// include needed packages
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs');
const path = require('path');

const teammateQuestion = [
    {
        type: 'list',
        name: 'teammate',
        message: `Choose a teammate to add or finish your team:`,
        choices: ['Engineer', 'Intern', 'Finish']
    }
]

const basicQuestionsGenerator = (teammate) => {
    const basicQuestions = [
        {
            // name
            type: 'input',
            name: 'name',
            message: `Please enter your ${teammate}'s name`
        },
        {
            // employee id
            type: 'input',
            name: 'id',
            message: `Please enter your ${teammate}'s employee id number`
        },
        {
            // email
            type: 'input',
            name: 'email',
            message: `Please enter your ${teammate}'s email address`
        }
    ]
    return basicQuestions;
}

const managerQuestions = [
    {
        // office number
        type: 'input',
        name: 'officeNumber',
        message: `Please enter your manager's office number`
    }
]

const engineerQuestions = [
    {
        // github username
        type: 'input',
        name: 'githubUsername',
        message: `Please enter your engineer's GitHub username`
    }
]

const internQuestions = [
    {
        // school
        type: 'input',
        name: 'school',
        message: `Please enter your intern's school`
    }
]

const writeFile = fileContent => {
    fs.writeFileSync(path.join(__dirname, '/dist/index.html'), fileContent);
};

const copyFile = () => {
    fs.copyFileSync(path.join(__dirname, '/src/style.css'), path.join(__dirname, '/dist/style.css'));
}

const promptUser = (teammate = 'Manager', teamData = []) => {
    let questions = basicQuestionsGenerator(teammate);
    const currentTeammate = teammate;

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
                return promptUser(nextTeammate, teamData);
            }
        })
}

promptUser()
    .then(teamData => generatePage(teamData))
    .then(htmlPage => {
        writeFile(htmlPage);
        copyFile();
    });