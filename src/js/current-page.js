// Получаем все ссылки в меню хедера и мобильного меню
const menuLinks = document.querySelectorAll(
  '.header-list-link, .header-list-link-mobile-menu'
);

// Получаем все секции, на которые ссылаются эти меню
const sections = document.querySelectorAll(
  '#hero, #about-us, #catalog, #sale, #reviews, #contact-us'
);

// Функция для обновления классов "current" на основе текущей секции
function updateCurrentSection() {
  let currentSection = null;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    // Проверяем, если секция находится в пределах видимости на экране
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentSection = section.id;
    }

    // Если секция совсем вверху, например для "home"
    if (rect.top <= 0 && rect.bottom >= window.innerHeight / 2) {
      currentSection = section.id;
    }
  });

  // Обновляем классы на ссылках в меню
  menuLinks.forEach(link => {
    const linkTargetId = link.getAttribute('href').substring(1); // Получаем id из href
    if (linkTargetId === currentSection) {
      link.classList.add('current'); // Добавляем класс для активной ссылки
    } else {
      link.classList.remove('current'); // Убираем класс с неактивных ссылок
    }
  });
}

// Отслеживаем прокрутку страницы
window.addEventListener('scroll', updateCurrentSection);

// Вызываем функцию сразу, чтобы правильно установить класс на начальной загрузке
updateCurrentSection();
