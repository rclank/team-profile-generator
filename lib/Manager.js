const Employee = require('./Employee');

class Manager extends Employee {
    constructor (managerData) {
        // console.log(managerData);
        super(managerData);
        this.officeNumber = managerData.officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        // overridden to return 'Manager'
        return 'Manager';
    };
}

module.exports = Manager;