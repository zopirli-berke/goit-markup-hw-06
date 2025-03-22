const menuOpen = document.getElementById("menu-open");

const menu = document.getElementById("menu");

const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", function () {
  menu.classList.add("is-open-menu");
});

menuClose.addEventListener("click", function () {
  menu.classList.remove("is-open-menu");
});

const modalButton = document.getElementById("modal-button");

const modal = document.getElementById("modal");

const modalClose = document.getElementById("modal-close");

modalButton.addEventListener("click", function () {
  modal.classList.add("is-open-modal");
});

modalClose.addEventListener("click", function () {
  modal.classList.remove("is-open-modal");
});
