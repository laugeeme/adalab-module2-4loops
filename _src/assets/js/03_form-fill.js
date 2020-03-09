'use strict';
console.log('hola');

// form-fill constants

const fullName = document.querySelector('#name');
const jobPosition = document.querySelector('#job');
const emailAddress = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone');
const linkedin = document.querySelector('#linkedin');
const github = document.querySelector('#github');

// preview constants

const previewFullName = document.querySelector('.font__preview--title');
const previewJobPosition = document.querySelector('.font__preview--subtitle');
// const iconPhone = document.querySelector('.icon-phone');

function copyInfo() {
    previewFullName.innerHTML = fullName.value;
    previewJobPosition.innerHTML = jobPosition.value;
}

fullName.addEventListener('keydown', copyInfo);
jobPosition.addEventListener('keydown', copyInfo);

// function showIcon() {
//     if (event.currentTarget) {

//     }
// }
phoneNumber.addEventListener('keyup', showIcon)

