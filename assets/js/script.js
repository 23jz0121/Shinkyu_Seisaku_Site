(function() {
  'use strict';

  const showModalBtn = document.querySelectorAll('.btn-detail');
  const modal = document.querySelector('.modal-window');
  const body = document.querySelector('body');

  showModalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.showModal();
      body.style.overflow = 'hidden';
      document.querySelector('.btn-modal-close').addEventListener('click', () => {
        modal.querySelector('.inner').scrollTop = 0;
        body.style.overflow = 'auto';
      });
    });
  });
})();