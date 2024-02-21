import { projects } from "./data.js";

let scrolling = false;
const projectWidth = 260; // width + gap

const container = document.querySelector(".projects__container");
const content = document.querySelector(".section__projects__content");

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

prevButton.innerHTML = icons().prevSvg;
nextButton.innerHTML = icons().nextSvg;

for (const project of projects) {
  const template = getTemplate(project);
  container.innerHTML += template;
}

nextButton.onclick = () => {
  if (scrolling) return;
  scrollContentBy(projectWidth, 0);
};

prevButton.onclick = () => {
  if (scrolling) return;
  scrollContentBy(projectWidth * -1, 0);
};

function scrollContentBy(w, h) {
  scrolling = true;
  content.scrollBy(w, h);
  setTimeout(() => (scrolling = false), 1000);
}

function getTemplate(project) {
  return `
    <div class="project__container">
      <img class="project__image" src="${project.image}" alt="${project.title}">
      <div class="project__header">
        <p class="project__title">${project.title}</p>
        <div class="project__links">
          <a target="_blank" href="${project.repo}">repo</a>
          <span>|</span>
          <a target="_blank" href="${project.link}">ver</a>
        </div>
        </div>
        <span class="project__description">${project.description}</span>
        <span class="project__stack">${project.stack}</span>
    </div>
  `;
}

function icons() {
  const prevSvg = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  const nextSvg = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

  return { prevSvg, nextSvg };
}
