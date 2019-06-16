console.log('hello');

function toggleMenu () {
  document.querySelector('.menu').classList.toggle('visible');
  document.querySelector('.menu').classList.toggle('hidden');
}

document.querySelector('.menu-hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
