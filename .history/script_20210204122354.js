console.log("hello");
var slides = document.querySelectorAll('.box');
var bts = document.querySelectorAll('.nav-dot');
let currentSlide = 1;

var manualNav = function(maunual) {
slides.forEach(slide) => {
    slide.classList.remove('active-dot');

    btns.forEach(btn) => {
        btn.classList.remove('.active-dot');
    });
});
slides[maunual].classList.add('active-dot');
btns[maunual].classList.add('active');
}
btns.forEach(btn, i) => {
        btn.addEventListener("click", () => {
            maunualNav(i);
            currentSlide = i;
        });