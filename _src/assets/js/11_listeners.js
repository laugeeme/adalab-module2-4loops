// Listeners DESIGN
palette1.addEventListener('click', previewPalette1);
palette2.addEventListener('click', previewPalette2);
palette3.addEventListener('click', previewPalette3);
palette4.addEventListener('click', previewPalette4);


// Listeners FILL
fullName.addEventListener('keyup', copyInfoName);
jobPosition.addEventListener('keyup', copyInfoJob);
uploadButton.addEventListener('click', generateClick);
fileField.addEventListener('change', getImage);
cameraButton.addEventListener('click', showCamera);


// Listeners PREVIEW
emailAddress.addEventListener('keyup', showEmailIcon);
phoneNumber.addEventListener('keyup', showPhoneIcon);
linkedin.addEventListener('keyup', showLinkedinIcon);
github.addEventListener('keyup', showGithubIcon);
ButtonShare.addEventListener('click', hideIcons);
formsBox.addEventListener('click', changePreviewHeight);
window.addEventListener('resize', changePreviewHeight);
resetButton.addEventListener('click', resetForm);


// Listeners LOCALSTORAGE
palette1.addEventListener('click', saveSelectedTheme);
palette2.addEventListener('click', saveSelectedTheme);
palette3.addEventListener('click', saveSelectedTheme);
palette4.addEventListener('click', saveSelectedTheme);
fullName.addEventListener('keyup', saveUserInfo);
jobPosition.addEventListener('keyup', saveUserInfo);
emailAddress.addEventListener('keyup', saveUserInfo);
phoneNumber.addEventListener('keyup', saveUserInfo);
linkedin.addEventListener('keyup', saveUserInfo);
github.addEventListener('keyup', saveUserInfo);
window.addEventListener('load', checkSavedTheme);
window.addEventListener('load', printSavedInfo);
window.addEventListener('load', printSavedImage);


//Listeners SHARE
fullName.addEventListener('keyup', validateFields);
jobPosition.addEventListener('keyup', validateFields);
emailAddress.addEventListener('keyup', validateFields);
linkedin.addEventListener('keyup', validateFields);
github.addEventListener('keyup', validateFields);

createCardButton.addEventListener('click', createInfoObject); 
twitterCardButton.addEventListener('click', twitterLink);