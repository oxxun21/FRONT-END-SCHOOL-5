const $modalOpen = document.getElementById("subscribe-btn");
const $modalBg = document.getElementById("modal-bg");
const $modalWrap = document.getElementById("modal-wrap");
const $modalClose = document.getElementById("modal-btn");

function open(event) {
  event.preventDefault();
  $modalBg.style.display = "block";
  $modalWrap.style.display = "block";
}

function close() {
  // event.preventDefault();  submit 시에 기본 동작이 있는거라 그냥 button 타입에는 기본동작 X
  $modalBg.style.display = "none";
  $modalWrap.style.display = "none";
}

function modal() {
  $modalOpen.addEventListener("click", open);
  $modalClose.addEventListener("click", close);
}

modal();