'use strict';

console.log('hola design');

const palette1 = document.querySelector('#colorPalette1');
const palette2 = document.querySelector('#colorPalette2');
const palette3 = document.querySelector('#colorPalette3');
const palette4 = document.querySelector('#colorPalette4');
const previewCardBox = document.querySelector('.preview__card--box');



function previewPalette1 (){
    previewCardBox.classList.add('preview__card--box--palette1');
    previewCardBox.classList.remove('preview__card--box--palette2');
    previewCardBox.classList.remove('preview__card--box--palette3');
    previewCardBox.classList.remove('preview__card--box--palette4');

};

function previewPalette2 (){
    previewCardBox.classList.add('preview__card--box--palette2');
    previewCardBox.classList.remove('preview__card--box--palette1');
    previewCardBox.classList.remove('preview__card--box--palette3');
    previewCardBox.classList.remove('preview__card--box--palette4');
};

function previewPalette3 (){
    previewCardBox.classList.add('preview__card--box--palette3');
    previewCardBox.classList.remove('preview__card--box--palette1');
    previewCardBox.classList.remove('preview__card--box--palette2');
    previewCardBox.classList.remove('preview__card--box--palette4');
};

function previewPalette4(){
    previewCardBox.classList.add('preview__card--box--palette4');
    previewCardBox.classList.remove('preview__card--box--palette1');
    previewCardBox.classList.remove('preview__card--box--palette2');
    previewCardBox.classList.remove('preview__card--box--palette3');
};



palette1.addEventListener('click', previewPalette1);
palette2.addEventListener('click', previewPalette2);
palette3.addEventListener('click', previewPalette3);
palette4.addEventListener('click', previewPalette4);

