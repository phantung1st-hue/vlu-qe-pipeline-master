const { login } = require('./auth');

describe('Regression Test - Login function', () => {
    test('Login fails when password is incorrect', () => {
        expect(login('admin', '456')).toBe(false);
    });

    test('Login fails when username is empty', () => {
        expect(login('', '123')).toBe(false);
    });

    test('Login fails when password contains special characters', () => {
        expect(login('admin', '@123!')).toBe(false);
    });

    test('Login fails when account is locked', () => {
        expect(login('admin', '123', true)).toBe(false);
    });

    test('Login fails when password is empty', () => {
        expect(login('admin', '')).toBe(false);
    });
});
