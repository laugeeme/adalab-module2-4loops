'use strict';

//ACTUALIZAR PÁGINA CON LA INFORMACIÓN GUARDADA

//constantes para paleta de colores (listenners)
const optionDesignPalette1 = document.querySelector('#colorPalette1');
const optionDesignPalette2 = document.querySelector('#colorPalette2');
const optionDesignPalette3 = document.querySelector('#colorPalette3');
const optionDesignPalette4 = document.querySelector('#colorPalette4');

//constantes para formulario
const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputLinkedin = document.querySelector('#linkedin');
const inputGithub = document.querySelector('#github');

//Constantes para guardar y reutilizar la información del usuario
const userInfo = {}


//Función para paleta de colores
function saveSelectedTheme(event) { //para guardar la paleta
  localStorage.setItem('theme', event.currentTarget.id);
}

function readSavedTheme() { //para leer la paleta guardada
  const currentTheme = localStorage.getItem('theme');
  return currentTheme;
}

function checkSavedTheme() { //para sleccionar la paleta guardada
  let savedTheme = readSavedTheme();
  const inputPaletteArray = document.querySelectorAll('.input-palette');

  for (let input of inputPaletteArray) {
    if (input.id === savedTheme) {
      input.setAttribute('checked', true);
    }
  }

  printSavedTheme()
}

function printSavedTheme() { //para aplicar los estilos de la paleta
  let savedTheme = readSavedTheme();
  const previewCardBox = document.querySelector('.preview__card--box');

  if(savedTheme === 'colorPalette1') {
    previewPalette1 ()
  } 
  if(savedTheme === 'colorPalette2') {
    previewPalette2 ()
  } 
  if(savedTheme === 'colorPalette3') {
    previewPalette3 ()
  } 
  if(savedTheme === 'colorPalette4') {
    previewPalette4()
  } 

}


//Función para formulario
function saveUserInfo(event) { //para guardar la información en un objeto
  const inputName = event.currentTarget.name;
  const inputValue = event.currentTarget.value;

  userInfo[inputName] = inputValue;

  setLocalUserInfo();
}

function setLocalUserInfo() { // para guardar la información en el navegador
  localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

function readUserInfo() { //para recuperar la información del navegador
  let savedUserInfo = JSON.parse(localStorage.getItem('userInfo'))
  return savedUserInfo;
}

function printSavedInfo() { //para añadir la información al formulario
  let localUserInfo = readUserInfo()
  const inputArray = document.querySelectorAll('.input');

  for (let item of inputArray) {

    if (localUserInfo[item.name] !== undefined) {
      item.value = localUserInfo[item.name]
    } else {
      item.value = ''
    }

  }

  printInfoToCard()
}

function printInfoToCard() {//para pintar la info en la tarjeta
  let localUserInfo = readUserInfo()

  if (localUserInfo.name === undefined) { //para pintar nombre guardado
    previewFullName.innerHTML = 'Nombre Apellido'
  } else {
    previewFullName.innerHTML = localUserInfo.name;
  }
  if (localUserInfo.job === undefined) { //para pintar trabajo guardado
    previewJobPosition.innerHTML = 'Puesto';
  } else {
    previewJobPosition.innerHTML = localUserInfo.job;
  }

  showEmailIcon()
  showPhoneIcon()
  showLinkedinIcon()
  showGithubIcon()

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

//Listeners para actualizar la información guardada
window.addEventListener('load', checkSavedTheme);
window.addEventListener('load', printSavedInfo);
