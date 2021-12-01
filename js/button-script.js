
const firstP = document.getElementById('firstP');
const secondP = document.getElementById('secondP');
const nameInput = document.getElementById('fname');
const messageInput = document.getElementById('message');
const numberInput = document.getElementById('number');
const submitBtn = document.getElementById('button-contacts');
const bookmarkTextColor2 = document.getElementById('contact-change-color');
const changeTextColor = document.querySelector('.a');
const changeTextColor1 = document.querySelector('.a1');
const changeIconsBack = document.querySelector('.glass-icons-section');
const changeTextColor2 = document.querySelector('.a2')
const changeTextColor3 = document.querySelector('.a3')
const changeTextColor4 = document.querySelector('.a4')
const bookmarkTextColor1 = document.querySelector('.text-inside-bookmark-1')
const changeHeaderColor = document.getElementById('change-color')
const bookmark = document.querySelector('.triangle-bookmark');
const contentWrapper = document.querySelector('.content-wrapper');
const toggle = document.getElementById('toggle');
toggle.onclick = function() {
    toggle.classList.toggle('active')
    contentWrapper.classList.toggle('active')
    bookmark.classList.toggle('extend-color')
    changeHeaderColor.classList.toggle('change-color')
    changeTextColor.classList.toggle('change-color')
    changeTextColor1.classList.toggle('change-color')
    changeTextColor2.classList.toggle('change-color')
    changeTextColor3.classList.toggle('change-color')
    changeTextColor4.classList.toggle('change-color')
    changeIconsBack.classList.toggle('change-background')
    bookmarkTextColor1.classList.toggle('bookmark-text-color-change')
    bookmarkTextColor2.classList.toggle('bookmark-text-color-change')
    nameInput.classList.toggle('change-color-form')
    messageInput.classList.toggle('change-color-form')
    numberInput.classList.toggle('change-color-form')
    submitBtn.classList.toggle('change-color-form')
    firstP.classList.toggle('change-color-p')
    secondP.classList.toggle('change-color-p')
}
const successForm = document.querySelector('.success-form');
submitBtn.addEventListener('click', function () {
    successForm.classList.toggle('show-message')
})

submitBtn.addEventListener('click', function myFunction() {

    document.getElementById("form-exact").reset();
})
const closeSuccess = document.querySelector('.cancel-success');
closeSuccess.onclick = function () {
    successForm.classList.remove('show-message')
}

