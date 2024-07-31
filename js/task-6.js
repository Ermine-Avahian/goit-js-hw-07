function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector(".boxes");
  boxesContainer.innerHTML = "";

  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  const boxesContainer = document.querySelector(".boxes");
  boxesContainer.innerHTML = "";
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

create.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  input.value = "";
});

destroy.addEventListener("click", () => {
  destroyBoxes();
});
