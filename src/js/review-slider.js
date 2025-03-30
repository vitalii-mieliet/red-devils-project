document.addEventListener('DOMContentLoaded', function () {
  new Splide('#reviews-slider', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '16px',
    autoplay: true,
    interval: 300000,
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    mediaQuery: 'min',
    breakpoints: {
      768: { perPage: 2 },
      1280: { perPage: 3, gap: '20px' },
    },
  }).mount();
});
