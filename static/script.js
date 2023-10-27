let arrowNext = document.getElementsByClassName("next")[0];
let arrowPrev = document.getElementsByClassName("prev")[0];
let buyBtn = document.getElementsByClassName("buy-btn")[0];
let modalWrapper = document.getElementsByClassName("modal-wrapper")[0];
buyBtn.addEventListener("click", function () {
  modalWrapper.style.display = "flex";
});
arrowNext.addEventListener("click", function () {
  let a = location.href.lastIndexOf("/");
  location.href =
    location.href.slice(0, a) + Number(location.href.slice(a)) + 1;
});

