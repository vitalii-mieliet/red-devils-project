document.addEventListener('DOMContentLoaded', function () {
  new Splide('#reviews-slider', {
    type: 'loop', // Enables continuous looping of slides
    perPage: 1, // Number of slides to show per page on mobile (default)
    perMove: 1, // Number of slides to move at a time
    gap: '16px', // Gap between the slides
    autoplay: true, // Enable autoplay
    interval: 6000, // Interval for autoplay
    pauseOnHover: true, // Pause autoplay when hovering over the slider
    arrows: false, // Disable navigation arrows by default
    pagination: true, // Enable pagination by default (for mobile)
    mediaQuery: 'min', // Use 'min' for responsive breakpoints (adjust based on screen width)
    breakpoints: {
      // For screens wider than 768px (mobile devices)
      768: {
        perPage: 2, // Show 1 slide per page (adjust as necessary)
      },
      // For screens wider than 1280px (desktop)
      1280: {
        perPage: 3, // Show 3 slides per page on desktop
        gap: '20px', // Increase gap between slides on desktop
      },
    },
  }).mount(); // Mount the Splide instance to make it functional
});
