'user strict'

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
        cardIconMail.classList.add('hidden');
    }

    if (emailInput.value !== '') {
        cardIconMail.classList.remove('hidden');
    }
}

function showPhoneIcon () {

    if (phoneInput.value === '') {
        cardIconPhone.classList.add('hidden');
    }

    if (phoneInput.value !== '') {
        cardIconPhone.classList.remove('hidden');
    }
}

function showLinkedinIcon () {

    if (linkedinInput.value === '') {
        cardIconLinkedin.classList.add('hidden');
    }

    if (linkedinInput.value !== '') {
        cardIconLinkedin.classList.remove('hidden');
    }
}

function showGithubIcon () {

    if (githubInput.value === '') {
        cardIconGithub.classList.add('hidden');
    }

    if (githubInput.value !== '') {
        cardIconGithub.classList.remove('hidden');
    }
}

function fixCardOnScroll () {

    const previewContainer = document.querySelector('.preview__card--container');
    const previewContainerMobile = document.querySelector('.page__preview');
    const buttonReset = document.querySelector('.button_reset');


    if (window.scrollY > 10) {
        previewContainer.classList.add('fixed');
    }
    if (screen.width < 768 && window.scrollY > 120) {
        previewContainerMobile.classList.add('fixed__mobile');
        buttonReset.classList.add('hidden')
        //habría que añadir además un margen-top a "diseña" para que no desaparezca de repente
    } else {
        previewContainerMobile.classList.remove('fixed__mobile');
        buttonReset.classList.remove('hidden')
    }

}


emailInput.addEventListener('keyup', showEmailIcon);
phoneInput.addEventListener('keyup', showPhoneIcon);
linkedinInput.addEventListener('keyup', showLinkedinIcon);
githubInput.addEventListener('keyup', showGithubIcon);
window.addEventListener('scroll', fixCardOnScroll);