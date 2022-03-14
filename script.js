
const form = document.querySelector('form');
const pass = document.querySelector('#password');
const cpass = document.querySelector('#cpassword');
const errorSpan = document.querySelector('.error');

pass.addEventListener('input', (event) => {
    if (pass.validity.valid) {
        errorSpan.textContent = '';
        errorSpan.clasName = 'error';
    }
    else {
        showError();
    }
});

cpass.addEventListener('input', (event) => {
    console.log('Checking pass match');
    if(pass.value == cpass.value) {
        errorSpan.textContent = '';
        errorSpan.className = 'error';
    }
    else {
        showError();
    }
})

form.addEventListener('submit', (event) => {
    if (!pass.validity.valid || !cpass.validity.valid) {
        showError();
        event.preventDefault();
    }
    if (pass.value != cpass.value) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (pass.value != cpass.value) {
        errorSpan.textContent = '* Passwords must match'
    }
    if (pass.validity.patternMismatch) {
        errorSpan.textContent = '* Password requires at least 6 uppercase letters, lowercase letters, or numbers';
    }
    if (pass.validity.valueMissing) {
        errorSpan.textContent = '* Please enter a password';
    }
    errorSpan.className = 'error active';
}