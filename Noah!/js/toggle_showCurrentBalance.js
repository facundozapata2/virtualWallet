const currentBalanceAmount = document.getElementById('currentBalanceAmount');
const showCurrentBalanceBtn = document.getElementById('showCurrentBalance');
const eyeIcon = document.getElementById('showCurrentBalance');

let actualBalance = currentBalanceAmount.innerText;
let hiddenBalance = '*****';

showCurrentBalanceBtn.addEventListener('click', () => {
    if (eyeIcon.classList.contains('fa-eye')) {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        currentBalanceAmount.innerText = hiddenBalance;
        currentBalanceAmount.style.letterSpacing = '.25rem';  
    }   else {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        currentBalanceAmount.innerText = actualBalance;
        currentBalanceAmount.style.letterSpacing = 'normal';
    }
});