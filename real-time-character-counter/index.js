const textAreaEl = document.querySelector("#textarea");
const totalCounterEl = document.querySelector(".total-counter");
const remainingCounterEl = document.querySelector(".remaining-counter");

updateCounter();

textAreaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCounterEl.innerText = textAreaEl.value.length;
  remainingCounterEl.innerText =
    textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}
