const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const shareMenu = document.querySelector(".share-menu");

function toggleVisibilty() {
  btn1.classList.toggle("btn-inverted");
  shareMenu.classList.toggle("hidden");
}

btn1.addEventListener("click", () => toggleVisibilty());
btn2.addEventListener("click", () => toggleVisibilty());
