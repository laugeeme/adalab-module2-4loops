'use strict';

let userInfo = readUserInfo();

function saveSelectedTheme(event) {
  localStorage.setItem('palette', event.currentTarget.value);
}

function readSavedTheme() {
  const currentTheme = localStorage.getItem('palette');
  return currentTheme;
}

function checkSavedTheme() {
  let savedTheme = readSavedTheme();
  const inputPaletteArray = document.querySelectorAll('.input-palette');

  for (let input of inputPaletteArray) {
    if (input.value === savedTheme) {
      input.setAttribute('checked', true);
    }
  }

  printSavedTheme();
}

function printSavedTheme() {
  let savedTheme = readSavedTheme();
  const previewCardBox = document.querySelector('.preview__card--box');

  if (savedTheme === '1') {
    previewPalette1();
  }
  if (savedTheme === '2') {
    previewPalette2();
  }
  if (savedTheme === '3') {
    previewPalette3();
  }
  if (savedTheme === '4') {
    previewPalette4();
  }
}

//Función para formulario
function saveUserInfo(event) {
  const fullName = event.currentTarget.name;
  const inputValue = event.currentTarget.value;

  userInfo[fullName] = inputValue;

  setLocalUserInfo();
}

function setLocalUserInfo() {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

function readUserInfo() {
  let userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return userInfo === null ? {} : userInfo;
}

function printSavedInfo() {
  let localUserInfo = readUserInfo();
  const inputArray = document.querySelectorAll('.input');


  for (let item of inputArray) {
    if (localUserInfo[item.name] !== undefined) {
      item.value = localUserInfo[item.name];
    } else {
      item.value = '';
    }
  }

  printInfoToCard();
}

function printInfoToCard() {
  let localUserInfo = readUserInfo();

  if (localUserInfo.name === undefined) {
    previewFullName.innerHTML = 'Nombre Apellido';
  } else {
    previewFullName.innerHTML = localUserInfo.name;
  }
  if (localUserInfo.job === undefined) {
    previewJobPosition.innerHTML = 'Puesto';
  } else {
    previewJobPosition.innerHTML = localUserInfo.job;
  }

  showEmailIcon();
  showPhoneIcon();
  showLinkedinIcon();
  showGithubIcon();
  printSavedImage();
}

//Función para la imagen
function setProfileImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  let imageUrl = profileImage.style.backgroundImage;

  localStorage.setItem('image', `${fr.result}`);
}

function readLocalImage() {
  const localImage = localStorage.getItem('image');
  return localImage;
}

function printSavedImage() {
  const savedImage = readLocalImage();
  if(savedImage !== null) {
    profileImage.style.backgroundImage = `url(${savedImage})`;
    profilePreview.style.backgroundImage = `url(${savedImage})`;
  } else {
    profileImage.style.backgroundImage = 'url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8afef60261411.5a44784a9dcc3.gif)'
  }

}

//Función para borar los datos de localstorage

function removeLocalInfo() {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('palette');
  localStorage.removeItem('image');

  profileImage.style.backgroundImage =
    'url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8afef60261411.5a44784a9dcc3.gif)';
  profilePreview.style.backgroundImage =
    'url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8afef60261411.5a44784a9dcc3.gif)';
}
