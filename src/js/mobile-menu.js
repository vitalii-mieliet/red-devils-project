document.querySelectorAll('.js-mobile-menu').forEach(btn => {
  btn.addEventListener('click', () => {
    document
      .querySelector('.header-modal-mobile-menu')
      .classList.toggle('is-open');
  });
});

document.querySelectorAll('.js-form-menu').forEach(btn => {
  btn.addEventListener('click', () => {
    document
      .querySelector('.header-modal-mobile-menu')
      .classList.toggle('is-open');
  });
});
