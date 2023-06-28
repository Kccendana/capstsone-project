const navButton = document.querySelector('.nav-button');// \r\n
const navList = document.querySelector('.menu-list');// \r\n
const navMenu = document.querySelectorAll('.navMenu');// \r\n
const nav = document.querySelector('.nav');

navButton.addEventListener('click', () => {
  navList.classList.toggle('show');
  navButton.classList.toggle('close');
  nav.classList.toggle('open');
}, false);

navMenu.forEach((links) => links.addEventListener('click', () => {
  navList.classList.remove('show');
  navButton.classList.remove('close');
  nav.classList.remove('open');
}));

window.onresize = () => {
  if (window.innerWidth > 760) navList.classList.remove('show');
  nav.classList.remove('open');
  navButton.classList.remove('close');
};
