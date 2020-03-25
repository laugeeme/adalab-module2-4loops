'use strict';

const video = document.getElementById('video');
const snap = document.getElementById('snap');
const canvas = document.getElementById('canvas');
const errorMsgElement = document.querySelector('span#errorMsg');

const constraints = {
  audio: true,
  video: {
    width: 200,
    height: 200,
  },
};

// Acceso a la webcam
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  } catch (e) {
    errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
  }
}
// Correcto!
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}
// Load init
init();
// Dibuja la imagen
var context = canvas.getContext('2d');
snap.addEventListener('click', takePhoto);

function takePhoto() {
  console.log('entro');
  canvas.classList.remove('hiddenCanvas');
  canvas.classList.add('showCanvas');

  context.drawImage(video, 0, 0, 200, 180);
}

const videoWrap = document.querySelector('.video-wrap');
const controller = document.querySelector('.controller');

function showCamera() {
  videoWrap.classList.add('showCamera');
  controller.classList.add('showCamera');
  videoWrap.classList.remove('hiddenCamera');
  controller.classList.remove('hiddenCamera');
}

function hiddeCamera() {
  videoWrap.classList.remove('showCamera');
  controller.classList.remove('showCamera');
  videoWrap.classList.add('hiddenCamera');
  controller.classList.add('hiddenCamera');
}

const cameraButton = document.querySelector('#cameraButton');
cameraButton.addEventListener('click', showCamera);
