'use strict';

let coll = document.getElementsByClassName('panel__coll');
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel__content = this.nextElementSibling;
    if (panel__content.style.display === 'inherit') {
      panel__content.style.display = 'none';
    } else {
      panel__content.style.display = 'inherit';
    }
  });
}


/*********************SECOND collapsible after click on btn-create ********************/


let coll2 = document.getElementsByClassName('panel__coll--child');
let i2;
for (i2 = 0; i2 < coll2.length; i2++) {
  coll2[i2].addEventListener('click', function () {
    this.classList.toggle('active2');
    let panel__content2 = this.nextElementSibling;
    if (panel__content2.style.display === 'inherit') {
      panel__content2.style.display = 'none';
    } else {
      panel__content2.style.display = 'inherit';
    }
  });
}


// Desactiva el botón de crear tarjeta en caso de que el formulario no esté completo.

const createCardButton = document.querySelector('.btn-create');
const errorMessage = document.querySelector('.error-message');
const twitterButtonContainer = document.querySelector('.panel__content2')
//---->MARIA
const allFormInputs = document.querySelectorAll('.input-required');

// function addListenersToInputs() {
//   for (let singleInput of allFormInputs) {
//     singleInput.addEventListener('keyup', validateFields);
  // }

  //allFormInputs.forEach(singleInput => singleInput.addEventListener('keyup',validateFields))
// }

// function validateFields(evt) {
//   if (evt.currentTarget.id === 'name' && evt.currentTarget.value !== '') {
//     createCardButton.disabled = false;
//     errorMessage.classList.add('hidden');
//   } else {
//     createCardButton.disabled = true;
//     errorMessage.classList.remove('hidden');
//   }
//   if (evt.currentTarget.id === 'job' && evt.currentTarget.value !== '') {
//     createCardButton.disabled = false;
//     errorMessage.classList.add('hidden');
//   } else {
//     createCardButton.disabled = true;
//     errorMessage.classList.remove('hidden');
//   }
//   if (evt.currentTarget.id === 'email' && evt.currentTarget.value !== '') {
//     createCardButton.disabled = false;
//     errorMessage.classList.add('hidden');
//   } else {
//     createCardButton.disabled = true;
//     errorMessage.classList.remove('hidden');
//   }

//   if (evt.currentTarget.id === 'linkedin' && evt.currentTarget.value !== '') {
//     createCardButton.disabled = false;
//     errorMessage.classList.add('hidden');
//   } else {
//     createCardButton.disabled = true;
//     errorMessage.classList.remove('hidden');
//   }
//   if (evt.currentTarget.id === 'github' && evt.currentTarget.value !== '') {
//     createCardButton.disabled = false;
//     errorMessage.classList.add('hidden');
//   } else {
//     createCardButton.disabled = true;
//     errorMessage.classList.remove('hidden');
//   }
// }


// fullName.addEventListener('keyup',validateFields);
// jobPosition.addEventListener('keyup',validateFields);
// emailAddress.addEventListener('keyup',validateFields);
// linkedin.addEventListener('keyup',validateFields);
// github.addEventListener('keyup',validateFields);


function validateFields(evt) {
  createCardButton.disabled = false;
  errorMessage.classList.add('hidden');

  if (fullName.value === '' || jobPosition.value === '' || emailAddress.value === '' || linkedin.value === '' || github.value === '') {
    event.preventDefault();
    createCardButton.disabled = false;
    errorMessage.classList.remove('hidden')
  } else {
    createCardButton.disabled = true;
    errorMessage.classList.add('hidden');  
  }
}

createCardButton.addEventListener('click', validateFields);

window.addEventListener('load', validateFields);







///


// function checkFilledInputs() {
//   console.log('holas')
//   if (fullName.value === '' || jobPosition.value === '' || emailAddress.value === '' || linkedin.value === '' || github.value === '') {
//     createCardButton.disabled = true;
//     errorMessage.classList.remove('hidden');

//   } else {
//     createCardButton.disabled = false;
//     errorMessage.classList.add('hidden');
//   }
// }

// createCardButton.addEventListener('click', checkFilledInputs);