"use strict";

// let icon = document.getElementById("icon");
// let icon1 = document.getElementById("a");
// let icon2 = document.getElementById("b");
// let icon3 = document.getElementById("c");
// let nav = document.getElementById("nav");
// let blue = document.getElementById("blue");
// icon.addEventListener("click", function () {
//     icon1.classList.toggle("a");
//     icon2.classList.toggle("c");
//     icon3.classList.toggle("b");
//     nav.classList.toggle("show");
//     blue.classList.toggle("slide");
// });
var navBtn = document.querySelector(".dropDown");
var myList = document.querySelector(".links");

navBtn.onclick = function () {
  myList.classList.toggle("open");

  if (!myList.classList.contains("open")) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "auto";
  }
};

var navbar = document.querySelector("header");

function navTransition() {
  if (window.scrollY >= window.outerHeight / 2) {
    if (!navbar.classList.contains("bg-normal")) {
      navbar.classList.add("bg-normal");
      navbar.classList.remove("transparent");
    }
  } else {
    if (navbar.classList.contains("bg-normal")) {
      navbar.classList.add("transparent");
      navbar.classList.remove("bg-normal");
    }
  }
}

navTransition();

window.onscroll = function () {
  navTransition();
};