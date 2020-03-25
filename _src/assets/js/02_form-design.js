'use strict';

function previewPalette1() {
  previewCardBox.classList.add('preview__card--box--palette1');
  previewCardBox.classList.remove('preview__card--box--palette2');
  previewCardBox.classList.remove('preview__card--box--palette3');
  previewCardBox.classList.remove('preview__card--box--palette4');
}

function previewPalette2() {
  previewCardBox.classList.add('preview__card--box--palette2');
  previewCardBox.classList.remove('preview__card--box--palette1');
  previewCardBox.classList.remove('preview__card--box--palette3');
  previewCardBox.classList.remove('preview__card--box--palette4');
}

function previewPalette3() {
  previewCardBox.classList.add('preview__card--box--palette3');
  previewCardBox.classList.remove('preview__card--box--palette1');
  previewCardBox.classList.remove('preview__card--box--palette2');
  previewCardBox.classList.remove('preview__card--box--palette4');
}

function previewPalette4() {
  previewCardBox.classList.add('preview__card--box--palette4');
  previewCardBox.classList.remove('preview__card--box--palette1');
  previewCardBox.classList.remove('preview__card--box--palette2');
  previewCardBox.classList.remove('preview__card--box--palette3');
}
