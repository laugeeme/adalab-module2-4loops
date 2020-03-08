'user strict';

let coll = document.getElementsByClassName('panel__coll');
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('active');
    let panel__content = this.nextElementSibling;
    if (panel__content.style.display === 'block') {
      panel__content.style.display = 'none';
    } else {
      panel__content.style.display = 'block';
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
    if (panel__content2.style.display === 'block') {
      panel__content2.style.display = 'none';
    } else {
      panel__content2.style.display = 'block';
    }
  });
}

