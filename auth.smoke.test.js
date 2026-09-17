const { login } = require('./auth');

test('Smoke Test - login successful with valid account', () => {
    expect(login('admin', '123')).toBe(true);
});
