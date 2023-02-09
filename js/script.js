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


const accordionItems = document.querySelectorAll('.accordion .timeline-title')


accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item;
        const text = title.nextElementSibling;
        const icon = document.querySelectorAll('.accordion .timeline-title i');
        const iconArray = [...icon]
        const index = iconArray.indexOf(title.querySelector('i'));
        if (text.classList.contains('accordion-open')) {
            text.classList.remove('accordion-open');
            iconArray.forEach(item => {
                iconArray[index].classList.remove('fa-arrow-turn-up');
                iconArray[index].classList.add('fa-arrow-turn-down');
            })
        } else {
            text.classList.add('accordion-open');
            iconArray.forEach(item => {
                iconArray[index].classList.remove('fa-arrow-turn-down');
                iconArray[index].classList.add('fa-arrow-turn-up');
            })
        }
    })
})


document.addEventListener('click', event => {
    if (!event.target.closest('.accordion')) {
        accordionItems.forEach(item => {
            const text = item.nextElementSibling;
            text.classList.remove('accordion-open');
        });
    }
});