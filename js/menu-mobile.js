const menuMobile = document.querySelector('.menu-mobile');
const navToggler = document.querySelector('.nav-toggler');

function menuShow() {
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.nav-toggler span').style.transform = 'rotate(0deg)';
    const sections = document.querySelectorAll('.section .section-title');
    const ArraySections = Array.from(sections);
    ArraySections.forEach( section => section.style.paddingTop ='0px');
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.nav-toggler span').style.transform = 'rotate(180deg)';
  
    const sections = document.querySelectorAll('.section .section-title');
    const ArraySections = Array.from(sections);
    ArraySections.forEach( section => section.style.paddingTop ='120px');
  }
}

navToggler.addEventListener('click', menuShow);

document.addEventListener('click', function(event) {
  if (!menuMobile.contains(event.target) && !navToggler.contains(event.target)) {
    menuMobile.classList.remove('open');
    document.querySelector('.nav-toggler span').style.transform = 'rotate(0deg)';
    const sections = document.querySelectorAll('.section .section-title');
    const ArraySections = Array.from(sections);
    ArraySections.forEach( section => section.style.paddingTop ='0px');
  }
});
