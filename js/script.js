let typed = new Typed(".typing", {
    strings:["", "", "Desenvolvedor Web.", "Estudante de Engenharia de Software.", "Aluno da Origamid."],
    typeSpeed: 40,
    BackSpeed: 60,
    loop: true
});




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