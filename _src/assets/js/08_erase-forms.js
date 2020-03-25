'use strict';

function resetForm() {
  document.getElementById('myForm').reset();
  document.getElementById('myFormPalette').reset();
  resetPreview();
  removeCanvas();
  hiddeCamera();
  removeLocalInfo();
  removePic();
}

function resetPreview() {
  // Esta función reseteará el style de colores, el nombre y puesto y los iconos.
  previewPalette1();
  showEmailIcon();
  showPhoneIcon();
  showLinkedinIcon();
  showGithubIcon();

  previewFullName.innerHTML = 'Nombre Apellido';
  previewJobPosition.innerHTML = 'Front-end developer';
}

function removeCanvas() {
  canvas.classList.add('hiddenCanvas');
  canvas.classList.remove('showCanvas');
}

function removePic() {
  profileImage.style.backgroundImage = `url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8afef60261411.5a44784a9dcc3.gif)`;
}
