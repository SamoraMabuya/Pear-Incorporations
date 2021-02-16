// ------- about section ------

var slides = document.querySelectorAll('.box');
var bottombtns = document.querySelectorAll('.nav-dot');
var topbtns = document.querySelectorAll('.about-link');

var footerAboutLinks = document.querySelectorAll('.footer-aboutLink');

// var topbtns = document.querySelector
let currentSlide = 1;

var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active-slide');


        bottombtns.forEach((btn) => {
            btn.classList.remove('active-slide');
        });

        topbtns.forEach((btn) => {
            btn.classList.remove('active-slide');
        });

        footerAboutLinks.forEach((btn) => {
            btn.classList.remove('active-slide');

        });

        slides[manual].classList.add('active-slide');
        bottombtns[manual].classList.add('active-slide');
        topbtns[manual].classList.add('active-slide');
        footerAboutLinks[manual].classList.add('active-slide');

    });

}
bottombtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});


topbtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

footerAboutLinks.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});


// ----- service section -------

var servSlides = document.querySelectorAll('.service-box');
var linkbuttons = document.querySelectorAll('.services-link');
var mobileSlides = document.querySelectorAll('.mobiledev-box');
var footerServiceLinks = document.querySelectorAll('.footer-serviceLink');


// var topbtns = document.querySelector
let thisSlide = 1;

var SmanualNav = function(smanual) {
    servSlides.forEach((serviceSlide) => {
        serviceSlide.classList.remove('service-active');


        mobileSlides.forEach((mobileSlide) => {
            mobileSlide.classList.remove('service-active');
        });


        linkbuttons.forEach((linkbtn) => {
            linkbtn.classList.remove('service-active');
        });

        footerServiceLinks.forEach((fservbtn) => {
            fservbtn.classList.remove('service-active');

        });

        servSlides[smanual].classList.add('service-active');
        mobileSlides[smanual].classList.add('service-active');
        linkbuttons[smanual].classList.add('service-active');
        footerServiceLinks[smanual].classList.add('service-active');

    });
}
linkbuttons.forEach((linkbtn, i) => {
    linkbtn.addEventListener("click", () => {
        SmanualNav(i);
        thisSlide = i;
    });
});

footerServiceLinks.forEach((linkbtn, i) => {
    linkbtn.addEventListener("click", () => {
        SmanualNav(i);
        thisSlide = i;
    });
});


// side nav
var slidebox = document.querySelectorAll('.box');
var servicebox = document.querySelectorAll('.service-box');
var stickybtn = document.querySelectorAll('.sticky-link');
let thisCurrentSlide = 1;

var sidemanualNav = function(sidemanual) {

    stickybtn.forEach((sidebtns) => {
        sidebtns.classList.remove('activebtn');


    });

    stickybtn[sidemanual].classList.add('activebtn');
}


stickybtn.forEach((sidebtns, i) => {
    sidebtns.addEventListener("click", () => {
        sidemanualNav(i);
        thisCurrentSlide = i;
    });
});


window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("sidenav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
window.addEventListener('scroll', show);

function show() {
    let shows = document.querySelectorAll('.showElement');

    for (let i = 0; i < shows.length; i++) {
        let wheight = window.innerHeight;
        let showtop = shows[i].getBoundingClientRect().top;
        let showpoint = 100;

        if (showtop < wheight - showpoint) {
            shows[i].classList.add('element');

        } else {
            shows[i].classList.remove('element');


        }
    }
}

window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {

        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('showdiv');
        } else {
            reveals[i].classList.remove('showdiv');

        }
    }
}

window.addEventListener("resize", function() {

    if (document.documentElement.clientWidth <= 640) {
        // window.onscroll = function() { aboutNavFunction() };

    }
});


// Get the navba
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function aboutNavFunction() {
//     let aboutsidenav = document.querySelector("#about-nav-wrapper");
//     let stickyaboutnav = aboutsidenav.offsetTop;
//     if (window.pageYOffset >= stickyaboutnav) {
//         aboutsidenav.classList.add("stickya")
//     } else {
//         aboutsidenav.classList.remove("stickya");
//     }
// }