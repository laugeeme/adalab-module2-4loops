'use strict';

//Función para mostrar los iconos de inputs con contenido

function showEmailIcon() {
  if (emailAddress.value === '') {
    cardIconMail.classList.add('opacity');
  }

  if (emailAddress.value !== '') {
    cardIconMail.classList.remove('opacity');
    cardIconMail.classList.remove('hidden-icons');
  }
}

function showPhoneIcon() {
  if (phoneNumber.value === '') {
    cardIconPhone.classList.add('opacity');
  }

  if (phoneNumber.value !== '') {
    cardIconPhone.classList.remove('opacity');
    cardIconPhone.classList.remove('hidden-icons');
  }
}

function showLinkedinIcon() {
  if (linkedin.value === '') {
    cardIconLinkedin.classList.add('opacity');
  }

  if (linkedin.value !== '') {
    cardIconLinkedin.classList.remove('opacity');
    cardIconLinkedin.classList.remove('hidden-icons');
  }
}

function showGithubIcon() {
  if (github.value === '') {
    cardIconGithub.classList.add('opacity');
  }

  if (github.value !== '') {
    cardIconGithub.classList.remove('opacity');
    cardIconGithub.classList.remove('hidden-icons');
  }
}

//// Función para que los iconos desaparezcan si no se rellenan antes de compartir

function hideIcons() {
  if (emailAddress.value === '') {
    cardIconMail.classList.add('hidden-icons');
  }
  if (phoneNumber.value === '') {
    cardIconPhone.classList.add('hidden-icons');
  }
  if (linkedin.value === '') {
    cardIconLinkedin.classList.add('hidden-icons');
  }
  if (github.value === '') {
    cardIconGithub.classList.add('hidden-icons');
  }
}

//Función para que la altura del preview crezca al crecer la altura del desplegable

function changePreviewHeight() {
  const formsBoxHeight = parseInt(formsBox.clientHeight);
  const minHeight = 768;
  if (window.innerWidth <= minHeight) {
    previewBackground.style.height = '572px';
  } else if (formsBoxHeight < minHeight) {
    previewBackground.style.height = `${minHeight}px`;
  } else {
    previewBackground.style.height = `${formsBoxHeight}px`;
  }

  if (window.innerWidth <= minHeight && window.innerHeight <= minHeight) {
    previewBackground.style.paddingTop = '38px';
  }
}
