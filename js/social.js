import { socialList } from "./data.js";

const container = document.querySelector(".social-container");

for (const social of socialList) {
  const { link, className, svg } = social;
  const template = getTemplate({ link, className, svg });
  container.innerHTML += template;
}

function getTemplate({ link, className, svg }) {
  return `
      <a class="${className}" href="${link}" target="_blank">
        ${svg}
      </a>
      `;
}
