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



// ESSA PARTE DO CÓDIGO CUIDAD DO ACCORDION DA SESSÃO SOBRE
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


// ESSA PARTE DO CÓDIGO É REFERENTE AOS PROJETOS E O SEU CLICK
// FALTA AJEITAR O TOGGLE
const portfolioImgs = document.querySelectorAll(".portfolio-img img");
const portfolioBox = document.querySelectorAll(".portfolio-box-container");
const portfolioBoxContainers = [...portfolioBox]

function addBoxContainer (event) {
    const element = event.target;
    const nextElement = element.nextElementSibling;
    nextElement.classList.add('open-container');
}
function removeBoxContainer (event) {
    const element = event.target;
    const nextElement = element.nextElementSibling;
    nextElement.classList.remove('open-container');
}
const repoLink = Array.from(document.querySelectorAll('.portfolio-box-container .repo a'));
const siteLink = Array.from(document.querySelectorAll('.portfolio-box-container .site a'));

portfolioImgs.forEach((item, index) => {
    item.addEventListener('mouseenter', addBoxContainer);
    item.addEventListener('mouseleave', (event) => {
        let relatedTargetInLinks = false;
        repoLink.forEach((link) => {
            if (event.relatedTarget === link) {
                relatedTargetInLinks = true;
            }
        });
        siteLink.forEach((link) => {
            if (event.relatedTarget === link) {
                relatedTargetInLinks = true;
            }
        });
    
        if (event.relatedTarget === null || relatedTargetInLinks) {
            return;
        }
        removeBoxContainer(event);
    });  
})
