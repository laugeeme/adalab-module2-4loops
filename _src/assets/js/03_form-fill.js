'use strict';
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
function copyInfoName(event) {
  previewFullName.innerHTML = fullName.value || 'Nombre Apellido';
}
function copyInfoJob() {
  previewJobPosition.innerHTML = jobPosition.value || 'Puesto';
}
fullName.addEventListener('keyup', copyInfoName);
jobPosition.addEventListener('keyup', copyInfoJob);

