console.log('hello');
var slides = document.querySelectorAll('.box');
var bts = document.querySelectorAll('.nav-dot');

let currentSlide = 1;

// maual navigation

var ManualNav = function(maunual) {
    slides[maunual].classList.add('active-dot');
    btns[maunual].classList.add('active');
}
btns.forEach(btn, i) => {
    btn.addEventListener("click", () => {
        maunual(i);
        currentSlide = i;


    });
}
_;