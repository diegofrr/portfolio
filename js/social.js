import { socialList } from "./data.js";

const container = document.querySelector(".social-container");

for (const social of socialList) {
  const { link, name, svg } = social;
  const template = getTemplate({ link, name, svg });
  container.innerHTML += template;
}

function getTemplate({ link, name, svg }) {
  return `
      <a title="${name}" href="${link}" target="_blank">
        ${svg}
      </a>
      `;
}
