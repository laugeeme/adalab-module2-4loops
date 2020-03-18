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

// activar/desactivar botón Twitter

const twitterButton = document.querySelector('.btn-twit');

function desactivateButton(event) {
  if (
    fullName.value === '' ||
    jobPosition.value === '' ||
    emailAddress.value === '' ||
    linkedin === '' ||
    github === ''
  ) {
    event.preventDefault();
    alert('Upss!! Parece que no has rellenado los campos obligatorios.. ');
  } else {
    console.log('heyyy');
  }
}

twitterButton.addEventListener('click', desactivateButton);
