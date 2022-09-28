// NOSCRIPT CONFIG
document.querySelector('body').classList.remove('noscript');
document.querySelector('.projetos-section').classList.add('isHidden');
document.querySelector('.mobile-section').classList.add('isHidden');
document.querySelectorAll('.ampliar-btn').forEach(i => i.style.display='none')
document.querySelectorAll('.sections__title a').forEach(i => i.removeAttribute('href'))
// 

const habilidadesButton = document.querySelector('.hab');
const projetosButton = document.querySelector('.proj');
const mobileButton = document.querySelector('.mob');

const sectionsContent = document.querySelector('.sections-content');
const sectionsContainer = document.querySelector('.sections-container');
const container = document.querySelector('.container');

const habilidadesSection = document.querySelector('.habilidades-section');
const projetosSection = document.querySelector('.projetos-section');
const mobileSection = document.querySelector('.mobile-section');

const closeModalButton = document.querySelector('.close-modal-button');
const modal = document.querySelector('.modal');
const closeModalContainer = document.querySelector('.close-modal-container');

const mobileImage = document.querySelectorAll('.mobile-card');
const scrollClass = document.querySelector('.active');

// let marginLeft = habilidadesSection.offsetWidth
//     sectionsContainer.scrollLeft = marginLeft

habilidadesButton.addEventListener('click', () => {
    let marginLeft = habilidadesSection.offsetWidth
    sectionsContainer.scrollLeft = marginLeft * -1

    habilidadesButton.classList.add('selected');
    projetosButton.classList.remove('selected');
    mobileButton.classList.remove('selected');

    habilidadesSection.classList.remove('isHidden');
    projetosSection.classList.add('isHidden');
    mobileSection.classList.add('isHidden'); 

});

projetosButton.addEventListener('click', () => {
    let marginLeft = habilidadesSection.offsetWidth
    sectionsContainer.scrollLeft = marginLeft

    projetosButton.classList.add('selected');
    habilidadesButton.classList.remove('selected');
    mobileButton.classList.remove('selected');

    habilidadesSection.classList.add('isHidden');
    projetosSection.classList.remove('isHidden');
    mobileSection.classList.add('isHidden');
});

mobileButton.addEventListener('click', () => {
    let marginLeft = habilidadesSection.offsetWidth
    sectionsContainer.scrollLeft = marginLeft * 2

    mobileButton.classList.add('selected');
    habilidadesButton.classList.remove('selected');
    projetosButton.classList.remove('selected');


    habilidadesSection.classList.add('isHidden');
    projetosSection.classList.add('isHidden');
    mobileSection.classList.remove('isHidden');
});

closeModalButton.addEventListener('click', () => {
    modal.classList.add('modal-off');
    container.classList.remove('blurFilter');

});

mobileImage.forEach(item => {
    item.addEventListener('click', (e) => {
        let src = e.target.childNodes[1].getAttribute('src')

        modal.childNodes[1].childNodes[3].setAttribute('src', src)
    
        modal.classList.remove('modal-off')
        container.classList.add('blurFilter');
    });
})

closeModalContainer.addEventListener('click', () => {
    modal.classList.add('modal-off')
    container.classList.remove('blurFilter');
})


let selavy = document.querySelector('.selavy');

// selavy.addEventListener('mouseover', () => {
//     document.querySelector('body').classList.toggle('selavyEffect')
//     container.style.display = 'none'
// })

selavy.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('selavyEffect')
    container.style.display = 'none';
})