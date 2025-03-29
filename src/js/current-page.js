document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.header-list-link');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('.header-wrapper');

  function getOffsetTop(element) {
    const headerHeight = header.offsetHeight; // Получаем высоту хедера
    return element.offsetTop - headerHeight; // Делаем отступ 10px
  }

  function setActiveLink(target) {
    menuItems.forEach(item => item.classList.remove('current')); // Убираем у всех
    target.classList.add('current'); // Добавляем только активному
  }

  // Плавный скролл при клике на меню
  menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault(); // Отменяем стандартный якорный переход

      let targetId = this.getAttribute('href');

      // Если клик по "Home", прокручиваем вверх
      if (targetId === './header.html' || targetId === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        setActiveLink(this);
        return;
      }

      let targetSection = document.getElementById(targetId.substring(1));

      if (targetSection) {
        window.scrollTo({
          top: getOffsetTop(targetSection),
          behavior: 'smooth',
        });

        setActiveLink(this);
      }
    });
  });

  // Обновление активного пункта при скролле
  window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;

    sections.forEach(section => {
      let sectionTop = getOffsetTop(section);
      let sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop - 40 &&
        scrollPosition < sectionTop + sectionHeight - windowHeight / 2
      ) {
        let id = section.getAttribute('id');
        let activeItem = document.querySelector(
          `.header-list-link[href="#${id}"]`
        );
        if (activeItem) {
          setActiveLink(activeItem);
        }
      }
    });

    // Если в самом верху страницы, выделяем "Home"
    if (scrollPosition < 100) {
      let homeLink = document.querySelector(
        '.header-list-link[href="./header.html"]'
      );
      if (homeLink) {
        setActiveLink(homeLink);
      }
    }
  });

  // При загрузке страницы прокручиваем вверх
  window.scrollTo(0, 0);
});
