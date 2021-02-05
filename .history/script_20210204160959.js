var slides = document.querySelectorAll('.box');
var bottombtns = document.querySelectorAll('.nav-dot');
// var topbtns = document.querySelector
let currentSlide = 1;

var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active-slide');


        bottombtns.forEach((btn) => {
            btn.classList.remove('active-slide');
        });
    });

    slides[manual].classList.add('active-slide');
    bottombtns[manual].classList.add('active-slide');
}
bottombtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});