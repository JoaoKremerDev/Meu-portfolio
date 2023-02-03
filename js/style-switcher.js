// toggle style switcher // Troca de evento do switcher

const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () =>{
    switcher = document.querySelector('.style-switcher');
    switcher.classList.toggle('open');
});

// Hide my style - switcher on scroll // Esconder o switcher 
document.addEventListener("click", function(event) {
    const switcher = document.querySelector('.style-switcher');
    if (!switcher.contains(event.target) && switcher.classList.contains('open')) {
      switcher.classList.remove('open');
    }
  });

// theme colors // tema de cores

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyles.forEach( style => { 
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
};


// theme light and dark mode // modo escuro e claro


const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});

window.addEventListener('load', () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector('i').classList.remove('fa-moon')
        dayNight.querySelector("i").classList.add('fa-sun');
        console.log('teste')
    } else{
        dayNight.querySelector('i').classList.add('fa-moon');
    }
});


