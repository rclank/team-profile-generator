// include classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateTeamCard = teammate => {
    let uniqueItem;

    switch (teammate.getRole()) {
        case 'Manager':
            uniqueItem = `<h6>Office Number: ${teammate.getOfficeNumber()}</h6>`;
            break;
        case 'Engineer':
            uniqueItem = `<h6>GitHub: <a href='https://github.com/${teammate.getGithub()}'>${teammate.getGithub()}</a></h6>`;
            break;
        case 'Intern':
            uniqueItem = `<h6>School: ${teammate.getSchool()}</h6>`;
            break;
    };

    return `
        <div class='teammate-card'>
            <div class='card-header'>
                <h2>${teammate.getName()}</h2>
                <h2>${teammate.getRole()}</h2>
            </div>
            <div class='card-body'>
                <h6>ID: ${teammate.getId()}</h6>
                <h6>Email: <a href='mailto:${teammate.getEmail()}'>${teammate.getEmail()}</a></h6>
                ${uniqueItem}
            </div>
        </div>
    `;
}

module.exports = templateData => {

    const managers = templateData.filter(teammate => teammate.getRole() === `Manager`).map(manager => generateTeamCard(manager));
    const engineers = templateData.filter(teammate => teammate.getRole() === `Engineer`).map(engineer => generateTeamCard(engineer));
    const interns = templateData.filter(teammate => teammate.getRole() === `Intern`).map(intern => generateTeamCard(intern));

    const team = managers.concat(engineers, interns);

    return `
<!DOCTYPE html>
<html lang="eng">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Generator</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ${team.join('')}
        </main>
    </body>
</html>
    `;
};