const pass = document.querySelector('#password');
const cpass = document.querySelector('#cpassword');

function validatePassword() {
    const passValidity = pass.validity;
    if (passValidity.patternMismatch) {
        pass.setCustomValidity("Please include at least 6 uppercase letters, lowercase letters, and numbers");
    }
    else {
        pass.setCustomValidity('');
    }
    if (pass.value != cpass.value) {

        cpass.setCustomValidity("Passwords don't match");
    }
    else {
        cpass.setCustomValidity('');
    }
    pass.reportValidity();
    cpass.reportValidity();
}

console.log('starting');