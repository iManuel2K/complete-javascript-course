"use strict";

let hiddenModal = document.getElementById("modal");
let overlay = document.getElementById("overlay");
let closeBtn = document.getElementById("closeButton");
let modals = document.querySelectorAll(".show-modal");

function hideModal() {
  hiddenModal.classList.add("hidden");
  overlay.classList.add("hidden");
}

modals.forEach(modal => {
  modal.addEventListener("click", function () {
    hiddenModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", hideModal);

hiddenModal.addEventListener("mouseleave", hideModal);

/* 

Keydown, when the key is pressed down
Keyup, after the key has been pressed
Keypress, as long as it is pressed

*/

addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Escape" && !hiddenModal.classList.contains("hidden")) {
    hideModal();
  }
});
