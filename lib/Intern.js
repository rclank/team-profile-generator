const Employee = require('./Employee');

class Intern extends Employee {
    constructor(internData) {
        super(internData);
        this.school = internData.school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        // overridden to return 'Intern'
        return 'Intern';
    };
}

module.exports = Intern;