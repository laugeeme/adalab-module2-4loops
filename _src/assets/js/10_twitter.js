'use strict'; 

let cardForTwitter;

function createInfoObject() {
  //función para añadir al objeto la imagen y los colores

  cardForTwitter = readUserInfo(); //se crea un objeto para guardar la información de la tarjeta que se va a crear, empezando por rescatar la información guardada en local del formulario (funciones "read" para leer la info guardada en local en info.js)

  cardForTwitter.photo = readLocalImage();
  cardForTwitter.palette = readSavedTheme();

  console.log('cardForTwitter', cardForTwitter);

  sendRequest();
}

function sendRequest() {
  //función para enviar la información de la tarjeta a la url de awesome cards

  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(cardForTwitter), //se pasa a JSON la info del objeto (lo demás copy+paste!)
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function showURL(result) {
  //pintamos la url en la web
  // console.log(result.cardURL);
  twitterButtonContainer.classList.remove('hidden');
  // successMessage.classList.remove('display__none'); //quitamos clase "display__none" al mensaje de éxito
  twitterCardButton.classList.remove('display__none'); //quitamos clase "display__none" al botón de Twitter para compartir
  printURL.innerHTML = result.cardURL; //pintamos la url en pantalla
  printURL.href = result.cardURL; //añadimos la url al href del enlace
  // }
}

function twitterLink() {
  //función para crear generar el tweet en twitter con el texto y hashtags
  const url = document.querySelector('.print__url--twitter').href; //cogemos la url que hemos añadido después de generarse
  twitterCardButton.href = `https://twitter.com/intent/tweet?text=He%20creado%20esta%20tarjeta%20con%20Awesome%20Profile%20Cards:%0A ${url}%0A;hashtags=Adalab, AwesomeProfileCards, promoIdelisa`; //incluimos la url nueva para el tweet de tweeter como href del botón "compartir en Twitter" (cambio button por a porque con button no me funciona)
}
