'use strict';

// const formArea = document.querySelector ('#form__fill');
const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputLinkedin = document.querySelector('#linkedin');
const inputGithub = document.querySelector('#github');



const userInfo = {}

//Función para guardar la información en un objeto
function saveInfoUser (event) {

    const inputName = event.currentTarget.name;
    const inputValue = event.currentTarget.value;

    userInfo[inputName] = inputValue;
    console.log('Datos del formulario:', userInfo)
}

//Función para recuperar la información del servidor (pendiente)

//Función para añadir la información guardada
function showSavedInfo () { 

    inputName.value = userInfo.name;
    inputJob.value = userInfo.job;
    inputEmail.value = userInfo.email;
    inputPhone.value = userInfo.phone;
    inputLinkedin.value = userInfo.linkedin;
    inputGithub.value = userInfo.github;

}

inputName.addEventListener('keyup', saveInfoUser);
inputJob.addEventListener('keyup', saveInfoUser);
inputEmail.addEventListener('keyup', saveInfoUser);
inputPhone.addEventListener('keyup', saveInfoUser);
inputLinkedin.addEventListener('keyup', saveInfoUser);
inputGithub.addEventListener('keyup', saveInfoUser);

// window.addEventListener('mouseover', showSavedInfo);