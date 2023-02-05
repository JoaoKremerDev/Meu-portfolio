const menuMobile = document.querySelector('.menu-mobile');
const navToggler = document.querySelector('.nav-toggler');

function menuShow() {
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.nav-toggler span').style.transform = 'rotate(0deg)';
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.nav-toggler span').style.transform = 'rotate(180deg)';
  }
}

navToggler.addEventListener('click', menuShow);

document.addEventListener('click', function(event) {
  if (!menuMobile.contains(event.target) && !navToggler.contains(event.target)) {
    menuMobile.classList.remove('open');
    document.querySelector('.nav-toggler span').style.transform = 'rotate(0deg)';
  }
});
