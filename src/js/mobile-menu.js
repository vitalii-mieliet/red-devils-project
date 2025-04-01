document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.querySelector('.header-modal-mobile-menu');
  const openMenuBtn = document.querySelector('.burger-btn.js-mobile-menu');
  const closeMenuBtn = document.querySelector('.close-btn.js-mobile-menu');
  const menuLinks = document.querySelectorAll('.header-list-link-mobile-menu');

  // Function to open the mobile menu
  function openMobileMenu() {
    mobileMenu.classList.add('is-open'); // Add the "is-open" class to display the menu
    document.body.classList.add('no-scroll'); // Disable scrolling when the menu is open
  }

  // Function to close the mobile menu
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open'); // Remove the "is-open" class to hide the menu
    document.body.classList.remove('no-scroll'); // Enable scrolling again
  }

  // Event listener to open the menu when the button is clicked
  openMenuBtn.addEventListener('click', openMobileMenu);

  // Event listener to close the menu when the close button is clicked
  closeMenuBtn.addEventListener('click', closeMobileMenu);

  // Close the menu when a link inside the menu is clicked
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close the menu when clicking outside of it
  document.addEventListener('click', function (event) {
    if (
      !mobileMenu.contains(event.target) && // Check if the click is outside the menu
      !openMenuBtn.contains(event.target) // Allow clicking on the open button
    ) {
      closeMobileMenu();
    }
  });
});
