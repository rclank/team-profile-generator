// include needed packages
const inquirer = require('inquirer');

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
            teamData.push(teammateData);
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
    .then(answers => console.log(answers));