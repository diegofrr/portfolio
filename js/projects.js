import { projects } from "./data.js";

let counter = 0;

const container = document.querySelector(".projects__container");
const content = document.querySelector(".section__projects__content");

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

prevButton.innerHTML = icons().prevSvg;
nextButton.innerHTML = icons().nextSvg;

for (const project of projects) {
  const { title, description, image, link, repo } = project;
  const template = getTemplate({ title, description, image, link, repo });
  container.innerHTML += template;
}

nextButton.onclick = () => {
  const w = document.querySelector(".project__container").clientWidth + 20;
  content.scrollBy(w, 0);
};

prevButton.onclick = () => {
  const w = document.querySelector(".project__container").clientWidth + 20;
  content.scrollBy(w * -1, 0);
};

function getTemplate({ title, description, image, link, repo }) {
  return `
    <div class="project__container">
      <img class="project__image" src="${image}" alt="${title}">
      <div class="project__header">
        <p class="project__title">${title}</p>
        <div class="project__links">
          <a target="_blank" href="${repo}">repo</a>
          <span>|</span>
          <a target="_blank" href="${link}">ver</a>
        </div>
      </div>
      <span class="project__description">${description}</span>
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
