var slides = document.querySelectorAll('.box');
var btns = document.querySelectorAll('.nav-dot');
let currentSlide = 1;

var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active-slide');


        btns.forEach((btn) => {
            btn.classList.remove('.active-slide');
        });
    });

    slides[manual].classList.add('active-slide');
    btns[manual].classList.add('active-slide');
}
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});