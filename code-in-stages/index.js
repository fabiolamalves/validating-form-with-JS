const form = document.querySelector('#formRegister');
 
const userNameError = document.querySelector('#usernameError');
const emailError = document.querySelector('#emailError');
const phoneError = document.querySelector('#phoneError');
const passwordError = document.querySelector('#passwordError');
const password2Error = document.querySelector('#password2Error');
const checkboxError = document.querySelector('#checkboxError');

form.addEventListener('submit', (e) => {
 
    e.preventDefault();
    const username = form['username'].value;
    const email = form['email'].value;
    const phone = form['phone'].value;
    const password = form['password'].value;
    const password2 = form['password2'].value;
    const check = form['checkbox'].checked;

    if (username === '') {
    userNameError.textContent = 'Username is required';
    } else {
    userNameError.textContent = '';
    }
     
    if (!email.includes("@")) {
    emailError.textContent = 'Email is required';
    } else {
    emailError.textContent = '';
    }
     
    if (phone === '') {
    phoneError.textContent = 'Phone is required';
    } else {
    phoneError.textContent = '';
    }
     
    if (password === '') {
    passwordError.textContent = 'Password is required';
    } else {
    passwordError.textContent = '';
    }
     
    if (password2 === '') {
    password2Error.textContent = 'Password is required';
    } else {
    password2Error.textContent = '';
    }
     
    if (password !== password2) {
    password2Error.textContent = 'Password do not match';
    } else {
    password2Error.textContent = '';
    }
     
    if (!check) {
    checkboxError.textContent = 'Please check the box';
    } else {
    checkboxError.textContent = '';
    }
     
    return false;

})