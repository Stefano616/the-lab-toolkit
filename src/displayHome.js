import { displayCounter } from "./displayCounter";

function createToolCard(tool, div) {
  const toolCard = document.createElement("div");
  toolCard.classList.add("tools-wrapper");
  toolCard.addEventListener("click", () => {
    div.textContent = "";
    tool.displayTool(div);
  });
  const toolTitle = document.createElement("h3");
  toolTitle.textContent = tool.title;
  toolCard.appendChild(toolTitle);
  return toolCard;
}

function displayHome(contentDiv) {
  const home = document.createElement("div");
  home.classList.add("home", "container", "flex");
  toolsArr.map((tool) => {
    const toolCard = createToolCard(tool, contentDiv);
    home.appendChild(toolCard);
  });

  contentDiv.appendChild(home);
}

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

export { displayHome };
