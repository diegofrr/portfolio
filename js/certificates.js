import { certificates } from "./data.js";

const container = document.querySelector(".section__certificates");

for (const certificate of certificates) {
  const { title, hours, link, academy } = certificate;
  const template = getTemplate({ title, hours, academy, link });
  container.innerHTML += template;
}

function getTemplate({ title, hours, academy, link }) {
  return `
    <a class="certificate" href="${link}" target="_blank">
        <p>${title}</p>
        <span>${academy} - ${hours}</span>
    </a>
    `;
}
