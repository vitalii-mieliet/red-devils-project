document.querySelectorAll('.js-nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight =
        document.querySelector('.header-wrapper').offsetHeight;
      const offset = 10; // Дополнительный отступ от хедера

      window.scrollTo({
        top: targetElement.offsetTop - headerHeight - offset,
        behavior: 'smooth',
      });
    }
  });
});
