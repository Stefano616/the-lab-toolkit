import "./styles.css";
import { displayHome } from "./displayHome";
import { displayCounter } from "./displayCounter";

const contentDiv = document.getElementById("content");
displayHome(contentDiv);
// displayCounter(contentDiv);

const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
console.log(navToggle);
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  console.log("work");
});

const navLinks = document.querySelectorAll(".nav__list__item");
navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    contentDiv.textContent = "";
    toolsArr[index].displayTool(contentDiv);
  });
});

const toolsArr = [
  {
    title: "counter",
    id: 1,
    displayTool: displayCounter,
  },
  {
    title: "concentrations",
    id: 2,
  },
  {
    title: "molarity",
    id: 3,
  },
  {
    title: "dilutions",
    id: 4,
  },
  {
    title: "timer/stopwatch",
    id: 5,
  },
  {
    title: "units converter",
    id: 6,
  },
];
