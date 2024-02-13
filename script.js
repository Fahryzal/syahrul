const menu = document.querySelector(".menu");
const titleNav = document.querySelector(".titleNav");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  titleNav.classList.toggle("non-active");
  titleNav.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  const x = !e.target.classList.contains("active");
  // titleNav.classList.contains("active");
  if (x && e.target !== menu) {
    titleNav.classList.remove("active");
    titleNav.classList.add("non-active");
  }
});
