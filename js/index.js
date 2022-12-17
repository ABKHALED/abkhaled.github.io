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

const links = document.querySelectorAll(".navbar ul li a");

links.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

const lis = document.querySelectorAll(".ul-l li a");

lis.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    const id = e.currentTarget.getAttribute("href").slice(1);
    e.preventDefault();
    let element = document.getElementById(id);
    console.log(id);
    const nv = document.querySelector(".navbar");
    const mainNav = document
      .querySelector(".navbar")
      .getBoundingClientRect().height;
    let position = element.offsetTop - mainNav;
    let container = document
      .querySelector(".navbar .container")
      .getBoundingClientRect().height;

    const topNav = document
      .querySelector(".topnav")
      .getBoundingClientRect().height;
    if (nv.classList.contains("fixed-top")) {
      position = position + mainNav - topNav;
    }
    if (mainNav > 77.63) {
      position = position;
    }
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

const chose = document.querySelectorAll(".chose div");
const sh = document.querySelectorAll(".sh");
chose.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    chose.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let id = e.currentTarget.dataset.name;
    let element = document.getElementById(id);
    sh.forEach((ele) => {
      ele.classList.remove("active");
    });
    element.classList.add("active");
  });
});

let linksch = document.querySelectorAll(".navbar ul li a");
let sections = document.querySelectorAll("section");
const mainNav = document
  .querySelector(".navbar")
  .getBoundingClientRect().height;

window.addEventListener("scroll", function (e) {
  let height = window.scrollY;
  sections.forEach((ele) => {
    let secheight = ele.offsetTop - mainNav;
    if (height >= secheight) {
      let id = ele.dataset.num;
      let f = document.getElementById(id);

      links.forEach((ele) => {
        ele.classList.remove("active");
      });
      f.classList.add("active");
    }
  });
});
function initMap() {
  // The location of Uluru
  const uluru = { lat: 36.752887, lng: 3.042048 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
