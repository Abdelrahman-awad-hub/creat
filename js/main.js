// loading page
setTimeout(function () {
    document.querySelector("#loader").style.display = "none";
    document.querySelector(".content").style.display = "block";
}, 500);

// scroling in page

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

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

// comments section slider js code

var swiper = new Swiper(".secondSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2700,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//  OUR JOURNAL slider js code

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 2,
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
