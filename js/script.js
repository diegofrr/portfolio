feather.replace()

let habilidadesButton = document.querySelector('.hab');
let projetosButton = document.querySelector('.proj');
let mobileButton = document.querySelector('.mob');

let sectionsContent = document.querySelector('.sections-content');
let sectionsContainer = document.querySelector('.sections-container');
let container = document.querySelector('.container');

let habilidadesSection = document.querySelector('.habilidades-section');
let projetosSection = document.querySelector('.projetos-section');
let mobileSection = document.querySelector('.mobile-section');

let closeModalButton = document.querySelector('.close-modal-button');
let modal = document.querySelector('.modal');

let mobileImage = document.querySelectorAll('.mobile-card');

let scrollClass = document.querySelector('.active');

// let marginLeft = habilidadesSection.offsetWidth
//     sectionsContainer.scrollLeft = marginLeft

habilidadesButton.addEventListener('click', () => {
    let marginLeft = habilidadesSection.offsetWidth
    sectionsContainer.scrollLeft = marginLeft * -1

    habilidadesButton.classList.add('selected');
    projetosButton.classList.remove('selected');
    mobileButton.classList.remove('selected');

    habilidadesSection.classList.remove('notHidden');
    projetosSection.classList.add('notHidden');
    mobileSection.classList.add('notHidden'); 

});

projetosButton.addEventListener('click', () => {
    let marginLeft = habilidadesSection.offsetWidth
    sectionsContainer.scrollLeft = marginLeft

    projetosButton.classList.add('selected');
    habilidadesButton.classList.remove('selected');
    mobileButton.classList.remove('selected');

    habilidadesSection.classList.add('notHidden');
    projetosSection.classList.remove('notHidden');
    mobileSection.classList.add('notHidden');
});

mobileButton.addEventListener('click', () => {
    let marginLeft = habilidadesSection.offsetWidth
    sectionsContainer.scrollLeft = marginLeft * 2

    mobileButton.classList.add('selected');
    habilidadesButton.classList.remove('selected');
    projetosButton.classList.remove('selected');


    habilidadesSection.classList.add('notHidden');
    projetosSection.classList.add('notHidden');
    mobileSection.classList.remove('notHidden');
});

closeModalButton.addEventListener('click', () => {
    modal.classList.add('modal-off');
    container.classList.remove('blurFilter');

});

mobileImage.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.path[0].childNodes[1].getAttribute('src'))
        let src = e.path[0].childNodes[1].getAttribute('src');

        modal.childNodes[1].childNodes[3].setAttribute('src', src)
    
        modal.classList.remove('modal-off')
        container.classList.add('blurFilter');
    });
})

modal.addEventListener('click', () => {
    modal.classList.add('modal-off')
    container.classList.remove('blurFilter');
})


let selavy = document.querySelector('.selavy');

selavy.addEventListener('mouseover', () => {
    document.querySelector('body').classList.toggle('selavyEffect')
    container.style.display = 'none'
})