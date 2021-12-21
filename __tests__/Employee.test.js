const Employee = require('../lib/Employee');

test('create an employee object', () => {
    const employee = new Employee( {name: 'Ash', id: '1', email: 'ash@fakemail.com'} );

    expect(employee.name).toBe('Ash');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('ash@fakemail.com');
});

test(`gets employee's name`, () => {
    const employee = new Employee( {name: 'Ash', id: '1', email: 'ash@fakemail.com'} );

    expect(employee.getName()).toBe('Ash');
});
test(`gets employee's id`, () => {
    const employee = new Employee( {name: 'Ash', id: '1', email: 'ash@fakemail.com'} );

    expect(employee.getId()).toBe('1');
});
test(`gets employee's email`, () => {
    const employee = new Employee( {name: 'Ash', id: '1', email: 'ash@fakemail.com'} );

    expect(employee.getEmail()).toBe('ash@fakemail.com');
});
test(`gets employee's role`, () => {
    const employee = new Employee( {name: 'Ash', id: '1', email: 'ash@fakemail.com'} );

    expect(employee.getRole()).toBe('Employee');
});