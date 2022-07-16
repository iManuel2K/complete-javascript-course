'use strict';

let hiddenModal = document.getElementById('modal');
let overlay = document.getElementById('overlay');
let closeBtn = document.getElementById('closeButton');

function hideModal() {
  hiddenModal.style.display = 'none';
  overlay.style.display = 'none';
}

let modals = document.querySelectorAll('.show-modal').forEach(modal => {
  modal.addEventListener('click', function () {
    hiddenModal.style.display = 'block';
    overlay.style.display = 'block';
  });
});

closeBtn.addEventListener('click', hideModal);

hiddenModal.addEventListener('mouseleave', hideModal);

addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    hideModal();
  }
});
