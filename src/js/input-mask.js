document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.getElementById('telephone');

  const mask = new Inputmask('+380-99-999-99-99');
  mask.mask(phoneInput);
});
