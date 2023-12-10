document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal');
  const moreButton = document.querySelector('.more-notes');
  const exitModal = document.querySelector('.modal-exit, .exit-container');
  const allButtons = document.querySelectorAll('.button');

  moreButton.addEventListener('click', () => {
    modal.style.display = "flex";
  });

  exitModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  allButtons.forEach(button => {

    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#6363638c';
    });

    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = '#00000095';
    });
  });

});

 