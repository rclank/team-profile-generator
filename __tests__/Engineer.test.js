const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const engineer = new Engineer( {name: 'Ash', id: '1', email: 'ash@fakemail.com', githubUsername: 'ash'} );

    expect(engineer.name).toBe('Ash');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('ash@fakemail.com');
    expect(engineer.githubUsername).toBe('ash');
});

test(`gets engineer's name`, () => {
    const engineer = new Engineer( {name: 'Ash', id: '1', email: 'ash@fakemail.com', githubUsername: 'ash'} );

    expect(engineer.getName()).toBe('Ash');
});
test(`gets engineer's id`, () => {
    const engineer = new Engineer( {name: 'Ash', id: '1', email: 'ash@fakemail.com', githubUsername: 'ash'} );

    expect(engineer.getId()).toBe('1');
});
test(`gets engineer's email`, () => {
    const engineer = new Engineer( {name: 'Ash', id: '1', email: 'ash@fakemail.com', githubUsername: 'ash'} );

    expect(engineer.getEmail()).toBe('ash@fakemail.com');
});
test(`gets engineer's role`, () => {
    const engineer = new Engineer( {name: 'Ash', id: '1', email: 'ash@fakemail.com', githubUsername: 'ash'} );

    expect(engineer.getRole()).toBe('Engineer');
});
test(`gets engineer's github`, () => {
    const engineer = new Engineer( {name: 'Ash', id: '1', email: 'ash@fakemail.com', githubUsername: 'ash'} );

    expect(engineer.getGithub()).toBe('ash');
});