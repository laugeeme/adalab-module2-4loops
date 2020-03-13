'use strict';

const resetButton = document.querySelector('.button_reset');

function resetForm (){
    document.getElementById("myForm").reset();
    document.getElementById("myFormPalette").reset();
    resetPreview();
    removeCanvas();
    hiddeCamera();
    

}

function resetPreview(){    // Esta función reseteará el style de colores, el nombre y puesto y los iconos.

    previewPalette1();
    showEmailIcon ();
    showPhoneIcon ();
    showLinkedinIcon ();
    showGithubIcon ();

    previewFullName.innerHTML = 'Nombre Apellido';
    previewJobPosition.innerHTML= 'Front-end developer';
}

function removeCanvas (){
    canvas.classList.add('hiddenCanvas');
    canvas.classList.remove('showCanvas'); 
}


