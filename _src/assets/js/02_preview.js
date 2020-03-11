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

// function fixCardOnScroll () {

//     const previewContainer = document.querySelector('.preview__card--container');
//     const previewContainerMobile = document.querySelector('.page__preview');
//     const buttonReset = document.querySelector('.button_reset');


//     if (window.scrollY > 10) {
//         previewContainer.classList.add('fixed');
//     } 
//     if (screen.width < 768 && window.scrollY > 120) {
//         previewContainerMobile.classList.add('fixed__mobile');
//         buttonReset.classList.add('hidden')
//         //habría que añadir además un margen-top a "diseña" para que no desaparezca de repente
//     } else {
//         previewContainerMobile.classList.remove('fixed__mobile');
//         buttonReset.classList.remove('hidden')
//     }
// }


emailInput.addEventListener('keyup', showEmailIcon);
phoneInput.addEventListener('keyup', showPhoneIcon);
linkedinInput.addEventListener('keyup', showLinkedinIcon);
githubInput.addEventListener('keyup', showGithubIcon);
// window.addEventListener('scroll', fixCardOnScroll);


//// Función para que los iconos desaparezcan si no se rellenan antes de compartir

const clickButtonShare = document.querySelector ('.btn-share');
const clickButtonDesign = document.querySelector ('.btn-design')
const clickButtonFill = document.querySelector ('.btn-fill')

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

clickButtonShare.addEventListener('click', hideIcons)

//Función para cerrar formularios cuando se edita uno

// function hideFormsOtherThanShare () {
    
    
// }

// clickButtonShare.addEventListener('click', hideFormsOtherThanShare)
// clickButtonDesign.addEventListener('click', hideFormsOtherThanDesign)
// clickButtonFill.addEventListener('click', hideFormsOtherThanFill)

//Función para ajustar el alto de pantalla al abrir los formularios 

const previewBackground = document.querySelector('.page__home--main');
 

function updateWindowHeight () {
    previewBackground.height = window.innerHeight
    console.log(window.innerHeight)
    console.log(previewBackground.height)
} 
console.log(window.innerHeight)
console.log('altura fuera de la formula', parseInt(previewBackground.height))


clickButtonDesign.addEventListener('click', updateWindowHeight);
clickButtonFill.addEventListener('click', updateWindowHeight);
clickButtonShare.addEventListener('click', updateWindowHeight);
