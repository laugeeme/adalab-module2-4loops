'use strict'

//Función para mostrar los iconos de inputs con contenido

const cardIconMail = document.querySelector('.preview__card--iconEnvelope');
const cardIconPhone = document.querySelector('#preview__card--iconPhone');
const cardIconLinkedin = document.querySelector('.preview__card--iconLinkedin');
const cardIconGithub = document.querySelector('.preview__card--iconGitHub');

const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const linkedinInput = document.querySelector('#linkedin');
const githubInput = document.querySelector('#github');


function showEmailIcon () {
    if (emailInput.value === '') {
        cardIconMail.classList.add('opacity');
    }

    if (emailInput.value !== '') {
        cardIconMail.classList.remove('opacity');
        cardIconMail.classList.remove('hidden-icons');
    }
}

function showPhoneIcon () {
    if (phoneInput.value === '') {
        cardIconPhone.classList.add('opacity');
    }

    if (phoneInput.value !== '') {
        cardIconPhone.classList.remove('opacity');
        cardIconPhone.classList.remove('hidden-icons');
    }
}

function showLinkedinIcon () {
    if (linkedinInput.value === '') {
        cardIconLinkedin.classList.add('opacity');
    }

    if (linkedinInput.value !== '') {
        cardIconLinkedin.classList.remove('opacity');
        cardIconLinkedin.classList.remove('hidden-icons');
    }
}

function showGithubIcon () {
    if (githubInput.value === '') {
        cardIconGithub.classList.add('opacity');
    }

    if (githubInput.value !== '') {
        cardIconGithub.classList.remove('opacity');
        cardIconGithub.classList.remove('hidden-icons');
    }
}

emailInput.addEventListener('keyup', showEmailIcon);
phoneInput.addEventListener('keyup', showPhoneIcon);
linkedinInput.addEventListener('keyup', showLinkedinIcon);
githubInput.addEventListener('keyup', showGithubIcon);

//// Función para que los iconos desaparezcan si no se rellenan antes de compartir

const ButtonShare = document.querySelector ('.btn-share');

function hideIcons () {
    if (emailInput.value === '') {
        cardIconMail.classList.add('hidden-icons');
    }
    if (phoneInput.value === '') {
        cardIconPhone.classList.add('hidden-icons');
    }
    if (linkedinInput.value === '') {
        cardIconLinkedin.classList.add('hidden-icons');
    } 
    if (githubInput.value === '') {
        cardIconGithub.classList.add('hidden-icons');
    } 
}

ButtonShare.addEventListener('click', hideIcons)


//Función para que la altura del preview crezca al crecer la altura del desplegable

const previewBackground = document.querySelector('.page__preview');
const formsBox = document.querySelector('.panel');

function changePreviewHeight() {
    const formsBoxHeight = parseInt(formsBox.clientHeight);
    const minHeight = 768;
    if (formsBoxHeight < minHeight) {
        previewBackground.style.height = `${minHeight}px`;
    } else {
        previewBackground.style.height = `${formsBoxHeight}px`;
    }

    console.log('main', formsBoxHeight);
    console.log('preview', previewBackground.style.height)
}

formsBox.addEventListener('click', changePreviewHeight);
