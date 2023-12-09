document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal');
  const moreButton = document.querySelector('.more-notes');
  const exitModal = document.querySelector('.modal-exit, .exit-container');
  const themesButton = document.querySelector('themes-button');
  const fontsButton = document.querySelector('fonts-button');
  const helpButton = document.querySelector('help-button');
  const aboutMeButton = document.querySelector('about-me-button');

  moreButton.addEventListener('click', () => {
    modal.style.display = "flex";
  });

  exitModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  

});

 