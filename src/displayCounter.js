import { createCounter } from "./counter";

const countParaValue = document.createElement("p");

function displayCounter(div) {
  const counter = createCounterElement();
  div.appendChild(counter);
}
function updateDisplay() {
  countParaValue.textContent = newCounter.getCount();
}

function createCounterElement() {
  const counter = document.createElement("div");
  counter.classList.add("counter", "container", "flex");

  const counterHeading = document.createElement("h3");
  counterHeading.classList.add("counter-heading");
  counterHeading.textContent = "count";
  counter.appendChild(counterHeading);

  const countDisplay = document.createElement("div");
  countDisplay.classList.add("count-display");

  countParaValue.classList.add("count-value");
  countParaValue.textContent = newCounter.getCount();
  countDisplay.appendChild(countParaValue);
  counter.appendChild(countDisplay);

  const btnAddContainer = document.createElement("div");
  const btnRemoveContainer = document.createElement("div");
  btnAddContainer.classList.add("btn-container", "btn-container-add", "flex");
  btnRemoveContainer.classList.add(
    "btn-container",
    "btn-container-remove",
    "flex",
  );
  const btnAdd = document.createElement("button");
  const btnRemove = document.createElement("button");
  btnAdd.classList.add("btn", "btn-add");
  btnRemove.classList.add("btn", "btn-remove");
  btnAdd.type = "button";
  btnRemove.type = "button";
  btnAdd.textContent = "press here to count up";
  btnRemove.textContent = "count down";
  btnAdd.addEventListener("click", () => {
    newCounter.countUp();
    updateDisplay();
  });
  btnRemove.addEventListener("click", () => {
    newCounter.countDown();
    updateDisplay();
  });

  btnAddContainer.appendChild(btnAdd);
  btnRemoveContainer.appendChild(btnRemove);
  counter.append(btnAddContainer, btnRemoveContainer);

  return counter;
}

let newCounter = createCounter();

export { displayCounter };
