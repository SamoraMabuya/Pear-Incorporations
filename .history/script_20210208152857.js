// ------- about section ------

var slides = document.querySelectorAll('.box');
var bottombtns = document.querySelectorAll('.nav-dot');
var topbtns = document.querySelectorAll('.about-link');

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

        slides[manual].classList.add('active-slide');
        bottombtns[manual].classList.add('active-slide');
        topbtns[manual].classList.add('active-slide');
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


// ----- service section -------

var servSlides = document.querySelectorAll('.service-box');
var linkbuttons = document.querySelectorAll('.services-link');
var mobileSlides = document.querySelectorAll('.mobiledev-box');


// var topbtns = document.querySelector
let thisSlide = 1;

var SmanualNav = function(smanual) {
    servSlides.forEach((serviceSlide) => {
        serviceSlide.classList.remove('service-active');
    });

    mobileSlides.forEach((mobileSlide) => {
        mobileSlide.classList.remove('service-active');
    });


    linkbuttons.forEach((linkbtn) => {
        linkbtn.classList.remove('service-active');


    });


    servSlides[smanual].classList.add('service-active');
    mobileSlides[smanual].classList.add('service-active');
    linkbuttons[smanual].classList.add('service-active');
}
linkbuttons.forEach((linkbtn, i) => {
    linkbtn.addEventListener("click", () => {
        SmanualNav(i);
        thisSlide = i;
    });
});

// ----- footer section -------

var aboutSlides = document.querySelectorAll('.box');
var footerAboutLinks = document.querySelectorAll('.footer-aboutLink');

let fcurrentSlide = 1;

var fmanualNav = function(fmanual) {
    aboutSlides.forEach((Aslide) => {
        Aslide.classList.remove('active-slide');

        footerAboutLinks.forEach((Abtn) => {
            Abtn.classList.remove('active-slide');
        });

        aboutSlides[fmanual].classList.add('active-slide');
        footerAboutLinks[fmanual].classList.add('active-slide');
    });
}

footerAboutLinks.forEach((Abtn, i) => {
    Abtn.addEventListener("click", () => {
        fmanualNav(i);
        fcurrentSlide = i;
    });
});