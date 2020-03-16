'use strict';

//constantes para formulario design
const optionDesignPalette1 = document.querySelector('#colorPalette1');
const optionDesignPalette2 = document.querySelector('#colorPalette2');
const optionDesignPalette3 = document.querySelector('#colorPalette3');
const optionDesignPalette4 = document.querySelector('#colorPalette4');

//constantes para formulario fill
const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputLinkedin = document.querySelector('#linkedin');
const inputGithub = document.querySelector('#github');

//Constantes para guardar y reutilizar la información del usuario
const userInfo = {}

//Función para guardar la paleta de colores
function saveSelectedTheme(event) {
    localStorage.setItem('theme', event.currentTarget.id);
}

//Función para leer la paleta de colores guardada
function readSavedTheme() {
    const currentTheme = localStorage.getItem('theme');
    return currentTheme;
}

//Función para pintar la paleta de colores guardada
function printSavedTheme() {
    let savedTheme = readSavedTheme();
    const inputPaletteArray = document.querySelectorAll('.input-palette');

    for (let input of inputPaletteArray) {

        if (input.id === savedTheme) {
            input.setAttribute('checked', true);
            `preview${input.value}()`
        }
    }

}


//Función para guardar la información del usuario en un objeto
function saveUserInfo(event) {
    const inputName = event.currentTarget.name;
    const inputValue = event.currentTarget.value;

    userInfo[inputName] = inputValue;
    console.log('Objeto datos del formulario:', userInfo);

    setLocalUserInfo();
}

// Función para guardar la información en el navegador (pendiente)
function setLocalUserInfo() {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

//Función para recuperar la información del navegador (pendiente)
function readUserInfo() {
    let savedUserInfo = JSON.parse(localStorage.getItem('userInfo'))
    console.log('savedUserInfo', savedUserInfo)

    return savedUserInfo;

}

//Función para añadir la información guardada
function printSavedInfo() {
    let localUserInfo = readUserInfo()
    const inputArray = document.querySelectorAll('.input');

    for (let input of inputArray) {

        if (localUserInfo[input.name] !== undefined) {
            input.value = localUserInfo[input.name]
            console.log('input.value', input.value)
        } else {
            input.value = ''
        }
    }

    // inputName.value = localUserInfo.name;
    // inputJob.value = localUserInfo.job;
    // inputEmail.value = localUserInfo.email;
    // inputPhone.value = localUserInfo.phone;
    // inputLinkedin.value = localUserInfo.linkedin;
    // inputGithub.value = localUserInfo.github;

    console.log('localUserInfo', localUserInfo)
    console.log('inputName.value', inputName.value)
    console.log('inputJob.value', inputJob.value)
}

//Listeners para guardar configuración de color

optionDesignPalette1.addEventListener('click', saveSelectedTheme);
optionDesignPalette2.addEventListener('click', saveSelectedTheme);
optionDesignPalette3.addEventListener('click', saveSelectedTheme);
optionDesignPalette4.addEventListener('click', saveSelectedTheme);

//Listeners para guardar información del usuario

inputName.addEventListener('keyup', saveUserInfo);
inputJob.addEventListener('keyup', saveUserInfo);
inputEmail.addEventListener('keyup', saveUserInfo);
inputPhone.addEventListener('keyup', saveUserInfo);
inputLinkedin.addEventListener('keyup', saveUserInfo);
inputGithub.addEventListener('keyup', saveUserInfo);

// readUserInfo()
window.addEventListener('load', printSavedInfo)
// showSavedInfo()
printSavedTheme()