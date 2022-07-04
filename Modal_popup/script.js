const modal = document.querySelector(".modal"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
