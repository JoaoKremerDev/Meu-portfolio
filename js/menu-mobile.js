class MenuMobile {
  constructor(menuMobile, navToggler) {
    this.menuMobile = document.querySelector(menuMobile);
    this.navToggler = document.querySelector(navToggler);
    this.bindEvents();
  }

  bindEvents() {
    this.navToggler.addEventListener('click', this.menuShow.bind(this));
    document.addEventListener('click', this.closeMenu.bind(this));
  }

  paddingTop(paddingTop) {
    const sections = document.querySelectorAll('.section .section-title');
    const ArraySections = Array.from(sections);
    ArraySections.forEach(section => (section.style.paddingTop = `${paddingTop}px`));
  }

  menuShow() {
    if (this.menuMobile.classList.contains('open')) {
      this.menuMobile.classList.remove('open');
      document.querySelector('.nav-toggler span').style.transform = 'rotate(0deg)';
      this.paddingTop(0);
    } else {
      this.menuMobile.classList.add('open');
      document.querySelector('.nav-toggler span').style.transform = 'rotate(180deg)';
      this.paddingTop(200);
    }
  }

  closeMenu(event) {
    if (!this.menuMobile.contains(event.target) && !this.navToggler.contains(event.target)) {
      this.menuMobile.classList.remove('open');
      document.querySelector('.nav-toggler span').style.transform = 'rotate(0deg)';
      this.paddingTop(0);
    }
  }

  init() {
    bindEvents();
    paddingTop(paddingTop);
    menuShow();
    closeMenu();
  }
}
const menu = new MenuMobile('.menu-mobile', '.nav-toggler');
menu.init();
