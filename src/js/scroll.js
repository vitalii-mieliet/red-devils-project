document.querySelectorAll('.js-nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight =
        document.querySelector('.header-wrapper').offsetHeight;
      const offset = 10;

      // Получаем правильную позицию элемента относительно документа
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: targetPosition - headerHeight - offset,
        behavior: 'smooth',
      });
    }
  });
});
