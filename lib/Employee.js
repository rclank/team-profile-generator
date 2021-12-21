class Employee {
    constructor(employeeData) {
        // console.log(employeeData);
        this.name = employeeData.name;
        this.id = employeeData.id;
        this.email = employeeData.email;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        // returns 'Employee'
        return 'Employee';
    };
}

module.exports = Employee;