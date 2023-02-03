// toggle style switcher

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () =>{
    switcher = document.querySelector('.style-switcher');
    switcher.classList.toggle('open');
});

document.addEventListener("click", function(event) {
    const switcher = document.querySelector('.style-switcher');
    if (!switcher.contains(event.target) && switcher.classList.contains('open')) {
      switcher.classList.remove('open');
    }
  });