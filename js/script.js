// NOSCRIPT CONFIG
document.querySelector('body').classList.remove('noscript');
document.querySelector('.projetos-section').classList.add('isHidden');
document.querySelector('.mobile-section').classList.add('isHidden');
document.querySelectorAll('.ampliar-btn').forEach(i => i.style.display='none')
document.querySelectorAll('.sections__title a').forEach(i => i.removeAttribute('href'))
// 

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

let mailButton = document.querySelector('.profile__mail-container');
let mailText = document.querySelector('.profile__mail');
let copyText = document.querySelector('.profile__mail-container .copy');

mailButton.classList.remove('displayNone');

mailButton.addEventListener('click', () => {
    navigator.clipboard.writeText(mailText.innerHTML);
    copyText.classList.remove('displayNone');
    setTimeout(() => {
        copyText.classList.add('displayNone');
    }, 2000);

})

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

modal.addEventListener('click', () => {
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