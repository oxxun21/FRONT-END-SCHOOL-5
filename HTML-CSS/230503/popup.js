const article = document.querySelector(".popup");
const openBtn = document.querySelector(".btn-open");
const closeBtn = article.querySelector(".btn-close");
const firstEl = article.querySelector("a");  // 첫번째 포커스 요소
const dim = document.querySelector(".dim");

function openPopup() {
  article.classList.add("active");
  firstEl.focus();
}

function closePopup() {
  article.classList.remove("active");
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
closeBtn.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (!e.shiftKey && e.key === "Tab") {   //  Tab만 눌렀을 때 실행
    // console.log("tab만 누름");
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener("keydown", function (e) {  // Shift + Tab 같이 눌렀을 때 실행
  if (e.shiftKey && e.key === "Tab") {
    // console.log("shift + tab");
    e.preventDefault();
    closeBtn.focus();
  }
});

dim.addEventListener("click", closePopup);