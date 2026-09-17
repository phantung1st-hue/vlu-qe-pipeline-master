// Improve login validation on feature branch

function login(username, password, isLocked = false) {
    if (isLocked) {
        return false;
    }

    if (typeof username !== 'string' || typeof password !== 'string') {
        return false;
    }

    if (username.trim() === '' || password.trim() === '') {
        return false;
    }

    return username === 'admin' && password === '123';
}

module.exports = { login };
