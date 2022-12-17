const topnav = document.querySelector(".topnav").getBoundingClientRect().height;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let hei = window.scrollY;
  if (hei > topnav) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
});
