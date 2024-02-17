import "./cv-button.js";

const tabList = document.querySelectorAll(".tabs__list li");
const sectionList = document.querySelectorAll(".content section");

tabList.forEach((tab) => (tab.onclick = () => handleSelectTab(tab)));

function handleSelectTab(tab) {
  tabList.forEach((tab) => tab.removeAttribute("isActived"));
  tab.setAttribute("isActived", true);

  const tabIndex = getTabIndex(tab);
  activeSectionWithIndex(tabIndex);
}

function activeSectionWithIndex(id) {
  sectionList.forEach((section) => section.removeAttribute("isActived"));
  sectionList[id].setAttribute("isActived", true);
}

function getTabIndex(tab) {
  return Array.from(tabList).indexOf(tab);
}

document.addEventListener("contextmenu", function (e) {
  if (e.target.tagName.toLowerCase() === "img") {
    e.preventDefault();
  }
});
