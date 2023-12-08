document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal');
  const moreButton = document.querySelector('.more-notes');
  const exitModal = document.querySelector('.modal-exit, .exit-container');
  moreButton.addEventListener('click', () => {
    modal.style.display = "flex";
  });

  exitModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

});

 