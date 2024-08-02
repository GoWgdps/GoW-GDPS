const menuIcon = document.querySelector('.header-menu');
const sidebar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active-menuIcon');
    sidebar.classList.toggle('active-sidebar');
});

const sections = document.querySelectorAll('section');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('header nav a');
const sideLinks = document.querySelectorAll('.side-navbar a');
const listLink = document.querySelector('.list-link');



window.onscroll = () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active-navbar__item');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active-navbar__item')
      });
      
        sideLinks.forEach(links => {
        links.classList.remove('active-sidebar__item');
        document.querySelector('.side-navbar a[href*=' + id + ']').classList.add('active-sidebar__item')
      });
    }
  });
  
  
  header.classList.toggle('sticky', window.scrollY > 1);
};