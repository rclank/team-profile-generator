const Manager = require('../lib/Manager');

test('create an manager object', () => {
    const manager = new Manager( {name: 'Ash', id: '1', email: 'ash@fakemail.com', officeNumber: '1'} );

    expect(manager.name).toBe('Ash');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('ash@fakemail.com');
    expect(manager.officeNumber).toBe('1');
});

test(`gets manager's name`, () => {
    const manager = new Manager( {name: 'Ash', id: '1', email: 'ash@fakemail.com', officeNumber: '1'} );

    expect(manager.getName()).toBe('Ash');
});
test(`gets manager's id`, () => {
    const manager = new Manager( {name: 'Ash', id: '1', email: 'ash@fakemail.com', officeNumber: '1'} );

    expect(manager.getId()).toBe('1');
});
test(`gets manager's email`, () => {
    const manager = new Manager( {name: 'Ash', id: '1', email: 'ash@fakemail.com', officeNumber: '1'} );

    expect(manager.getEmail()).toBe('ash@fakemail.com');
});
test(`gets manager's role`, () => {
    const manager = new Manager( {name: 'Ash', id: '1', email: 'ash@fakemail.com', officeNumber: '1'} );

    expect(manager.getRole()).toBe('Manager');
});
test(`gets manager's office number`, () => {
    const manager = new Manager( {name: 'Ash', id: '1', email: 'ash@fakemail.com', officeNumber: '1'} );

    expect(manager.getOfficeNumber()).toBe('1');
});