'use strict';

const fr = new FileReader();

function getImage(event) {
  let myFile = event.currentTarget.files[0];
  fr.addEventListener('load', addImage);
  fr.readAsDataURL(myFile);
}
function addImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  setProfileImage(fr);
}

function generateClick() {
  fileField.click();
}
