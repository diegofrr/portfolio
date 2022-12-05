// NOSCRIPT CONFIG
document.querySelector("body").classList.remove("noscript");
document.querySelector(".projetos-section").classList.add("isHidden");
document.querySelector(".mobile-section").classList.add("isHidden");
document
  .querySelectorAll(".ampliar-btn")
  .forEach((i) => (i.style.display = "none"));
document
  .querySelectorAll(".sections__title a")
  .forEach((i) => i.removeAttribute("href"));
//

const habilidadesButton = document.querySelector(".hab");
const certificadosButton = document.querySelector(".cert");
const projetosButton = document.querySelector(".proj");
const mobileButton = document.querySelector(".mob");
const allButtons = [
  habilidadesButton,
  certificadosButton,
  projetosButton,
  mobileButton,
];

const sectionsContent = document.querySelector(".sections-content");
const sectionsContainer = document.querySelector(".sections-container");
const container = document.querySelector(".container");

const habilidadesSection = document.querySelector(".habilidades-section");
const certificadosSection = document.querySelector(".certificados-section");
const projetosSection = document.querySelector(".projetos-section");
const mobileSection = document.querySelector(".mobile-section");
const allSections = [
  habilidadesSection,
  certificadosSection,
  projetosSection,
  mobileSection,
];

const closeModalButton = document.querySelector(".close-modal-button");
const modal = document.querySelector(".modal");
const closeModalContainer = document.querySelector(".close-modal-container");

const mobileImage = document.querySelectorAll(".mobile-card");
const scrollClass = document.querySelector(".active");

// let marginLeft = habilidadesSection.offsetWidth
//     sectionsContainer.scrollLeft = marginLeft

function getSection(index, element) {
  let section =
    index === 0
      ? habilidadesSection
      : index === 1
      ? certificadosSection
      : index === 2
      ? projetosSection
      : mobileSection;

  let button = element.target;

  button.classList.add("selected");
  section.classList.remove("isHidden");

  let otherSections = allSections.filter((s) => s !== section);
  otherSections.forEach((s) => {
    s.classList.add("isHidden");
  });

  let otherButtons = allButtons.filter((b) => b !== button);
  otherButtons.forEach((b) => {
    b.classList.remove("selected");
  });

  return section;
}

allButtons.forEach((button, i) => {
  button.addEventListener("click", (element) => {
    let marginLeft = getSection(i, element).offsetWidth;
    console.log(i);
    sectionsContainer.scrollLeft = marginLeft * i;
  });
});

closeModalButton.addEventListener("click", () => {
  modal.classList.add("modal-off");
  container.classList.remove("blurFilter");
});

mobileImage.forEach((item) => {
  item.addEventListener("click", (e) => {
    let src = e.target.childNodes[1].getAttribute("src");

    modal.childNodes[1].childNodes[3].setAttribute("src", src);

    modal.classList.remove("modal-off");
    container.classList.add("blurFilter");
  });
});

closeModalContainer.addEventListener("click", () => {
  modal.classList.add("modal-off");
  container.classList.remove("blurFilter");
});

let selavy = document.querySelector(".selavy");

// selavy.addEventListener('mouseover', () => {
//     document.querySelector('body').classList.toggle('selavyEffect')
//     container.style.display = 'none'
// })

selavy.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("selavyEffect");
  container.style.display = "none";
});
