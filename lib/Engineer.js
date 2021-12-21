const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (engineerData) {
        super(engineerData);
        // github username
        this.githubUsername = engineerData.githubUsername;
    };

    getGithub() {
        return this.githubUsername;
    };

    getRole() {
        // overridden to return 'Engineer'
        return 'Engineer';
    };
}

module.exports = Engineer;