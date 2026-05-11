import data from '/backend/database/data.js';
function clean_creds(username, password) {
    const valid = /^[a-zA-Z0-9]+$/;

    return valid.test(username) && valid.test(password);
}
export function authenticate(username, password) {
    if(!clean_creds(username, password)) {
        return [-1, "INVALID CREDENTIALS"];
    }
    for(const [user, pass] of Object.entries(data)) {
        if(username === user && password === pass) {
            return [1, "VALIDATED"];
        }
    }
    return [0, "USERNAME OR PASSWORD MAYBE WRONG"];
}
export default authenticate;
