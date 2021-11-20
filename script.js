let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');



formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
function myFunction() {
    alert("Order Successful\nYour id 1234");
}
function billFunction() {
    alert("Payment Succesful");
}
function TrackFunction() {
    alert("Not Found Right Now");
}
function Loginfunction(){
    alert("Logined Succesful");
}
