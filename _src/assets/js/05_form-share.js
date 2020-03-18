'user strict';

let coll = document.getElementsByClassName('panel__coll');
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
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
  coll2[i2].addEventListener('click', function() {
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

function checkFilledInputs() {
  
  if (fullName.value === '' || jobPosition.value === '' || emailAddress.value === '' || linkedin.value === '' || github.value === '') {
    createCardButton.disabled = true;
    errorMessage.classList.remove('hidden');

  } else {
    createCardButton.disabled = false;
    errorMessage.classList.add('hidden');
  }
}