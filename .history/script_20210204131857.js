console.log("hello");
var slides = document.querySelectorAll('.box');
var bts = document.querySelectorAll('.nav-dot');
let currentSlide = 1;

var manualNav = function(manual) {
slides.forEach(slide) => {
    slide.classList.remove('active-slide');

    btns.forEach(btn) => {
        btn.classList.remove('.active-slide');
    });
});
slides[manual].classList.add('active-slide');
btns[manual].classList.add('active-slide');
}
btns.forEach(btn, i) => {
        btn.addEventListener("click", () => {
            maunualNav(i);
            currentSlide = i;
        });