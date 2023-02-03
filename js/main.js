// navbar button in mobile viewport  js code

let navBtn = document.querySelector(".dropDown");
let myList = document.querySelector(".links");

navBtn.onclick = function () {
    myList.classList.toggle("open");
    if (!myList.classList.contains("open")) {
        document.querySelector("body").style.overflow = "hidden";
    } else {
        document.querySelector("body").style.overflow = "auto";
    }
};

//  navbar color chang in scrolling js code

let navbar = document.querySelector("header");

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

//  OUR JOURNAL slider js code

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
