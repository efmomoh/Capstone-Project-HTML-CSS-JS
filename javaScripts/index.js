const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.desk-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

document.querySelectorAll('.desk-menu').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}));