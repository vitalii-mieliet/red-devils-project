// document.querySelectorAll('.js-mobile-menu').forEach(btn => {
//   btn.addEventListener('click', () => {
//     document
//       .querySelector('.header-modal-mobile-menu')
//       .classList.toggle('is-open');
//   });
// });

// document.querySelectorAll('.js-form-menu').forEach(btn => {
//   btn.addEventListener('click', () => {
//     document
//       .querySelector('.header-modal-mobile-menu')
//       .classList.toggle('is-open');
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('.header-modal-mobile-menu');
  const openMenuBtn = document.querySelector('.burger-btn.js-mobile-menu');
  const closeMenuBtn = document.querySelector('.close-btn.js-mobile-menu');
  const menuLinks = document.querySelectorAll('.header-list-link-mobile-menu');

  // Функция для закрытия меню
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
  }

  // Открытие меню
  openMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
  });

  // Закрытие меню по кнопке
  closeMenuBtn.addEventListener('click', closeMobileMenu);

  // Закрытие меню при клике на любую ссылку в меню
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Закрытие меню при клике вне его области
  document.addEventListener('click', function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !openMenuBtn.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });
});
