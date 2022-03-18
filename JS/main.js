const navbar = document.querySelector('.navbar');
const searchOnScroll = document.querySelector('.search_on_scroll');
window.addEventListener('scroll', function() {
  if(window.scrollY > 50) {
    navbar.classList.add('navbar--boxshadow');
    searchOnScroll.style.display = 'flex'
  }
  else{
    navbar.classList.remove('navbar--boxshadow');
    searchOnScroll.style.display = 'none'
  }
})

const nav__icon = document.querySelector('.nav__icon');
const submenu = document.querySelector('.submenu__mobile__list')
const main = document.querySelector('main');
nav__icon.addEventListener('click', function() {
  (submenu.style.display === 'none') ? submenu.style.display = 'block' : submenu.style.display = 'none';
})
submenu.addEventListener('click', function(e) {
  e.stopPropagation();
})
main.addEventListener('click', function() {
  submenu.style.display = 'none';
})