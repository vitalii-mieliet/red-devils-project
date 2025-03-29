document.getElementById('showMore').addEventListener('click', function () {
  document
    .querySelectorAll('.catalog-item.hidden')
    .forEach(el => el.classList.remove('hidden'));
  this.style.display = 'none';
});
