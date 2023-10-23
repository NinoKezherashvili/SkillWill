const modalButton = document.getElementById("modalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

modalButton.addEventListener("click", () => {
  modal.style.display = "block";
  overlay.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});
