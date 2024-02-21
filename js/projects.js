import { projects } from "./data.js";

const container = document.querySelector(".section__projects");

for (const project of projects) {
  const { title, description, image, link } = project;
}

function getTemplate({ title, description, image, link }) {}
