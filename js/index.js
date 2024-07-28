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

// const wrapper = document.querySelector('.wrapper');
// const btnWrapper = document.querySelector('.header-navbar .btnPopup');
// const popup = document.querySelector('.wrapper .popup');
// const closePopup = document.querySelector('.popup .close');


// btnWrapper.addEventListener('click', function() {
//   wrapper.style.cssText = `
//       opacity: 1;
//       pointer-events: unset;
//     `;
    
//   popup.style.cssText = `
//       transform: scale(1);
//     `;
    
//   btnWrapper.classList.add('active-navbar__item');
    
//   scrollController.disableScroll();
// });

// closePopup.addEventListener('click', function() {
//   wrapper.style.cssText = ``;
//   popup.style.cssText = ``;
    
//   btnWrapper.classList.remove('active-navbar__item');
    
//   scrollController.enableScroll();
// });


// const scrollController = {
  
//   scrollPosition: 0,
  
//   disableScroll() {
    
//     scrollController.scrollPosition = window.scrollY;

//     document.body.style.cssText = `
//       overflow: hidden;
//       position: fixed;
//       top: -${scrollController.scrollPosition}px;
//       left: 0;
//       width: 100vw;
//       min-height: 100vh;
//       padding-right: ${window.innerWidth - document.body.offsetWidth}px;
//     `;
    
//     document.documentElement.style.scrollBehavior = 'unset';
    
//   },
  
//   enableScroll() {
    
//     document.body.style.cssText = '';
    
//     window.scroll({top: scrollController.scrollPosition});
    
//     document.documentElement.style.scrollBehavior = '';
    
//     header.style.pointerEvents = 'unset';
    
//   }
  
// };

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
  
  
  header.classList.toggle('sticky', window.scrollY > 100);
};

// const btnPopupSidebar = document.querySelector('.side-navbar a.btnPopup');
// const sidebarLists = document.querySelector('.side-navbar .sidebar-lists ul');
// const iconList = document.querySelector('.icon-list');

// btnPopupSidebar.addEventListener('click', function() {
//     sidebarLists.classList.toggle('active-sidebar__lists');
//     iconList.classList.toggle('active-icon-list');
//     listLink.classList.toggle('active-sidebar__item');
// });