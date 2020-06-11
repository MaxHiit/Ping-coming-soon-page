const form = document.querySelector('.subscribe__form');
const regEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const emailInput = document.querySelector('#email');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();
})

function checkEmail() {
    if(emailInput.value == '' || emailInput.value === undefined){
        console.log('input empty');
        emailInput.classList.add('invalid');
        errorMsg.innerText = 'Whoops! It looks like you forgot to add your email';
        errorMsg.style.display = "block";
    } else if (!emailInput.value.match(regEx)) {
        console.log('email not empty but wrong');
        errorMsg.innerText = 'Please provide a valid email address';
    } else {
        console.log('email send');
        emailInput.classList.remove('invalid');
        errorMsg.innerHTML = '';
        errorMsg.style.display = 'none';
    }
}