const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern( {name: 'Ash', id: '1', email: 'ash@fakemail.com', school: '2U'} );

    expect(intern.name).toBe('Ash');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('ash@fakemail.com');
    expect(intern.school).toBe('2U');
});

test(`gets intern's name`, () => {
    const intern = new Intern( {name: 'Ash', id: '1', email: 'ash@fakemail.com', school: '2U'} );

    expect(intern.getName()).toBe('Ash');
});
test(`gets intern's id`, () => {
    const intern = new Intern( {name: 'Ash', id: '1', email: 'ash@fakemail.com', school: '2U'} );

    expect(intern.getId()).toBe('1');
});
test(`gets intern's email`, () => {
    const intern = new Intern( {name: 'Ash', id: '1', email: 'ash@fakemail.com', school: '2U'} );

    expect(intern.getEmail()).toBe('ash@fakemail.com');
});
test(`gets intern's role`, () => {
    const intern = new Intern( {name: 'Ash', id: '1', email: 'ash@fakemail.com', school: '2U'} );

    expect(intern.getRole()).toBe('Intern');
});
test(`gets intern's school`, () => {
    const intern = new Intern( {name: 'Ash', id: '1', email: 'ash@fakemail.com', school: '2U'} );

    expect(intern.getSchool()).toBe('2U');
});