let typed = new Typed(".typing", {
    strings: ["", "", "Desenvolvedor Web.", "Estudante de Engenharia de Software.", "Aluno da Origamid."],
    typeSpeed: 40,
    BackSpeed: 60,
    loop: true
});



// ESSA PARTE DO CÓDIGO É PARA ADICIONAR CORES AO MENU DO LAYOUT PC
const menuNavLinks = document.querySelectorAll('.nav li a');

function navLinkToggle() {
    menuNavLinks.forEach(item => {
        item.addEventListener('click', (event) => {
            menuNavLinks.forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.toggle('active');
        });
    });
}

navLinkToggle();


const accordionItems = document.querySelectorAll('.accordion .timeline-title');


accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        const text = item.nextElementSibling;
        const icon = item.querySelector('i');
        text.classList.toggle('accordion-open');
        if(icon.classList.contains('fa-arrow-turn-down')){
            icon.classList.remove('fa-arrow-turn-down')
            icon.classList.add('fa-arrow-turn-up');
        }else {
            icon.classList.remove('fa-arrow-turn-up');
            icon.classList.toggle('fa-arrow-turn-down');
        }
    });
});

document.addEventListener('click', event => {
    if (!event.target.closest('.accordion')) {
        accordionItems.forEach(item => {
            const icon = item.querySelector('i');
            const text = item.nextElementSibling;
            text.classList.remove('accordion-open');
            if(icon.classList.contains('fa-arrow-turn-up')){
                icon.classList.add('fa-arrow-turn-down');
            }
        });
    }
});


window.addEventListener('scroll', () => {
        
})