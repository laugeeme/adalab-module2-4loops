'use strict';

const fr = new FileReader();
const uploadButton = document.querySelector('#fillButton');
const fileField = document.querySelector('#img-selector');
const profileImage = document.querySelector('.preview__card--picture');
const profilePreview = document.querySelector('.empty-box');

function getImage(event) {
  let myFile = event.currentTarget.files[0];
  fr.addEventListener('load', addImage);
  fr.readAsDataURL(myFile);
}
 function addImage() {
    profileImage.style.backgroundImage = `url(${fr.result})`;
    profilePreview.style.backgroundImage = `url(${fr.result})`;

    setProfileImage()
}

function generateClick() {
  fileField.click();
}

uploadButton.addEventListener('click', generateClick);
fileField.addEventListener('change', getImage);
