'use strict';

const cardButton = document.querySelector('#createCardButton'); //botón crear tarjeta como listener para generar el link
const twitterCardButton = document.querySelector('.btn-twit'); //botón enviar Twitter como listener para generar tweet
const printURL = document.querySelector('.print__url--twitter'); //elemento html donde se mostrará la url que se genere (creo otra etiqueta p para meterlo con esa clase)
const userForm = document.querySelector('.fill'); //formulario con la información que se va a enviar
// const errorMessageCard = document.querySelector('#error-message'); //mensaje de error si falta algún campo
const successMessage = document.querySelector('#success-message'); //mensaje de éxito si se crea la tarjeta

const cardForTwitter = readUserInfo(); //se crea un objeto para guardar la información de la tarjeta que se va a crear, empezando por rescatar la información guardada en local del formulario (funciones "read" para leer la info guardada en local en info.js)

function createInfoObject() { //función para añadir al objeto la imagen y los colores

  cardForTwitter.photo = readLocalImage(); 
  cardForTwitter.palette = readSavedTheme(); 

  console.log('cardForTwitter', cardForTwitter);

  sendRequest()
}

function sendRequest(){ //función para enviar la información de la tarjeta a la url de awesome cards

    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', { 
    method: 'POST',
    body: JSON.stringify(cardForTwitter), //se pasa a JSON la info del objeto (lo demás copy+paste!)
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) { return resp.json(); })
    .then(function(result) { showURL(result); })
    .catch(function(error) { console.log(error); });

}

function showURL(result){ //pintamos la url en la web

    // if(result.error){ //si el resultado es "success"
    // errorMessageCard.classList.remove('display__none'); //quitamos clase "display__none" al mensaje de error
    // }else{
    successMessage.classList.remove('display__none'); //quitamos clase "display__none" al mensaje de éxito
    twitterCardButton.classList.remove('display__none') //quitamos clase "display__none" al botón de Twitter para compartir
    printURL.innerHTML = result.cardURL; //pintamos la url en pantalla
    printURL.href = result.cardURL; //añadimos la url al href del enlace
    // }
}

function twitterLink() { //función para crear generar el tweet en twitter con el texto y hashtags
    const url = document.querySelector('.print__url--twitter').href; //cogemos la url que hemos añadido después de generarse
    twitterCardButton.href = `https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards:%0A;hashtags=Adalab, AwesomeProfileCards, promoIdelisa ${url}`; //incluimos la url nueva para el tweet de tweeter como href del botón "compartir en Twitter" (cambio button por a porque con button no me funciona)
}

cardButton.addEventListener('click', createInfoObject); //listener para crear tarjeta
twitterCardButton.addEventListener('click', twitterLink); //listener para compartir en tw